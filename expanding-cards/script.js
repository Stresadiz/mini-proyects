let element = document.getElementsByClassName("panel");

function funcionA(n) {
    
    element[n].classList.toggle("active");
    element[n].style.transition = "1s";

    for (let i = 0; i < 5; i++) {
        const remove = element[i];
        
        if(i != n){
            element[i].classList.remove("active");
            element[i].style.transition = "1s";
        }
    }
}
