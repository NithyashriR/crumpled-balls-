class DustBin {
    constructor(x, y) {
      var options = {
        
        
          isStatic : true
        }
      this.body = Bodies.rectangle(x, y, 20, 100, options);
      this.body2 = Bodies.rectangle(x-300, y, 20, 100, options);
      this.body3 = Bodies.rectangle(x-150, y+50, 300, 20, options);
      this.width = 20;
      this.height = 100;

      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var pos2 =this.body2.position;
      var pos3 =this.body3.position;
      
      rectMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke("green")
      rect(pos.x,pos.y, this.width, this.height);
      rect(pos2.x,pos2.y, this.width, this.height);
      rect(pos3.x,pos3.y, 300,20);

    }
  };