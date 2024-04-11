document.getElementById("startbtn").addEventListener("click", getValue);
function getValue(){
    const func = document.getElementById("func").value;
    const n = document.getElementById("n").value;
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("func", Function("x", "return " + func));
    urlencoded.append("n", n);
    urlencoded.append("range", `[${a}, ${b}]`);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    if(func && n && a && b){
fetch("http://localhost:3001/integral/leftRectanglesMethod", requestOptions)
  .then((response) => response.json())
  .then((result) => setTable(result))
  .catch((error) => console.error(error));
} 
}

function setTable(result) {
    console.log(result);
	var table = document.getElementById("table_output").getElementsByTagName('tbody')[0];
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
    ci
}

