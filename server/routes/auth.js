const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

const SECRET = "blog_secret_key";

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users(name,email,password) VALUES(?,?,?)",
      [name, email, hash],
      (err) => {
        if (err) {
          return res.status(500).json({ message: "Email already exists" });
        }

        res.json({ message: "Registration Successful" });
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0) {
        return res.status(401).json({ message: "Invalid Email" });
      }

      const user = result[0];

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(401).json({ message: "Invalid Password" });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.json({
        token,
        user,
      });
    }
  );
});

module.exports = router;