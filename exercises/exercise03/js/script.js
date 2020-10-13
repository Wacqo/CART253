/**************************************************
Exercise number 3
Nico Brinton

this is the modifications to the A5. in this i added a different ending and add different ways
to end the gamee
**************************************************/
// the following 2 variables are for both circles
// is used to help allow them to follow there targeets
let rectLocation;
let rectLocation2;

// this is the variable for the easterEgg object, which is a square
let endPoint = {
  x: 1,
  y: 499,
  size: 30,
}

// this holds all the componentts to the bigger circle
let circle1 = {
x: 0,
y: 250,
size:75,
vx:0,
vy:0,
speed:3,
}

// this is the variable that holds all the information to smaller circle
let circle2 = {
x: 0,
y: 250,
size:50,
vx:0,
vy:0,
speed:3,
}

// this is the variable for the background colours
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
let txt4 = 'Congradualtions you escaped \n from a life of being trapped'

// what happens in set up that the circles are getting placed in there
//starting positions
function setup() {
  createCanvas(500, 500);
  setUpCircles();
}

// in draw, all the functions that either display and move the circlesCollide
// or the title screen, love screen, the sad screen and the eastere egg scenee
function draw() {



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
else if (state === 'easterEgg'){
  easterEgg();
}

}

//this is the function that has all the other functions involved,
// it calls all the functions for the collision, out of bounds, and the movement
function simulation () {
bg2();
eggPoint();
lostLove();
circlesCollide();
circle1Follow();
circle2Follow();
}

// this is just the background for when the balls are moving and you are ein play
function bg2() {
background(bg.r, bg.b, bg.g);
}

// thsi is the set up function, this is what places the circles in there initial position
// and creates the variablee for movement of the circle
function setUpCircles() {
circle1.x = width/3;
circle1.y = 250;

circle2.x = 2 * width/3;
circle2.y = 250;

rectLocation = createVector(0, 0);
rectLocation2 = createVector(width/2, height/2);
}

// this is the function that allows for the collision to happen,
// and when the collision happens to change the screen
function circlesCollide () {
let d = dist (rectLocation.x, rectLocation.y, rectLocation2.x, rectLocation2.y);
if (d < circle1.size/2 + circle2.size/2) {
  state = 'love'
  setUpCircles();
}

// this is the collison for the smaller circle and the easter egg point
let d2 = dist (rectLocation.x, rectLocation.y, endPoint.x, endPoint.y);
if (d2 < circle2.size/2 + endPoint.size/2) {
  state = 'easterEgg'
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
else if (state === 'easterEgg'){
  state = 'title';
}
}

// this function allows the program when your clock reachees 10 seeconds
// allows you to get a random eending each time you play
// and when hit the 10 second it will display a the sad screen
function lostLove() {
  let s = second();
if (s === 10) {
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

// this is the function that allows the circle to follow my cursor
// to give the simulation a different feel
function circle2Follow() {

// i added a constrain on the circle so it wont escape ethe ccanvas
  let xc = constrain(mouseX, 0, width);
  let yc = constrain(mouseY, 0, width);

//this is what createes thee target for the circle, which is my mouse
  let target = createVector(xc, yc);

  let distance = target.dist(rectLocation);

  let mappedDistance = map(distance, 100, 0, 2, 1);

  target.sub(rectLocation);
  target.normalize();
  target.mult(mappedDistance);
  rectLocation.add(target)

// this is what draws the circle
fill(255);
ellipse(rectLocation.x, rectLocation.y, circle2.size);

}

// this is the function that allows the circle to follow my cursor
// to give the simulation a different feel
function circle1Follow() {

// this is what gives the secound circle the target to track,
// which is the position of the other circle
  let target = createVector(rectLocation.x, rectLocation.y);

  let distance = target.dist(rectLocation);

  let mappedDistance = map(distance, 100, 0, 2.5, 1.5);

  target.sub(rectLocation2);
  target.normalize();
  target.mult(mappedDistance);
  rectLocation2.add(target)

// this is what draws the circle
fill(255);
ellipse(rectLocation2.x, rectLocation2.y, circle1.size);

}

// this is function that hold all the information for the easterEgg screens
// the text, size, and the position
function easterEgg() {
      background(20, 150, 30);
      push();
      textSize(35);
      textAlign(CENTER, CENTER);
      text (txt4, width/2, height/2);
      pop();
}

//this is the function that draws and creates th easteregg
function eggPoint (){
//stroke(255);
fill(0);
ellipse(endPoint.x, endPoint.y, endPoint.size);
}
