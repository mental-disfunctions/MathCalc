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
    let result = math.bignumber(0);
    for (let i = 0; i < Object.keys(resultTable).length - 2; i++) {
        result = math.add(math.bignumber(result), math.bignumber(resultTable[i].yI));
    }
    resultTable.result = math
        .multiply(math.bignumber(result), math.bignumber(resultTable.h))
        .toNumber();
    return resultTable;
};

function createTable(func, n, a, b) {
    const resultTable = {};
    const h = math
        .divide(math.subtract(math.bignumber(b), math.bignumber(a)), math.bignumber(n))
        .toNumber();
    let xI = math.bignumber(a);
    for (let i = 0; i < n + 1; i++) {
        const yI = func(xI);
        resultTable[i] = { xI: xI.toNumber(), yI: typeof yI === "object" ? yI.toNumber() : yI };
        xI = math.add(math.bignumber(xI), math.bignumber(h));
    }
    resultTable.h = h;
    return resultTable;
}

Algorithms.Integral.rightRectanglesMethod = function (func, n, [a, b]) {
    const resultTable = createTable(func, n, a, b);
    let result = 0;
    for (let i = 1; i < Object.keys(resultTable).length - 1; i++) {
        result = math.add(result, resultTable[i].yI);
    }
    resultTable.result = math
        .multiply(math.bignumber(result), math.bignumber(resultTable.h))
        .toNumber();
    return resultTable;
};

Algorithms.Integral.centerRectanglesMethod = function (func, n, [a, b]) {
    const resultTable = createTableForCenterMethod(func, n, a, b);
    let result = 0;
    for (let i = 0; i < Object.keys(resultTable).length - 1; i++) {
        result = math.add(math.bignumber(result), math.bignumber(resultTable[i].yI));
    }
    resultTable.result = math
        .multiply(math.bignumber(result), math.bignumber(resultTable.h))
        .toNumber();
    return resultTable;
};

function createTableForCenterMethod(func, n, a, b) {
    const resultTable = {};
    const h = math
        .divide(math.subtract(math.bignumber(b), math.bignumber(a)), math.bignumber(n))
        .toNumber();
    const h1 = math.divide(math.bignumber(h), math.bignumber(2)).toNumber();
    let xI = math.add(math.bignumber(a), math.bignumber(h1));
    let yI = func(xI);
    resultTable[0] = { xI: xI.toNumber(), yI: typeof yI === "object" ? yI.toNumber() : yI };

    for (let i = 1; i < n; i++) {
        xI = math.add(math.bignumber(xI), math.bignumber(h));
        yI = func(xI);
        resultTable[i] = { xI: xI.toNumber(), yI: typeof yI === "object" ? yI.toNumber() : yI};
    }
    resultTable.h = h;
    return resultTable;
}

module.exports = Algorithms;
