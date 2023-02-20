const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();

const line = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
const waiting = [];

for (const number of line) {
  sum += number;
  waiting.push(sum);
}

console.log(waiting.reduce((acc, cur) => acc + cur));
