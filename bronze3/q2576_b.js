const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .filter(cur => cur % 2 === 1);

const sum = input.reduce((acc, cur) => acc + cur, 0);
const sortedInput = input.sort((a, b) => a - b);

sortedInput[0] === undefined
  ? console.log(-1)
  : console.log(`${sum}\n${sortedInput[0]}`);
