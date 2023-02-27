const bottles = document.querySelectorAll(".bottle");
const complete = document.querySelector(".complete");
const porcent = document.querySelector(".porcent");
const remaind = document.querySelector(".remained");
const lts = document.querySelector(".lts");
let selectedCount = 0;

bottles.forEach( (bottle, index) => {
    bottle.addEventListener("click", () => {

        // Add the 'fill' class to the clicked bottle
        bottle.classList.add('fill');
        
        // Add the 'fill' class to the previous bottles of the same class
        for (let i = 0; i < index; i++) {
          bottles[i].classList.add('fill');
        }

        // Update the selected count and percentage
        selectedCount = document.querySelectorAll('.bottle.fill').length;
        const percentage = Math.round(selectedCount / bottles.length * 100);
        porcent.textContent = `${percentage}%`;

        lts.innerHTML = (2000 - (selectedCount * 250)) / 1000 + `L`;

        // Update the width of the 'complete' bar
        complete.style.height = `${percentage}%`;

        const remainedHeight = 100 - percentage;
        remaind.style.height = `${remainedHeight}%`;

        // Log the nth-child index of the clicked bottle to the console
        console.log(`Selected index: ${index + 1}`);
    })
});
