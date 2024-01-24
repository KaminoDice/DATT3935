function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(0);
    
    let x0 = 0;
    let x1 = 360;
    let y0 = 0;
    let y1 = 310;
        
    fill(220,40,30);
    rect(x0,y0,x1,y1);
    
    fill(230,230,230);
    rect(x1+10,y0,800 - x1 - 10,y1);
    
    rect(x0, y1 + 15, x1, 170);
    rect(x1 + 10, y1 + 15, 800 - x1 -10, 170);
    
    rect(x0+85,y1+190+15, 275, 265);
    rect(x1 + 10, y1 + 190 + 15 + 220, 235, 800 - y1 -15 - 190 -220 -20);
    rect(x1 + 10 +235 +15, y1+190+15, 800 -x1-10-235-15, 265)
    
    fill(240,200,70);
    rect(x0, y1+190+15, x0 + 75, 265);
    
    fill(25,25,100);
    rect(x1 + 10,y1+190+15, 235, 210);
  
  }