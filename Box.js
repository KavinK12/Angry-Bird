class Box{
   constructor(x,y,width,height){

    var ghf = {
        restitution : 1
      }
     
      this.body = Bodies.rectangle(x,y,width,height,ghf);
      this.width = width;
      this.height = height;
      World.add(myWorld,this.body);

   }

   display() {

       var pos = this.body.position;
       fill("red");
       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
       
   }
}