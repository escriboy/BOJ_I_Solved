const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

// const input = ['5', '0 4', '1 2', '1 -1', '2 2', '3 3'];

const spots = input.slice(1).map((spot) => spot.split(' ').map(Number));
let result = '';

spots
  .sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  })
  .forEach((spot) => {
    result += `${spot[0]} ${spot[1]}\n`;
  });

console.log(result);

/**
 * y좌표가 증가하는 순으로, y가 같으면 x좌표가 증가하는 순서로 출력
 */
