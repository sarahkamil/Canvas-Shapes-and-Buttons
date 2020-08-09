var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

//return "rgb" w 3 rand num
function randomColor() {
  var red = Math.round(Math.random() * 255);
  var green = Math.round(Math.random() * 255);
  var blue = Math.round(Math.random() * 255);
  return "rgb(" + red + ","+ green + "," + blue +")"; 
}

function randColorCircle(x, y) {
  var a = Math.random()*500;
  var b = Math.random()*200;
  var radius = Math.random()*40+1;
  ctx.beginPath();
  ctx.arc(a, b, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = randomColor();
  ctx.fill();
}

function randPosCircle() {
  var x = Math.round(Math.random() * 200);
  var y = Math.round(Math.random() * 200);
  randColorCircle(x,y);
}

function randColorRect(x, y) {
  ctx.fillStyle = randomColor();
  ctx.fillRect(x, y, 20, 20);
}

function randPosRect() {
  var x = Math.round(Math.random() * 200);
  var y = Math.round(Math.random() * 200);
  randColorRect(x,y);
}

function btnClickRect(){
  randPosRect();
  
}

function btnClickCircle() {
  randPosCircle();
}

function btnClickCanvas() {
  ctx.clearRect(0, 0, 500, 500);
}
/*for (var j = 0; j < 10000; j++) {
  ctx.clearRect(0, 0, 200, 200);
  for (var i = 0; i < 100; i++) {
    randPosRect();
  }
}*/