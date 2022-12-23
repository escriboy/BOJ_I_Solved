const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input[1].split(' ').map(Number);
let count = 0;
let arr = [];

for (const customer of cases) {
  arr.includes(customer) ? count++ : arr.push(customer);
}

console.log(count);

// const input = ['3', '1 2 3'];
