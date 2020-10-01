/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.


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


function setup() {
  createCanvas(1000, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  Corona();
  User();
  Collision();
  Static();
}


function Corona  (){
fill(covid.rd, covid.bl, covid.gr, 90);
ellipse(covid.x, covid.y, covid.size);

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
  ellipse(player.x, player.y, player.size);
}

function Collision () {
let d = dist(player.x, player.y, covid.x, covid.y);
if (d < covid.size/2 + player.size/2) {
noLoop();
}
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
