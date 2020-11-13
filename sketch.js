var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime;
var rand;

function preload(){
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,390,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(250,465,1200,20);
  ground.velocityX = -3;
  ground.x = ground.width /2;
  
  survivalTime = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}
 
function draw() {
  background(0);
  
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime = Math.round(frameCount/50)
  text("Survival time:"+survivalTime,100,50);
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
    if(keyDown("space") && monkey.y >= 390){
      monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY + 0.4;
  
    monkey.collide(ground);
   
  
   spawnFood();
  
   spawnObstacles();
  
   drawSprites();
 }

function spawnFood(){
  if (frameCount%80 == 0){
    banana = createSprite(600,200,40,40);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = - 3;
    banana.lifetime = 400/3;
    
    rand = Math.round(random(200,350));
    banana.y = rand;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount%300 == 0){
    obstacles = createSprite(600,420,50,50);
    obstacles.addImage ("obtacles",obstacleImage);
    obstacles.lifetime = 400;
    obstacles.scale = 0.2;
    obstacles.velocityX = -3;
    obstacleGroup.add(obstacles);
  }
}