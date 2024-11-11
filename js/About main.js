var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.left = "0"
}
function hideMenu() {
    navLinks.style.left = "-260px"
}

// Header BackGround Change on Schroll

let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
})
