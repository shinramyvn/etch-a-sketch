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
makeGrid(50,50);

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = "black";
    });
})