const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let desc = [...input];
desc.sort((a, b) => b - a);

let result = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  result.push(input.indexOf(desc[i]) + 1);
  sum += desc[i];
}
result.sort();

console.log(sum + '\n' + result.join(' '));
