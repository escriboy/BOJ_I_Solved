const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input[0];
const F = input[1];
const newN = input[0].slice(0, -2);

let i = 0;

while (i < 100) {
  const lastNum = i < 10 ? '0' + i : i + '';
  const totalNum = newN + lastNum;
  if (totalNum % F === 0) {
    console.log(lastNum);
    break;
  }
  i++;
}
