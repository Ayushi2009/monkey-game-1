
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime
var score
var food
var spawnObstacles
var spawnBanana



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  score=0
  survivalTime=0
  
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.15
  
  
  ground=createSprite(670,350,900,20)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  
  
 
 
  
 

  
  bananaGroup= new Group()
  obstacleGroup= new Group()
  
}


function draw() {
background(" green")
  
  
  spawnObstacles();
  spawnBanana();
  
 
  
  
  if(ground.x<0){
     ground.x=ground.width/2
     }  
  
  if(keyDown("space")&&monkey.y>=100){
     monkey.velocityY=-12
     }
  
    if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach()
    score=score+1
}
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)

  
  drawSprites()
 
   
  fill("black") 
  text("Score: "+ score, 300,50);
textSize(20)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+ survivalTime ,100,50)
}
 
function spawnBanana(){
  if(frameCount%80===0){
     var banana=createSprite(600,120,20,20)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.2
    banana.velocityX=-4
    banana.setLifetime=500
   bananaGroup.add(banana)
  
     }
  }
  function spawnObstacles(){
  if(frameCount%150===0){
     var obstacle=createSprite(300,305,100,4500)
  obstacle.velocityX=-4
    obstacle.addImage( obstacleImage)
    obstacle.scale=0.2
    obstacle.lifetime=500 
     obstacleGroup.add(obstacle)
       }
  }
  
  
  
  
  
  
  






