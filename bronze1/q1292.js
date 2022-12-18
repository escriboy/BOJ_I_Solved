const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

let sum = 0;
let arr = [];
for (let i = 1; i <= 50; i++) {
  for (let g = 0; g < i; g++) arr.push(i);
}
const newArr = arr.slice(input[0] - 1, input[1]);
console.log(newArr.reduce((acc, cur) => (acc += cur)));
