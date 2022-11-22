const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input.slice(1);

for (const c of cases) {
  const lastNumbers = c.slice(c.length / 2 - 1, c.length / 2 + 1);
  lastNumbers[0] === lastNumbers[1]
    ? console.log('Do-it')
    : console.log('Do-it-Not');
}
