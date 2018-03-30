function setup() {
  var size = 1400;
  createCanvas(size, size);
  stroke(255);
  noLoop();
  background(254, 235, 171);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2, height/2);
  rotate(45/2);
  branchComponent(100, 8, 60);
}

function branch(len, angle, gen) {
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= 0.7;
  angle = random(angle-30, angle+20);

  if (len > 2) {
    push();
    rotate(angle);
    branch(len, angle, gen);
    pop();

    push();
    rotate(-angle);
    branch(len, angle, gen);
    pop();
  }
}

function branchComponent(len, amount, angle) {
  var pink = [251, 149, 139];
  var pink1 = color(251, 149, 139);
  var pink2 = color(247, 165, 131);
  var pink3 = color(247, 186, 161);
  var pink4 = color(251, 159, 164);
  var pink5 = color(255, 158, 153);
  var pink6 = color(253, 203, 211);

  stroke.apply(null, pink);
  var increment = 360/amount;
  var rotAmount;

  for (var i = 0; i < amount; i++) {
    push();
    rotAmount = -180 + increment * i
    rotate(random(rotAmount - 60, rotAmount));
    branch(len, angle, 1);
    pop();
  }
}
