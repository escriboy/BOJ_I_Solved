// unsolved
const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const nums = input[0];

for (let i = 1; i <= nums; i++) {
  let binary = input[i].toString(2);
  let answer = '';

  for (let j = binary.length - 1; j >= 0; j--) {
    if (binary.charAt(j) === '1') {
      answer += binary.length - j - 1 + ' ';
    }
  }
  console.log(answer.slice(0, -1));
}
