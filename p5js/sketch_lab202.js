// Drawing A Grid of Squares
//
// Sihwa Park (shpark@yorku.ca)
// 09/15/2023


let tileSize = 90; // grid tile size

function setup() {
  createCanvas(800, 1080);
  
  // https://p5js.org/reference/#/p5/smooth
  // Draws all geometry with smooth (anti-aliased) edges
  smooth();
  
  noLoop();
}

function draw() {
  background(253);
  noFill();

  stroke(0);
  strokeWeight(2);

  let padding = tileSize / 2;
  let i = 0;
  for (let y = padding; y < height - padding; y += tileSize) {
    for (let x = padding; x < width - padding; x += tileSize) {
      push(); 
      let d = random(-i, i);
      translate(x + tileSize / 2 + d, y + tileSize / 2 + d);
      rotate(radians(d));
      // With rectMoe(CORNER) which is default
      // See https://p5js.org/reference/#/p5/rectMode
      rect(-tileSize / 2,-tileSize / 2, tileSize, tileSize);
      pop();
    }
    i += 5;
  }
}
