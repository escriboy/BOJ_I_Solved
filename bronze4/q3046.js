const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(x => +x);

const R1 = input[0];
const S = input[1];

const R2 = S * 2 - R1;
console.log(R2);
