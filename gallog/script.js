const grid = document.getElementById('tetris-grid');
const ROWS = 20;
const COLS = 10;
const EMPTY = 0;
let board = createBoard();

function createBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY));
}

function drawBoard() {
  let html = '';
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const color = board[row][col] === EMPTY ? 'transparent' : 'black';
      html += `<div class="block" style="background-color:${color};"></div>`;
    }
  }
  grid.innerHTML = html;
}

function updateBoard() {
  drawBoard();
}

function startGame() {
  setInterval(() => {
    updateBoard();
  }, 1000);
}

startGame();
