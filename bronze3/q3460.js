// unsolved
const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const nums = input.slice(1);

for (const i of nums) {
  const binary = i.toString(2).split('').reverse();
  let answer = '';
  let sum = 0;
  for (const j of binary) {
    if (j.includes('1')) {
      answer += sum + ' ';
      sum++;
    } else {
      sum++;
    }
  }
  console.log(answer.slice(0, -1));
}
