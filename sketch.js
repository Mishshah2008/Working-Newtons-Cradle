const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ball1,cons1,cons2,cons3,cons4,cons5, ball2, ball3, ball4, ball5;

/*function preload()
{
	


}*/

function setup() {
  createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(400,200,500,20);
  ball1 = new Ball(300,400,50);
  ball2 = new Ball(100,400,50);
  ball3 = new Ball(200,400,50);
  ball4 = new Ball(400,400,50);
  ball5 = new Ball(500,400,50);
  cons1 = new SlingShot(ball1.body,ground1.body,20,0);
  cons2 = new SlingShot(ball2.body,ground1.body,-220,0);
  cons3 = new SlingShot(ball3.body,ground1.body,-120,0);
  cons4 = new SlingShot(ball4.body,ground1.body,120,0);
  cons5 = new SlingShot(ball5.body,ground1.body,220,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // background(0);
  background("white");

  ground1.display();
  ball1.display();
  cons1.display();
  cons2.display();
  cons3.display();
  cons4.display();
  cons5.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  drawSprites();
 
}

function keyPressed(){

if (keyCode===32){

Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-50,y:-50});

}


}

