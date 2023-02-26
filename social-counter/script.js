const contadores = document.querySelectorAll(".counter");

window.addEventListener("load", () => {
    contadores.forEach(contador => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i >= 12000) {
                clearInterval(intervalId);
            } else {
                contador.innerHTML = i;
                i = i + 225;
            }
        }, 25);
    });
})