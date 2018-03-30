function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // x axis, y axis, width, height
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
