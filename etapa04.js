var x=30, y=60, img;
var disparo = false; 
var xd, yd; 
var xj, yj;
function preload() {
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedJ2R6f7dJ4-ocbIHWvhRJICLyCuhKp9tMWnlqHP6Ld9WWCXu-A');
}
function setup() {
  createCanvas(400, 400);
  frameRate(30);
 
  xj = 50;
  xd = xj; 
  
  yj = 20; 
  yd = yj; 
}

function draw() {
  background(50)
  rect(xj, yj, 80, 10);
  	if (keyIsDown(CONTROL) && (! disparo) ){ 
    	disparo = true; 
    	xd = xj;
    	yd = yj;     
  	}
  	 if (disparo) {
        yd = yd +5;
       if (yd > width) {
         disparo = false; 
    	}
  	 }
  	if (disparo) {
      ellipse(xd,yd,8,8);  
  	}
  stroke(20,150,0)
  strokeWeight(50)
  fill(250, 0, 0)
  image(img, 20+y, 170, 150);
  imageMode(CORNER);
  
  if ( keyIsDown(RIGHT_ARROW)) 
  {
  	x = x + 3;
 }
   if ( keyIsDown(LEFT_ARROW)) 
  {
  	x = x - 3;
 }
   if ( keyIsDown(DOWN_ARROW)) 
  {
  	y = y + 3;
 }
   if ( keyIsDown(UP_ARROW)) 
  {
  	y = y - 3;
 }
  if ( x > width ) {
    x = random(-50,-50); // gera um valor aleatório entre -500 e -50 (min e max)
  }
}
