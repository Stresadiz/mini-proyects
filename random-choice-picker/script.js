const text = document.getElementById("text");

const btns = document.getElementsByClassName("btns")[0];

text.addEventListener('keypress', function (event) {

    let textValue = text.value;

    if (event.keyCode == 44) {

    btns.innerHTML = 
    `
    <div class="btn">${textValue.split(",")}</div>
    `;
  }
})