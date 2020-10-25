class Ground {
    constructor(x,y,height,width){
        var option = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:2
        }
        this.body = Bodies.circle(x,y,height,width,option);
        this.height = height;
        this.width = width;
        World.add(world,this.body)

    }
    display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("pink");
       rect(pos.x,pos.y,this.radius);
    }

}