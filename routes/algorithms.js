const express = require("express");
const router = express.Router();
const algorithms = require("../algorithms/algorithms");

router.post("/integral/leftRectanglesMethod", (req, res) => {
    res.json(
        algorithms.Integral.leftRectanglesMethod(
            new Function("return " + req.body.func)(),
            Number(req.body.n),
            JSON.parse(req.body.range)
        )
    );
});

router.post("/integral/rightRectanglesMethod", (req, res) => {
    res.json(
        algorithms.Integral.rightRectanglesMethod(
            new Function("return " + req.body.func)(),
            Number(req.body.n),
            JSON.parse(req.body.range)
        )
    );
});

module.exports = router;
