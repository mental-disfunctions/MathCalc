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
});
document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('burger').addEventListener('click', function() {
    //     document.querySelector('header').classList.toggle('open')
    // })
    var animationSpray = document.getElementById("animationSpray");
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animation'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://lottie.host/3b7247e8-f616-4be8-99d4-ead3fbd1b097/KTZwDGCOvN.json', // lottie file path
        interaction: 'hover'
      });

var curFrame;
var timer;

animationSpray.addEventListener("mouseenter", fEnter);
animationSpray.addEventListener("mouseleave", fLeave);
animationSpray.addEventListener("mousedown", fClicDown);
animationSpray.addEventListener("mouseup", fClicUp);

// On Enter behavior
function fEnter() {
  animationSpray.removeEventListener("mouseenter", fEnter);
  animation.playSegments([0, 11], true);
  animationSpray.addEventListener("mouseleave", fLeave);
}

// On Leave behavior
function fLeave() {
  animationSpray.removeEventListener("mouseleave", fLeave);
  animation.playSegments([0], true);
  animationSpray.addEventListener("mouseenter", fEnter);
  
}

// On mouseDown
function fClicDown() {
  animationSpray.removeEventListener("mousedown", fClicDown);
  animation.playSegments([50, 65], true);
  timer=setInterval(function(){
          animation.playSegments([65, 100], false);
     }, 300);
  animationSpray.addEventListener("mousedown", fClicDown);
}

// On mouseUp
function fClicUp() {
  if (timer) clearInterval(timer)
  animationSpray.removeEventListener("mouseup", fClicUp);
  animation.playSegments([100, 110], true);
  animationSpray.addEventListener("mouseup", fClicUp);
}

// Restart
animation.wrapper.addEventListener("complete", fRestart);

function fRestart() {
  animation.wrapper.goToAndStop(0);
}
})

  //????

 