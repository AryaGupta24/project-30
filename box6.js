class box6 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    if (this.body.speed<5){

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();}
      else {
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity-5;
        tint(255, this.visiblity);
        rect(0, 0, this.width, this.height);
        pop();
     }
    }
  }  