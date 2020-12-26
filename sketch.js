var trex,trexImage,Ground,groundImage,invisibleground,obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacleGroup,clouds,cloudImage1,cloudGroup,score;

function preload(){
  trexImage = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage = 
  loadAnimation("ground2.png");
  obstacle1 = 
  loadAnimation("obstacle1.png");
   obstacle2 = 
  loadAnimation("obstacle2.png");
   obstacle3 = 
  loadAnimation("obstacle3.png");
   obstacle4 = 
  loadAnimation("obstacle4.png");
   obstacle5 = 
  loadAnimation("obstacle5.png");
   obstacle6 = 
  loadAnimation("obstacle6.png");
   cloudImage1= 
  loadAnimation("cloud.png");
  
}

function setup() {
  createCanvas(400, 400);
    score=0;
  ground =createSprite(200,380,400,10);
  ground.addAnimation("ground",groundImage);
  trex = createSprite(30,370,10,10);
  trex.addAnimation("trex",trexImage);
  trex.scale = 0.5;
  
  invisibleground=createSprite(200,390,400,10);
  invisibleground.visible=false;
  
  obstacleGroup = new Group();
  cloudGroup = new Group();
  
}

function draw() {
  background("white"      );
  edges = createEdgeSprites();
  if(keyDown("space") && trex.y >= 350  ){
    trex.velocityY = -16;
  }
  ground.velocityX = -5;
  if(ground.x <0 ){
    ground.x =ground.width/2;
  }
  trex.velocityY = trex.velocityY + 0.8;              trex.collide(invisibleground);
  Spawncloud();
  Spawnobstacle();

  text ("Score :" + score , 320,50);
  score  = score+ Math.round (getFrameRate()/63);
  
  drawSprites();
}

function Spawncloud(){
if(frameCount % 60 === 0){
  cloud=createSprite(400,random(50,300),10,10)
  cloud.addAnimation ("cloudy", cloudImage1);
  cloud.velocityX = -3;
  cloud.lifeTime = 150;
  cloudGroup.add (cloud);
}
}

function Spawnobstacle(){
  if(frameCount % 100=== 0 ){
 obstacle = createSprite (400,370,10,10); 
    obstacle.scale=0.6
  obstacle.velocityX = -3;
    obstacle.lifeTime = 140;
    obstacleGroup.add(obstacle);
  
  switch(r = Math.round (random (1,6))){
    case 1 : obstacle.addAnimation ("cactus",obstacle1);
    break ;
    case 2 : obstacle.addAnimation ("cactus",obstacle2);
    break ;
    case 3 : obstacle.addAnimation ("cactus",obstacle3);
    break ;
    case 4 : obstacle.addAnimation ("cactus",obstacle4);
    break ;
    case 5 : obstacle.addAnimation ("cactus",obstacle5);
    break ;
    case 6 : obstacle.addAnimation ("cactus",obstacle6);
    break ;
    default: break;
  }
  }
}