const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();
const numbers = input[0].split(' ').map(Number);
const answer = [...new Set(numbers)].sort((a, b) => a - b);

console.log(answer.join(' '));
