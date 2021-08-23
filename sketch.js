
function preload(){

  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym11.png","gym12.png");
  eat=loadAnimation("eat2.png","eat1.png");
  drink=loadAnimation("drink2.png","drink1.png");
  move=loadAnimation("move.png");
  bath=loadAnimation("bath2.png","bath1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  astronaut=createSprite(300,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);  

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
  }

  if(keyDown("m")){
   astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX=2;
    astronaut.velocityY=3;

  }
  drawSprites();
}