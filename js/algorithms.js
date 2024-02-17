function halfDivisionMethod(func = "Math.pow(x, 3) - x - 1", a = 1, b = 2, e = 0.1) {
    fn = Function("x", "return " + func + ";");
    const resultTable = new Object();
    const n = Math.ceil(Math.log2((b - a) / e));
    for (let i = 1; i < n + 1; i++) {
        resultTable[i] = {
            "n": i,
            "-": a,
            "+": b,
            "x=a+b/2": (a + b) / 2,
            "f(x)": fn((a + b) / 2),
            "|b-a|": Math.abs(b - a)
        };
        if (Math.sign(fn((a + b) / 2)) < 0) {
            a = (a + b) / 2;
        } else {
            b = (a + b) / 2;
        }
    }
    return resultTable;
}

for (let i = 1; i < Object.keys(halfDivisionMethod()).length + 1; i++) {
    console.log(halfDivisionMethod()[i]);
}