const saveNameAndRedirect = () => {
    const nickname = document.getElementById('nickname').value
    if (nickname != "") {
        localStorage.setItem('playerName', JSON.stringify(nickname));
        window.location.href = "../pages/colorselect.html";
    } else {
        alert("You must enter a name.")
    }
}
