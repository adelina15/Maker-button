var r = 80;
var g = 50;
var b = 190;
var rectY=0;
 var value = 0;

function setup() {
   createCanvas(600,600);
}

function draw() {
for (var i=0; i < 15; i++){
    noStroke();
    fill(r, g, b)
  rect(0, rectY, width, height/15);
  rectY += height/15;
  r += 14;
  b -= 10;

  

  fill(value);
  rect( 270, 500, 50,50);

}
}

function mouseClicked() {
    if( mouseX > 270 && mouseX < 320 && mouseY > 500 && mouseY < 550) {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
}

   

