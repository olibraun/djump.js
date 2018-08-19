class Player {
  constructor() {
    this.width = 50;
    this.height = this.width;
    this.pos = new vector2D(width/2 - (this.width)/2, 480);
    this.vel = new vector2D(0, 0);
  }

  update() {
    this.pos.addVector(this.vel);
  }

  render(context) {
    context.fillStyle='#00FF00';
    context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}