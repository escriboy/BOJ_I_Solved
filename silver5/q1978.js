const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const nums = input[1].split(' ').map(Number);
let total = 0;
for (const num of nums) {
  let isPrime = true;
  if (num === 1) isPrime = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) isPrime = false;
  }
  isPrime === true && total++;
}

console.log(total);
