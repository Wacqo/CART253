/**************************************************
Exercise number 2
Nico Brinton

this is my modifications and my take on the dogin covid exercise, i changed the characters around and
added effects when you get to close to the "enemy"
**************************************************/

let circle1 = {
x: 0,
y: 250,
size:100,
vx:0,
vy:0,
speed:3,
}

let circle2 = {
x: 0,
y: 250,
size:100,
vx:0,
vy:0,
speed:3,
}

function setup() {
  createCanvas(500, 500);

  Move1 ();
  Move2 ();
}


function draw() {
background(0);

Love1 ();
Love2 ();
}

function Love1() {

  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
  fill(255);
  ellipse(circle1.x, circle1.y, circle1.size);
}
function Love2() {
  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
  fill(255);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function Move1() {
circle1.x = width/3;
circle1.vx = random(-circle1.speed, circle1.speed);
circle1.vy = random(-circle1.speed, circle1.speed);
}
function Move2 () {
circle2.x = 2 * width/3;
circle2.vx = random(-circle2.speed, circle2.speed);
circle2.vy = random(-circle2.speed, circle2.speed);
}
