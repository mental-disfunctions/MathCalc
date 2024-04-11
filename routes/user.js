const mathjs = require("mathjs");
const path = require("path");
const express = require("express");
const router = express.Router();

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

router.get("/polinom-lagrandg", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "..", "public", "polinom-lagrandg.html"));
});

router.get("/integral/leftRectanglesMethod", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "..", "public", "pages", "leftRectanglesMethod.html"));
});
router.get("/integral/rightRectanglesMethod", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "..", "public", "pages", "rightRectanglesMethod.html"));
});
router.get("/integral/centerRectanglesMethod", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "..", "public", "pages", "centerRectanglesMethod.html"));
});

router.get("/", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "..", "public", "index.html"));
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
