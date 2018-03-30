function setup() {
  createCanvas(1400, 1200);
  stroke(255, 255, 255);
  background(254, 235, 171);
}

function draw() {
  var pink1 = color(251, 149, 139);
  var pink2 = color(247, 165, 131);
  var pink3 = color(247, 186, 161);
  var pink4 = color(251, 159, 164);
  var pink5 = color(255, 158, 153);

  var pink6 = color(253, 203, 211);
  // x axis, y axis, width, height
  if (mouseIsPressed) {
    fill(pink1);
  } else {
    fill(pink2);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
