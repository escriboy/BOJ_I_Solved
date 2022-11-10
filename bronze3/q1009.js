const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let total = input[0];
const books = input.slice(1);

for (const book of books) {
  total -= book;
}

console.log(total);
