/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.

let rectLocation;

let covid = {
  x: 0,
  y: 250,
  size: 50,
  speed: 2,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 0,
}

let player = {
  x: 0,
  y: 0,
  size: 50,
  rd: 255,
  bl: 255,
  gr: 255,
}

let dot = {
  x: 0,
  y: 0,
  size: 10,
  rd: 255,
  bl: 255,
  gr: 255,
  oppa: 50,
  amount: 1000,
}

let img = {
height: 318,
width: 500,
};
let img2 = {
  height:50,
  width: 100,
}

function preload() {
  img = loadImage ('assets/images/shark03.png');
  img2 = loadImage ('assets/images/dory.png');

}

function setup() {
  createCanvas(1000, 500);
  rectLocation = createVector(width/2, height/2);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  Corona();
  User();
  Chase();
  Static();
  Collision2();
}


function Corona  (){
//fill(covid.rd, covid.bl, covid.gr, 90);
image(img, covid.x, covid.y);

if (covid.x >= 1000) {
covid.x = 0,
covid.y = random(height);
}

covid.x = covid.x + covid.speed;

}
function User () {

 player.x = mouseX;
 player.y = mouseY;

  noCursor();
  noStroke();
  fill(player.rd, player.bl, player.gr);
  image(img2, player.x, player.y, img2.width, img2.height);
}

function Static (){

for (let i = 0; i < dot.amount; i++) {
  dot.x = random(0,1000);
  dot.y = random(0, 500);
  push();
  stroke(255, 30);
  noFill();
  ellipse(dot.x, dot.y, dot.size);
  pop();
}
}

function Chase() {

  let target = createVector(mouseX, mouseY);

  let distance = target.dist(rectLocation);

  let mappedDistance = map(distance, 100, 0, 1.5, 0.5);

  target.sub(rectLocation);
  target.normalize();
  target.mult(mappedDistance);
  rectLocation.add(target)

 //ellipse(rectLocation.x, rectLocation.y, covid.size);
 imageMode(CENTER);
  image(img, rectLocation.x, rectLocation.y, img.width, img.height);

}

function Collision2 () {
let d = dist(player.x, player.y, rectLocation.x, rectLocation.y);
if (d < (img.width/3 && img.height/3) + player.size/2) {
noLoop();
}
}
