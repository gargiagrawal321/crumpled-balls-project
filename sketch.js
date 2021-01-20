
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImage,d1,d2,d3;

function preload()
{
	dustbinImage=loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,300,70);
ground=new Ground(600,690,1200,10);
d1=new Dustbin(900,675,1200,10);
d2=new Dustbin(820,600,20,130);
d3=new Dustbin(980,600,20,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#76D7C4 ");

  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  image(dustbinImage,787,400,200,300);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
}

