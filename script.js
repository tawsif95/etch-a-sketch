const gridContainer = document.getElementById('grid-container');
const newGridButton = document.getElementById('new-grid');
const newSize = document.getElementById('new-size');

let squaresPerSide = 16;
let cell = [];

newGridButton.addEventListener('click', function() {
    console.log(newSize.value)
    createGrid(newSize.value)
})

function createGrid(squaresPerSide) {
    removeCells();
    gridContainer.style.gridTemplateColumns = (`repeat(${squaresPerSide}, 1fr)`);
    gridContainer.style.gridTemplateRows = (`repeat(${squaresPerSide}, 1fr)`);

    let totalGrid = squaresPerSide * squaresPerSide;

    for(let i = 0; i < totalGrid; i++) {
        cell[i] = document.createElement('div');
        cell[i].classList.add('cell');
        gridContainer.appendChild(cell[i]);
    }
}

function removeCells() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

createGrid(squaresPerSide);