var thinkness , wall;

var speed , weight , bullet;




function setup() {
  createCanvas(2000,400);

//random
  speed = random(223 ,321)
  weight = random(30 ,52)
  thinkness = random(22,83)

  //car
  bullet = createSprite(40, 200, 30, 5);
  bullet.shapeColor = color(225);
 bullet.velocityX = speed;

  //wall
  wall = createSprite(1200 ,200 , thinkness ,height/2);
  wall.shapeColor =color (80,80,80);



}

function draw() {
  background(0);  

 /*if(wall.x - car.x < (car.width + wall.width)/2){
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed / 22500;

   if(deformation > 180){
    car.shapeColor = color(225 , 0 ,0);
  
 }

 if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230 , 230 ,0);

 }
  
 if(deformation < 100){
  car.shapeColor = color(0 , 225 ,0);
 }
 */
   
 
 if(hascollide(bullet , wall)){

  bullet.velocityX = 0;
   
  var damage = 0.5 * weight * speed * speed / (thinkness * thinkness * thinkness);

  if(damage > 10){

    bullet.shapeColor = color(225 , 0 ,0);

  }
 
  if(damage < 10){
    bullet.shapeColor = color(0 , 225 , 0);
  }

 }

 

drawSprites();
}



function hascollide(lbullet , lwall ){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge >= wallLeftEdge){

  return true;
}

else{
return false;
}


}