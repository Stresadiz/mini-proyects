const text = document.getElementById("text");
const btns = document.querySelector(".btns");

let array = []; 
let i = 0;

text.addEventListener('keypress', (event) => {

  if (event.key === "," ) {

    textArea = text.value;

    array = textArea.split(",");

    const btn = document.createElement("div");

    btn.innerHTML = `<div class="btn">${array[i]}</div>`;

    btns.appendChild(btn);

    i++;
  }

  if (event.key === "Enter") {
    
    textArea = text.value;

    array = textArea.split(",");

    const btn = document.createElement("div");

    let lastIndex = array[array.length - 1];

    btn.innerHTML = `<div class="btn">${lastIndex}</div>`;

    btns.appendChild(btn);

    text.value = "";

    array = {};

  }

})