const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/polinom-lagrandg", (req, res) => {
    res.type(".html").sendFile(
        path.join(__dirname, "..", "public", "pages", "chismeth", "polinom-lagrandg.html")
    );
});

router.get("/integral/leftRectanglesMethod", (req, res) => {
    res.type(".html").sendFile(
        path.join(__dirname, "..", "public", "pages", "chismeth", "leftRectanglesMethod.html")
    );
});

router.get("/integral/rightRectanglesMethod", (req, res) => {
    res.type(".html").sendFile(
        path.join(__dirname, "..", "public", "pages", "chismeth", "rightRectanglesMethod.html")
    );
});

router.get("/integral/centerRectanglesMethod", (req, res) => {
    res.type(".html").sendFile(
        path.join(__dirname, "..", "public", "pages", "chismeth", "centerRectanglesMethod.html")
    );
});

router.get("/", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = router;
