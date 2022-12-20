const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const reverseArr = input.slice(1).reverse();
let max = reverseArr[0];
let count = 1;
for (const num of reverseArr) {
  if (max < num) {
    max = num;
    count++;
  }
}

console.log(count);
