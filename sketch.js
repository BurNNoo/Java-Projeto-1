function setup() {
  createCanvas(1200, 1200);
  background("gray");
}

function draw() {
  fill("gray");
  stroke("white");
  if (mouseIsPressed){
  circle(mouseX, mouseY,30);
}
}
