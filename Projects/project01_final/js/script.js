
/**************************************************
Space Flight
Nico Brinton

 A three level game where you need to travel through an astroids and reach the planets safely
**************************************************/

// these are the variables for the movement of teh last level of asteroids
let rectLocation;
let rectLocation2;

// variable for the background
let bg = {
  r:0,
  g:0,
  b:0,
}

// these are the variables for the asteroidOffScreen
// contains all there information
let asteroid01 = {
  x: 250,
  y: 1,
  size: 100,
  speed: 5,
}

let asteroid02 = {
  x: 500,
  y: 200,
  size: 100,
  speed: 5,
}

let asteroid03 = {
  x: 750,
  y: 400,
  size: 100,
  speed: 4,
}

let asteroid04 = {
  x: 300,
  y: 300,
  size: 100,
  speed: 5,
}

let asteroid05 = {
  x: 300,
  y: 700,
  size: 100,
  speed: 6,
  speed2: -6,
}

let asteroid06 = {
  x: 500,
  y: 800,
  size: 100,
  speed: 7,
}

let asteroid07 = {
  x: 500,
  y: 300,
  size: 100,
  speed: 3,
}

let asteroid08 = {
  x: 999,
  y: 1,
  size: 100,
  speed: 3,
  speed2: -3,
}

let asteroid09 = {
  x: 500,
  y: 0,
  size: 100,
  speed: 3,
}

// these are the variables for the ships that move
let ship1 = {
  x: 50,
  y: 500,
  speed: 3,
}

let ship2 = {
  x: 50,
  y: 500,
  size: 50,
  speed: 3,
}
let ship3 = {
  x: 50,
  y: 500,
  size: 50,
  speed: 3,
}

// this is the variable for the planet neptune
let neptune = {
  x: 950,
  y: 500,
  size: 75,
}

// this is the variable for the planet mars
let mars = {
  x: 950,
  y: 500,
  size: 75,
}

// this is the variable for the planet earth
let earth = {
  x: 950,
  y: 500,
  size: 75,
}

// variable that allows me to set a hit box that allows the ships to collide with thte asteroids
let img =  {
  width: 100,
  height: 100,
}
let img2 =  {
  width: 300,
  height: 300,
}

// this is where we load the two images
// the ship and the asteroid
function preload(){
  img = loadImage ('assets/images/alienship.png');
  img2 = loadImage ('assets/images/asteroid.png');
}

// this is where we set the default state
// it is set for the title screen
let state = 'title';

// these are all the code for the texts
let txt = 'YOU LOSE';
let txt2 = 'You Discoverd Neptune'
let txt3 = 'Space flight'
let txt4 = 'You discoverd Mars'
let txt5 = 'You discoverd Earth'
let txt6 = 'Move with The Arrow Keys'
let txt7 = ' Click to continue'
let txt8 = ' Click to Restart'
let txt9 = ' You Win'
let txt10 = ' Click to Menu'


// all that happens in set up is that it creates the canvas and creates a vector for the following asteroids
function setup() {
createCanvas(1000, 1000);
rectLocation = createVector(width/2, height/2);
rectLocation2 = createVector(width/2, height/2);
}


// in draw it just shows the states and what functions are matched with there own states
// so the computer knows what each state is equal to which function
function draw() {
//background(0);
// the main screen
if (state === 'title') {
  title();
}
// the first level simulation
else if (state === 'simulation'){
  simulation();
}
// the loose screen
else if (state === 'lose'){
  lose();
}
// the screen that appears when
else if (state === 'neptuneWin') {
  neptuneWin();
}

// this is the simulation that runs teh secound level
else if (state === 'simulation2') {
  simulation2();
}

//this is screen that pops up when you reach the next level
else if (state === 'marsWin') {
  marsWin();
}

// this is the simulation that displays the third level
else if (state === 'simulation3'){
simulation3();
}

// this is the state that shows up when you reaxch the final level
else if (state === 'earthWin'){
  earthWin();
}
}

