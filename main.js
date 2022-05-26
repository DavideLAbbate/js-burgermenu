let menuMobile = document.querySelector(".menu-mobile");
let element = document.querySelector(".menu");
let closeMenu = document.querySelector(".close")

function toggleMenu (){
    menuMobile.classList.add("active")
    element.classList.add("disable")
    closeMenu.classList.add("able")
}

function close (){
    menuMobile.classList.remove("active")
    closeMenu.classList.remove("able")
    element.classList.remove("disable")
}

element.addEventListener('click', toggleMenu);

closeMenu.addEventListener('click', close)