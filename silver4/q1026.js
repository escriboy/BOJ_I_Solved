const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();

const A = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const B = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += A[i] * B[i];
}

console.log(sum);
