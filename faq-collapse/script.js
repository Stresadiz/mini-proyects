
function display(n) {
    
    let text = document.getElementsByClassName("item__text");

    text[n].classList.toggle("active");

    for (let i = 0; i < 4; i++) {
        const remove = text[i];
        
        if(i != n){
            text[i].classList.remove("active");
        }
    }
}