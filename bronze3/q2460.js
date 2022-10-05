const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sub;
let sum = 0;
let passenger = [];

for (let i = 0; i < input.length; i++) {
  sub = input[i].split(' ').map(Number);
  sum += sub[1] - sub[0];
  passenger.push(sum);
}

passenger.sort((a, b) => b - a);
console.log(passenger[0]);
