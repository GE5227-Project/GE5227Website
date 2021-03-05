// Script for scroll effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.top = "80px";
    } else {
        document.getElementsByClassName("navbar")[0].style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

// For toggling dark mode
var darkMode = document.querySelectorAll('html, body, .navbar, .dropdown-content, .switch-text, .overlay-text, .contact-form, h2, h3');
var darkToggle = document.querySelector("label input");
darkToggle.addEventListener("click", toggleDark);

function toggleDark() {
    for (i = 0; i < darkMode.length; i++) {
        darkMode[i].classList.toggle("dark-mode");
    }
}