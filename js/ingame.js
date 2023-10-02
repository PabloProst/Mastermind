/* PINTAR LOS DIVS DE LOS COLORES ELEGIDOS IN GAME */

console.log(arrayChosenColours);

const miDiv1 = document.getElementById('colour-in-game1');
const miDiv2 = document.getElementById('colour-in-game2');
const miDiv3 = document.getElementById('colour-in-game3');
const miDiv4 = document.getElementById('colour-in-game4');
const arrayColour1 = arrayChosenColours[0];
const arrayColour2 = arrayChosenColours[1];
const arrayColour3 = arrayChosenColours[2];
const arrayColour4 = arrayChosenColours[3];

miDiv1.style.backgroundColor = arrayColour1;
miDiv2.style.backgroundColor = arrayColour2;
miDiv3.style.backgroundColor = arrayColour3;
miDiv4.style.backgroundColor = arrayColour4;