// Climate Data
// Sihwa Park (shpark@yorku.ca)
// 10/19/2023
// Updated on 01/31/2024

// Data source: NASA's Zonal Annual Means https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv

let table;

// Load the data
// https://p5js.org/reference/#/p5/preload
function preload() {
  // https://p5js.org/reference/#/p5/loadTable
  table = loadTable('ZonAnn.Ts+dSST.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 400);
  noLoop();
  
  // Column 0: Year, Column 2: NHem (Northern Hemisphere)
  // access a data point with row ID and column ID
  // https://p5js.org/reference/#/p5.Table
//   print(table.get(5, 0), table.get(5, 2));
//   // or with column titles
//   print(table.get(5, 'Year'), table.get(5, 'NHem'));
  
//   // You can also retrieve all values in the specified column as an array  
//   let colNHem = table.getColumn('NHem');
//   print(colNHem[5], min(colNHem), max(colNHem));
  
//   // You can sort the values in the array with sort()
//   colNHem.sort();
//   print(colNHem[5], colNHem[0], colNHem[colNHem.length - 1]);
  
//   // Median value
//   print(colNHem[floor(colNHem.length / 2)]);
}

function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 100);

  let colNHem = table.getColumn('NHem');

  let maxNum = max(colNHem);
  let minNum = min(colNHem);
  print(minNum, maxNum);
  
  if (maxNum > abs(minNum)) {
    minNum = - maxNum;
  }  else {
    maxNum = - minNum;
  }
  print(maxNum, minNum);

  noFill();
  beginShape();
  
  for (let i = 0; i < colNHem.length; i++) {
    let v = colNHem[i];
    let x = map(i, 0, colNHem.length, 0, width);
    let h = map(v, minNum, maxNum, 0, height -100);
    let y = height - h - 100;
    
    vertex(x, y);
    // curveVertex(x, y);
  }
  endShape();
}




