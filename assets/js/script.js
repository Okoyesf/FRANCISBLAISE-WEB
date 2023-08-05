// TOGGLE BUTTON
const hamburger = document.querySelector('.hamburger');
const navlink = document.querySelector('.nav__link');

//TOGGLE WHEN THE HAMBURGER ICON/BUTTON IS CLICKED
hamburger.addEventListener('click', () => {
    navlink.classList.toggle("hide");
    
});