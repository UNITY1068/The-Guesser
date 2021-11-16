function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function intro() {
    var el = document.getElementById("made-by-unity");
  console.log(el);
    fadeIn(el);
}

function wait5() {
    var content = document.getElementById("container");
  content.style.display="none";
  setTimeout(function(){
    content.style.display="block";
  }, 5000);
}
