function halfDivisionMethod(func = "Math.pow(x, 2) - Math.exp(-x)", a = 0.5, b = 1, e = 0.001) {
	const resultTable = new Object();
	const n = Math.ceil(Math.log2((b - a) / e));
	givedFunction = Function("x", "return " + func + ";");
	for (let i = 1; i < n + 1; i++) {
		const x = (a + b) / 2;
		resultTable[i] = {
			"n": i,
			"-": a,
			"+": b,
			"x=a+b/2": x,
			"f(x)": givedFunction(x),
			"|b-a|": Math.abs(b - a)
		};
		if (Math.sign(givedFunction(x) < 0)) {
			a = x;
		} else {
			b = x;
		}
	}
	return resultTable;
}
// Test
// for (let i = 1; i < Object.keys(halfDivisionMethod()).length + 1; i++) {
//     console.log(halfDivisionMethod()[i]);
// }