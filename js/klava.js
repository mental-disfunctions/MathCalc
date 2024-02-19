var priklad = document.querySelector('#priklad');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
	item.addEventListener('click', (e) => {
		btntext = e.target.innerText;

		if (btntext == 'х') {
			btntext = '*';
		}

		if (btntext == '÷') {
			btntext = '/';
		}

		if (btntext == 'sin' || btntext == 'cos' || btntext == 'tan' || btntext == 'log' || btntext == '√') {
			btntext += "(";
		}

		if (btntext == 'x y' || btntext == 'y') {
			btntext = '^';
		}

		priklad.value += btntext;
	});
}

function result_from_klava() {
	var replacedtext = replace(priklad.value);

	console.log(replacedtext);

	var first_point = parseFloat(document.getElementById("spoint").value);
	var last_point = parseFloat(document.getElementById("lpoint").value);
	var epsilon = parseFloat(document.getElementById("epsilon").value);

	var result = halfDivisionMethod(replacedtext, first_point, last_point, epsilon);

	// Отримуємо доступ до таблиці
	var table = document.getElementById("table_output").getElementsByTagName('tbody')[0];

	//Очищуємо таблицю
	table.innerHTML = "";

	Object.keys(result).forEach(function (key) {
		var row = table.insertRow();
		var obj = result[key];
		Object.keys(obj).forEach(function (prop) {
			var cell = row.insertCell();
			cell.textContent = obj[prop];
			cell.setAttribute("data-title", prop);
		});
	});
}

// змінюємо рівняння на код

function replace(text) {

	let outputString = text.replace(/log\b/g, 'Math.log');
	outputString = outputString.replace(/sin\b/g, 'Math.sin');
	outputString = outputString.replace(/cos\b/g, 'Math.cos');
	outputString = outputString.replace(/tan\b/g, 'Math.tan');
	outputString = outputString.replace(/π/g, '3.14159265359');
	outputString = outputString.replace(/e\b/g, '2.71828182846');
	outputString = outputString.replace(/(\w+)\^(\w+)/g, "Math.pow($1, $2)");
	outputString = outputString.replace(/√\((\w+)\)/g, "Math.sqrt($1, 2)");


	return outputString;
}

function backspc() {
	priklad.value = priklad.value.substr(0, priklad.value.length - 1);
}