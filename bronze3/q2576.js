const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let oddNum = [];
let sum = 0;

for (const i of input) {
  if (i % 2 === 1) {
    oddNum.push(i);
    sum += i;
  }
}

oddNum.sort((a, b) => a - b);

oddNum[0] === undefined ? console.log(-1) : console.log(`${sum}\n${oddNum[0]}`);
