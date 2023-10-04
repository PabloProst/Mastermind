const nickname = localStorage.getItem('playerName');
const playerName = JSON.parse(nickname);

const tw = document.getElementById('textWinner');

tw.innerHTML = playerName;