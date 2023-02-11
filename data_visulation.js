let valueX = 245 ;
let valueY = 200 ;
let valueZ = 255;
let leftMarg = 380;
let topMarg = 400;
let lineLMarg = 680;
let lineTMarg = 400;
let breakfast;

function setup(){
  createCanvas(1920,1080);
  frameRate(30);

  //noLoop();
  fetch("./json/breakfast.json").then(function(response) {
    return response.json();
  }).then(function(data) {
    // console.log(data) 
    breakfast = data.breakfast;
    //using no Loop? you can just call your function once the data is loaded
   // drawChart();
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });
}

function draw(){
  background(255,255,255);
  strokeWeight(12);
  strokeCap(ROUND);

  drawChart();
  
  let total = 0;
  for(let i = 0; i < breakfast.length; i++){
    //get total
    total += breakfast[i].amount;   
  }

  let angleStart = TWO_PI*0.2;
  let diam = 350;

  for(let i = 0; i < breakfast.length; i++){
    //draw
    let item = breakfast[i]; 
    let itemFraction = item.amount/total;
    let itemAngle = itemFraction * TWO_PI;
    let angleEnd = angleStart + itemAngle;
    
    strokeWeight(10);
    strokeCap(ROUND);
    stroke(item.color);
    noFill();
    arc(leftMarg,topMarg, diam + 50 * i ,diam + 50 * i ,angleStart + frameCount/30.0, angleEnd + frameCount/30.0);
    angleStart += itemAngle;
  }
   
  noStroke();
  textSize(20);
  fill(10);
  text("The amount of food take",lineLMarg+50,lineTMarg);  
  textSize(15);
  fill(10);
  text("oats  ",lineLMarg+50,lineTMarg+30);
  text("seeds ",lineLMarg+50,lineTMarg+60);
  text("berries   ",lineLMarg+50,lineTMarg+90);
  text("milk ",lineLMarg+50,lineTMarg+120);
}

function drawChart() {
  let total = 0;
  for(let i = 0; i < breakfast.length; i++){
    //get total
    total += breakfast[i].amount;   
  }

  let angleStart = TWO_PI*0.2;
  let diam = 250;

  for(let i = 0; i < breakfast.length; i++){
    //draw
    let item = breakfast[i]; 
    let itemFraction = item.amount/total;
    let itemAngle = itemFraction * TWO_PI;
    let angleEnd = angleStart + itemAngle;

    push();
    strokeWeight(10);
    strokeCap(ROUND);
    stroke(item.color);
    line(lineLMarg + 150,lineTMarg + 25 + 30 * i,lineLMarg + 350,lineTMarg + 25 + 30 * i);  
    pop();

    push();
    fill(item.color);
    arc(leftMarg,topMarg, diam, diam, angleStart, angleEnd);
    angleStart += itemAngle;
    pop();
  }

}


function keyPressed() { 
   
  if (key=='1') {
    valueX = 255;
  } else {
    valueX = 0;
  }
  if (key=='2') {
    valueY = 255;
  } else {
    valueY = 0;
    valueZ = 0;
  }
  if (key=='3') {
    valueZ = 255;
  } else {
    valueZ = 0;
  }
}


