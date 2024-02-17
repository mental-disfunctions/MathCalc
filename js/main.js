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

// Кількість разів, яку потрібно повторити слово
var repeatCount = 20;
var marqueeText = 'Кані Вест ';

// Створюємо рядок з багаторазовим текстом
var repeatedText = marqueeText.repeat(repeatCount);

// Додаємо багаторазовий текст до контейнера
var marqueeContainer = document.getElementById('marqueeContainer');
marqueeContainer.textContent = repeatedText;