const container = document.querySelector('#container');

function makeGrid(rows, cols) {
    for (i=0; i<rows; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'row';
        for(j=0; j<cols; j++) {
            let col = document.createElement('div');
            row.appendChild(col).className = 'col';
        }
    }
}
makeGrid(16,16)