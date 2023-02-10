const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.shift();

input.sort((a, b) => b - a);
console.log(input.join('\n'));
