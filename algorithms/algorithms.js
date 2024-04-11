const Algorithms = {};
Algorithms.Integral = {};
const { create, all } = require("mathjs");

const config = {
    number: "BigNumber",
    precision: 20,
};
const math = create(all, config);

Algorithms.Integral.leftRectanglesMethod = function (func, n, [a, b]) {
    const resultTable = createTable(func, n, a, b);
    let result = 0;
    for (let i = 0; i < Object.keys(resultTable).length - 2; i++) {
        result += resultTable[i].yI;
    }
    resultTable.result = result * resultTable.h;
    return resultTable;
};

function createTable(func, n, a, b) {
    const resultTable = {};
    const h = math
        .divide(math.subtract(math.bignumber(b), math.bignumber(a)), math.bignumber(n))
        .toNumber();
    let xI = math.bignumber(a);
    for (let i = 0; i < n + 1; i++) {
        resultTable[i] = { xI: xI.toNumber(), yI: func(xI) };
        xI = math.add(math.bignumber(xI), math.bignumber(h));
    }
    resultTable.h = h;
    return resultTable;
}

module.exports = Algorithms;
