const canvas = document.getElementById("game-canvas");
const gameSpeedSpan = document.getElementById("game-speed");
const stepCountSpan = document.getElementById("step-count");
const pausedTitle = document.getElementById("paused");
const ctx = canvas.getContext("2d");
const BLOCK_SIZE = 10;
canvas.width -= canvas.width % BLOCK_SIZE;
canvas.height -= canvas.height % BLOCK_SIZE;
const WIDTH = canvas.width / BLOCK_SIZE;
const HEIGHT = canvas.height / BLOCK_SIZE;
const nextGrid = Array(WIDTH * HEIGHT).fill(0);
let isPaused = false;
let hasGridChanged = true;
let grid = [...nextGrid];
let gameSpeed = 10;
let stepCount = 0;

// Grid operations

const randomGrid = () => {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      grid[y * WIDTH + x] = Math.random() > 0.5 ? 1 : 0;
    }
  }
  hasGridChanged = true;
  stepCount = 0;
  stepCountSpan.innerHTML = stepCount;
};

const clearGrid = () => {
  grid.fill(0);
  hasGridChanged = true;
  stepCount = 0;
  stepCountSpan.innerHTML = stepCount;
};

const lifeStep = () => {
  let n;
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      n = neighbors(x, y);
      if (grid[y * WIDTH + x]) {
        nextGrid[y * WIDTH + x] = n === 2 || n === 3;
      } else {
        nextGrid[y * WIDTH + x] = n === 3;
      }
    }
  }
  grid = [...nextGrid];
  hasGridChanged = true;
  stepCount++;
  stepCountSpan.innerHTML = stepCount;
};

const neighbors = (x, y) => {
  let result = 0;
  for (const dy of [-1, 0, 1]) {
    for (const dx of [-1, 0, 1]) {
      if (dy === 0 && dx === 0) {
        continue;
      }
      result += grid[((y + dy + HEIGHT) % HEIGHT) * WIDTH + ((x + dx + WIDTH) % WIDTH)];
    }
  }
  return result;
};

// Drawing

const drawGrid = () => {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      drawCell(x, y);
    }
  }
};

const drawCell = (x, y) => {
  ctx.fillStyle = grid[y * WIDTH + x] ? "black" : "lightgrey";
  ctx.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
};

// Loops

const gameLoop = () => {
  if (!isPaused) {
    lifeStep();
  }
  setTimeout(gameLoop, 1000 / gameSpeed);
};

const drawLoop = () => {
  if (hasGridChanged) {
    drawGrid();
    hasGridChanged = false;
  }
  requestAnimationFrame(drawLoop); // Before the next repaint. Usually, 60 times per second
};

// Event handlers

const keyDownHandler = (e) => {
  if (e.key == " ") {
    e.preventDefault(); // Don't scroll down on space press
  }
  if (e.key == "ArrowRight" || e.key == "n" || e.key == "d") {
    lifeStep();
  }
  if (e.key == "ArrowUp" || e.key == "w") {
    gameSpeed = Math.min(gameSpeed + 1, 60);
    gameSpeedSpan.innerHTML = gameSpeed;
    e.preventDefault(); // Don't scroll up on arrow press
  }
  if (e.key == "ArrowDown" || e.key == "s") {
    gameSpeed = Math.max(gameSpeed - 1, 1);
    gameSpeedSpan.innerHTML = gameSpeed;
    e.preventDefault();
  }
};

const keyUpHandler = (e) => {
  if (e.key == " " || e.key == "p") {
    isPaused ^= 1;
    pausedTitle.style.display = isPaused ? "block" : "none";
  }
  if (e.key == "r") {
    randomGrid();
  }
  if (e.key == "c") {
    clearGrid();
  }
};

const mouseDownHandler = (e) => {
  rx = e.clientX - canvas.offsetLeft + window.scrollX;
  ry = e.clientY - canvas.offsetTop + window.scrollY;
  x = Math.floor((rx * WIDTH) / canvas.scrollWidth);
  y = Math.floor((ry * HEIGHT) / canvas.scrollHeight);
  grid[y * WIDTH + x] ^= 1;
  drawCell(x, y);
};

// Main

randomGrid();
gameLoop();
drawLoop();
gameSpeedSpan.innerHTML = gameSpeed;
stepCountSpan.innerHTML = stepCount;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
canvas.addEventListener("mousedown", mouseDownHandler, false);
