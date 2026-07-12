const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", (req, res) => {

    db.query("SELECT * FROM blogs", (err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

});


router.get("/:id", (req, res) => {

    db.query(
        "SELECT * FROM blogs WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json(result[0]);

        }
    );

});


router.post("/", (req, res) => {

    const { title, author, image, content } = req.body;

    db.query(

        "INSERT INTO blogs(title,author,image,content) VALUES(?,?,?,?)",

        [title, author, image, content],

        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Blog Added Successfully"
            });

        }

    );

});


router.put("/:id", (req, res) => {

    const { title, author, image, content } = req.body;

    db.query(

        "UPDATE blogs SET title=?,author=?,image=?,content=? WHERE id=?",

        [title, author, image, content, req.params.id],

        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Blog Updated Successfully"
            });

        }

    );

});


router.delete("/:id", (req, res) => {

    db.query(

        "DELETE FROM blogs WHERE id=?",

        [req.params.id],

        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Blog Deleted Successfully"
            });

        }

    );

});

module.exports = router;