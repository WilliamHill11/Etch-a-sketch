const container = document.querySelector('.container');




// Ask user the size of how big they want the sketch 
// from 1-100 max, when click it should reset and change board size
// let sketch = prompt('1-100');
for (i = 0; i < 16; i++) {
    const grids = document.createElement('div');
    container.append(grids);
    grids.style.width = '16';
    grids.style.height = '16';
    grids.style.backgroundColor = 'blue';
    grids.style.border = 'solid black';
    // container.style.gridTemplateColumns = 'auto * 16';
}

// reset or clear button 

// rainbow color palette 