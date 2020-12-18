/**************************************************
Project part #3
Nico Brinton

This project is a revampt version of a project i was working on awhile ago
it is a worm that slowly moves across the screen using perlin noise to give a cool affect
**************************************************/
let slider;

let bubbles = [];

var worms = [];

//function preload(){
 //song = loadSound("summer.mp3");

//}


// this is where we create the cancas and also call all the bubblesyou see in teh background
//and create the worm
function setup() {
  createCanvas(2000, 1200);
  background(0);

  for (let i = 0; i < 1000; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10,40);

  bubbles[i] = new Bubble(x,y,r);
 }

  for (i=0; i<1; i++){

  worms[i] = new Worm();

  }
}

// in draw is where we tell all the bubbles we created to move, and they move only by perlin noise
 function draw() {


    for (let i = 0; i < bubbles.length; i++){

     bubbles[i].move();
     bubbles[i].show();


  }



  for (i = 0; i < worms.length; i++){

// where the all the functions related to the worm get called in the draw function
  worms[i].colour();
  worms[i].display();
  worms[i].restart();

  }




}



// this is the function for the worm
 function Worm() {

//create all the worm variables
  this.zoff = 0;
  this.xpos=  0;
  this.ypos = height;
  this.red = 255;
  this.g = 255;
  this.b = 255;


// this function is for the colour of the worm
  this.colour = function() {

    this.red = map(this.xpos, 0, width, 0, 255);
    this.g = map(this.ypos, 0, width, 255, 0);
  // this.b = map(this.ypos, 0, width, 255, 0);
  }

// this is the function that displays all the things related in the worms
// such as creating the worm itself, it is created by using ,ultiple points and connecting them
// with some perlin noise involved
  this.display =  function() {
    let noiseMax = slider.value();

    let yy = map(noise(this.ypos), 0, 1, 0, height);
    this.ypos += 0.005;
    translate(this.xpos, yy);
    stroke(this.red, this.g, this.b, 200);
    noFill();
    beginShape();

    for (let a = 0; a < TWO_PI; a += 0.1) {

      let xoff = map(cos(a), -1, 1, 0, noiseMax);
      let yoff = map(sin(a), -1, 1, 0, noiseMax);
     //  let xSize = map(mouseX,0,width,0,100);
    // let ySize = map(mouseY,0,height,0,300);
      let xSize = 100
      let ySize = 300
      let r = map(noise(xoff, yoff, this.zoff), 0, 1, xSize, ySize);
      let x = r * cos(a);
      let y = r * sin(a);

      vertex(x, y);
    }

    endShape(CLOSE);


    //this.xpos += random(1,1.1);
    //this.zoff += random(0.01,0.015);

    this.xpos +=1.5
    this.zoff += 0.01;

  }



// this funciton allows you to click the screen and it will restartt tthe page
   this.restart = function(){
    if (mouseIsPressed) {
    background(0);
    this.xpos = 0;
    this.ypos = random(height);

   }


   }
 }


// this is the class for the bubbles, where all teh things related to the bubbles are called
class Bubble {

 constructor(x, y, r) {
   this.x = x;
   this.y = y;
   this.r = r;
 }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show (){
    stroke(255,2);
    //strokeWeight(4);
    noFill();
    ellipse(this.x,this.y,this.r*2);
  }
}
