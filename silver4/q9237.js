const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();
let result = 0;

const trees = input[0].split(' ').map(Number);

trees.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  result = Math.max(result, trees[i] + i + 1);
}

result += 1;
console.log(result);
