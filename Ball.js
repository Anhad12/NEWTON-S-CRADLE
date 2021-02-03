class Ball{
    constructor(x,y){
    var options={
        restitution:0.3,
        friction: 0.5,
        density:1.2
    }
    this.body= Bodies.circle(x,y,50,options);
   
    World.add(world,this.body)

    }
    display(){
        
        ellipseMode(RADIUS);
        ellipse( this.body.position.x, this.body.position.y,50,50);
        //ellipse( this.body.position.x, this.body.position.y,50,50)
    }
}