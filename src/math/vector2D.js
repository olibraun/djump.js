class vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  addVector(v) {
    this.x += v.x;
    this.y += v.y;
  }
}