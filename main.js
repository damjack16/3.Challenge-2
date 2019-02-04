// HAMBURGER MENU
const burger = document.querySelector(".hamburger-menu")
const closeBurger = document.querySelector(".fa-times")
const openBurger = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")

burger.addEventListener('click', () => {
    openBurger.classList.toggle("show");
    closeBurger.classList.toggle("show");
    nav.classList.toggle("navShow");
})

// VIEW MORE GALLERY BUTTON
const btnView = document.querySelector(".gallery .view-btn");
const imgOne = document.querySelector(".gallery img:nth-of-type(6)");
const imgTwo = document.querySelector(".gallery img:nth-of-type(7)");

btnView.addEventListener('click', () => {
    if (btnView.classList.contains("view-btn")) {
        btnView.textContent = "SHOW LESS";
        btnView.classList.add("show-btn");
        btnView.classList.remove("view-btn");
        imgOne.style.animation = "first-animation .8s linear forwards"
        imgTwo.style.animation = "first-animation .8s linear forwards"

    } else if (btnView.classList.contains("show-btn")) {
        btnView.textContent = "VIEW MORE";
        btnView.classList.add("view-btn");
        btnView.classList.remove("show-btn");
        imgOne.style.animation = "second-animation .8s linear"
        imgTwo.style.animation = "second-animation .8s linear"
    }
})

// SMOOTH SCROLL
scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - 90,
    })
}

document.querySelector(".menu-home").addEventListener('click', () => {
    scrollTo(document.getElementById("menu"));
})

document.querySelector(".menu-about").addEventListener('click', () => {
    scrollTo(document.getElementById("about-us"));
})

document.querySelector(".menu-services").addEventListener('click', () => {
    scrollTo(document.getElementById("our-services"));
})

document.querySelector(".menu-gallery").addEventListener('click', () => {
    scrollTo(document.getElementById("gallery"));
})

document.querySelector(".menu-blog").addEventListener('click', () => {
    scrollTo(document.getElementById("blog"));
})

document.querySelector(".menu-contact").addEventListener('click', () => {
    scrollTo(document.getElementById("contact"));
})