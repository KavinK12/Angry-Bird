const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box, ground;

 function setup(){
   createCanvas(600,600);

   myEngine = Engine.create(); //myEngine.world
   myWorld = myEngine.world;

   

   
   
   ground = new Ground(300,590,600,20);

   box2 = new Box(250,100,150,50);

   box = new Box(200,200,100,50);

 }

 function draw(){
   background(0);
    console.log(box.position);

   Engine.update(myEngine);

   ground.display();
   box.display();
   box2.display();
}