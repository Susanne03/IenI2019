function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('wheat');
  rect(0,400,450,100);
  strokeWeight(4);

  stroke('darkgrey');
  fill('lightgray');
  rect(100,330,100,100);

  fill('gray');
  triangle(100,330,200,330,150,250);
  
  
  noStroke();
  rect(115,380,30,50);

  fill('khaki');
  ellipse(350,100,150);
  
  
  fill('sienna');
  rect(300,300,40,130);
  fill('olive');
  ellipse(320,270,75,125);
}