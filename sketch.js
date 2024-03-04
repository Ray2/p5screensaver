
let t = 0;
let numLines = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  stroke(255);
  frameRate(15);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let amplitude = width / 8;

  for (let i = 0; i < numLines; i++) {
    let x1 = sin((t + i) / 10) * amplitude;
    let y1 = cos((-t + i) / 10) * amplitude + sin(((t + 1) / 10) * 50);

    let x2 = sin((t + i) / 20) * (amplitude * 2) + cos(t + 1) * 10;
    let y2 = cos((-t + i) / 10) * (amplitude * 2);

    line(x1, y1, x2, y2);
    push();
    translate(width / 2, height / 2 - height / 2);
    line(x1, y1, x2/2, y2/2);
    pop();
    push();
    translate(width / 2 - width, height / 2 - height / 2);
    line(x1, y1, x2/2, y2/2);
    pop();
  }

  t += 0.05;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}