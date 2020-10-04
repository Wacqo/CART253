/**************************************************
Exercise number 2
Nico Brinton

this is my modifications and my take on the dogin covid exercise, i changed the characters around and
added effects when you get to close to the "enemy"
**************************************************/


// this variable allows you to use physics and will help allow
// the shark to follow you
let rectLocation;

// this is the variable that allows for the "game over text to be displayed"
let txt =  'GAME OVER';

//this is the variable for the valuse of the text obj
let txtinfo = {
  width:500,
  height:250,
}

//this is the variable for the information of the "covid", but in my case is a shark
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

//this is the variable that has all the information for the users input
// which in this case is a fish trying to run away from the shark
let player = {
  x: 0,
  y: 0,
  size: 50,
  rd: 255,
  bl: 255,
  gr: 255,
}

//this is the variable for the background affect, that gives the strobe effect
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

//this is the variable for the picture of the shark, which is "covid"
let img = {
height: 318,
width: 500,
};
//this is the variable for the picture of the fish, which is the user
let img2 = {
  height:50,
  width: 100,
}

// This is the function that loads in the pictures, before the simulation actually starts to run
function preload() {
  img = loadImage ('assets/images/shark03.png');
  img2 = loadImage ('assets/images/dory.png');

}

// this is where the canvas gets created
// this is also where the vector gets defind
function setup() {
  createCanvas(1000, 500);
  rectLocation = createVector(width/2, height/2);
}


// this is where we draw all of the functions that we created
function draw() {
  background(0);
// the player
  User();
  //this is the shark, "enemy"
  Chase();
  // this is the bg, that has all the mini circles
  Static();

  //this is what allows all the system to know when the player hits the enemy
  // and what allows the game over screen to pop up
  Collision2();

}

// this is the function fo rthe player, in this case this is all the
// information for the person who controls the fish
function User () {

// this tell the system we are using the mouse position to track the fishes location
 player.x = mouseX;
 player.y = mouseY;

// this is where we define the player itself
// so there is no cursor, no stroke and sets the image to the fish
  noCursor();
  noStroke();
  image(img2, player.x, player.y, img2.width, img2.height);
}

// this is the function for the static in the bg
function Static (){

// this is the loop that creates all the circles you see in the bg
for (let i = 0; i < dot.amount; i++) {
  //this is what allows the system to give the circles random locations
  dot.x = random(0,1000);
  dot.y = random(0, 500);

  // this is what gives the circles there properties
  // gives the initial colour white, with no fill, and an oppacity of 30
  push();
  stroke(dot.rd, dot.bl, dot.gr, dot.oppa);
  noFill();
  ellipse(dot.x, dot.y, dot.size);
  pop();

  // this is created to give the distance which allows the system to know how
  // far apart the player and shark are away from each other.
  let d = dist(player.x, player.y, rectLocation.x, rectLocation.y);
if (d < (img.width && img.height) + player.size) {
  // each time it gets closer the colour and size both changes
  // no it becomes the biggest it gets and red
  dot.bl = 0;
  dot.gr = 0;
  dot.oppa = 90;
  dot.size = 40;
}
    else if (d < (img.width*2 && img.height*2) + player.size*2) {
      // here its a litttle bit further away so its still red, but more transparent
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


// this is the variable for the enemy, in this case the shark
function Chase() {
// the next coupe of lines of code all define the physics involved in order
// to allow the "shark" to follow the fish
  let target = createVector(mouseX, mouseY);

  let distance = target.dist(rectLocation);

  let mappedDistance = map(distance, 100, 0, 1.5, 0.5);

  target.sub(rectLocation);
  target.normalize();
  target.mult(mappedDistance);
  rectLocation.add(target)

// this is what allows the picture to be displayed as a "shark"
 imageMode(CENTER);
  image(img, rectLocation.x, rectLocation.y, img.width, img.height);

}
// this is the code that allows the background to be displayed and what allows the "game over"
// screen to be displayed
function Collision2 () {
// this is what is used to tell the system when the shark colides with the fishes
// that the "game overe screen will be displayed"
let d = dist(player.x, player.y, rectLocation.x, rectLocation.y);
if (d < (img.width/3 && img.height/3) + player.size/2) {

// this is all the code that allows the "game over text to be displayed"
noLoop();
push();
//when collides sets bg to black
background(0);
//this centers the square in the canvas
rectMode(CENTER);
// this centers the text in the square
textAlign(CENTER);
//colour of text, white
fill(255);
//font size 42
textSize(42);
// the text "game over"
text(txt, width/2, height/2, txtinfo.width, txtinfo.height);
// this changes cursor into a cross
cursor(CROSS);
pop();
    }
  }
