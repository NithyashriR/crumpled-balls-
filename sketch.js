
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
ground = new Ground(700,700,3000,10);
dustbin = new DustBin(700,650)
ball = new Ball(100,100,70)

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground.display();
 dustbin.display();
 
		ball.display();
		
}

function keyPressed(){
if(keyCode === UP_ARROW ){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}


}

