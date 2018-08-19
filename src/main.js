const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// context.fillStyle = '#000000';
// context.fillRect(0, 0, width, height);

// Create background grid
const grid = createBackgroundGrid();

// Draw background grid
context.drawImage(grid, 0, 0);

// Initialize player
const player = new Player();
player.render(context);