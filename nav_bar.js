function open_nav_bar() {
    let header = document.getElementById('header').style;
    let nav_bar = document.getElementById('nav_bar').style;
    let button = document.getElementById('open_nav_bar').style;

    nav_bar.display = "flex";
    nav_bar.flexDirection = "column";
    nav_bar.alignItems = "flex-end";
    header.flexDirection = "column";
    header.alignItems = "normal";
    button.display = "none";
}

function close_nav_bar() {
    let header = document.getElementById('header').style;
    let nav_bar = document.getElementById('nav_bar').style;
    let button = document.getElementById('open_nav_bar').style;

    nav_bar.display = "none";
    header.flexDirection = "row";
    header.alignItems = "center";
    button.display = "inline";
}