const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

let r1 = '';
let r2 = '';

function revertNumber(num, str) {
  for (let i = num.length - 1; i >= 0; i--) {
    str += num[i];
  }
  return str;
}

console.log(
  revertNumber(input[0], r1) - revertNumber(input[1], r2) > 0
    ? revertNumber(input[0], r1)
    : revertNumber(input[1], r2),
);
