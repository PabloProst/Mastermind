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

const saveColoursAndRedirect = () => {
    saveColours();
    window.location.href = "../pages/board.html";
}
