
var drops =[]


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)

	for (var index = 0; index < 10; index = index + 1) {
		drops[index] = {
			x : 230,
			y : 220,
			dspeed : random(1, 5),
			dd : random(10, 30)
			
}
	}}

  
function draw() {
  background(0);
  noStroke();

	for (var index = 0; index < 10; index = index + 1) {
	var drop = drops[index]
	

  rect(0, 100, drop.x, 20);
  

  ellipse(drop.x, drop.y, drop.dd);
  

  drop.y = drop.y + drop.dspeed
  
 
  if (drop.y > height*random(1,3)) {
    // reset
    drop.y = 120;
  }
}
}
