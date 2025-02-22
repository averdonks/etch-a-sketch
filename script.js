const container = document.querySelector(".container");
const containerWidth = +window.getComputedStyle(container).width.replace("px", "")
const newGridBtn = document.querySelector(".newGridBtn");

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

// Generate a new grid based on user input
function newGrid () {
    let keepGoing = true;
    while (keepGoing) {
        let squaresPerSide = +prompt("How many squares per side for the new grid? (min: 2 max: 100)", "16");
        if (squaresPerSide <= 100 && squaresPerSide >= 2) {
            keepGoing = false;
                while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
                }
                createGrid(squaresPerSide);
        } else {
            alert("Please enter a number between 2 and 100");
        }
    }
}

// Default grid
createGrid(16);

newGridBtn.addEventListener("click", newGrid)
  