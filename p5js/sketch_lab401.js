// Bar Chart Starter
// Sihwa Park (shpark@yorku.ca)
// 10/19/2023
// Updated on 01/31/2024

// JavaScript Array
// https://www.w3schools.com/js/js_arrays.asp
let numbers = [19, 30, 62, 89, 52];

function setup() {
  createCanvas(400, 400);

  noLoop();
}

function draw() {
  // HSB colour mode
  // https://p5js.org/reference/#/p5/colorMode
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 100);
  noStroke();
  
  // Loop through all the numbers and create a bar for each number
  // Array methods: https://www.w3schools.com/js/js_array_methods.asp
  let h = max(numbers);
  let w = width / numbers.length;
  
  for (var i = 0; i < numbers.length; i++) {
    let v = numbers[i];
    fill(map(v, 0, h, 0 ,360), 100, 100);

    rect(i * w, height - map(v,0,h,0,height), w, map(v,0,h,0,height));
  }
}