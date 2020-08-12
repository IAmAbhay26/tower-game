function setup() {
  createCanvas(800,400);
 
}

var ground1,ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
function draw() {

  background(255,255,255);  
  drawSprites();
  ground = new Ground(600,height,1200,20);
  ground1 = new Ground(330,235,200,20);
  platform = new Ground(150, 305, 300, 170);


block1 = new Block(330,235,30,40);
block2 = new Block(360,235,30,40);
block3 = new Block(390,235,30,40);
block4 = new Block(420,235,30,40);
block5 = new Block(450,235,30,40);

block6 = new Block(360,195,30,40);
block7 = new Block(390,195,30,40);
block8 = new Block(420,195,30,40);

block9 = new Block(390,155,30,40);

ground.display();
ground1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
platform.display();

SlingShot.display();
}