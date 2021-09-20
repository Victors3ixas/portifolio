let wave = document.querySelector('section .wave span').style;
let wave2 = document.querySelector('section .wave span:nth-child(2)').style;
let wave3 = document.querySelector('section .wave span:nth-child(3)').style;
let scroll_btn= document.getElementById('scroll_btn').style;

window.addEventListener('scroll', function() {
    let waveY = window.scrollY * -0.5;

    wave.width = ((waveY * 0.8) + 325) + 'vh';
    wave.height = ((waveY * 0.8) + 325) + 'vh';
    wave2.width = ((waveY * 0.5) + 325) + 'vh';
    wave2.height = ((waveY * 0.5) + 325) + 'vh';
    wave3.width = ((waveY * 0.2) + 325) + 'vh';
    wave3.height = ((waveY * 0.2)+ 325) + 'vh';

    let btnY = window.pageYOffset;

    console.log(btnY);
    scroll_btn.pointerEvents = btnY < 500 ? "none" : "auto";
    scroll_btn.opacity = btnY < 500 ? "0" : "0.75";
})