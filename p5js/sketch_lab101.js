// Drawing with Functions
// Sihwa Park (shpark@yorku.ca)
// 01/10/2024

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(255);
  
  // Create and initialize variables
  let x = 40;
  let y = height / 2;
  let d = 70;
  
  // Create and initialize a variable for red component
  let r = 0;
  let g = 0;
  let b = 0;

  let t = 0;
  
  //*** With for loop ***
  for (let i = 0; i < 3; i++) {
    // See https://p5js.org/reference/#/p5/strokeWeight
    strokeWeight(4);
    // See https://p5js.org/reference/#/p5/stroke
    stroke(0);
    
    drawMyShape(x, y, d, d, r, g, b, t);
    
    // Comment two lines (fill() and ellipse) above and
    // Uncomment the code below to use a custom function
    // drawMyShape(x, y, d, r, 0, 0);
    x += (d * 2);
    r += 100;
    g += 50;
    b += 10;
    t += 2;
  }
}

// Define a custom function to draw a shape
function drawMyShape(posX, posY, dia, r, g, b, tk) { 
  strokeWeight(tk);
  stroke(0, 0, b);
  fill(r, g, b);
  ellipse(posX, posY, dia, dia);
}