
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,100,40)
	ground=new Ground(400,650,800,20)
	dustbin=new Dustbin(600,450,200,200)
	//bottomSide=new Dustbin(650,600,200,20);
	//leftSide=new Dustbin(545,560,20,100)
	//rightSide=new Dustbin(745,560,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('darkGreen');
  paper.display();
  ground.display();
  dustbin.display();
  //bottomSide.display();
  //leftSide.display();
  //rightSide.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode ===UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-125})   

	}
}


