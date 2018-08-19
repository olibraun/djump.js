const canvas = document.getElementById('canvas');
const width = canvas.width;
const height = canvas.height;

// context.fillStyle = '#000000';
// context.fillRect(0, 0, width, height);

// Create background grid
const grid = createBackgroundGrid();

// Initialize player
const player = new Player();

function main() {
  const context = canvas.getContext('2d');

  // Draw background grid
  context.drawImage(grid, 0, 0);

  // Update player
  player.update();

  // Render player
  player.render(context);

  requestAnimationFrame(main);
}

main();