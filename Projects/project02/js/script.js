/**************************************************
Template p5 project
Nico Brinton

A 3d cube made in webgl that also moves based on your mouse position and changes speed if you click on it.
**************************************************/
let angle = 0;
let w = 22;
let ma;
let maxD;
let h2 = 0;


//where we tell the program we will be using webgl
function setup() {
  createCanvas(700, 700, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 400, 400);
}

//where we tell the computer we will be using a certain lighting and call all the functions to create the webgl
function draw() {
  background(255);
  ortho(-400, 400, -400, 400, 0, 1000);
 ambientLight(0,255,255,200);

  rotateX(-QUARTER_PI);
  rotateY(ma);

movement();
//coulourChange();

  angle += 0.05;

// if the mouse is pressed then the speed of the movement will increase
  if (mouseIsPressed){
    angle += 0.2;
    fill(random(255),random(255),random(255));

  }

}

//this is where we will actuallly create the movement of the cube, and all the cube to animate move
// it is also where you can customize all the atributes to the cube and make it personal
function movement(){
 for (let z = 0; z < height; z += w) {
   for (let x = 0; x < width; x += w) {
     push();
     noFill();
     let d2 = map(mouseX, 0, width, 5, 1);
     let d3 = map(mouseY, 0, height, 5, 1);
     let d = dist(x, z, width / d2, height / d3);
     let offset = map(d, 0, maxD, -PI, PI);
     let a = angle + offset;
     let h = floor(map(sin(a), -1, 1, h2, 400));
     //fill(random(255),random(255),random(255));
     //normalMaterial(255);
     translate(x - width / 2, 0, z - height / 2);
     box(w - 4, h, w - 4);
     //rect(x - width / 2 + w / 2, 0, w - 2, h);
     pop();


   }

 }
}
