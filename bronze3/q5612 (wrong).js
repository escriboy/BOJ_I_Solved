const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cars = input.slice(1);
let sum = 0;
let minus = false;
const carsInTunnel = [];

for (const i of cars) {
  const car = i.split(' ').map(Number);
  sum += car[0];
  if (car[1] !== undefined) sum -= car[1];

  if (sum < 0) {
    console.log(0);
    minus = true;
  }
  carsInTunnel.push(sum);
}
if (!minus) {
  carsInTunnel.sort((a, b) => b - a);
  console.log(carsInTunnel[0]);
}
