const lines = document.querySelectorAll(".line");

const items = document.querySelectorAll(".item");

const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {

    btn.classList.toggle("btn-origin");

    lines.forEach(line => {
        line.classList.toggle("line--var");
        line.style.transition = "0.5s";
    });

    items.forEach(item => {
        item.classList.toggle("non-active");
        item.style.transition = "1s";
    });
})