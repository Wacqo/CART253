/**************************************************
Project part 5
Nico Brinton

this is another art peice where it is a cricle not changing it position but it is actualluy changing its size based on functions
liek sin and cos that gives really beautiful affects
**************************************************/

// this is where the canvas gets set up
function setup(){
  createCanvas(1000, 1000);
  background(255);
  noFill();
  stroke(0,10);
  frameRate(1000);
  }


// this is where thte circlees get displayed
function draw(){

//these are the different circles that all get diplsyed at once
  var t = frameCount;
  		translate(width / 2, height / 2);
      rotate(t / 5);
      stroke(63,184,175,30);
  		ellipse(0, 0, sin(t / 300) * 200, cos(t / 300) * 500);
      stroke(255,61,127,30);
      ellipse(0, 0, sin(t / 320) * 400, cos(t / 320) * 500);
      stroke(255,158,157,10);
      ellipse(0, 0, sin(t / 340) * 600, cos(t / 340) * 600);
      stroke(127,199,175,30);
      ellipse(0, 0, sin(t / 500) * 800, cos(t / 500) * 800);




}
