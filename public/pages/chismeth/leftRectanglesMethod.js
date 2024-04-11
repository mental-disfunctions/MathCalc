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

fetch("http://localhost:3001/integral/leftRectanglesMethod", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}