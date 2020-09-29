/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.

let angle = 0;

let bg = {
  r: 255,
  b: 255,
  g: 255,
}

let circle1 = {
  x: 1,
  y: 250,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}
let circle2 = {
  x: 499,
  y: 250,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}



function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);


}

// draw()
//
// Description of draw() goes here.
function draw() {

background(bg.r, bg.b, bg.g);
 //ellipse (circle1.x, circle1.y, circle1.size)

Bg ();

Spinrect();

Bubble1();

Bubble2();

}


function Bubble1  (){

circle1.rd = map(circle1.x, 0, 250, 0, 255)
circle1.bl = map(circle1.x, 0, 250, 255, 0)
circle1.size =  map(circle1.x, 0, 250, 100, 300);


   fill(circle1.rd, circle1.bl, circle1.gr)
   ellipse (circle1.x, height / 2, circle1.size);


if ((circle1.x >= width / 2) || (circle1.x <= 0)){
  circle1.speed = -circle1.speed;
}

  circle1.x = circle1.x + circle1.speed;

// if (circle1.x >= 100){
  //background(0);
//}

}

function Bubble2 (){


  circle2.rd = map(circle2.x, 250, 500, 255, 0)
  circle2.bl = map(circle2.x, 250, 500, 0, 255)

  circle2.size =  map(circle2.x, 250, 500, 300, 100);

   fill(circle2.rd, circle2.bl, circle2.gr);
   ellipse (circle2.x, height / 2, circle2.size);


if ((circle2.x <= 250) || (circle2.x >= 500)){
   circle2.speed = -circle2.speed;
}

  circle2.x = circle2.x - circle2.speed;
}

function Bg (){
  if (circle1.x >= 100){
   background(100, 30, 27, 70);
 }
}

function Spinrect () {

push();
rectMode(CENTER);
noStroke();
translate(width / 2, height / 2);
rotate(angle * -3);
fill(190, 0, 180, 70);
rect(0, 0, 50, 100);
pop();

angle = angle + 1
}
