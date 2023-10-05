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

/* TERCERA ROW */

const bb31 = document.getElementById('board-box-3-1');
const bb32 = document.getElementById('board-box-3-2');
const bb33 = document.getElementById('board-box-3-3');
const bb34 = document.getElementById('board-box-3-4');

const cb31 = document.getElementById('check-box-3-1');
const cb32 = document.getElementById('check-box-3-2');
const cb33 = document.getElementById('check-box-3-3');
const cb34 = document.getElementById('check-box-3-4');

/* CUARTA ROW */

const bb41 = document.getElementById('board-box-4-1');
const bb42 = document.getElementById('board-box-4-2');
const bb43 = document.getElementById('board-box-4-3');
const bb44 = document.getElementById('board-box-4-4');

const cb41 = document.getElementById('check-box-4-1');
const cb42 = document.getElementById('check-box-4-2');
const cb43 = document.getElementById('check-box-4-3');
const cb44 = document.getElementById('check-box-4-4');

/* QUINTA ROW */

const bb51 = document.getElementById('board-box-5-1');
const bb52 = document.getElementById('board-box-5-2');
const bb53 = document.getElementById('board-box-5-3');
const bb54 = document.getElementById('board-box-5-4');

const cb51 = document.getElementById('check-box-5-1');
const cb52 = document.getElementById('check-box-5-2');
const cb53 = document.getElementById('check-box-5-3');
const cb54 = document.getElementById('check-box-5-4');

/* SEXTA ROW */

const bb61 = document.getElementById('board-box-6-1');
const bb62 = document.getElementById('board-box-6-2');
const bb63 = document.getElementById('board-box-6-3');
const bb64 = document.getElementById('board-box-6-4');

const cb61 = document.getElementById('check-box-6-1');
const cb62 = document.getElementById('check-box-6-2');
const cb63 = document.getElementById('check-box-6-3');
const cb64 = document.getElementById('check-box-6-4');

/* SEPTIMA ROW */

const bb71 = document.getElementById('board-box-7-1');
const bb72 = document.getElementById('board-box-7-2');
const bb73 = document.getElementById('board-box-7-3');
const bb74 = document.getElementById('board-box-7-4');

const cb71 = document.getElementById('check-box-7-1');
const cb72 = document.getElementById('check-box-7-2');
const cb73 = document.getElementById('check-box-7-3');
const cb74 = document.getElementById('check-box-7-4');

/* OCTAVA ROW */

const bb81 = document.getElementById('board-box-8-1');
const bb82 = document.getElementById('board-box-8-2');
const bb83 = document.getElementById('board-box-8-3');
const bb84 = document.getElementById('board-box-8-4');

const cb81 = document.getElementById('check-box-8-1');
const cb82 = document.getElementById('check-box-8-2');
const cb83 = document.getElementById('check-box-8-3');
const cb84 = document.getElementById('check-box-8-4');

/* NOVENA ROW */

const bb91 = document.getElementById('board-box-9-1');
const bb92 = document.getElementById('board-box-9-2');
const bb93 = document.getElementById('board-box-9-3');
const bb94 = document.getElementById('board-box-9-4');

const cb91 = document.getElementById('check-box-9-1');
const cb92 = document.getElementById('check-box-9-2');
const cb93 = document.getElementById('check-box-9-3');
const cb94 = document.getElementById('check-box-9-4');

/* DECIMA ROW */

const bb101 = document.getElementById('board-box-10-1');
const bb102 = document.getElementById('board-box-10-2');
const bb103 = document.getElementById('board-box-10-3');
const bb104 = document.getElementById('board-box-10-4');

