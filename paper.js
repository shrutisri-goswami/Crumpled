class Paper {
    constructor(x,y,radius){
        var option = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:2
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world,this.body)

    }
    display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("pink");
       rect(pos.x,pos.y,this.radius);
    
    }

}
    
