function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
 colorMode(RGB,255,255,255,1);  
}

function draw() {
  noStroke();
    fill(0,0,255,0.3);
  //fill('red');
  rect(0,150,450,150);
  //fill(0,255,0);
  rect(0,0,150,450);
  // fill(0,0,255);  
  rect(75,0,375,450);

    noStroke();
    ellipse(450,225,450);

    noStroke();
    triangle(225,0,450,225,225,450);
}