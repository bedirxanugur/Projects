let thickness;
let brush;
let blackColour;
let yellowColour;
let colourful;
let nLines;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 160, 176);
  blackColour = color(51, 51, 51);
  yellowColour = color(237, 201, 81);
  colourful = color(random(255), random(255), random(255));
  brush = blackColour;
  nLines = 1;
  thickness = 3;
}

function draw() {
  strokeWeight(1);
  //red button
  fill(blackColour);
  noStroke();
  rect(0, 0, 50, 50);
  //yellow button
  fill(yellowColour);
  noStroke();
  rect(0, 50, 50, 50);
  //colour button
  fill(colourful);
  noStroke();
  rect(0, 100, 50, 50);
  // single sym
  fill("white");
  stroke("black");
  rect(width - 50, 0, 50, 50);
  fill("black");
  text("1", width - 10, 20);
  // double sym
  fill("white");
  stroke("black");
  rect(width - 50, 50, 50, 50);
  fill("black");
  text("2", width - 10, 70);
  // four sym
  fill("white");
  stroke("black");
  rect(width - 50, 100, 50, 50);
  fill("black");
  text("4", width - 10, 120);
  //small button
  fill("white");
  stroke("black");
  strokeWeight(2);
  rect(0, height - 20, 20, 20);
  //large button
  fill("white");
  stroke("black");
  strokeWeight(2);
  rect(30, height - 40, 40, 40);
  //reset button
  fill("black");
  stroke("white");
  strokeWeight(2);
  rect(width - 50, height - 50, 50, 50);
  fill("white");
  text("X", width - 25, height - 20);
}

function mouseDragged() {
  stroke(brush);
  strokeWeight(thickness);

  if (nLines == 1) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (nLines == 2) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, mouseY, width - pmouseX, pmouseY);
  } else if (nLines == 4) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX, height - mouseY, pmouseX, height - pmouseY);
    line(width - mouseX, mouseY, width - pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
    brush = blackColour;
  } else if (mouseX > 0 && mouseX < 50 && mouseY > 50 && mouseY < 100) {
    brush = yellowColour;
  } else if (
    mouseX > width - 50 &&
    mouseX < width &&
    mouseY > 0 &&
    mouseY < 50
  ) {
    nLines = 1;
  } else if (
    mouseX > width - 50 &&
    mouseX < width &&
    mouseY > 50 &&
    mouseY < 100
  ) {
    nLines = 2;
  } else if (
    mouseX > width - 50 &&
    mouseX < width &&
    mouseY > 100 &&
    mouseY < 150
  ) {
    nLines = 4;
  } else if (
    mouseX > 0 &&
    mouseX < 20 &&
    mouseY > height - 20 &&
    mouseY < height
  ) {
    thickness = 3;
  } else if (
    mouseX > 30 &&
    mouseX < 70 &&
    mouseY > height - 40 &&
    mouseY < height
  ) {
    thickness = 6;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 160, 176);
}

function mouseClicked() {
  if (
    mouseX > width - 50 &&
    mouseX < width &&
    mouseY > height - 50 &&
    mouseY < height
  ) {
    background(0, random(160), random(176));
  } else if (mouseX > 0 && mouseX < 50 && mouseY > 100 && mouseY < 150) {
    colourful = color(random(255), random(255), random(255));
    brush = colourful;
  }
}
