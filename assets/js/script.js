hamburgerMenu = document.querySelector('.hamburger-menu')
toggle = false

hamburgerMenu.addEventListener('click', () => {
    console.log("click!");
    const menu = document.querySelector('.off-screen-menu');

    if(toggle){
        menu.style.transform = "translateX(-450px)"
        menu.style.transition = "1s"
        toggle = false
    }
    
    else{
        menu.style.transform = "translateX(450px)"
        menu.style.transition = "1s"
        toggle = true
    }
});