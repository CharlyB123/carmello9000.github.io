var p2song;
var gif2;
var v1 = 100;
var v2 = 100;

function preload(){
  p2song = loadSound('phone2/HLB.mp3');
  gif2 = createImg('phone2/p2.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  p2song.loop();
  
}



function draw() {
  
  background("#B3C5CD");
  
  gif2.position(v1+mouseY,v2+mouseX);
  
}

  