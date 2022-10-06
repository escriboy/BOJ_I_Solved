const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const N = input[0];
const K = input[1];
let numArr = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) numArr.push(i);
}

console.log(numArr.length < K ? 0 : numArr[K - 1]);
