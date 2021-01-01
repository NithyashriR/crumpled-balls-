class Ball {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':3.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius , options);
        this.width = radius;
        this.height = radius;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}