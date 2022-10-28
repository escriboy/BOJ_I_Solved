const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const nums = input[0].split(' ').map(Number);
const alphabets = input[1];

const ascNums = nums.slice().sort((a, b) => a - b); // 1 3 5
let newArr = [];

const orderingNumber = function (a, b) {
  if (alphabets.slice(a, b) === 'A') newArr.push(ascNums[0]);
  if (alphabets.slice(a, b) === 'B') newArr.push(ascNums[1]);
  if (alphabets.slice(a, b) === 'C') newArr.push(ascNums[2]);
};

orderingNumber(0, 1);
orderingNumber(1, 2);
orderingNumber(2, 3);

console.log(newArr.join(' '));
