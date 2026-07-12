require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://blogging-website-sooty-kappa.vercel.app?_vercel_share=pWjIgtnV5oUmYkxRSrILj75HWlrgZ1Yn"
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/blogs", require("./routes/blogs"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
