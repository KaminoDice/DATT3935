// Drawing with Functions
// Sihwa Park (shpark@yorku.ca)
// 01/10/2024

function setup() {
    createCanvas(400, 400);
  }
  
  function draw(){
    background(255);
    
    // Create and initialize variables
    let x = 80;
    let y = height / 2;
    let d = 60;
    
    // Create and initialize a variable for red component
    let r = 240;
    let g = 180;
    let b = 60;
    //*** With for loop ***
    for (let i = 0; i < 3; i++) {
      // See https://p5js.org/reference/#/p5/strokeWeight
      strokeWeight(4);
      // See https://p5js.org/reference/#/p5/stroke
      stroke(0);
      
      //fill(r, 0, 0);
      //ellipse(x, y, d, d);
      drawMyShape(x, y, d, r, g, b);
      // Comment two lines (fill() and ellipse) above and
      // Uncomment the code below to use a custom function
      // drawMyShape(x, y, d, r, 0, 0);
      x += (d * 2);
      r -= 20 * (3-i);
      g -= 30 * (-1)**i * i;
      b += 50 * (i+1);
    }
  }
  
  // Define a custom function to draw a shape
  function drawMyShape(posX, posY, dia, r, g, b) { 
    fill(r, g, b);
    ellipse(posX, posY - 30, dia/3, dia/3);
    ellipse(posX, posY + 30, dia/3, dia/3);
    line(posX - dia, posY - dia, posX + dia, posY + dia);
    line(posX - dia, posY + dia, posX + dia, posY - dia);
  }