const input = require('fs').readFileSync('dev/stdin').toString().trim();

const firstLetter = input
  .split('-')
  .map((el) => el.slice(0, 1))
  .join('');
console.log(firstLetter);
