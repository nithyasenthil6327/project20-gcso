var car,wall; 
var speed, weight;
var status;
function setup() { 
  createCanvas(1600,400);
  speed = random(55,90);
  weight =  random(400,1100);

  
  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = color(255,255,255);
 
}
  function draw() { 
    background(0,0,0); 
    
    if(wall.x-car.x<=car.width/2+wall.width/2){ 
      car.velocityX = 0;
      var deformation = 0.5*weight*speed*speed/22500
      if(deformation>180){
        car.shapeColor = color(255,0,0);
        status = 'Lethal';
      }
      else if(deformation<180 && deformation>100){
        car.shapeColor = color(230,230,0);
        status = 'Average';
      }
      else if(deformation<100){
        car.shapeColor = color(0,255,0);
        status = 'Good';
      }
      if(keyDown('r')){
        deformation = 0;
        car.shapeColor = color(255,255,255);
        car.x = 50;
        speed = random(55,90);
        weight =  random(400,1500);
        car.velocityX = speed;
        status = undefined;


      }

     
    }
      drawSprites(); 
      textSize(30);
      fill(255,255,255);
      text("Press 'R' to reset",500,350)
      textSize(20);
      fill(0,200,255)
      text('Speed: '+speed,1100,40);
      text('Weight: '+weight,1100,80);
      text('Deformation: '+deformation,1100,120);

      if(status === 'Lethal'){
        fill(255,0,0);
      }
      else if(status === 'Average'){
        fill(230,230,0);
      }
      if(status === 'Good'){
        fill(0,255,0);
      }
      text('Status: '+status,1100,160);

      //console.log(deformation);
    }