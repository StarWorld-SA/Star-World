
/***************** menu*/

const menu = document.querySelector(".menu4");
const openMenuBtn = document.querySelector(".bal");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitionend", function() {
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > .i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});

const next_page = document.querySelector(".next-page");

next_page.querySelectorAll(".next-btn > .i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".next-btn").classList.toggle("active");
    });
});