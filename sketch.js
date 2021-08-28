const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ball;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  Button_1 = createImg("right.png")
  Button_1.position(220,30)
  Button_1.size(50,50)
  Button_1.mouseClicked(Hforce)

  Button_2 = createImg("up.png")
  Button_2.position(300,50)
  Button_2.size(50,50)
  Button_2.mouseClicked(Vforce)

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

 var ball_option={restitution:0.7}
 
 ball=Bodies.circle(100,100,20,ball_option);
World.add(world,ball);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

ellipse(ball.position.x,ball.position.y,20)

}


function Hforce() {

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}

function Vforce() {

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}

