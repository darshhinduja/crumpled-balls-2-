
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxbase,boxl,boxr;
var ball;
var ground;
var dustbinimg

function preload()
{
	dustbinimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	
	boxbase = Bodies.rectangle(width/2, 680, 200, 20 , {isStatic:true} );
	World.add(world, boxbase);
	
	boxl = Bodies.rectangle(width/2-100, 630, 20, 100 , {isStatic:true} );
	World.add(world, boxl);
	
	boxr = Bodies.rectangle(width/2+100, 630, 20, 100 , {isStatic:true} );
	World.add(world, boxr);	

	
ground= new Ground(width/2,height-10,1200,10)
	 ball=new Paper(50,645,20);
	 

	//Create the Bodies Here.


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(255);
  ground.display(); 
  ball.display();
	 fill ("yellow");
  
  rect(boxl.position.x, boxl.position.y, 20,100);
  rect(boxr.position.x, boxr.position.y, 20,100);
  image(dustbinimg,boxbase.position.x, boxbase.position.y-50, 240,120);
 

  
  
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
      }
        }

