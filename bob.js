class Bob {
    constructor(x, y,radius) {
      var options = {
        //isStatic:true,
        'density':0.03,
        'friction': 0.5,
        'restitution':1.25
      };
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius
      World.add(world, this.body);
    };
    display(){
      fill('pink')
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.radius)
    };
  };