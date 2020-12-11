//Create variables here
var dog, happyDog, database, foodS, foodStock, dog1;

function preload(){
  happyDog= loadImage("images/dogImg1.png");
  dog= loadImage("images/dogImg.png");
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  
  dog1=createSprite(235,321,10,10);
  dog1.addImage(dog);
  dog1.scale=0.2;

  foodStock=database.ref('/');
  foodStock.on("value", readPosition, showError);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock('Foods');
  dog1.addImage(happyDog);
}
  drawSprites();

  //add styles here
  textSize(15);
  fill("white");
  stroke(10);
  text("Note: Press UP_ARROW to feed Drago Milk", 200,20);
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').set({
      'Foods':x
  })
}
function readPosition(data){
  position=data.val();
}

function showError(){
  console.log("Error");
}



