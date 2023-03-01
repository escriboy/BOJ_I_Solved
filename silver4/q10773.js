const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const K = input.shift();
const result = [];
for (let i = 0; i < K; i++) {
  if (input[i] === 0) {
    result.pop();
  } else {
    result.push(input[i]);
  }
}

const sum = result.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
