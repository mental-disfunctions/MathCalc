const { forEach } = require("mathjs");

document.getElementById("startbtn").addEventListener("click", getValue);
function getValue() {
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
        redirect: "follow",
    };

    if (func && n && a && b) {
        fetch("http://localhost:3001/integral/leftRectanglesMethod", requestOptions)
            .then((response) => response.json())
            .then((result) => setTable(result))
            .catch((error) => console.error(error));
    }
}

function setTable(result) {
    const table = document.getElementById("table_output").getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    for (let i = 0; i < Object.keys(result).length - 2; i++) {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.textContent = i;
        cell.setAttribute("data-title", i);
        for (const value of Object.values(result[i])) {
            const cell = row.insertCell();
            cell.textContent = value;
            cell.setAttribute("data-title", i);
        }
    }
}
