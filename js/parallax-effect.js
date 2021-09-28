let wave = document.querySelector('main section .wave span').style;
let wave2 = document.querySelector('main section .wave span:nth-child(2)').style;
let wave3 = document.querySelector('main section .wave span:nth-child(3)').style;

window.addEventListener('scroll', function() {
    let waveY = window.scrollY * -0.75;

    wave.width = ((waveY * 0.8) + 325) + 'vh';
    wave.height = ((waveY * 0.8) + 325) + 'vh';
    wave2.width = ((waveY * 0.5) + 325) + 'vh';
    wave2.height = ((waveY * 0.5) + 325) + 'vh';
    wave3.width = ((waveY * 0.2) + 325) + 'vh';
    wave3.height = ((waveY * 0.2)+ 325) + 'vh';
})