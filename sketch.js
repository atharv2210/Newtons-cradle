
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1500,800);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here.
roof=new Roof(750,100,750,50)
bob1=new Bob(450,700,50)
bob2=new Bob(600,700,50)
bob3=new Bob(750,700,50)
bob4=new Bob(900,700,50)
bob5=new Bob(1050,700,50)
rope1=new Rope(bob1.body,roof.body,-300,0)
rope2=new Rope(bob2.body,roof.body,-150,0)
rope3=new Rope(bob3.body,roof.body,0,0)
rope4=new Rope(bob4.body,roof.body,150,0)
rope5=new Rope(bob5.body,roof.body,300,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(132, 3, 252);
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display() 
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-16,y:16});
		
	}
  
  }



