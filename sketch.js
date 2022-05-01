const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(200,200);
    log1 = new Log(100,300,100,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    pig1.display();
    log1.display();
   
}