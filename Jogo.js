var x=90, y=240, img, i;
var disparo = false; 
var xd, yd; 
var xj, yj;
function preload() {
  img = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABAlBMVEX8/vwAAAD///+0trS0tLT3+fdaXGAAAAy2uLYAAAe0srTv8fSmqKhLTFDIAAAxMDMvLTjm6OYNDBKIiIhjYWNkZWQNEBnPAADtYQD58/H9lQSFhoV+gH5/fn/lTwT1cQScmp3SDgz01NLWQkE5OjpWVFZtb21zcXPlXgR8foT3392cm53mhgRCQkc3NzoAABGuq67xdwT/mwTxyMbmfXvjVVPljIzaMzflqanaaGraLy3mdXPZVVTruLbvqKjhW13qXiXoXTiNNAB+Swk7MDY1CxT/jARjHABDKgtpQwrdgwSZXQcwAAD7gQSvSAJvi4ucvsJgcnY3Rk7a///W2NgoJiovO44sAAAD5klEQVR4nO3ZbXebNhgGYEsII2PAcQSxi03rpsHMplD3xd1btrRd121du7Qr/v9/ZY+Em5Oc5eviHXRfPjnxgS/KnUfSI+j1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9rjrDl3XPfQwDmqssiLLVmN+6IEcDm8qRnaNvRlwPg51BqOGc0tTGCql+mE/z2P6Ymcp8DGVQClJuWPMsTWDwclCOo5cjNixtDeDUji+9RmgDvRcEMjAt74OSqvrgOu90aM1kepgxwbSxjZJBCV1R4GugzLJc7UJmkMP6a4NQzYSwUYI6pFEEARHHtvYVgiUQS2FFKquVlL4zhFjG9vO0LoOpHBkxlghHWkyOPSY7pqpA0f4OgMqA9/SOqhFmWXJ5eXnLFPC2jpIGPv7y5dLxiprMxBXGYTCsrlguiFTB8XRrv/p0+fdLtnXgS2N0nDcjHm7Lzh6X/BoX3B0BoFL98bDQ4/vDvCSsXrI2/5AtBmIdl/ocY8xCw4OnJfHLDQZUH8gxKKfKOGItj/gJzqDrs+HYdOo3XHVNE14UlF/4JhemX5XJ08WTTM6ZkHTdPt1g1uGdFBaJmEeqlI/Q6Jjo/lxSrWgk1OcLPthuOp2BivGzuZqzmgFFNKnufA1BaqHmFpGpULG+t3OIDMZFOapuu8IfWwUekmkj+wzFs8syMDUwSyrqirQ/3wh1VGd+aYU5LyqMhsy0HWQzbIkSQJpZkB7btRTQqg4sSIDUwfZPImTwCwFVz0SfVVxbF0GwrnqkQxbMvg6F/Z1IMqYeX39YNX3fZ3B3IIM2jXR1IHeFzZFxby6CPTOIGf21EFF/YHJgJYAk8FZob/bMxdWbDBaFss8z/X//qoOzB4xz/NlUZzZkAGdDdmA+kR9TNAZsHoZ0Hqg+8SBvuV1PwOvxZIik86miOfzpKAMiqKoB/tbnc9g8GRgMP0MZaODUMvAnJ2Zud79DKgd+OP9Y/L+d8qAGgNf6PVQv1/w/tTXH//S+QwWb399M32Xph+nv9Whmu0/JH/74a+PafruwZsPlep0Bj1++mgSPUjTb6LJ2mXXyNOHk/tp+jSaTLr+HIkyiNoMotPxjQyeP4zup8+eTqLJvUMP8j92PQM3uGZsMkhty4DfYF0Gz0wGN248n9gyF3rrF9uL6XT6evtofeM6P73Yvp5OX223F53PQL9O+zaKvvvX4k/XX0bR951/u9DiP+gMbrn+gjLofhEY/Mfz859uy+Dn8/OXlmTQW6/Xt/6p9+jGXY8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+h/4BATxjcWTR+MEAAAAASUVORK5CYII=');
	i= loadImage('data:image/jpeg;base64,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')
}
function setup() {
  createCanvas(400, 400);
  frameRate(30);
 
  xj = 90;
  xd = xj; 
  
  yj = 240; 
  yd = yj; 
}

function draw() {
  background(50)
  rect(50, 50, 80, 10);
  Math.random(i)
  stroke(0,0,400)
  strokeWeight(10)
  fill(250, 0, 0)
  image(img, xj, yj ,170, 150);
  
  imageMode(CORNER);
  
  if ( keyIsDown(RIGHT_ARROW)) 
  {
  	xj = x + 5;
 }
   if ( keyIsDown(LEFT_ARROW)) 
  {
  	xj = x - 5;
 }
   if ( keyIsDown(DOWN_ARROW)) 
  {
  	yj = y + 5;
 }
   if ( keyIsDown(UP_ARROW)) 
  {
  	yj = y - 5;
 }
  if ( x > width ) {
    x = random(-50,-50); // gera um valor aleatório entre -500 e -50 (min e max)
  }
  if (keyIsDown(CONTROL) && (! disparo) ){ 
    	disparo = true; 
    	xd = xj;
    	yd = yj;     
  	}
  	 if (disparo) {
        yd = yd -5;
       if (yd > width) {
         disparo = false; 
    	}
  	 }
  	if (disparo) {
      ellipse(xd+95,yd+20,10,10);  
  	}
}