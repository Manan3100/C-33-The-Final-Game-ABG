class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
          //to bounce
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        //to translate thew x and y position so that objects can turn
        translate(this.body.position.x, this.body.position.y);
        //angle at which it turns
        rotate(angle);
        //it makes x and y positioms as centre of an object
        imageMode(CENTER);
        //to display image on screen
        image(this.image, 0, 0, this.width, this.height);
        pop();
        //push and pop are used to so that changes don't leak from one class to the other class.
      }
}