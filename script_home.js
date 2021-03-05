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
var darkMode = document.querySelectorAll('html, .footnote, .main-text, .navbar, .dropdown-content, .main-text-img, .switch-text, .overlay-text');
var darkToggle = document.querySelector("label input");
darkToggle.addEventListener("click", toggleDark);

function toggleDark() {
    for (i = 0; i < darkMode.length; i++) {
        darkMode[i].classList.toggle("dark-mode");
    }
}