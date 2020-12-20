const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var box, ground,bg;

function preload() {
 bg = loadImage("sprites/bg.png");
}

 function setup(){
   createCanvas(1200,600);

   myEngine = Engine.create(); //myEngine.world
   myWorld = myEngine.world;

   ground = new Ground(600,590,1200,20);
   ground2 = new Ground(250,480,400,300);

   box = new Box(800,550);
   box2 = new Box(1000,550);
   box3 = new Box(800,450);
   box4 = new Box(1000,450);
   box5 = new Box(900,350);
   
   pig = new Pig(900,550);
   pig2 = new Pig(900,450);

   bird = new Bird(100,100);

   log = new Log(900,500,300,PI/2);
   log2 = new Log(900,400,300,PI/2);
   log3 = new Log(820,350,150,PI/7);
   log4 = new Log(980,350,150,-PI/7);
   conlog = new Log(100,100,100,PI);

   chain = new Chain(bird.body, conlog.body);
 }

 function draw(){
   background(bg);

   Engine.update(myEngine);

   ground.display();
   ground2.display();
   box.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   pig.display();
   pig2.display();
   bird.display();
   log.display();
   log2.display();
   log3.display();
   log4.display();
   conlog.display();
   chain.display();
}