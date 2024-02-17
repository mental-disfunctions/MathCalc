//Ваньова функція

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





// var button = document.getElementById("button");


// button.addEventListener("click", function () {
// 	getValue();
// });

//Моя функція
function getValue() {

	// Отримуємо значення
	var our_function = document.getElementById("priklad").value;
	var first_point = parseFloat(document.getElementById("spoint").value);
	var last_point = parseFloat(document.getElementById("lpoint").value);
	var epsilon = parseFloat(document.getElementById("epsilon").value);


	// Рахуємо результат
	var result = halfDivisionMethod(our_function, first_point, last_point, epsilon);


	// Відправляємо результат користувачу
	console.log(result);


	// Отримуємо доступ до таблиці
	var table = document.getElementById("table_output").getElementsByTagName('tbody')[0];


	Object.keys(result).forEach(function (key) {
		var row = table.insertRow();
		var obj = result[key];
		Object.keys(obj).forEach(function (prop) {
			var cell = row.insertCell();
			cell.textContent = obj[prop];
		});
	});
}

