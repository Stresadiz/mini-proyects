const btn = document.querySelector(".btn");
const lines = document.querySelectorAll(".line");
const nav = document.querySelector(".navbar__list");
const items = document.querySelectorAll(".item");

btn.addEventListener("click", () => {

    lines.forEach(line => {
        line.classList.toggle("line--var");
        line.style.transition = "0.5s";
    });

    nav.classList.toggle("nav--var");
    nav.style.transition = "1s";

    items.forEach(item => {
        item.classList.toggle("item--var");
        item.style.transition = "0.5s";
    });
})