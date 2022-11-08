const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cars = input.slice(1);
let sum = 0;
let max = 0;

for (const i of cars) {
  const car = i.split(' ').map(Number);
  sum += car[0];
  if (car[1] !== undefined) sum -= car[1];
  if (max < sum) max = sum;
  if (sum < 0) {
    max = 0;
    break;
  }
}
console.log(max);
