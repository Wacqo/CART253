/**************************************************
Exercise number 2
Nico Brinton

this is my modifications and my take on the dogin covid exercise, i changed the characters around and
added effects when you get to close to the "enemy"
**************************************************/
// This is the varaible for the first love circle
let circle1 = {
x: 0,
y: 250,
size:100,
vx:0,
vy:0,
speed:3,
}

// this is teh variable for the secound love circle
let circle2 = {
x: 0,
y: 250,
size:100,
vx:0,
vy:0,
speed:3,
}

// this is the variable for the colours
let bg = {
r: 0,
b: 0,
g: 0,
}

// this is the variable that allows me to change the state,
let state = 'title';

//these are the variable that hold what is being written
let txt = "LOVE";
let txt2 = ":(";
let txt3 = "What Is Love?";

// what happens in set up that the circles are getting placed in there
//starting positions
function setup() {
  createCanvas(500, 500);
  setUpCircles();
}

// in draw, all the functions that either display and move the circlesCollide
// or the title screen, love screen and the ad screen
function draw() {
//background(bg.r, bg.b, bg.g);


// this is what tells teh computer what the current state is
if (state === 'title') {
title();
}
else if (state === 'simulation'){
simulation();
}
else if (state === 'love') {
love();
}
else if (state === 'sadness'){
  sadness();
}
}

//this is the function that has all the other functions involved,
// it calls all the functions for the collision, out of bounds, and the movement
function simulation () {
bg2();
display();
move();
offScreen();
circlesCollide();
}

// this is just the background for when the balls are moving
function bg2() {
background(bg.r, bg.b, bg.g);
}


// this is the function that hives the circles a location
function display (){
  fill(255);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(255);
  ellipse(circle2.x, circle2.y, circle2.size);
}

// this is the function that makes the balls move, by adding speed to there x, y positions
function move (){
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

// thsi is the set up function, this is what places the circles in there initial position
function setUpCircles() {
circle1.x = width/3;
circle1.y = 250;

// this is what allows for the circles to have adifferent speed each time because
// each time it restart the velocity will be set to a random number, which is show in the
// two lines of code below
circle1.vx = random(-circle1.speed, circle1.speed);
circle1.vy = random(-circle1.speed, circle1.speed);

circle2.x = 2 * width/3;
circle2.y = 250;
// this is what allows for the circles to have adifferent speed each time because
// each time it restart the velocity will be set to a random number, which is show in the
// two lines of code below
circle2.vx = random(-circle2.speed, circle2.speed);
circle2.vy = random(-circle2.speed, circle2.speed);
}

// this is the function that allows for the collision to happen,
// and when the collision happens to change the screen
function circlesCollide () {
let d = dist (circle1.x, circle1.y, circle2.x, circle2.y);
if (d < circle1.size/2 + circle2.size/2) {
  state = 'love'
  setUpCircles();
}
}

// this function allows you to switch between the screens, so if they touch you can just
// click the screeen and it will take you back to the title screen and the same for the sad screens
// and allows you to go from the title screen to the simulation screen
function mousePressed () {
if (state === 'title'){
  state = 'simulation';
}
else if (state === 'sadness'){
 state = 'title';
}
else if (state === 'love'){
  state = 'title';
}
}

// this function allows the program to know when the corles have gone off the screens
// and when they do it will display a the sad screen
function offScreen() {
if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle1.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height  ) {
state = 'sadness';
setUpCircles();

}
}

// this is function that hold all the information for the sad screens
// the text, size, and the position
function sadness () {
  background(20, 60, 90);
  push();
  textSize(62);
  textAlign(CENTER, CENTER);
  text (txt2, width/2, height/2);
  pop();
}

// this is function that hold all the information for the love screens
// the text, size, and the position
function love (){
  background(20, 60, 90);
  push();
  textSize(62);
  textAlign(CENTER,CENTER);
  text (txt, width/2, height/2);
  pop();
}

// this is function that hold all the information for the title screens
// the text, size, and the position
function title() {
  background(200, 162, 200);
  push();
  textSize(62);
  textAlign(CENTER, CENTER);
  text (txt3, width/2, height/2);
  pop();
}
