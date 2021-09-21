class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          'restitution':1.2,
          'friction':0.3,
          'density':1
      }
     
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill(255);
      ellipse(this.body.position.x, this.body.position.y, this.body.radius);
      pop();
    }
  }