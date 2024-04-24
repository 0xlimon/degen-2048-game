document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid-container');
    const scoreDisplay = document.getElementById('score');
    const width = 4;
    let squares = [];
    let score = 0;

    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            let square = document.createElement('div');
            square.innerHTML = 0;
            gridDisplay.appendChild(square);
            squares.push(square);
        }
        generate();
        generate();
    }

    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length);
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2;
            checkForGameOver();
        } else generate();
    }

    function resetGame() {
        squares.forEach(square => {
            square.innerHTML = 0;
        });
        generate();
        generate();
        score = 0;
        scoreDisplay.innerText = score;
    }

    document.querySelector('.new-game-button').addEventListener('click', resetGame);

    createBoard();
});

function checkForGameOver() {
    let zeros = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].innerHTML == 0) {
            zeros++;
        }
    }
    if (zeros === 0) {
        alert('Game over!');
    }
}
