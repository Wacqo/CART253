/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.

// this "angle" variable is to determine the movement  of the Spinrectobject
let angle = 0;

// this variable is the initial bg colour
let bg = {
  r: 53,
  b: 76,
  g: 94,
}

// this is the variable for the size for the Spinrect object
let spin = {
width: 50,
height: 100,
}

// this is the variable for all the information about the first Bubble1
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

// this is the variable for all the information about the first Bubble2
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
// this is the variable for all the information about the first Bubble3
let circle3 = {
  x: 1,
  y: 1,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

// this is the variable for all the information about the first Bubble4
let circle4 = {
  x: 1,
  y: 499,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

// this is the variable for all the information about the first Bubble5
let circle5 = {
  x: 499,
  y: 1,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

// this is the variable for all the information about the first Bubble6
let circle6 = {
  x: 499,
  y: 499,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

function setup() {
  createCanvas(500, 500);
  // this is used to set the degrees to degrees and is used later for when we soin the rectangle
  angleMode(DEGREES);



}

// draw()
//
// Description of draw() goes here.
function draw() {

// thios is where we set the initial bg
background(bg.r, bg.b, bg.g);
 //ellipse (circle1.x, circle1.y, circle1.size)

// this is calling the object for the change of backgrounds
Bg ();

Spinrect();

Bubble1();

Bubble2();

Bubble3();

Bubble4();

Bubble5();

Bubble6();

}


function Bubble1  (){

circle1.rd = map(circle1.x, 0, 250, 0, 255)
circle1.bl = map(circle1.x, 0, 250, 255, 0)
circle1.size =  map(circle1.x, 0, 250, 100, 300);

    push();
   noStroke();
   fill(circle1.rd, circle1.bl, circle1.gr, 80)
   ellipse (circle1.x, height / 2, circle1.size);
  pop();

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
  push();
  noStroke();
   fill(circle2.rd, circle2.bl, circle2.gr, 70);
   ellipse (circle2.x, height / 2, circle2.size);
   pop();

if ((circle2.x <= 250) || (circle2.x >= 500)){
   circle2.speed = -circle2.speed;
}

  circle2.x = circle2.x - circle2.speed;
}

function Bubble3 (){


  circle3.rd = map(circle3.x, 0, 250, 255, 0)
  circle3.bl = map(circle3.x, 0, 250, 0, 255)

  circle3.size =  map(circle3.x, 0, 250, 100, 300);
  push();
  noStroke();
   fill(circle3.rd, circle3.bl, circle3.gr, 70);
   ellipse (circle3.x, circle3.y, circle3.size);
   pop();

if ((circle3.x <= 0) || (circle3.x >= 250)){
 circle3.speed = -circle3.speed;
}

  circle3.x = circle3.x + circle3.speed;
  circle3.y = circle3.y + circle3.speed;
}
function Bubble4 (){


  circle4.rd = map(circle4.x, 0, 250, 255, 0)
  circle4.bl = map(circle4.x, 0, 250, 0, 255)

  circle4.size =  map(circle4.x, 0, 250, 100, 300);
  push();
  noStroke();
   fill(circle4.rd, circle4.bl, circle4.gr, 70);
   ellipse (circle4.x, circle4.y, circle4.size);
   pop();

if ((circle4.x <= 0) || (circle4.x >= 250)){
 circle4.speed = -circle4.speed;
}

  circle4.x = circle4.x + circle4.speed;
  circle4.y = circle4.y - circle4.speed;
}

function Bubble5 (){


  circle5.rd = map(circle5.x, 250, 500, 0, 255)
  circle5.bl = map(circle5.x, 250, 500, 255, 0)

  circle5.size =  map(circle5.x, 250, 500, 300, 100);
  push();
  noStroke();
   fill(circle5.rd, circle5.bl, circle5.gr, 70);
   ellipse (circle5.x, circle5.y, circle5.size);
   pop();

if ((circle5.x <= 250) || (circle5.x >= 500)){
 circle5.speed = -circle5.speed;
}

  circle5.x = circle5.x - circle5.speed;
  circle5.y = circle5.y + circle5.speed;
}

function Bubble6 (){


  circle6.rd = map(circle6.x, 250, 500, 0, 255)
  circle6.bl = map(circle6.x, 250, 500, 255, 0)

  circle6.size =  map(circle6.x, 250, 500, 300, 100);
  push();
  noStroke();
   fill(circle6.rd, circle6.bl, circle6.gr, 70);
   ellipse (circle6.x, circle6.y, circle6.size);
   pop();

if ((circle6.x <= 250) || (circle6.x >= 500)){
 circle6.speed = -circle6.speed;
}

  circle6.x = circle6.x - circle6.speed;
  circle6.y = circle6.y - circle6.speed;
}

function Bg (){
  if (circle1.x >= 100){
   background(71, 53, 94);
 }
}

function Spinrect () {

spin.width = map (mouseX, 0, 500, 0, 250);
spin.height = map (mouseX, 0, 500, 0, 500);

push();
rectMode(CENTER);
noStroke();
translate(width / 2, height / 2);
rotate(angle * -3);
fill(random(255), random(255), random(255), 70);
rect(0, 0, spin.width, spin.height);
pop();

angle = angle + 1
}
