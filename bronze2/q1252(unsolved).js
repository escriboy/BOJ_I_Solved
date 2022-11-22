const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');
const binary1 = parseInt(input[0], 2);
const binary2 = parseInt(input[1], 2);

const result = (binary1 + binary2).toString(2);

console.log(result);
