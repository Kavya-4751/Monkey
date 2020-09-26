var bananaImage, obstacleImage, obstacleGroup,foodGroup, backImage,jungleImage, Jungle, ground, Player, Player1;

var score = 0;

function preload(){
  jungleImage = loadImage("jungle2.jpg");
  player_running = 
loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png"); 
  
  bananaImage = loadImage("Banana.png")
  obstacle_img = loadImage("stone.png");  
}
function setup() {
  createCanvas(800, 400);
  backImage = createSprite(0,0,800, 400);
  backImage.addImage("Jungle",jungleImage);
  backImage.velocityX=-3
  backImage.x = backImage.width/2;
  backImage.scale = 1.5;
  backImage.debug=true;
  
  Player = createSprite(100,350);
  Player.addAnimation("Player1",player_running)
  Player.scale=0.15; 
  ground = createSprite(200,380,400,10);
  ground.visible = false
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}   
function draw() {
  background(220);
  if (backImage.x < 0){
      backImage.x = backImage.width/2;
  } 
  if(keyDown("space")){
    Player.velocityY = Player.velocityY-2 ; 
    //console.log("key down");
  } 
  Player.velocityY = Player.velocityY + 0.6
   
  Player.collide(ground);
  if(foodGroup.isTouching(Player)){
    score = score+2;
    foodGroup.destroyEach();
  }
  switch(score){
    case 10: Player.scale = 0.12;
      break;
    case 20: Player.scale = 0.14;
      break;
    case 30: Player.scale = 0.16;
      break;
    case 40: Player.scale = 0.18;
      break;
      default: break;
  }  
  if(obstacleGroup.isTouching(Player)){
    Player.scale = 0.05;
  }
  banana();
  obstacle();
  
  drawSprites()
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: "+score,500,50);
}
function banana(){
  if(frameCount%80 === 0){
     var banana1 = createSprite(800,250,10,10);
     banana1.addImage(bananaImage);
     banana1.scale = 0.05
     banana1.velocityX = -5;
     banana1.y = random(100,250);
     banana1.lifetime = 160;
    foodGroup.add (banana1);
 }     
}  
function obstacle(){
  if(frameCount%300 === 0){
    var obstacle1 = createSprite(800,350,10,10);
    obstacle1.addImage(obstacle_img);
    obstacle1.velocityX = -5;
    obstacle1.scale = 0.15;
    obstacle1.liftime = 160;
    obstacleGroup.add (obstacle1);
  }
}

