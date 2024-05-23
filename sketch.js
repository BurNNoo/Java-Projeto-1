function setup() {
  createCanvas(800, 500);
  background("gray");
}

function draw() {
  fill("gray");
  stroke("white");
  if (mouseIsPressed)
  circle(mouseX, mouseY,30, 50);
