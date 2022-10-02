var bgImg, crocImg;
var crocGrp;





function preload(){
  bgImg = loadImage("images/lake1 (2).jpg")
  crocImg = loadImage("images/croc1-removebg-preview")

}





function setup() {
  createCanvas(800,800);
 bg= createSprite(600,400,200,100);
 bg.addImage(bgImg)
 bg.scale = 0.15
 bg.velocityX = -3;

 crocGrp = new Group()
}

function draw() {
  background(0);
  enemy();
  drawSprites();

  if (bg.x<0){
    bg.x = width/2;
  }
}

function enemy(){
  if(frameCount%50===0){
  croc = createSprite(random(500,1100),random(100,500),40,40)
  croc.addImage(crocImg)
  croc.scale = 0.15
  croc.velocityX = -3
  croc.debug = true
  croc.lifetime = 400
  crocGrp.add(croc)

  }
}