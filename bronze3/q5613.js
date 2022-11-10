const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sum = +input[0];

for (let i = 0; i < input.length; i++) {
  const next = input[i + 1];

  if (i % 2 !== 2) {
    if (input[i] === '+') {
      sum += +next;
    } else if (input[i] === '-') {
      sum -= +next;
    } else if (input[i] === '*') {
      sum *= +next;
    } else if (input[i] === '/') {
      sum = Math.floor(sum / +next);
    } else if (input[i] === '=') {
      break;
    }
  }
}
console.log(sum);
