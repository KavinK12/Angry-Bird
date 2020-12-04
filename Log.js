class Log{
    constructor(x,y,height,angle){
 
     var ghf = {
         restitution : 1,
         friction : 1
       }
      
       this.body = Bodies.rectangle(x,y,20,height,ghf);
       this.width = 20;
       this.height = height;
       this.angle = Matter.Body.setAngle(this.body,angle);
       World.add(myWorld,this.body);
 
    }
 
    display() {
 
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
    }
 }