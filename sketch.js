// let cooldude;
let cooldudes = [];
let cell = 30;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  for (let x = 0; x < width/cell; x++) {
    cooldudes[x] = [];
    for (let y = 0; y < height/cell; y++) {
        cooldudes[x][y] = new Cool(x * cell + cell/2, y * cell + cell/2, cell/2.2);
    }
  }
}

function draw() {
  background(255, 200, 200);

  for (let x = 0; x < width/cell; x++) {
    for (let y = 0; y < height/cell; y++) {
      cooldudes[x][y].disp();
      cooldudes[x][y].rotateFace(0.1, width/2);
    }
  }
}
