var trexsprite,treximg1,treximg2,treximg3
var floorsprite,floorimg
var secondfloor
var newcloudsprite
var newcloudImage
var obstacle1Img,obstacle2Img,obstacle3Img,obstacle4Img,obstacle5Img, obstacle6Img
var gameState = "play"
var groupobtascles

function preload(){
  treximg1 = loadAnimation("sprites/trex1.png","sprites/trex3.png","sprites/trex4.png")
  floorimg = loadImage("sprites/ground2.png") 
  newcloudImage = loadImage("sprites/cloud.png")

  obstacle1Img = loadImage("sprites/obstacle1.png");                                //Carga imágen del obstáculo1
  obstacle2Img = loadImage("sprites/obstacle2.png");                                //Carga imágen del obstáculo
  obstacle3Img = loadImage("sprites/obstacle3.png");                                //Carga imágen del obstáculo
  obstacle4Img = loadImage("sprites/obstacle4.png");                                //Carga imágen del obstáculo
  obstacle5Img = loadImage("sprites/obstacle5.png");                                //Carga imágen del obstáculo
  obstacle6Img = loadImage("sprites/obstacle6.png");                                //Carga imágen del obstáculo

  }  //Fin de function preload

function setup() {
  createCanvas(600,200);

  trexsprite = createSprite(70,155,50,50)
  trexsprite.addAnimation("trexruning", treximg1)
  trexsprite.scale = 0.5

  floorsprite = createSprite(17,160,1000,10)
  floorsprite.addImage("floorimagen",floorimg)
  floorsprite.velocityX=-7
  secondfloor = createSprite(17,170 ,1000,10)
  secondfloor.visible = false
  groupobstacle = new Group()
}  //Fin de function setup


function draw() 
{
 
  trexsprite.collide(secondfloor)

if(gameState === "play"){
  background(rgb(255,156,255));
  drawSprites()
    if(keyWentDown("SPACE") && trexsprite.y>= 140){ 
      trexsprite.velocityY=-13;
    }//Fin del ifkeyDown("SPACE")
    
    trexsprite.velocityY+=1.5
    obstacle();
    newcloud();
    if(floorsprite.x<= 0) {
      floorsprite.x = 10
    }//Fin del if(floorsprite.x<= 0)
    if (trexsprite.isTouching(groupobstacle)){
      gameState = "end"
 }//Fin del if (gameState === "play"

    
  else if(gameState === "end"){
     background(rgb(95,244,238));
     newcloud();
     floorsprite.velocityX = 0
     groupObstaculos.velocityXEach(0)
  }//Fin del if
} //Fin de function draw

 

    

function newcloud(){
  if(frameCount%60===0){
    newcloudsprite = createSprite(600,50,5,5)
    newcloudsprite.velocityX = -9
    newcloudsprite.lifetime = 150
    newcloudsprite.addImage("cloudImage",newcloudImage)
  }//Fin if
}//Fin newcloud 

function obstacle(){
  if(frameCount%50===0){
    var obstaclesprite  = createSprite(600,160,20,20); 
    obstaclesprite.scale = 0.7
    obstaclesprite.velocityX = -9;
    //obstaclesprite.scale = 0.7
    //obstaclesprite.lifetime = 150
    var imagenaleatoria = Math.round(random(1,6));
    //console.log("random ",imagenaleatoria)

    switch(imagenaleatoria){
     case 1: obstaclesprite.addImage(obstacle1Img);
     break;
     console.log("random ",imagenaleatoria)
     case 2: obstaclesprite.addImage(obstacle2Img);
     break;
     console.log("random ",imagenaleatoria)
     case 3: obstaclesprite.addImage(obstacle3Img);
     break;
     console.log("random ",imagenaleatoria)
     case 4: obstaclesprite.addImage(obstacle4Img);
     break;
     console.log("random ",imagenaleatoria)
     case 5: obstaclesprite.addImage(obstacle5Img);
     break;
     console.log("random ",imagenaleatoria)
     case 6: obstaclesprite.addImage(obstacle6Img);
     break;
     console.log("random ",imagenaleatoria)
     default: break;
    } //fin del switch
    //groupobstacle.add(obstacle)
  }//fin de la condición
}//fin de la función
