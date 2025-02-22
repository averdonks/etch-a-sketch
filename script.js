const container = document.querySelector(".container");
const containerWidth = +window.getComputedStyle(container).width.replace("px", "")

// Create a side x side grid with mouse interactivity
function createGrid (side) {

    let i = 0;
    while (i < side) {
        createGridRow(side);
        i++;
    }

    function createGridRow (side) {
        for (let i = 0; i < side; i++) {
            let square = document.createElement("div");
            square.classList.add("squareDefault");
            square.setAttribute(`style`, `width: ${containerWidth / side}; height: ${containerWidth / side};`);
            addSquareEvents(square);
            container.appendChild(square);
        }
    }

    function addSquareEvents (square) {
        square.addEventListener("mouseenter", () => {
            square.classList.add("squareHover", "squareColor");
            square.classList.remove("squareRemoveBorder");
        });
        square.addEventListener("mouseleave", () => {
            square.classList.remove("squareHover");
            square.classList.add("squareRemoveBorder");
        });
    }
}

// Testing
let squaresPerSide = 16;
createGrid(squaresPerSide);
