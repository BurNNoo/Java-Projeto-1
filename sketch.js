function setup() {
  createCanvas(1200, 800);
  background("gray");
}

function draw() {
  fill("gray");
  stroke("white");
  if (mouseIsPressed){
  circle(mouseX, mouseY,30);
}
}
