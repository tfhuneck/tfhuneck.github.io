
var gridArray = [];

function reset() {
    position = 1;
     grid.innerHTML = "";
    gridArray = [];
};

function createBox() {
    var newbox = document.createElement('button');
    newbox.className = 'box';
    newbox.innerHTML = gridArray[i];
    newbox.addEventListener("click", function() {
        newbox.style.backgroundColor = randomColor();  
    });
    newbox.setAttribute('id', i +1)
    var grid = document.getElementById('grid');
    grid.appendChild(newbox);
};   

function createGrid () {
    const gridSize = document.getElementById('size').value;

    if(gridArray.length < gridSize){
        for(n = 1; n <= gridSize; n++) {
        gridArray.push(n);
    };

    if(gridArray.length >= 1){
        reset();
        for(n = 1; n <= gridSize; n++) {
        gridArray.push(n);
    }};

    for(i = 0; i < gridArray.length; i++){
            createBox();
    }};


    
    console.log(grid);
};

function randomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;  
    return rgb;
};

function changeColorRandom() {
    for(i = 1; i <= gridArray.length; i++){
    let id = document.getElementById(i);
    id.style.backgroundColor = randomColor();
    }};

let position = 1;
var cancel;

function sequence(cancel) {
    
    if (cancel == 1) {
        clearInterval(runner);
        clearTimeout(flasher);
        return;
    };
    if (cancel == 0) {
        runner = setInterval(() => {
        if (position > gridArray.length) {
            position = 1;
        };
        var ibox = position;
        var boxchange = document.getElementById(ibox);
        var flasher = setTimeout(() => {
            flash(boxchange)}, 200);
        changeColorOne(boxchange);
        position += 1;
        sequence (); 
        }, 400);
    }
};

function flash() {
    var id = document.getElementById(position);
    id.style.backgroundColor = '#FFFF5C'; 
};

function changeColorOne() {
    let id = document.getElementById(position);
    id.style.backgroundColor = randomColor();
    };

function stop() {
    sequence(1);
}