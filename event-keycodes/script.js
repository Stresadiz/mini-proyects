const insert = document.getElementById("insert");

document.addEventListener("keydown", function(event) {

    insert.innerHTML = 
    `
    <div class="keycodes">
                <div class="char">
                    <h4 class="char__name">
                        event.key
                    </h4> <br>
                    <h4 class="char__name event">
                        ${event.key}
                    </h4>
                </div>
                <div class="char">
                    <h4 class="char__name">
                        event.keyCode
                    </h4> <br>
                    <h4 class="char__name event">
                        ${event.keyCode}
                    </h4>
                </div>
                <div class="char">
                    <h4 class="char__name">
                        event.code
                    </h4> <br>
                    <h4 class="char__name event"> 
                        ${event.code}
                    </h4>
                </div>
            </div>
    `
})