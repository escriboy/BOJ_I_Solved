const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [height, width] = input[0].split(' ').map(Number);

const board = [];
for (let i = 1; i <= height; i++) {
  let row = input[i].split('');
  board.push(row); // 각 행을 board 배열에 push
}

const size = { x: 8, y: 8 };

function countNeedPainting(row, col, color) {
  let nextColor = color;
  let count = 0;

  for (let i = row; i < row + size.x; i++) {
    for (let j = col; j < col + size.y; j++) {
      if (board[i][j] !== nextColor) {
        count++;
      }
      nextColor = nextColor === 'B' ? 'W' : 'B';
    }
    nextColor = nextColor === 'B' ? 'W' : 'B';
  }
  return count;
}

let min = size.x * size.y;

for (let i = 0; i <= height - size.x; i++) {
  for (let j = 0; j <= width - size.y; j++) {
    const black = countNeedPainting(i, j, 'B');
    const white = size.x * size.y - black;
    const cur = black > white ? white : black;

    if (min > cur) min = cur;
  }
}
console.log(min);

/*
const word = `9 23
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`;

const input = word.split('\n');

 */
