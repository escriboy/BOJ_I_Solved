const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const seven25 = input[0].split(' ').map(Number);
const priceSeven25 = seven25[0] / seven25[1];
const convNum = +input[1];
let min = priceSeven25;

for (let i = 2; i < 2 + convNum; i++) {
  const other = input[i].split(' ').map(Number);
  const priceOther = other[0] / other[1];

  if (min > priceOther) min = priceOther;
}
console.log((min * 1000).toFixed(2));
