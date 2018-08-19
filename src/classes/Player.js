class Player {
  constructor() {
    this.width = 50;
    this.height = this.width;
    this.x = width/2 - (this.width)/2;
    this.y = 480;
  }

  update() {

  }

  render(context) {
    context.fillStyle='#00FF00';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}