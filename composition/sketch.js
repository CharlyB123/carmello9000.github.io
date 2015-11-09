var img1;
var img2;
var song;
var system;

function preload() {  // preload() runs once
  img1 = loadImage('AG.jpg');
  img2 = loadImage('BS.jpg');
  song = loadSound('HLB.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
}


var myPos = 0;
var collo = 0;
var circlePos = 20;

  
function draw() {

  background("#E5BCE5");
  
  if ( song.isPlaying() ) {
  image(img1, 50, 150);
  textAlign(CENTER);
  textSize(60);
  text(":)", width/2, height/2);
  } else {
  image(img2, 30, 550);
}
  
  
  
  noFill();
  x1 = mouseX+420, x2 = mouseX+200, x3 = mouseX+90, x4 = mouseX+70;
  y1 = mouseY+circlePos, y2 = mouseY+20, y3 = mouseY+90, y4 = mouseY+40;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(collo);
  
 
  
  noFill();
  x1 = mouseX+420, x2 = mouseX+200, x3 = mouseX+90, x4 = mouseX+70;
  y1 = mouseY+circlePos, y2 = mouseY+20, y3 = mouseY+90, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(collo);
  var steps = 1;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 5, 5);
  }
 
  
  noFill();
  x1 = mouseX+440, x2 = mouseX+200, x3 = mouseX+90, x4 = mouseX+70;
  y1 = mouseY+circlePos+10, y2 = mouseY+20, y3 = mouseY+90, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(collo);
  var steps = 1;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 5, 5);
  }

  noFill();
  x1 = mouseX+460, x2 = mouseX+200, x3 = mouseX+90, x4 = mouseX+70;
  y1 = mouseY+circlePos+20, y2 = mouseY+20, y3 = mouseY+90, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(collo);
  var steps = 1;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 5, 5);
  }
  
  noFill();
  x1 = mouseX+480, x2 = mouseX+200, x3 = mouseX+90, x4 = mouseX+70;
  y1 = mouseY+circlePos+30, y2 = mouseY+20, y3 = mouseY+90, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(collo);
  var steps = 1;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 5, 5);
  }

  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+90, x4 = mouseX+70;
  y1 = mouseY+circlePos+45, y2 = mouseY+20, y3 = mouseY+90, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(collo);
  var steps = 10;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 5, 5);
  }
  
  
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+610, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+110, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
 
	
	noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+650, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+150, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
 
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+690, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+190, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
 
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+730, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+230, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+770, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+270, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+790, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+290, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+800, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+300, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
 
 
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+810, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+310, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+820, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+320, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+830, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+330, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+835, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+335, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+840, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+340, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
 
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+845, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+345, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  noFill();
  x1 = mouseX+525, x2 = mouseX+200, x3 = mouseX+845, x4 = mouseX+70;
  y1 = mouseY+60, y2 = mouseY+20, y3 = mouseY+345, y4 = mouseY+110;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  arc(mouseX+50, mouseY+55, 50, 50, 0, HALF_PI);
  noFill();
  arc(mouseX+50, mouseY+55, 60, 120, HALF_PI, PI);
  arc(mouseX+50, mouseY+55, 70, 700, PI, PI+QUARTER_PI);
  arc(mouseX+50, mouseY+55, 150, 80, PI+QUARTER_PI, TWO_PI);
  
  //auge
  fill(collo);
  ellipse(mouseX+60,mouseY+50, 10, 10)
  
  
  //Augenbraue
  fill("#ED889E");
  beginShape();
  vertex(mouseX+50, mouseY+20);
  vertex(mouseX+75, mouseY+20);
  vertex(mouseX+75, mouseY+55);
  endShape();
  
  
  //mund
  fill("#F5D51D")
  beginShape();
  vertex(mouseX+20, mouseY+23);
  vertex(mouseX+45, mouseY+20);
  vertex(mouseX+20, mouseY+50);
  endShape(CLOSE);

  
}

  
function mousePressed() {
if ( song.isPlaying() ) {
  song.pause();
} else {
  song.play();
  textAlign(CENTER);
  textSize(60);
  text("click pls :)", width/2, height/2);
}
}


function mouseMoved() {
  collo = collo + 5;
  if (collo > 255){
    collo = 0;
  }
}

var goingdown = true;

function mouseMoved() {
  
  if (goingdown == true)  {
    circlePos++;
  
  } else {
    circlePos--;
  }
  
  if (circlePos == 70) {
    goingdown = false;
  }
  
    if (circlePos == -10) {
    goingdown = true;
  }

  
}

  