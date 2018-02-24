var circle1 = [];



function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd and yd properties:
    circle1[index] = {
      x: width / 2,
      y: height / 2,
			dia:10,
      xd: random(-10, 5),
      yd: random(-2, 2),
      c: color(random(0,120), 60, 100)
    }
  }
}

function draw() {
  background(0);
  noStroke();
}

function draw() {
  for (var index = 0; index < 50; index = index + 1) {

    var circle = circle1[index];

    fill(circle.c);
    ellipse(circle.x, circle.y, circle.dia);

    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    if (circle.x > width || circle.x < 0) {
      circle.xd = -circle.xd;
    }
    if (circle.y > height || circle.y < 0) {
      circle.yd = -circle.yd;
    }
		
		 if (random() < 0.01) {
    // random diameter between 10 and 400
    circle.dia = random(10, 100);
  }
		
  }
}
