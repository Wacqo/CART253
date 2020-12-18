/**************************************************
the 4th part of this project
NIco Brinton

is is circles that turn in crircles to create bigger circles using fuctions like sin and cos
that also incorperate perlin noise
**************************************************/
// this is what allows for teh perlin noise
let xoff = 0.0;
let xoff2 = 0.0;

//where the canvas gets set up
function setup(){
  createCanvas(1000, 1000);
  background(255);
  noFill();
  stroke(0,10);
  frameRate(1000);
  }


//this is where all the ellipses are called and its all working together
function draw(){

// allows for the program to know how much the perlin noise should move
xoff = xoff + 1;
xoff2 = xoff2 + 0.5;

let n = noise(xoff);
let n2 = noise(xoff2);

  var t = frameCount;
  //where all the ellipses are called
  		translate(width / 2, height / 2);
      stroke(255,61,127,30);
  		ellipse(sin(t / 100) * 100, cos(t / 100) * 100, 50 * n, 50 *n);
      stroke(255,158,157,30);
  		ellipse(sin(t / 100) * 200, cos(t / 100) * 200, 50, 50);
      stroke(127,199,175,30);
  		ellipse(sin(t / 100) * 300, cos(t / 100) * 300, 75 * n2, 75 * n2);
      stroke(63,184,175,30);
  		ellipse(sin(t / 100) * 400, cos(t / 100) * 400, 50, 50);
}
