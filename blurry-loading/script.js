window.onload = function() {

    for (let i = 1; i < 100; i++) {
      (function(i) {
        setTimeout(function() {
          document.getElementById("loader").innerHTML = i + "%";
          if (i === 99) {
            document.getElementById("loader").style.display = "none";
            document.getElementById("loading").style.display = "none";
          }
          
        }, 6000 / 100 * i);
      })(i);
    }

}