var x=30, y=60

function setup() {
  createCanvas(400, 400);
  frameRate(30)
}

function draw() {
  background(100)
  rect(350, 20, 40, 80);
  stroke(20,150,0)
  strokeWeight(5)
  fill(250, 0, 0)
  ellipse(x,y,50,50);  
  if ( keyIsDown(RIGHT_ARROW)) 
  {
  	x = x + 2;
 }
   if ( keyIsDown(LEFT_ARROW)) 
  {
  	x = x - 2;
 }
   if ( keyIsDown(DOWN_ARROW)) 
  {
  	y = y + 2;
 }
   if ( keyIsDown(UP_ARROW)) 
  {
  	y = y - 2;
 }
}
  
