/* DECLARACION DE VARIABLES DE LOS CASILLEROS */

/* PRIMERA ROW */

const bb11 = document.getElementById('board-box-1-1');
const bb12 = document.getElementById('board-box-1-2');
const bb13 = document.getElementById('board-box-1-3');
const bb14 = document.getElementById('board-box-1-4');

const cb11 = document.getElementById('check-box-1-1');
const cb12 = document.getElementById('check-box-1-2');
const cb13 = document.getElementById('check-box-1-3');
const cb14 = document.getElementById('check-box-1-4');

/* SEGUNDA ROW */

const bb21 = document.getElementById('board-box-2-1');
const bb22 = document.getElementById('board-box-2-2');
const bb23 = document.getElementById('board-box-2-3');
const bb24 = document.getElementById('board-box-2-4');

const cb21 = document.getElementById('check-box-2-1');
const cb22 = document.getElementById('check-box-2-2');
const cb23 = document.getElementById('check-box-2-3');
const cb24 = document.getElementById('check-box-2-4');

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
    switch (checkIndex) {
        case 1:
            if (rgbToHex(bb11.style.backgroundColor) === winningCombination[0]) {
                cb11.style.backgroundColor = 'green';
                cb11.style.border = "thick solid #cafbfe";
            } else {
                cb11.style.backgroundColor = 'white';
                cb11.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb12.style.backgroundColor) === winningCombination[1]) {
                cb12.style.backgroundColor = 'green';
                cb12.style.border = "thick solid #cafbfe";
            } else {
                cb12.style.backgroundColor = 'white';
                cb12.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb13.style.backgroundColor) === winningCombination[2]) {
                cb13.style.backgroundColor = 'green';
                cb13.style.border = "thick solid #cafbfe";
            } else {
                cb13.style.backgroundColor = 'white';
                cb13.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb14.style.backgroundColor) === winningCombination[3]) {
                cb14.style.backgroundColor = 'green';
                cb14.style.border = "thick solid #cafbfe";
            } else {
                cb14.style.backgroundColor = 'white';
                cb14.style.border = "thick solid #cafbfe";
            }

            if (cb11.style.backgroundColor == 'green' &&
                cb12.style.backgroundColor == 'green' &&
                cb13.style.backgroundColor == 'green' &&
                cb14.style.backgroundColor == 'green') {
                window.location.href = "../pages/win.html";
            }

            checkIndex = checkIndex + 1;
            break;

        case 2:
            if (rgbToHex(bb21.style.backgroundColor) === winningCombination[0]) {
                cb21.style.backgroundColor = 'green';
                cb21.style.border = "thick solid #cafbfe";
            } else {
                cb21.style.backgroundColor = 'white';
                cb21.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb22.style.backgroundColor) === winningCombination[1]) {
                cb22.style.backgroundColor = 'green';
                cb22.style.border = "thick solid #cafbfe";
            } else {
                cb22.style.backgroundColor = 'white';
                cb22.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb23.style.backgroundColor) === winningCombination[2]) {
                cb23.style.backgroundColor = 'green';
                cb23.style.border = "thick solid #cafbfe";
            } else {
                cb23.style.backgroundColor = 'white';
                cb23.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb24.style.backgroundColor) === winningCombination[3]) {
                cb24.style.backgroundColor = 'green';
                cb24.style.border = "thick solid #cafbfe";
            } else {
                cb24.style.backgroundColor = 'white';
                cb24.style.border = "thick solid #cafbfe";
            }
            if (cb21.style.backgroundColor == 'green' &&
                cb22.style.backgroundColor == 'green' &&
                cb23.style.backgroundColor == 'green' &&
                cb24.style.backgroundColor == 'green') {
                window.location.href = "../pages/win.html";
            } else {
                window.location.href = "../pages/loose.html";
            }

            checkIndex = checkIndex + 1;
            break;
    }
});
