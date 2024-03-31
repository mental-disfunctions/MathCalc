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
    // document.getElementById('burger').addEventListener('click', function() {
    //     document.querySelector('header').classList.toggle('open')
    // })
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('anim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/gf.json' // lottie file path
      })
})

  //????

 