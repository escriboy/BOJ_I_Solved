const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const S = input[1].split(' ').map(Number);
let sum = 0;
let count = 0;

for (const i of S) {
  if (i !== 0) {
    count++;
    sum += count;
  } else {
    count = 0;
  }
}

console.log(sum);
