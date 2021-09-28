let scroll_btn= document.getElementById('scroll_btn').style;

window.addEventListener('scroll', function() {
    let btnY = window.pageYOffset;

    scroll_btn.pointerEvents = btnY < 500 ? "none" : "auto";
    scroll_btn.opacity = btnY < 500 ? "0" : "0.75";
})