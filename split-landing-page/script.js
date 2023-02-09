
document.getElementById("right").addEventListener("click", function () {
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    right.style.width = "75%";
    left.style.width = "25%";
    left.style.transition = "1s";
    right.style.transition = "1s";
    right.style.opacity = "1";
    left.style.opacity = "0.2";
})

document.getElementById("left").addEventListener("click", function () {
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    right.style.width = "25%";
    left.style.width = "75%";
    left.style.transition = "1s";
    right.style.transition = "1s";
    right.style.opacity = "0.2";
    left.style.opacity = "1";
})