const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();
const result = [];
for (const arr of input) {
  const num = arr.split(' ').map(Number);
  for (let i = 0; i < num.length; i++) {
    result.push(num[i]);
  }
}

console.log(result.sort().join(' '));
