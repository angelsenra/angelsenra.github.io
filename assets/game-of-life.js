const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const BLOCK_SIZE = 10;
const WIDTH = canvas.width / BLOCK_SIZE;
const HEIGHT = canvas.height / BLOCK_SIZE;
const nextGrid = new Array(WIDTH * HEIGHT);
let grid = [...nextGrid];

const randomGrid = () => {
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      grid[i * WIDTH + j] = Math.random() > 0.5 ? 1 : 0;
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
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      n = neighbors(j, i);
      if (grid[i * WIDTH + j]) {
        nextGrid[i * WIDTH + j] = n >= 2 && n <= 3;
      } else {
        nextGrid[i * WIDTH + j] = n == 3;
      }
    }
  }
  grid = [...nextGrid];
};

const drawGrid = () => {
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (grid[i * WIDTH + j]) {
        ctx.fillStyle = "black";
      } else {
        ctx.fillStyle = "lightgrey";
      }

      ctx.fillRect(
        j * BLOCK_SIZE + 1,
        i * BLOCK_SIZE + 1,
        BLOCK_SIZE - 2,
        BLOCK_SIZE - 2
      );
    }
  }
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  lifeStep();
  setTimeout(draw, 100);
}

randomGrid();
draw();
