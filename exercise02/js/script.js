/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.

let rectLocation;

let txt =  'GAME OVER';

let txtinfo = {
  width:500,
  height:250,
}

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
  oppa: 30,
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

let cur = {
x: 0,
y: 0,

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
  User();
  Chase();
  Static();
  Collision2();
//  Clicked();
}

function mouseclicked (){
reset();
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
  stroke(dot.rd, dot.bl, dot.gr, dot.oppa);
  noFill();
  ellipse(dot.x, dot.y, dot.size);
  pop();
  let d = dist(player.x, player.y, rectLocation.x, rectLocation.y);
if (d < (img.width && img.height) + player.size) {
  dot.bl = 0;
  dot.gr = 0;
  dot.oppa = 90;
  dot.size = 40;
}
    else if (d < (img.width*2 && img.height*2) + player.size*2) {

      dot.bl = 0;
      dot.gr = 0;
      dot.oppa = 75;
      dot.size = 25;

    }
else {
  dot.bl = 255;
  dot.gr = 255;
  dot.oppa = 30;
  dot.size = 10;
}

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

 imageMode(CENTER);
  image(img, rectLocation.x, rectLocation.y, img.width, img.height);

}

function Collision2 () {
let d = dist(player.x, player.y, rectLocation.x, rectLocation.y);
if (d < (img.width/3 && img.height/3) + player.size/2) {
noLoop();
push();
background(0);
rectMode(CENTER);
textAlign(CENTER);
fill(255);
textSize(42);
text(txt, width/2, height/2, txtinfo.width, txtinfo.height);
cursor(CROSS);
pop();
    }
  }
