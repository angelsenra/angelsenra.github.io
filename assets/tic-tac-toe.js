const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const BLOCK_SIZE = Math.floor(Math.min(canvas.width, canvas.height) / 3);
canvas.width -= canvas.width % BLOCK_SIZE;
canvas.height -= canvas.height % BLOCK_SIZE;
const board = Array(9).fill(0);
let userTurn;
let winner;
const WINNING_ROWS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Vertical
  [0, 4, 8],
  [2, 4, 6], // Diagonal
];
const CELL_ORDER = [4, 0, 2, 6, 8, 1, 3, 5, 7];

// Board operations

const resetGame = () => {
  userTurn = board.filter((i) => i !== 0).length % 2;
  winner = 0;
  board.fill(0);
  drawBoard();
  if (!userTurn) {
    setTimeout(aiMove, 10);
  }
};

function getWinner(board) {
  return WINNING_ROWS.map((row) => row.reduce((sum, n) => sum + board[n], 0)).reduce(
    (a, b) => (b === 3 ? 1 : b === -3 ? -1 : a),
    0
  );
}

function minimax(board, userTurn, depth) {
  const winner = getWinner(board);
  if (winner) return [1000 * winner + depth, null]; // score, move
  if (!board.includes(0) || !depth) return [0, null];

  return CELL_ORDER.filter((n) => board[n] === 0)
    .map((n) => [
      minimax([...board.slice(0, n), userTurn ? 1 : -1, ...board.slice(n + 1, 9)], !userTurn, depth - 1)[0],
      n,
    ])
    .reduce((a, b) => ((userTurn ? b[0] > a[0] : b[0] < a[0]) ? b : a));
}

const aiMove = () => {
  if (winner) {
    console.log("The game is over!");
    return;
  }
  if (userTurn) {
    console.log("Not AI's turn!");
    return;
  }
  if (!board.includes(0)) {
    console.log("There are no valid cells");
    return;
  }
  if (board.filter((i) => i !== 0).length === 0) {
    board[CELL_ORDER[0]] = -1;
    drawCell(1, 1);
    userTurn = true;
    return;
  }
  const move = CELL_ORDER.filter((n) => board[n] === 0)
    .map((n) => [minimax([...board.slice(0, n), userTurn ? 1 : -1, ...board.slice(n + 1, 9)], !userTurn, 10)[0], n])
    .reduce((a, b) => ((userTurn ? b[0] > a[0] : b[0] < a[0]) ? b : a));
  board[move[1]] = -1;
  drawBoard();
  userTurn = true;
  winner = getWinner(board);
};

// Drawing

const drawBoard = () => {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      drawCell(x, y);
    }
  }
};

const drawCell = (x, y) => {
  switch (board[y * 3 + x]) {
    case 0:
      ctx.fillStyle = "lightgrey";
      break;
    case 1:
      ctx.fillStyle = "blue";
      break;
    case -1:
      ctx.fillStyle = "red";
      break;
    default:
      ctx.fillStyle = "yellow";
  }
  ctx.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
};

// Event handlers

const keyDownHandler = (e) => {};

const keyUpHandler = (e) => {
  if (e.key == "r") {
    resetGame();
  }
};

const mouseDownHandler = (e) => {
  rx = e.clientX - canvas.offsetLeft + window.scrollX;
  ry = e.clientY - canvas.offsetTop + window.scrollY;
  x = Math.floor((rx * 3) / canvas.scrollWidth);
  y = Math.floor((ry * 3) / canvas.scrollHeight);
  if (winner) {
    console.log("The game is over!");
    return;
  }
  if (!userTurn) {
    console.log("Not user's turn!");
    return;
  }
  if (board[y * 3 + x] !== 0) {
    console.log(`[${x}, ${y}] is not a valid cell`);
    return;
  }
  board[y * 3 + x] = 1;
  drawCell(x, y);
  userTurn = false;
  winner = getWinner(board);
  setTimeout(aiMove, 100);
};

// Main

resetGame();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
canvas.addEventListener("mousedown", mouseDownHandler, false);
