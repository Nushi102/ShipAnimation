var Ship,shipImg1;
var seaImg;
var Sea;

function preload(){

shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
seaImg= loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  Sea = createSprite(200,200);
  Sea.addImage(seaImg);
  Sea.scale=0.3
  Ship = createSprite(130,150,30,30);
  Ship.addAnimation("Ship1",shipImg1);
  Ship.scale=0.25
}

function draw() {

  background("blue");
 
 Sea.velocityX = -4;
 
 if(Sea.x<0){
Sea.x=Sea.width/8;
 }
 drawSprites();

}