const burger = document.querySelector(".hamburger-menu")
const closeBurger = document.querySelector(".fa-times")
const openBurger = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")

burger.addEventListener('click', () => {
    openBurger.classList.toggle("show");
    closeBurger.classList.toggle("show");
    nav.classList.toggle("navShow");
})