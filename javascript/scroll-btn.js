window.addEventListener('scroll', function() {
    let btnY = window.pageYOffset;
    var scroll_btn = document.getElementById('scroll-btn')

    scroll_btn.style.right=  btnY < 500 ? "-100px" : "calc(var(--obj-position))"
})