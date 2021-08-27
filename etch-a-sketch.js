clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearGrid);
let slider = document.getElementById('gridSize');
slider.onchange = (e) => newGrid(e.target.value);
gridSize = 24;//squared
function start() {
    const grid = document.getElementById('grid');
    grid.style['grid-template-columns'] = `repeat(${gridSize}, minmax(1px, 1fr))`;
    grid.style['grid-template-rows'] = `repeat(${gridSize}, minmax(1fr, 1fr))`;
}
start();

createGrid();


function gridUpdate() {
    const grid = document.getElementById('grid');
    grid.style['grid-template-columns'] = `repeat(${gridSize}, minmax(1px, 1fr))`;
    grid.style['grid-template-rows'] = `repeat(${gridSize}, minmax(1fr, 1fr))`;
    createGrid();
}
function createGrid() {

    for (i = 0; i < gridSize * gridSize; ++i) {

        square = document.createElement('div');
        square.id = `square${i}`;
        console.log(square)
        num1 = Math.floor(Math.random() * 111);
        num2 = Math.floor(Math.random() * 33);
        num3 = Math.floor(Math.random() * 222);
        num4 = Math.floor(Math.random() * ((6 - 2) + 2)) / 10;
        console.log(num4)
        //square.style['background-color'] = `rgba(${num1},${num2},${num3},${num4})`
        square.style['background-color'] = `rgba(100,100,100,${num4})`
        grid.appendChild(square)
        //addMouseEnter();
        let hover = document.getElementById(`square${i}`);

        hover.addEventListener('mouseenter', draw);
    }
}
function draw() {
    // this.style['background-color'] = `rgba(15, 15, 15, 0.705)`;
    this.style['background-image'] = 'linear-gradient(180deg, rgba(20, 20, 20, 0.705), rgba(15, 15, 15, 0.2))';
}

function newGrid(value) {
    for (i = 0; i < gridSize * gridSize; ++i) {
        square2 = document.getElementById(`square${i}`);
        if (square2 === null) return;
        square2.remove(`square${i}`);

    }
    gridSize = value;
    gridUpdate();
}
function clearGrid(value) {
    for (i = 0; i < gridSize * gridSize; ++i) {
        square2 = document.getElementById(`square${i}`);
        if (square2 === null) return;
        square2.remove(`square${i}`);

    }

    gridUpdate();
}


