const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const spots = input.slice(1).map((spot) => spot.split(' ').map(Number));

let result = '';

spots
  .sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  })
  .forEach((spot) => {
    result += `${spot[0]} ${spot[1]}\n`;
  });

console.log(result);
