const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.pop();

for (const i of input) {
  const arr = i.split(' ').map(Number);
  const B = arr[0];
  const C = arr[1];
  const A = 2 * B - C;
  console.log(A);
}