const cb101 = document.getElementById('check-box-10-1');
const cb102 = document.getElementById('check-box-10-2');
const cb103 = document.getElementById('check-box-10-3');
const cb104 = document.getElementById('check-box-10-4');

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
            console.log(checkIndex)
            console.log("termine la row 1");
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
            }

            checkIndex = checkIndex + 1;
            console.log(checkIndex)
            console.log("termine la row 2");
            break;

        case 3:
            if (rgbToHex(bb31.style.backgroundColor) === winningCombination[0]) {
                cb31.style.backgroundColor = 'green';
                cb31.style.border = "thick solid #cafbfe";
            } else {
                cb31.style.backgroundColor = 'white';
                cb31.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb32.style.backgroundColor) === winningCombination[1]) {
                cb32.style.backgroundColor = 'green';
                cb32.style.border = "thick solid #cafbfe";
            } else {
                cb32.style.backgroundColor = 'white';
                cb32.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb33.style.backgroundColor) === winningCombination[2]) {
                cb33.style.backgroundColor = 'green';
                cb33.style.border = "thick solid #cafbfe";
            } else {
                cb33.style.backgroundColor = 'white';
                cb33.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb34.style.backgroundColor) === winningCombination[3]) {
                cb34.style.backgroundColor = 'green';
                cb34.style.border = "thick solid #cafbfe";
            } else {
                cb34.style.backgroundColor = 'white';
                cb34.style.border = "thick solid #cafbfe";
            }

            if (cb31.style.backgroundColor == 'green' &&
                cb32.style.backgroundColor == 'green' &&
                cb33.style.backgroundColor == 'green' &&
                cb34.style.backgroundColor == 'green') {
                window.location.href = "../pages/win.html";
            }
            checkIndex = checkIndex + 1;
            console.log(checkIndex)
            console.log("termine la row 3");
            break;

        case 4:
            if (rgbToHex(bb41.style.backgroundColor) === winningCombination[0]) {
                cb41.style.backgroundColor = 'green';
                cb41.style.border = "thick solid #cafbfe";
            } else {
                cb41.style.backgroundColor = 'white';
                cb41.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb42.style.backgroundColor) === winningCombination[1]) {
                cb42.style.backgroundColor = 'green';
                cb42.style.border = "thick solid #cafbfe";
            } else {
                cb42.style.backgroundColor = 'white';
                cb42.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb43.style.backgroundColor) === winningCombination[2]) {
                cb43.style.backgroundColor = 'green';
                cb43.style.border = "thick solid #cafbfe";
            } else {
                cb43.style.backgroundColor = 'white';
                cb43.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb44.style.backgroundColor) === winningCombination[3]) {
                cb44.style.backgroundColor = 'green';
                cb44.style.border = "thick solid #cafbfe";
            } else {
                cb44.style.backgroundColor = 'white';
                cb44.style.border = "thick solid #cafbfe";
            }

            if (cb41.style.backgroundColor == 'green' &&
                cb42.style.backgroundColor == 'green' &&
                cb43.style.backgroundColor == 'green' &&
                cb44.style.backgroundColor == 'green') {
                window.location.href = "../pages/win.html";
            }
            checkIndex = checkIndex + 1;
            console.log(checkIndex)
            console.log("termine la row 4");
            break;

        case 5:
            if (rgbToHex(bb51.style.backgroundColor) === winningCombination[0]) {
                cb51.style.backgroundColor = 'green';
                cb51.style.border = "thick solid #cafbfe";
            } else {
                cb51.style.backgroundColor = 'white';
                cb51.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb52.style.backgroundColor) === winningCombination[1]) {
                cb52.style.backgroundColor = 'green';
                cb52.style.border = "thick solid #cafbfe";
            } else {
                cb52.style.backgroundColor = 'white';
                cb52.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb53.style.backgroundColor) === winningCombination[2]) {
                cb53.style.backgroundColor = 'green';
                cb53.style.border = "thick solid #cafbfe";
            } else {
                cb53.style.backgroundColor = 'white';
                cb53.style.border = "thick solid #cafbfe";
            }
            if (rgbToHex(bb54.style.backgroundColor) === winningCombination[3]) {
                cb54.style.backgroundColor = 'green';
                cb54.style.border = "thick solid #cafbfe";
            } else {
                cb54.style.backgroundColor = 'white';
                cb54.style.border = "thick solid #cafbfe";
            }

            if (cb51.style.backgroundColor == 'green' &&
                cb52.style.backgroundColor == 'green' &&
                cb53.style.backgroundColor == 'green' &&
                cb54.style.backgroundColor == 'green') {
                window.location.href = "../pages/win.html";
            } else {
                window.location.href = "../pages/loose.html";
            }
            checkIndex = checkIndex + 1;
            console.log(checkIndex)
            console.log("termine la row 5");
            break;
    }
});