// this is the function that changes the states when you press on the mouse
// allows you to switch between the states
function mousePressed(){
  if (state === 'title') {
    state = 'simulation'
  }

else if (state === 'lose'){
    state = 'title';
  }
else if (state === 'neptuneWin'){
   state = 'simulation2'
 }
 else if (state === 'marsWin'){
   state = 'simulation3'
 }
 else if (state === 'earthWin') {
   state = 'title'
 }
}



// this is all the information to display all of the simulation for the first level
function simulation() {
bgcolour();
asteroid();
asteroid2();
asteroid3();
ship();
Neptune();
}

// this is the function for the background colour
function bgcolour() {
  background(bg.r, bg.g, bg.b);
}

// this is all the information for the first asteroid
function asteroid() {
  showAsteroid();
  moveAsteroid();
  asteroidOffScreen();
}

// this is where the ship gets set at its local position
function setUpShip(){
  ship1.x = 50;
  ship1.y = 500;
}


// this is what displys asteroid
function showAsteroid() {
  fill(255);
  image(img2, asteroid01.x, asteroid01.y, img2.width, img2.height);
}
// this is what allows the asteroid to move
function moveAsteroid() {
  asteroid01.y = asteroid01.y + asteroid01.speed;
}

// this is where it checks if the asteroid is touching the barrier
function asteroidOffScreen() {
  if (asteroid01.y >= 1000){
    asteroid01.speed = -8;
  }
  if (asteroid01.y <= 0){
    asteroid01.speed = 6;
  }
}
// this is all the information for the secound asteroid
function asteroid2() {
  showAsteroid2();
  moveAsteroid2();
  asteroidOffScreen2();
}
// this is what displayes the first asteroid
function showAsteroid2() {
  fill(255);
  image(img2, asteroid02.x, asteroid02.y, img2.width, img2.height);
}
// this is what allows the asteroid to move
function moveAsteroid2() {
  asteroid02.y = asteroid02.y + asteroid02.speed;
}

// this is where it checks if the asteroid is touching the barrier
// the off screen
function asteroidOffScreen2() {
  if (asteroid02.y >= 1000){
    asteroid02.speed = -6;
  }
  if (asteroid02.y <= 0){
    asteroid02.speed = 5;
  }
}
// this is all the information for the third asteroid
function asteroid3() {
  showAsteroid3();
  moveAsteroid3();
  asteroidOffScreen3();
}

// this is what allows the asteroid to be displayed
function showAsteroid3() {
  fill(255);
  image(img2, asteroid03.x, asteroid03.y, img2.width, img2.height);
}
// this is what allows the asteroid to move
function moveAsteroid3() {
  asteroid03.y = asteroid03.y + asteroid03.speed;
}

// this is where it checks if the asteroid is touching the barrier
// the off screen
function asteroidOffScreen3() {
  if (asteroid03.y >= 1000){
    asteroid03.speed = -4;
  }
  if (asteroid03.y <= 0){
    asteroid03.speed = 7;
  }
}

// this is all the information for the ship
function ship() {
  showShip();
  shipMove();
  shipCollision();
}

// this is the function that displays the first ship
function showShip() {
  imageMode(CENTER);
  image(img, ship1.x, ship1.y, img.width, img.height);
}

// this is what allows the first ship to move using the arrow  keys
function shipMove() {
  if (keyIsDown(UP_ARROW)){
    ship1.y = ship1.y - ship1.speed;
  }
  if (keyIsDown(DOWN_ARROW)){
    ship1.y = ship1.y + ship1.speed;
  }
  if (keyIsDown(LEFT_ARROW)){
    ship1.x = ship1.x - ship1.speed;
  }
  if (keyIsDown(RIGHT_ARROW)){
    ship1.x = ship1.x + ship1.speed;
  }
}

// this is where the the collision is set between the ship and the asterroid
// when there is contact it resets the ships position and displays the loose screen
function shipCollision() {
  let d = dist(ship1.x, ship1.y, asteroid01.x, asteroid01.y);
  if (d < (img.width/3 && img.height/3)  + (img2.width/3 && img2.height/3)) {
    state = 'lose';
    setUpShip();
    //simulation();
      //background(0, 255, 200);
  }
  let d2 = dist(ship1.x, ship1.y, asteroid02.x, asteroid02.y);
  if (d2 < (img.width/3 && img.height/3) + (img2.width/3 && img2.height/3)) {
    state = 'lose';
    setUpShip();
      //background(0, 255, 200);
  }
  let d3 = dist(ship1.x, ship1.y, asteroid03.x, asteroid03.y);
  if (d3 < (img.width/3 && img.height/3) + (img2.width/3 && img2.height/3)) {
    state = 'lose';
    setUpShip();
      //background(0, 255, 200);
  }
}

