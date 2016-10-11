var xpos =50;
var ypos =50;
var xdir =5;
var ydir =5;

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background(220);
	ellipse(xpos, ypos, 70,70);
	ellipse(700,700,xpos,ypos);
	xpos= xpos + xdir;
	if (xpos >= windowWidth || xpos <= 25);
	xpos = xpos + xdir;
	xdir = xdir * -1;
}