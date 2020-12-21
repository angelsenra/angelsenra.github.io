const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const BLOCK_SIZE = 10;
const WIDTH = canvas.width / BLOCK_SIZE;
const HEIGHT = canvas.height / BLOCK_SIZE;
const nextGrid = new Array(WIDTH * HEIGHT);
let isPaused = false;
let isGridFresh = true;
let grid = [...nextGrid];

const randomGrid = () => {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      grid[y * WIDTH + x] = Math.random() > 0.5 ? 1 : 0;
    }
  }
};

const neighbors = (x, y) => {
  const position = y * WIDTH + x;
  let result = 0;
  if (x + 1 < WIDTH) {
    if (y + 1 < HEIGHT) {
      result += grid[position + 1 + WIDTH];
    }
    if (y - 1 >= 0) {
      result += grid[position + 1 - WIDTH];
    }
    result += grid[position + 1];
  }
  if (x - 1 >= 0) {
    if (y + 1 < HEIGHT) {
      result += grid[position - 1 + WIDTH];
    }
    if (y - 1 >= 0) {
      result += grid[position - 1 - WIDTH];
    }
    result += grid[position - 1];
  }
  if (y + 1 < HEIGHT) {
    result += grid[position + WIDTH];
  }
  if (y - 1 >= 0) {
    result += grid[position - WIDTH];
  }
  return result;
};

const lifeStep = () => {
  let n;
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      n = neighbors(x, y);
      if (grid[y * WIDTH + x]) {
        nextGrid[y * WIDTH + x] = n >= 2 && n <= 3;
      } else {
        nextGrid[y * WIDTH + x] = n == 3;
      }
    }
  }
  grid = [...nextGrid];
  isGridFresh = true;
};

const drawCell = (x, y) => {
  if (grid[y * WIDTH + x]) {
    ctx.fillStyle = "black";
  } else {
    ctx.fillStyle = "lightgrey";
  }

  ctx.fillRect(
    x * BLOCK_SIZE + 1,
    y * BLOCK_SIZE + 1,
    BLOCK_SIZE - 2,
    BLOCK_SIZE - 2
  );
};

const drawGrid = () => {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      drawCell(x, y);
    }
  }
};

const drawLoop = () => {
  if (isGridFresh) {
    drawGrid();
  }
  isGridFresh = false;
  requestAnimationFrame(drawLoop);
};

const gameLoop = () => {
  if (!isPaused) {
    lifeStep();
  }
  setTimeout(gameLoop, 100);
};

randomGrid();
gameLoop();
drawLoop();

const keyDownHandler = (e) => {
  if (e.key == " ") {
    // Don't scroll down on space press
    e.preventDefault();
  }
  if (e.key == "ArrowRight" || e.key == "n") {
    lifeStep();
  }
};

const keyUpHandler = (e) => {
  if (e.key == " " || e.key == "p") {
    isPaused = !isPaused;
    e.preventDefault();
  }
  if (e.key == "r") {
    randomGrid();
  }
};

const mouseDownHandler = (e) => {
  rx = e.clientX - canvas.offsetLeft;
  ry = e.clientY - canvas.offsetTop;
  x = Math.floor((rx * WIDTH) / canvas.width);
  y = Math.floor((ry * HEIGHT) / canvas.height);
  grid[y * WIDTH + x] ^= 1;
  drawCell(x, y);
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousedown", mouseDownHandler, false);
