var bullet;
var wall;

var speed;
var weight;
var thickness;



function setup() 
{
  createCanvas(1600,400);

  bullet = createSprite(50,200,10,10);
  
  wall = createSprite(1200,200,thickness,height/2);


  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black");
  
  bullet.velocityX = speed;
  
  if(hasCollided(bullet,walls))
  {
    bullet.velocityX = 0;
    var damage = 0.5 *weigth *speed *speed/(thickness *thickness *thickness);
     if(damage>10)
     {
       wall.shapeColor = color(255,0,0);

     }

     if(damage<10)
     {
       wall.shapeColor = color(0,255,0);
     }
  }

  hasCollided();

  
  drawSprites();

}

function hasCollided(bullet,wall)
{
  bulletRightEdge + bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}
