// const projectClick = document.getElementById('projectClick');
// const closeButton = document.getElementById('closeButton');
// projectClick.addEventListener('click', (e) => {
//     const v = document.getElementById("projectSpace");
//     v.classList.add("project-space-expanded");

// })
// closeButton.addEventListener('click', (e) => {
//     const v = document.getElementById("projectSpace");
//     v.classList.remove("project-space-expanded");
//     v.style.height = "220px";
//     projectClick.inn = false;

// })

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}