// this is the function for the neptune planet
function Neptune (){
showNeptune();
neptuneCollide();
}

// this is where neptune gets displayed
function showNeptune() {
  fill (0, 190, 50);
  ellipse(neptune.x, neptune.y, neptune.size);
}

// this is where tthere is a collision is set between the ship and the neptune planet
function neptuneCollide(){
  let d = dist(ship1.x, ship1.y, neptune.x, neptune.y);
  if (d < (img.width/3 && img.height/3) + neptune.size/2) {
    state = 'neptuneWin';
    setUpShip();
      //background(0, 255, 200);
  }
}

// this is all the information for the loose screen
function lose (){
    background(20, 60, 90);
    push();
    textSize(62);
    textAlign(CENTER, CENTER);
    text (txt, width/2, height/3);
    pop();
    push();
    textSize(62);
    textAlign(CENTER, CENTER);
    text (txt8, width/2, height/2);
    pop();
}

// this is all the information for the neptune touch screen
// it shows text saying you found neptune and tells you to continue the game
function neptuneWin (){
    background(20, 60, 90);
    push();
    textSize(62);
    textAlign(CENTER, CENTER);
    text (txt2, width/2, height/3);
    pop();
    push();
    textSize(62);
    textAlign(CENTER, CENTER);
    text (txt7, width/2, height/2);
    pop();
}

// this is all the information for the tittle scren
function title (){
    background(20, 190, 90);
    push();
    fill(0);
    textSize(62);
    textAlign(CENTER, CENTER);
    text (txt3, width/2, height/4);
    pop();
    push();
    fill(0);
    textSize(62);
    textAlign(CENTER, CENTER);
    text (txt6, width/2, height/3);
    pop();
    pop();
    push();
    fill(0);
    textSize(62);
    textAlign(CENTER, CENTER);
    text (txt7, width/2, height/2);
    pop();

}

// this is function that contains all the other functions that displays the secound level
function simulation2() {
  bgcolour();
  asteroid4();
  asteroid5();
  asteroid6();
  ship02();
  Mars();
}

// this is where the ship gets set up at a starting position
function setUpShip02() {
ship2.x = 50;
ship2.y = 500;
}
// this is all the information for the secound ship, same as the first ship
function ship02() {
  showShip02();
  shipMove02();
  shipCollision02();
}

// this is where the 2nd ship is being displayed as an image
function showShip02() {
  fill(40, 50, 30);
  image(img, ship2.x, ship2.y, img.width, img.height);
}
// this is where the movement is implemented for the secound ship
//agiann using the arrow keys
function shipMove02() {
  if (keyIsDown(UP_ARROW)){
    ship2.y = ship2.y - ship2.speed;
  }
  if (keyIsDown(DOWN_ARROW)){
    ship2.y = ship2.y + ship2.speed;
  }
  if (keyIsDown(LEFT_ARROW)){
    ship2.x = ship2.x - ship2.speed;
  }
  if (keyIsDown(RIGHT_ARROW)){
    ship2.x = ship2.x + ship2.speed;
  }
}

// this is where the collision is set for the secound level between the
// space ship and the asteroids
function shipCollision02() {
  let d4 = dist(ship2.x, ship2.y, asteroid04.x, asteroid04.y);
  if (d4 < (img.width/3 && img.height/3) + (img2.width/3 && img2.height/3)) {
    state = 'lose';
    setUpShip02();
    //simulation();
      //background(0, 255, 200);
  }
  let d5 = dist(ship2.x, ship2.y, asteroid05.x, asteroid05.y);
  if (d5 < (img.width/3 && img.height/3) + (img2.width/3 && img2.height/3)) {
    state = 'lose';
    setUpShip02();
      //background(0, 255, 200);
  }
  let d6 = dist(ship2.x, ship2.y, asteroid06.x, asteroid06.y);
  if (d6 < (img.width/3 && img.height/3) + (img2.width/3 && img2.height/3)) {
    state = 'lose';
    setUpShip02();
      //background(0, 255, 200);
  }
}

