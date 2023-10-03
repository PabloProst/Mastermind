/* DECLARACION DE VARIABLES DE LOS CASILLEROS */

const bb11 = document.getElementById('board-box-1-1');
const bb12 = document.getElementById('board-box-1-2');
const bb13 = document.getElementById('board-box-1-3');
const bb14 = document.getElementById('board-box-1-4');

const cb11 = document.getElementById('check-box-1-1');
const cb12 = document.getElementById('check-box-1-2');
const cb13 = document.getElementById('check-box-1-3');
const cb14 = document.getElementById('check-box-1-4');

/* PINTAR LOS DIVS DE LOS COLORES ELEGIDOS IN GAME */

const arrayChosenColoursString = localStorage.getItem('chosenColours');
const arrayChosenColours = JSON.parse(arrayChosenColoursString);
const miDiv1 = document.getElementById('colour-in-game1');
const miDiv2 = document.getElementById('colour-in-game2');
const miDiv3 = document.getElementById('colour-in-game3');
const miDiv4 = document.getElementById('colour-in-game4');
const arrayColour1 = arrayChosenColours[0];
const arrayColour2 = arrayChosenColours[1];
const arrayColour3 = arrayChosenColours[2];
const arrayColour4 = arrayChosenColours[3];

/* TRAIGO EL ARRAY ALEATORIO GANADOR */

const winningCombinationString = localStorage.getItem('winningCombination');
const winningCombination = JSON.parse(winningCombinationString);

/* ------------------------------------------------------------------------------ */

miDiv1.style.backgroundColor = arrayColour1;
miDiv2.style.backgroundColor = arrayColour2;
miDiv3.style.backgroundColor = arrayColour3;
miDiv4.style.backgroundColor = arrayColour4;

/* FUNCION DE PINTAR DIVS POR FILA */

let selectedColor = null;
let currentRow = 1;

const colorSelectors = document.querySelectorAll('.my-chosen-colours');
const boardBoxes = document.querySelectorAll('.board-box');

colorSelectors.forEach(colorSelector => {
    colorSelector.addEventListener('click', () => {
        selectedColor = colorSelector.style.backgroundColor;
    });
});

boardBoxes.forEach(boardBox => {
    boardBox.addEventListener('click', () => {
        if (selectedColor) {
            if (boardBox.parentElement.classList.contains(`row${currentRow}`)) {
                boardBox.style.backgroundColor = selectedColor;
            }
        }
    });
});

function checkRow() {
    if (currentRow < 10) {
        currentRow++;
        document.querySelectorAll(`.row${currentRow} .board-box`).forEach(boardBox => {
            boardBox.style.pointerEvents = 'auto';
        });
    }
}

document.querySelector('.btn-check-board').addEventListener('click', checkRow);

/* FUNCION DE CHECK */

function rgbToHex(rgb) {
    const hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return `#${(1 << 24 | hex[1] << 16 | hex[2] << 8 | hex[3]).toString(16).slice(1)}`;
}



// const checkBtn = document.getElementById('checkbtn');
let checkIndex = 1;

document.getElementById('checkbtn').addEventListener('click', () => {
    console.log(winningCombination);
    console.log(bb11.style.backgroundColor);
    switch (checkIndex) {
        case 1:
            if (rgbToHex(bb11.style.backgroundColor) === winningCombination[0]) {
                cb11.style.backgroundColor = 'purple';
            } else {
                cb11.style.backgroundColor = 'white';
            }
            if (rgbToHex(bb12.style.backgroundColor) === winningCombination[1]) {
                cb12.style.backgroundColor = 'purple';
            } else {
                cb12.style.backgroundColor = 'white';
            }
            if (rgbToHex(bb13.style.backgroundColor) === winningCombination[2]) {
                cb13.style.backgroundColor = 'purple';
            } else {
                cb13.style.backgroundColor = 'white';
            }
            if (rgbToHex(bb14.style.backgroundColor) === winningCombination[3]) {
                cb14.style.backgroundColor = 'purple';
            } else {
                cb14.style.backgroundColor = 'white';
            }
            checkIndex = checkIndex + 1;
            break;
    }
});
