const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
