let section_content = document.getElementById('section_content').style;

window.addEventListener('scroll', function() {
    let scrollY = window.scrollY * 0.003;

    section_content.opacity = 1 - scrollY;
})