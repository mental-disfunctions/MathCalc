function openPageChisel(){
    window.location.href = "chismeth-page.html";
}
function openPageAlgeb(){
    window.location.href = "algeb-page.html";
}
function openPageGeom(){
    window.location.href = "geom-page.html";
}
function openPageAccounting(){
    window.location.href = "accounting-page.html";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
    })
})
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('infocalctask1').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
    })
})