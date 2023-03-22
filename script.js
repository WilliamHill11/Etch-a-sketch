// Ask user the size of how big they want the sketch 
// from 1-100 max, when click it should reset and change board size
function createGrid() {
    const container = document.querySelector('.container');
    let gridSize = prompt('Choose a grid size from 1-100');
    for (let i = 0;  i < gridSize; i++) {
        if (gridSize > 100) {
            return 
        }
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.append(cell);
      }
    }
  }

  createGrid()

// reset or clear button 

//Hover effect to make pixelated trail in grid