// this is all the information for the 4th asteroid
function asteroid4() {
  showAsteroid4();
  moveAsteroid4();
  asteroidOffScreen4();
}

// this is where the 4th asteroid is being dispayed
function showAsteroid4() {
  fill(255);
  image(img2, asteroid04.x, asteroid04.y, img2.width, img2.height);
}
// this is what allows the asteroid to move
function moveAsteroid4() {
  asteroid04.y = asteroid04.y + asteroid04.speed;
  asteroid04.x = asteroid04.x + asteroid04.speed;
}
// checks for when the asteroid is off the screen
function asteroidOffScreen4() {
  if (asteroid04.y >= 1000){
    asteroid04.speed = -6;
  }
  if (asteroid04.y <= 0){
    asteroid04.speed = 7;
  }
}

// this is all the information for the 5th asteroid
function asteroid5() {
  showAsteroid5();
  moveAsteroid5();
  asteroidOffScreen5();
}

// this is where the 5th asteroid is being dispayed
function showAsteroid5() {
  fill(255);
  image(img2, asteroid05.x, asteroid05.y, img2.width, img2.height);
}
// this is what allows the asteroid to move
function moveAsteroid5() {
  asteroid05.y = asteroid05.y + asteroid05.speed;
  asteroid05.x = asteroid05.x + asteroid05.speed2;
}

// checks for when the asteroid is off the screen
function asteroidOffScreen5() {
  if (asteroid05.y >= 1000){
    asteroid05.speed = -8;
    asteroid05.speed2 = 8;
  }
  if (asteroid05.y <= 0){
    asteroid05.speed = 6;
    asteroid05.speed2 = -6;
  }
}

// this is all the information for the 6th asteroid
function asteroid6() {
  showAsteroid6();
  moveAsteroid6();
  asteroidOffScreen6();
}
// this is where the 6th asteroid is being dispayed
function showAsteroid6() {
  fill(255);
  image(img2, asteroid06.x, asteroid06.y, img2.width, img2.height);
}
// this is what allows the asteroid to move
function moveAsteroid6() {
  asteroid06.y = asteroid06.y + asteroid06.speed;
}

// checks for when the asteroid is off the screen
function asteroidOffScreen6() {
  if (asteroid06.y >= 1000){
    asteroid06.speed = -9;
  }
  if (asteroid06.y <= 0){
    asteroid06.speed = 7;
  }
}

// this is all the functions put into one that allows fo rrmars to be dis[layed]
  function Mars() {
    showMars();
    marsCollide();
  }
  // this is where mars os displayed
  function showMars() {
    fill (200, 0, 50);
    ellipse(mars.x, mars.y, mars.size);
  }

// this is the collision between the ship and marrs
function marsCollide(){
  let d7 = dist(ship2.x, ship2.y, mars.x, mars.y);
  if (d7 < (img.width/3 && img.height/3) + mars.size/2) {
    state = 'marsWin';
    setUpShip02();
      //background(0, 255, 200);
  }
}
// this all the txt and information for the mars screen, telling you to continue
// brings you to the next simulation
  function marsWin (){
      background(20, 60, 90);
      push();
      textSize(62);
      textAlign(CENTER, CENTER);
      text (txt4, width/2, height/3);
      pop();
      push();
      textSize(62);
      textAlign(CENTER, CENTER);
      text (txt7, width/2, height/2);
      pop();
  }

  // this is the simulation for the third level
  function simulation3() {
    bgcolour();
    asteroid7();
    asteroid8();
    //asteroid9();
    ship03();
    Earth();
  }

  // this is where the location of the ship and for the asteroid is called
  function setUpShip03() {
  ship3.x = 50;
  ship3.y = 500;

  rectLocation.x = 500;
  rectLocation.y = 500;

  rectLocation2.x = 300;
  rectLocation2.y = 300;
  }

  // this is all the functions put togethter for the third ship
  function ship03() {
    showShip03();
    shipMove03();
    shipCollision03();
  }

