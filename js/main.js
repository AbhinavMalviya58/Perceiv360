var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.left = "0"
}
function hideMenu() {
    navLinks.style.left = "-260px"
}
// COMMUNITY

$(document).ready(function () {
    $('.fliter-item').click(function () {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    // Add active to btn
    $('.fliter-item').click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

// Header BackGround Change on Schroll
let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("rg;", window.scrollY > 0);
})

// visitor count

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/Perceive360/360/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}
