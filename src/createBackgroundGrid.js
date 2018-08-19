function createBackgroundGrid() {
  const grid = document.createElement('canvas');
  grid.width = width;
  grid.height = height;
  const gridContext = grid.getContext('2d');
  
  gridContext.fillStyle = '#FFFFFF';
  gridContext.fillRect(0, 0, width, height);

  const offset = (Math.random() / 2) * 10;

  gridContext.strokeStyle = '#000000';

  const column_width = 15;
  for (let i = offset; i <= width; i += column_width) {
    console.log(i);
    gridContext.beginPath();
    gridContext.moveTo(i, -1);
    gridContext.lineTo(i, height + 1);
    gridContext.stroke();
    gridContext.closePath();
  }

  const column_height = 15;
  for (let i = offset; i <= height; i += column_height) {
    gridContext.beginPath();
    gridContext.moveTo(-1, i);
    gridContext.lineTo(width + 1, i);
    gridContext.stroke();
    gridContext.closePath();
  }

  return grid;
}