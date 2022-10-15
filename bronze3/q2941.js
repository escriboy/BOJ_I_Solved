const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const totMelody = input[0];
const average = input[1];

console.log(Math.ceil(totMelody * (average - 1) + Math.random()));
