function openPageChisel(){
    window.location.href = "pages/chismeth-page.html";
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

$(function(){
    var txt = $(".list__pawn").text().trim();
    if(txt.length > 10){
       $(".cuttedText").text( txt.substring(0,10) + '...');
    }
  });

  //????