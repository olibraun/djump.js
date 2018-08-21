class Platform {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 10;
  }

  render(context) {
    context.fillStyle = '#CD853F';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}