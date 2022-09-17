const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map((x) => Number(x));
// 1 2 3 4 5 6 7 8

const Ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const Descending = [8, 7, 6, 5, 4, 3, 2, 1];

if (JSON.stringify(input) === JSON.stringify(Ascending)) {
  console.log('ascending');
} else if (JSON.stringify(input) === JSON.stringify(Descending)) {
  console.log('descending');
} else {
  console.log('mixed');
}
