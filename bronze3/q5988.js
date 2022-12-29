const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input.slice(1);

for (const number of cases) {
  const num = number.slice(-2);
  num % 2 === 1 ? console.log('odd') : console.log('even');
}
