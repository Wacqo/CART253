/**************************************************
Project part 4
Nico Brintton

it is where 3 circles all flipping around based on the functions controlling them that are sin and cos
allowing them to move in an organic whay to create a beautiful art peice
**************************************************/


// this is where we create the canvas
function setup(){
  createCanvas(1000, 1000);
  background(255);
  noFill();
  stroke(0,10);
  frameRate(500);
  }


function draw(){

// this is where we create all the circles and that allows them to move around in circles
  var t = frameCount;
  		translate(width / 2, height / 2);
      stroke(63,184,175,30);
  		ellipse(sin(t / 60) * (t / 5), cos(t / 60) * t / 5, sin(t / 40) * 100, 100);
      stroke(255,158,157,30);
      ellipse(sin(t / 50) * (t / 5), cos(t / 50) * t / 5, sin(t / 20) * 100, 100);
      stroke(255,61,127,20);
      ellipse(sin(t / 70) * (t / 5), cos(t / 70) * t / 5, sin(t / 50) * 100, 100);

}
