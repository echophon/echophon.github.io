function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  var sz = 200 + sin(frameCount*0.01)*100;
  ellipse(windowWidth/2 ,windowHeight/2,sz,sz);
}