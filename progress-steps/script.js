let n = 0;
document.getElementById("btn--next").addEventListener("click", function() {
    let point = document.getElementsByClassName("point")[n];
    point.classList.add("active");
    let progressBar = document.getElementById("bar2");
  
  
    if (n < 4) {
      if(n<3){
         progressBar.style.width = (n+1)*25 + "%"; // Actualiza la barra de progreso
         progressBar.style.transition = "1s";
        }
       
        n++;
    }
  });
  
  document.getElementById("btn--back").addEventListener("click", function() {
        let point = document.getElementsByClassName("point")[n-1];
    point.classList.remove("active");
  
    if (n > 0) {
        n--;
  
    let progressBar = document.getElementById("bar2");
    progressBar.style.width = n*25 + "%"; // Actualiza la barra de progreso
    progressBar.style.transition = "1s";
    }
  });
  
  