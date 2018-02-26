var drops = [];



var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

var pressedA = false;
var pressedS = false;
var pressedD = false;
var pressedF = false;

var freq = [250,280,310,340];

function setup() {
	createCanvas (400,400);
	background (0);
  textAlign(CENTER);
  colorMode(HSB)
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freq[0]);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freq[1]);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freq[2]);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freq[3]);
  oscF.amp(0);
  oscF.start();
  
  for (var index = 0; index < 200; index = index + 1) {
		drops[index] = {
			x : 230,
			y : 120,
      dspeed : random(1, 5),
			ddia : random(10, 30),
			cA : color (60, random(360), random(360)),
      cS : color (90, random(360), random(360)),
      cD : color (180, random(360), random(360)),
      cF : color (270, random(360), random(360))
    }
  }
}
    
function draw() {
	background(0);
  fill(255);
	text('Click', width / 2, 380);
  for (var index = 0; index < 10; index = index + 1) {
	var drop = drops[index]

  fill(360)
	rect(0, 100, drop.x, 20);

  if (playingA) {
		fill(drop.cA);
  ellipse(drop.x, drop.y, drop.ddia);
  } else if (playingS) {
		fill(drop.cS);
  ellipse(drop.x, drop.y, drop.ddia);
  } else if (playingD) {
   fill(drop.cD);
  ellipse(drop.x, drop.y, drop.ddia);
  } else if (playingF) {
		fill(drop.cF);
  ellipse(drop.x, drop.y, drop.ddia);
}
  drop.y = drop.y + drop.dspeed

  if (drop.y > height*random(1,3)) {
    // reset
    drop.y = 120;
  }
  } 
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = true;
    pressedA = true;
  } else if (key == 'S') {
    osc = oscS;
		playingS = true; 
    pressedS = true;
  } else if (key == 'D') {
    osc = oscD;
		playingD = true; 
    pressedD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
    pressedF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
 } else if (key == 'S') {
    osc = oscS;
 } else if (key == 'D') {
    osc = oscD; 
   } else if (key == 'F') {
    osc = oscF;
 }if (osc) {
    osc.amp(0, 0.5);
    playingA = false;
    playingS = false;
   	playingD = false; 
    playingF = false;
    pressedA = false;
    pressedS = false;
    pressedD = false;
    pressedF = false;
}}
