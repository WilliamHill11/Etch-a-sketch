const container = document.querySelector('.container');
const resetButton = document.querySelector('.gridLayout');

function createGrid() {
    for (let i = 0;  i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.append(cell);
            //Hover effect to make pixelated trail in grid
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = getRandomColor();
            })
      }
    }
}

// Ask user the size of how big they want the sketch 
// from 1-100 max, when click it should reset and change board size
function gridSize() {
    let grid = prompt('Choose a grid size from 1-100');
    container.innerHTML = "";
    for (let i = 0;  i < grid; i++) {
        if (grid > 100) {
            return 
        }
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
        for (let j = 0; j < grid; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.append(cell);
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = getRandomColor();
            })
        }
    }
}


function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


createGrid()

// reset or clear button 
resetButton.addEventListener('click', gridSize);

