const [A, B] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const h = Math.abs(((A - 1) % 4) - ((B - 1) % 4));
const w = Math.abs(Math.floor((A - 1) / 4) - Math.floor((B - 1) / 4));

console.log(w + h);
