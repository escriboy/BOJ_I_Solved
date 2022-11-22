const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const cross = input[0]; // 52
const width = input[2]; // 16
const height = input[1]; // 9

const i = cross / Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

console.log(Math.floor(height * i), Math.floor(width * i));
