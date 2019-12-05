function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  stroke('black');
  fill('steelblue');
  ellipse(225,225,300);
  rect(125,125,200,200);
}