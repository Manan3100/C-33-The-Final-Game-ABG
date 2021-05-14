class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //created an empty trajectary array
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
//super keyword helps us use the commands mentioned in the base class.
//for this reason we don't have to write push, pop, translate and rotate, image, etc.
    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 230){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
  //initialising of a variable
  //condition 
  //incriment or dicriment
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
