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

const checkBtn = document.getElementById('checkbtn');
let checkIndex = 1;

