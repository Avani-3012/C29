const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground (300,300,40,10);
  ground2 = new Ground (500,100,20,10);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  drawSprites();
}