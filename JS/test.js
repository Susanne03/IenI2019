function setup() {
  canvas = createCanvas(500,500);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('steelblue');
 
  for (var n = 0;n <= 4;n++){
    ellipse (50,225,100);
    translate(100,0); 
  }
}

