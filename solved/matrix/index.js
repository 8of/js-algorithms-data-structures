// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//   matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const grid = [...Array(n)].map(e => Array(n).fill(''));
  const nextDirection = {
    N: 'E',
    E: 'S',
    S: 'W',
    W: 'N',
  };
  let current = 1;
  let direction = 'E';
  let currentX = 0;
  let currentY = 0;
  grid[currentX][currentY] = current;
  current++;
  while (current <= n * n) {
    let nextX = currentX;
    let nextY = currentY;
    switch (direction) {
      case 'N':
        nextY--;
        break;
      case 'E':
        nextX++;
        break;
      case 'S':
        nextY++;
        break;
      case 'W':
        nextX--;
        break;
      default:
        break;
    }
    const isElementInRange = grid[nextY] && grid[nextY][nextX];
    const canUpdateElement = isElementInRange === '';
    if (canUpdateElement) {
      currentX = nextX;
      currentY = nextY;
      grid[currentY][currentX] = current;
      current++;
    } else {
      direction = nextDirection[direction];
    }
  }

  return grid;
}

module.exports = matrix;
