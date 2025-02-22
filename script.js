const container = document.querySelector(".container");
const containerWidth = +window.getComputedStyle(container).width.replace("px", "")
console.log();
let squaresPerSide = 16;

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
            container.appendChild(square);
        }
    }
}

createGrid(squaresPerSide);
