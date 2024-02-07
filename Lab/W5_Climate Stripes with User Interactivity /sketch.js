// Climate Stripes
// Sihwa Park (shpark@yorku.ca)
// 02/06/2024

// data source: NASA's Zonal Annual Means https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv

let table;
let data = [];
let selectedStartYear = 1880;
let selectedEndYear = 2022;
let selectedRegion = 'Glob';
let regionSelect;
let startYearSlider;
let endYearSlider;
let yearLabel;
let hoverIndex = -1;

// Load the data
function preload() {
  table = loadTable('data/data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 400);
  
  // p5.Element for GUI
  // https://p5js.org/reference/#/p5.Element
  
  // https://p5js.org/reference/#/p5/createDiv
  regionLabel = createDiv('Region: ');
  // https://p5js.org/reference/#/p5.Element/position
  regionLabel.position(5, height + 5);
  // https://p5js.org/reference/#/p5/createSelect
  regionSelect = createSelect();
  // https://p5js.org/reference/#/p5.Element/parent
  regionSelect.parent(regionLabel);
  // https://p5js.org/reference/#/p5.Element/size
  regionSelect.size(100);
  regionSelect.option('Global', 'Glob'); // name , value (optional)
  regionSelect.option('Northern Hemisphere', 'NHem');
  regionSelect.option('Southern Hemisphere', 'SHem');
  
  // Register a call-back function, updateRegion, which is called 
  // when a current option is changed (i.e., 'change event')
  regionSelect.changed(updateRegion);
  
  startYearLabel = createDiv('Start: ');
  startYearLabel.position(5, height + 25);
  // // https://p5js.org/reference/#/p5/createSlider
  startYearSlider = createSlider(1880, 2022, selectedStartYear);
  startYearSlider.parent(startYearLabel);
  startYearSlider.size(120);
  // https://p5js.org/reference/#/p5.Element/mouseMoved
  startYearSlider.mouseMoved(updateYears);
  // https://p5js.org/reference/#/p5.Element/mouseClicked
  startYearSlider.mouseClicked(updateYears);
  // or use input() for any changes on slider
  // startYearSlider.input(updateYears);
  
  endYearLabel = createDiv('End : ');
  endYearLabel.position(5, height + 45);
  endYearSlider = createSlider(1880, 2022, selectedEndYear);
  endYearSlider.parent(endYearLabel);
  endYearSlider.size(120);
  endYearSlider.input(updateYears);
  
  // https://p5js.org/reference/#/p5/createP
  // Template Strings in JavaScript
  // https://www.w3schools.com/js/js_string_templates.asp
  yearLabel = createP(`Years: ${selectedStartYear} - ${selectedEndYear}`);
  yearLabel.position(300, height + 25);
  // Change margin with CSS styling
  // https://www.w3schools.com/css/css_margin.asp
  // https://p5js.org/reference/#/p5.Element/style
  yearLabel.style('margin', 0);
  // yearLabel.style('color', 'red');

  updateData();
}

function updateRegion() {
  selectedRegion = regionSelect.value();
  updateData();
}

function updateYears() {
  selectedStartYear = startYearSlider.value();
  selectedEndYear = endYearSlider.value();
  
  // Update the HTML element inside <P>, which is text, directly
  yearLabel.html(`Years: ${selectedStartYear} - ${selectedEndYear}`);
  
  updateData();
}

// Select data of interest from table based on selected years and region
function updateData() {
  // Reset array
  data = [];
  
  for (let year = selectedStartYear; year <= selectedEndYear; year++) {
    // https://p5js.org/reference/#/p5.Table/findRow
    // https://p5js.org/reference/#/p5.TableRow
    // https://www.w3schools.com/jsref/jsref_tostring_number.asp
    const row = table.findRow(year.toString(), 'Year');
    if (row) {
      // Get the value and convert it (string) into a float number
      // https://p5js.org/reference/#/p5.TableRow/get
      let v = parseFloat(row.get(selectedRegion))
      
      // Add the value to the data array in JSON format
      data.push({
        year: year,
        value: v
      });
    }
  }
  redraw();
}

function draw() {
  background(220);
  
  // Define the height and width of the bars
  let bars = selectedEndYear - selectedStartYear + 1;
  let barWidth = width / bars;
  let barHeight = height;
  
  // For each bar
  for (let i = 0; i < bars; i++) {
    // Calculate the x and y position of the bar
    const x = i * barWidth;
    const y = 0;
    
    // Get the datapoint for the bar
    const v = data[i].value;
    
    let barColor;
    // Figure out the colour of the bar from the data
    if (v > 0) {
      barColor = lerpColor(color('white'), color('red'), v);
    } else {
      barColor = lerpColor(color('white'), color('blue'), -v);
    }
    
    // Check if the mouse is on the current bar and save its index
    if ((mouseX > x && mouseX < x + barWidth) &&
       (mouseY > 0 && mouseY < barHeight)) {
      hoverIndex = i;
      // If the mouse is on the bar, fill it with black
      fill(0, 0, 0);
    } else {
      // Or fill it with barColor
      fill(barColor);
    }
    
    // Set the colour of the bar
    noStroke();
    
    // Draw the bar
    rect(x, y, barWidth, barHeight);
  }
  
  // Display the value of the mouse-hovered bar as text
  if (hoverIndex >= 0) {
    let hoveredValue = data[hoverIndex].value.toFixed(2);
    fill(0);
    textSize(16);
    if (mouseX < width / 2) {
      textAlign(LEFT);
      text(`${hoveredValue}`, mouseX + barWidth, mouseY - 5);
    } else {
      textAlign(RIGHT);
      text(`${hoveredValue}`, mouseX - barWidth, mouseY - 5);
    }
  }
  
  hoverIndex = -1;
}



