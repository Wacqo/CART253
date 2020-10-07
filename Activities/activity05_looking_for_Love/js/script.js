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

let bg = {
r: 0,
b: 0,
g: 0,
}

let state = 'title';

let txt = "LOVE";
let txt2 = ":(";
let txt3 = "What Is Love?";

function setup() {
  createCanvas(500, 500);
  setUpCircles();
}


function draw() {
//background(bg.r, bg.b, bg.g);

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

function simulation () {
bg2();
display();
move();
offScreen();
circlesCollide();
}

function bg2() {
background(bg.r, bg.b, bg.g);
}



function display (){
  fill(255);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(255);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function move (){
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function setUpCircles() {
circle1.x = width/3;
circle1.y = 250;
circle1.vx = random(-circle1.speed, circle1.speed);
circle1.vy = random(-circle1.speed, circle1.speed);

circle2.x = 2 * width/3;
circle2.y = 250;
circle2.vx = random(-circle2.speed, circle2.speed);
circle2.vy = random(-circle2.speed, circle2.speed);
}

function circlesCollide () {
let d = dist (circle1.x, circle1.y, circle2.x, circle2.y);
if (d < circle1.size/2 + circle2.size/2) {
  state = 'love'
  setUpCircles();
}
}

function Change() {

}

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


function offScreen() {
if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle1.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height  ) {
state = 'sadness';
setUpCircles();

}
}

function sadness () {
  background(20, 60, 90);
  push();
  textSize(62);
  textAlign(CENTER, CENTER);
  text (txt2, width/2, height/2);
  pop();
}

function love (){
  background(20, 60, 90);
  push();
  textSize(62);
  textAlign(CENTER,CENTER);
  text (txt, width/2, height/2);
  pop();
}

function title() {
  background(200, 162, 200);
  push();
  textSize(62);
  textAlign(CENTER, CENTER);
  text (txt3, width/2, height/2);
  pop();
}
