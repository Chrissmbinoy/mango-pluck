
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var stone,boy,tree,ground,treeIm,boyIm,slingShot;

    
function preload()
{
  treeIm = loadImage("Plucking mangoes/tree.png")
  boyIm = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1500, 700);
 

	engine = Engine.create();
	world = engine.world;

   tree = createSprite(1200,370,20,20)
   tree.addImage(treeIm)
   tree.scale = 0.5

ground = new Ground(700,670,1600,20)

boy = createSprite(200,590,20,20)
boy.addImage(boyIm)
boy.scale = 0.11

stone = new Stone(145,530,60)

mango1 = new Mango(1200,120,60)
mango2 = new Mango(1100,160,60)
mango3 = new Mango(1300,200,60)
mango4 = new Mango(1400,260,60)
mango5 = new Mango(1200,220,60)
mango6 = new Mango(980,300,60)
mango7 = new Mango(1090,315,60)
mango8 = new Mango(1290,300,60)
mango9 = new Mango(1190,330,60)
mango10 = new Mango(1480,300,60)
mango11 = new Mango(1030,230,60)
mango12= new Mango(1300,110,60)

slingShot = new Slingshot(stone.body,{x:145,y:530});

	Engine.run(engine);
  
keyPressed();

}


function draw() {
 
  rectMode(CENTER);
  background("lightblue");
  fill("orange")
  textSize(30)
  textFont("algerian")
text("Press up arrow to get a chance again ",200,200)
 Engine.update(engine);


 tree.display();
 ground.display();
 boy.display();
 stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display()
mango9.display();
mango10.display();
mango11.display();
mango12.display();



slingShot.display();
detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);
detectollision(stone,mango10);
detectollision(stone,mango11);
detectollision(stone,mango12);


}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
  }
  
  function mouseReleased(){
  
      slingShot.fly()
  }

  function keyPressed(){

    if(keyCode === UP_ARROW){
      Matter.Body.setPosition(stone.body,{x:145,y:530})
  slingShot.attach(stone.body)
  
    }
  }
  function detectollision(lstone,lmango){
    
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
      if(distance<=lmango.r+lstone.r)
      {
        
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }
  
 
 