let GRID_SIZE = 24;
let DRAW_COLOR = 'black';

const container = document.querySelector('#container');

function makeGrid(rows, cols) {
    for (i=0; i<rows; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'row';
        for(j=0; j<cols; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell).className = 'cell';
        }
    }
}
makeGrid(GRID_SIZE,GRID_SIZE);

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        if(DRAW_COLOR === 'black') {
            DRAW_COLOR = 'black';
        } else {
            DRAW_COLOR = rainbow();
        }
        cell.style.backgroundColor = DRAW_COLOR;
    });
})

const resize = document.querySelectorAll('.resize-container button');

resize.forEach((button) => {
    button.addEventListener('click', () => {
        GRID_SIZE = button.id;
        resetGrid()
    });
})


function rainbow() {
    return 'rgb('+randomNumber(255)+','+randomNumber(255)+','+randomNumber(255)+')';
}


function randomNumber(max) {
    return Math.floor(Math.random()*max+1);
}
const changeColor = document.querySelectorAll('.color-changer button');

changeColor.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'black') {
            DRAW_COLOR = 'black';
        } else if (button.id === 'rgb') {
            DRAW_COLOR = 'rbg';
        }
    });
})


function resetGrid() {
    container.innerHTML = "";
    makeGrid(GRID_SIZE,GRID_SIZE);
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if(DRAW_COLOR === 'black') {
                DRAW_COLOR = 'black';
            } else {
                DRAW_COLOR = rainbow();
            }
            cell.style.backgroundColor = DRAW_COLOR;
        });
    })
}