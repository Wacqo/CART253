/**************************************************
Template p5 project
Nico Brinton

This is part 2 to the final project
/**************************************************/



// this is where the canvas is set up and we define the frameratte
function setup() {
createCanvas(1000, 1000);
background(255,255,255);
noFill();
stroke(0, 100);
frameRate(1000);

}

// in the draw we have the object which is the arttwork, and we creatte a variable for the framecount
 function draw() {
var t = frameCount;


middleCircle();
  }


//this is the function for the whole art peice where we createt multiple ellipses and manipulate them in many different ways in order to create
//many cool effects
//we manipulate them a lott by usign the function sin and cos
  function middleCircle (){
    var t = frameCount;
    push();
    translate (width/2, height/2);
    //stroke(0, 100);
    stroke (255,61,127);
    ellipse(sin(t / 20) * (t / 10), cos(t / 20) * (t / 10), t / (t), t / (t));
    stroke (255,158,157);
    ellipse(sin(t / 30) * (t / 10), cos(t / 30) * (t / 10), t / (t), t / (t));
    stroke (218,216,167);
    ellipse(sin(t / 40) * (t / 10), cos(t / 40) * (t / 10), t / (t), t / (t));
    stroke (127,199,175);
    ellipse(sin(t / 50) * (t / 10), cos(t / 50) * (t / 10), t / (t), t / (t));
    stroke (63,184,175);
    ellipse(sin(t / 60) * (t / 10), cos(t / 60) * (t / 10), t / (t), t / (t));
    stroke (255,61,127);
    ellipse(sin(t / 70) * (t / 10), cos(t / 70) * (t / 10), t / (t), t / (t));
    stroke (255,158,157);
    ellipse(sin(t / 80) * (t / 10), cos(t / 80) * (t / 10), t / (t), t / (t));
    pop();
    push();


    if (t === 1000){
stroke(200, 20, 20);
    }

  }

// this isntt in the project but all it is is a smaller version of the other function just tabove.
  function secondCircle(){
    push();
    translate (width/3, height/2);
    stroke(200,200,0, 100);
    ellipse(sin(t / -20) * (t / -10), cos(t / -20) * (t / -10), t / (t), t / (t));
    ellipse(sin(t / -30) * (t / -10), cos(t / -30) * (t / -10), t / (t), t / (t));

    pop();
  }
