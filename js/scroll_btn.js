let scroll_btn= document.querySelector('.scroll_btn').style;

window.addEventListener('scroll', function() {
    let btnY = window.pageYOffset;

    scroll_btn.pointerEvents = btnY < 500 ? "none" : "auto";
    scroll_btn.opacity = btnY < 500 ? "0" : "1";
})