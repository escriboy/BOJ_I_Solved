const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const result = [];
input.forEach(el => result.push(el * el));
const sum = result.reduce((pre, cur) => pre + cur);
console.log(sum % 10);
