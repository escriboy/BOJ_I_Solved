const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const divideNum = input[0];

const arr = input.slice(1);
arr.splice(-1, 1);

for (const i of arr) {
  i % divideNum === 0 && console.log(`${i} is a multiple of ${divideNum}.`);
  i % divideNum === 0 || console.log(`${i} is NOT a multiple of ${divideNum}.`);
}
