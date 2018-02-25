var x = 210;
var y = 290;
var r = 0;
var smoke = [];

function setup() {
  createCanvas(400, 400);

for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd and yd properties:
    smoke[index] = {
    a: random(5,20),
		sms: random(0.5, 3)
		}}
}
  
function draw() {
  background(0);
  noStroke();

	for (var index = 0; index < 100; index = index + 1) {

    var s = smoke[index];
			
			
  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  push();
  fill(y);
	translate(x, y);
  rotate(r);
  rect(-10, -10, s.a, s.a);
  pop();
  
  // up 3 pixels
  y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
}
}
