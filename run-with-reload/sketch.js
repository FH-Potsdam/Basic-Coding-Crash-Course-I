var x = 0;
var y = 10;
var h = 0;
var a = 0;
function setup (){
  // executed once
  var canvas = createCanvas(500,500);
  canvas.parent('jim');
  y = width/2;
  colorMode(HSL, 360, 100, 100, 100);
}

function draw(){
  // executed all the time
  background(h,100,60,10);

  ellipse(x,y, cos(a)* 100,cos(a)* 100);
  x++;
  if(x >= width){
    x = 0;
  }

h++;
a+=0.2;
if(h >= 360){
  h = 0;
}
}
