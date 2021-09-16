function light_theme() {
    let large_DarkButton = document.getElementById('dark_theme-button').style;
    let large_LightButton = document.getElementById('light_theme-button').style;
    let small_DarkButton = document.getElementById('small_dark_theme-button').style;
    let small_LightButton = document.getElementById('small_light_theme-button').style;

        large_LightButton.display = "none";    
        small_LightButton.display = "none";
        large_DarkButton.display = "inline";    
        small_DarkButton.display = "inline";

    let github_light = document.getElementById('github_img-light-theme').style;
    let github_dark = document.getElementById('github_img-dark-theme').style;
        
        github_dark.display = 'none';
        github_light.display = "inline";

    document.body.style.setProperty('--background_theme', '#fff');
    document.body.style.setProperty('--text-color_theme', '#252323');
    document.body.style.setProperty('--hover-text-color_theme', 'rgba(0,0,0,0.6)');
    document.body.style.setProperty('--hover-text-color_theme2', 'rgba(255,255,255,0.6)');
    document.body.style.setProperty('--github-header_background', 'rgba(255,255,255,0.2)');
}

function dark_theme() {
    let large_DarkButton = document.getElementById('dark_theme-button').style;
    let large_LightButton = document.getElementById('light_theme-button').style;
    let small_DarkButton = document.getElementById('small_dark_theme-button').style;
    let small_LightButton = document.getElementById('small_light_theme-button').style;

        large_LightButton.display = "inline";    
        small_LightButton.display = "inline";
        large_DarkButton.display = "none";    
        small_DarkButton.display = "none";

    let github_light = document.getElementById('github_img-light-theme').style;
    let github_dark = document.getElementById('github_img-dark-theme').style;
        
        github_dark.display = 'none';
        github_light.display = "inline";

    document.body.style.setProperty('--background_theme', '#252323');
    document.body.style.setProperty('--text-color_theme', '#fff');
    document.body.style.setProperty('--hover-text-color_theme', 'rgba(255,255,255,0.6)');
    document.body.style.setProperty('--hover-text-color_theme2', 'rgba(0,0,0,0.6)');
    document.body.style.setProperty('--github-header_background', 'rgba(255,255,255,0.2)');
}