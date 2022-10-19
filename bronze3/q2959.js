const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sortArr = input.slice().sort((a, b) => a - b);
console.log(sortArr[0] * sortArr[2]);

/*
const secondMaxVal = input
  .slice()
  .sort((a, b) => b - a)
  .slice(1)[0];
const minVal = input.slice().sort((a, b) => a - b)[0];

console.log(secondMaxVal * minVal);
*/