// this is where the third ship is being displayed
  function showShip03() {
    fill(40,200, 30);
    image(img, ship3.x, ship3.y, img.width, img.height);
  }

  // this is what allows the space ship to movement
  // again iusing the arrow keys
  function shipMove03() {
    if (keyIsDown(UP_ARROW)){
      ship3.y = ship3.y - ship3.speed;
    }
    if (keyIsDown(DOWN_ARROW)){
      ship3.y = ship3.y + ship3.speed;
    }
    if (keyIsDown(LEFT_ARROW)){
      ship3.x = ship3.x - ship3.speed;
    }
    if (keyIsDown(RIGHT_ARROW)){
      ship3.x = ship3.x + ship3.speed;
    }
  }

  // this is where the collision is set for the secound level between the
  // space ship and the asteroids
  function shipCollision03() {
    let d7 = dist(ship3.x, ship3.y, rectLocation2.x, rectLocation2.y);
    if (d7 < (img.width/3 && img.height/3) + (img2.width/3 && img2.height/3)) {
      state = 'lose';
      setUpShip03();
      //simulation();
        //background(0, 255, 200);
    }
    let d8 = dist(ship3.x, ship3.y, rectLocation.x, rectLocation.y);
    if (d8 < (img.width/3 && img.height/3) + (img2.width/3 && img2.height/3)) {
      state = 'lose';
      asteroid8.x = 500;
      asteroid8.y = 500;
      setUpShip03();
        //background(0, 255, 200);
    }
  }
// this is the function for the 7th asteroid
  function asteroid7() {
    moveAsteroid7();
  }


  // this is what allows the asteroid to move, and allows for the asteroid to follow
  //the player
  function moveAsteroid7() {
    let target = createVector(ship3.x, ship3.y);

    let distance = target.dist(rectLocation2);

    let mappedDistance = map(distance, 100, 0, 1.0, 0.5);

    target.sub(rectLocation2);
    target.normalize();
    target.mult(mappedDistance);
    rectLocation2.add(target)

    //ellipse(rectLocation.x, rectLocation.y, covid.size);
     fill(255);
     image(img2, rectLocation2.x, rectLocation2.y, img2.width, img2.height);

  }
// this is the function for the 7th asteroid
  function asteroid8() {
    moveAsteroid8();
  }


  // this is what allows the spaceship to move and follow the spaceship around the map
  function moveAsteroid8() {
    let target = createVector(ship3.x, ship3.y);

    let distance = target.dist(rectLocation);

    let mappedDistance = map(distance, 100, 0, 1.5, 0.5);

    target.sub(rectLocation);
    target.normalize();
    target.mult(mappedDistance);
    rectLocation.add(target)

    //ellipse(rectLocation.x, rectLocation.y, covid.size);
     fill(255);
    image(img2, rectLocation.x, rectLocation.y, img2.width, img2.height);

  }

  // this is all the information for the earht
    function Earth() {
      showEarth();
      earthCollide();
    }
// this is where the earth is being displayed
    function showEarth() {
      fill (200, 0, 50);
      ellipse(earth.x, earth.y, earth.size);
    }

// this is where the collision is being set up between the spaceship and the planet earth
  function earthCollide(){
    let d10 = dist(ship3.x, ship3.y, earth.x, earth.y);
    if (d10 < (img.width/3 && img.height/3) + earth.size/2) {
      state = 'earthWin';
      setUpShip03();
        //background(0, 255, 200);
    }
  }

  // this is all the information, such as text for the earth win screen
    function earthWin (){
        background(20, 60, 90);
        push();
        fill(0);
        textSize(62);
        textAlign(CENTER, CENTER);
        text (txt5, width/2, height/4);
        pop();
        push();
        fill(0);
        textSize(62);
        textAlign(CENTER, CENTER);
        text (txt9, width/2, height/3);
        pop();
        push();
        fill(0);
        textSize(62);
        textAlign(CENTER, CENTER);
        text (txt10, width/2, height/2);
        pop();
    }
