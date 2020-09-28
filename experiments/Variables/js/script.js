/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.

var circle1 = {
  x: 0,
  y: 250,
  height: 100,
}

function setup() {
createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(250, 0, 250);

push();
 fill(250);
 ellipse(circle1.x, circle1.y, circle1.height);
//circle1.x = circle1.x + 1
if (circle1.x < 250){
circle1.x = circle1.x + 1
}
if (circle1.x >= 250) {
  circle1.x = circle1.x - 1
}

pop();
rectMode(CENTER);
  rect(250, 250, 50);

}
