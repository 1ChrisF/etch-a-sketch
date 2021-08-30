clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', resetGrid);
colorBtn = document.getElementById('color');
colorBtn.addEventListener('click', colorSwitch);
const slider = document.getElementById('gridSize');
slider.onchange = (e) => newGrid(e.target.value);
const grid = document.getElementById('grid');
gridSize = 24;//squared
let color = false;
createGrid();

function colorSwitch() {
    (color) ? color = false : color = true;
}
function createGrid() {
    grid.style['grid-template-columns'] = `repeat(${gridSize}, minmax(1px, 1fr))`;
    grid.style['grid-template-rows'] = `repeat(${gridSize}, minmax(1fr, 1fr))`;
    for (i = 0; i < gridSize * gridSize; ++i) {
        square = document.createElement('div');
        square.id = `square${i}`;
        console.log(square)
        grid.appendChild(square)
        a = document.getElementById(`square${i}`)
        a.addEventListener('mouseenter', draw);
        a.classList.add('square');
    }
    resetGrid();
}
function newGrid(value) {
    let a = document.querySelectorAll('.square');
    a.forEach(item => grid.removeChild(item));
    gridSize = value;
    createGrid();
    //createGrid();
}
function resetGrid() {
    for (i = 0; i < gridSize * gridSize; ++i) {
        let square = document.getElementById(`square${i}`);
        num4 = Math.floor(Math.random() * ((5 - 1) + 1)) / 10;
        square.classList.remove("col");
        square.removeAttribute("style");
        square.style['background-color'] = `rgba(120,120,120,${num4})`
    }
}
function draw() {    
    if (color) {
        if (this.classList.value === 'square col') { return };
        num1 = Math.floor(Math.random() * 255);//for random color.
        num2 = Math.floor(Math.random() * 255);
        num3 = Math.floor(Math.random() * 100);
        this.classList.add('col');
        console.log(this)
        this.style['background-color'] = `rgba(${num1},${num2},${num3}, 0.8)`
    } else {
        this.style['background-image'] = 'linear-gradient(180deg, rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.2))';
    }
}

