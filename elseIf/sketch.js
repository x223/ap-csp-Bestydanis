function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
background(0);
ellipse(200,200,80,80);
if (mouseX < windowWidth / 5) {
 fillColor ='pink' ;
}
else if (mouseX < 2 * windowWidth / 5) {
  fillColor='blue'  ;
  } 
}