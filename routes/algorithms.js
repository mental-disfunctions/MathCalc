const express = require("express");
const mathjs = require("mathjs");
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

router.post("/integral/centerRectanglesMethod", (req, res) => {
    res.json(
        algorithms.Integral.centerRectanglesMethod(
            new Function("return " + req.body.func)(),
            Number(req.body.n),
            JSON.parse(req.body.range)
        )
    );
});

router.post("/polinom-lagrandg", (req, res) => {
    console.log(req.body);
    let string = ``;
    let map = new Map([...Object.entries(req.body)]);
    let x = sort(Array.from(map.keys()));
    const func = [];
    for (let i = 0; i < x.length; i++) {
        string = string.concat(`(${map.get(x[i])}`);
        for (let count = 0; count < 2; count++) {
            string = string.concat(`(`);
            for (let j = 0; j < x.length; j++) {
                if (i != j) {
                    if (count == 0) {
                        string = string.concat(`(x - ${x[j]})`);
                    } else {
                        string = string.concat(`(${x[i]} - ${x[j]})`);
                    }
                }
            }
            string = string.concat(")");
            if (count == 0) {
                string = string.concat("/");
            }
        }
        string = string.concat(")");
        if (string.length < 60) {
            func.push(mathjs.rationalize(string));
            string = "";
        } else {
            string = string.concat("+");
        }
    }
    let str = [];
    func.forEach((elem) => {
        str.push(elem.toString());
        console.log(elem.toString());
    });
    if (string.length > 115) {
        res.send(string);
        console.log("success!");
    } else {
        res.send(mathjs.rationalize(str.join("+")).toTex());
        console.log("success!");
    }
});

function sort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && parseInt(arr[j - gap]) > parseInt(temp); j -= gap)
                arr[j] = arr[j - gap];

            arr[j] = temp;
        }
    }
    return arr;
}

module.exports = router;
