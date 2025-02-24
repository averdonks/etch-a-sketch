const container = document.querySelector(".container");
const containerWidth = +window.getComputedStyle(container).width.replace("px", "");
const newGridBtn = document.querySelector("#newGridBtn");
const randomColorBtn = document.querySelector("#randomColorBtn");
const opacityBtn = document.querySelector("#opacityBtn");
let randomColorBtnToggle = false;
let opacityBtnToggle = false;

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
            square.setAttribute(`style`, `width: ${containerWidth / side}px; height: ${containerWidth / side}px;`);
            addSquareEvents(square);
            container.appendChild(square);
        }
    }

    function addSquareEvents (square) {
        square.addEventListener("mouseenter", () => {
            square.classList.add("squareHover", "squareColor");
            square.classList.remove("squareRemoveBorder");
            if (randomColorBtnToggle) {
                square.style.backgroundColor = `${randomRGB()}`;
            } else if (opacityBtnToggle === false) {
                square.style.backgroundColor = "black";
            }
            if (opacityBtnToggle && square.style.opacity < 1) {
                square.style.opacity = (+square.style.opacity + 0.1);
            } else {
                square.style.opacity = 1;
            }
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
        } else if (squaresPerSide == false) {
            return;
        } else {
            alert("Please enter a number between 2 and 100");
        }
    }
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function buttonToggle (btnToggle) {
    if (btnToggle === false) {
        btnToggle = true;        
    } else {
        btnToggle = false;
    }
    return btnToggle;
}

// Default grid
createGrid(16);

newGridBtn.addEventListener("click", newGrid)
randomColorBtn.addEventListener("click", () => {
    randomColorBtnToggle = buttonToggle(randomColorBtnToggle);
    randomColorBtn.classList.toggle("buttonActive");
});
opacityBtn.addEventListener("click", () => {
    opacityBtnToggle = buttonToggle(opacityBtnToggle);
    opacityBtn.classList.toggle("buttonActive");
});
