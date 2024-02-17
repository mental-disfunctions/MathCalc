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

