const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(',');

let sum = 0;

for (const num of input) {
  if (!isNaN(+num)) sum++;
}
console.log(sum);
