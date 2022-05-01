class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = width;
      this.height = height;

      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  