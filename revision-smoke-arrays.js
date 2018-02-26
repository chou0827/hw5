var x = [];
var y = [];
var speedx = [];
var speedy = [];
var r = 0;
var rs = [];




function setup() {
  createCanvas(400, 400);

 for (var i = 0; i < 100; i = i + 1) {
  x[i] = 200;
  y[i] = 0;
  r[i] = 0;
  speedx[i] = random(0.2);
  speedy[i] = random(0.5,3);
  rs[i] = random(15,30);
 }
}

function draw() {
  background(0);
  noStroke();
  
  fill(255);
  rect(195, height, 30, -100);

  
  for (var i = 0; i < 100; i = i + 1) {
  push();
  fill(y[i]);
  translate(x[i],y[i]);
  rotate(r);
  rect(-10, -10, rs[i], rs[i]);
  pop();
 x[i] += speedx[i];
 y[i] -= speedy[i];
  
  r += 0.05
  
  if (y[i] < -150) {
    y[i] = 290;
  }
}
}
