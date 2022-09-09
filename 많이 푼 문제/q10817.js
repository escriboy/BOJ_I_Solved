let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map((el) => Number(el));

input.sort(function (a, b) {
  return b - a;
});
console.log(input[1]);
