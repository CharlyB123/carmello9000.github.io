var pdsong;
var gif1;
var v1 = 100;
var v2 = 100;

function preload(){
  pdsong = loadSound('phone/phonedown.mp3');
  gif1 = createImg('phone/pdg.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pdsong.loop();
  
}



function draw() {
  
  background("#ED969E");
  
  gif1.position(v1+mouseY,v2+mouseX);
  
  textAlign(CENTER);
  textSize(40);
  fill('white');
  text("click on the phone 2 dwnld erykah badu's new single 'phone down' ", width/2, height/2);


}

  

