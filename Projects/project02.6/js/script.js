/**************************************************
This is project 2 part 6
Nico Brinotn

it is an organic circle that moves and changes size based on funstions like cos and sin
it also changes size and colour based off of your mouse position
**************************************************/




//this creates the canvas
function setup(){
  createCanvas(1000, 1000);
  background(255);
  noFill();
  stroke(0,10);
  frameRate(200);
  }


// this is where we map the colour and the size and where we actually create the circle itself
function draw(){

  let sx = map(mouseX, 0, width, 200, 800);
  let sr = map(mouseY, 0, width, 40, 60);
  let sg = map(mouseY, 0, height, 255, 0);
  let sb = map(mouseY, 0, height, 0, 255);



    var t = frameCount;
    		translate(width / 2, height / 2);
        rotate(t / 500);
        stroke(sr,sg,sb,10);
    		ellipse( 0, 0, sin(t / 300) * sx, cos(t / 300) * sx);

}
