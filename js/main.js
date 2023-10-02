const colorCopy1 = document.getElementById('colorCopy1');
const colorCopy2 = document.getElementById('colorCopy2');
const colorCopy3 = document.getElementById('colorCopy3');
const colorCopy4 = document.getElementById('colorCopy4');
const arrayChosenColours = [];

document.getElementById('colorPick1').addEventListener('input', () => {
    colorCopy1.style.backgroundColor = document.getElementById('colorPick1').value;
});

document.getElementById('colorPick2').addEventListener('input', () => {
    colorCopy2.style.backgroundColor = document.getElementById('colorPick2').value;
});

document.getElementById('colorPick3').addEventListener('input', () => {
    colorCopy3.style.backgroundColor = document.getElementById('colorPick3').value;
});

document.getElementById('colorPick4').addEventListener('input', () => {
    colorCopy4.style.backgroundColor = document.getElementById('colorPick4').value;
});

const saveColours = () => {
    const color1 = document.getElementById('colorPick1').value;
    const color2 = document.getElementById('colorPick2').value;
    const color3 = document.getElementById('colorPick3').value;
    const color4 = document.getElementById('colorPick4').value;

    arrayChosenColours.push(color1, color2, color3, color4);
    console.log(`Colores guardados ${arrayChosenColours}`);
    console.log(arrayChosenColours);

    const arrayChosenColoursString = JSON.stringify(arrayChosenColours);
    localStorage.setItem('chosenColours', arrayChosenColoursString);
}

const randomWinningArray = (colours) => {
    const combination = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colours.length);
        combination.push(colours[randomIndex]);
    }
    return combination;
}

const randomCombination = randomWinningArray(arrayChosenColours);
console.log('Combinación aleatoria:', randomCombination);


const saveColoursAndRedirect = () => {
    saveColours();

    const randomCombination = randomWinningArray(arrayChosenColours);
    console.log('Combinación aleatoria:', randomCombination);

    window.location.href = "../pages/board.html";
    localStorage.setItem('winningCombination', JSON.stringify(randomCombination));

}

