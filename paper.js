class paperObject {
    constructor(x, y,r) {
        var option = {
            'restitution':0.8,
            'friction':3.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,r,option);
        this.x = x
        this.y = y
        this.r = r
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r,this.r);
        pop();
      }
}