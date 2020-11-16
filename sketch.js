var bullet;
var wall;
var thickness
var speed,mass;

function setup() {
  createCanvas(1200,400);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = "black";
  wall = createSprite(1000,200,thickness,200);
  wall.shapeColor = (80,80,80);
  speed = random(223,321);
  mass = random(30,52);
  bullet.velocityX = Math.round(speed/5);
  console.log(Math.round(mass));
  console.log(Math.round(speed));
  console.log(Math.round(thickness));
  
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < wall.width/2+bullet.width/2){
      bullet.velocityX = 0;
      var damage = 0.5*mass*speed*speed/(thickness*thickness*thickness);
      console.log(Math.round(damage));
      
      if(damage <10){
        wall.shapeColor = "green";
      }
      if(damage >10){
        wall.shapeColor = "red";
      }
  }
  drawSprites();
}
/*function collide(wall,bullet){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge <= wallLeftEdge){
    return true
  }
  return false
}*/