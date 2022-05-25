let menuMobile = document.querySelector(".menu-mobile");
let element = document.getElementById("menu");

function toggleMenu (){
    menuMobile.classList.add("active")
}

element.addEventListener('click', toggleMenu);