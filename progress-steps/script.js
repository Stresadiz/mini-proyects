let point1 = document.getElementById("point1");
let point2 = document.getElementById("point2");
let point3 = document.getElementById("point3");
let point4 = document.getElementById("point4");


let bar = document.getElementById("bar2");

let n = 0;

function onClickNext() {

    bar[n].classList.toggle("active");

    n++;
}