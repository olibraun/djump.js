class Player {
  constructor() {
    this.width = 50;
    this.height = this.width;
    this.pos = new vector2D(width/2 - (this.width)/2, 480);
    this.vel = new vector2D(0, 0);
    this.acc = new vector2D(0, 0);
    this.gravity = new vector2D(0, .05);
  }

  collidesWithPlatform(platform) {
    if(this.pos.x >= platform.x && this.pos.x + this.width <= platform.x + platform.width) {
      if(this.pos.y + this.height >= platform.y && this.pos.y <= platform.y + platform.height ) {
        return true;
      }
    } else {
      return false;
    }
  }

  update() {
    // Physics
    this.acc.addVector(this.gravity);
    this.vel.addVector(this.acc);
    this.pos.addVector(this.vel);
    //[this.acc.x, this.acc.y] = [0, 0];

    // // "Wrapping around"
    // if(this.pos.x > width) {
    //   this.pos.x = -this.width;
    // }
  }

  render(context) {
    context.fillStyle='#00FF00';
    context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}