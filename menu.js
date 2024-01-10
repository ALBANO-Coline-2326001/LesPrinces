const menuHamburger = document.querySelector('.menu-hamburger')
const navLinks = document.querySelector('.nav-links')

menuHamburger.addEventListener('click', () => {
navLinks.classList.toggle('mobile-menu')
});

document.getElementById("theme").addEventListener("click", function() {
    css=document.getElementById("css");
    if (css.href.endsWith("styledark.css")) {
        css.href="styleclair.css";
    } else {
        css.href="styledark.css";
    }
});