
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5;
var ground;
var c1,c2,c3,c4,c5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Ball(200,500);
	b2 = new Ball(300,500);
	b3 = new Ball(400,500);
	b4 = new Ball(500,500);
	b5 = new Ball(600,500);
	
	ground= new Ground(400,100,650,100);
	c1= new Chain(b1.body, {x:200,y:100});
	c2= new Chain(b2.body, {x:300,y:100});
	c3= new Chain(b3.body, {x:400,y:100});
	c4= new Chain(b4.body, {x:500,y:100});
	c5= new Chain(b5.body, {x:600,y:100});
	Engine.run(engine);                   
}


function draw() {
  rectMode(CENTER);
  background(255);   
  

 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 ground.display();
 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(b1.body, b1.body.position,{x:-50,y:-50})
}

}

