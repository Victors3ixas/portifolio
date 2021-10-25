//let scroll_btn = document.querySelector('scroll-btn').style;
let scroll_btn = document.getElementById('scroll-btn').style;

window.addEventListener('scroll', function() {
    let btnY = window.pageYOffset;

    scroll_btn.right = btnY < 500 ? "-100px" : "25px";
})