const titleColor = document.querySelector('#color'),
    newColorBtn = document.querySelector('#change');

function randomColor() {
    const color = Math.floor(Math.random() * 16777216).toString(16);

    return '#000000'.slice(0, -color.length) + color;
}

function changeBackgroundColor() {
    titleColor.textContent = randomColor();
    document.body.style.backgroundColor = randomColor();
    newColorBtn.style.color = randomColor();
}

newColorBtn.addEventListener('click', changeBackgroundColor);