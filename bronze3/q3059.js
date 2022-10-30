const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const num = +input[0];
const cases = input.slice(1);
let answer = '';

for (let i = 1; i <= num; i++) {
  const alphabets = input[i].split('');
  let sum = 0;

  for (let j = 65; j <= 90; j++) {
    let word = String.fromCharCode(j);
    if (!alphabets.includes(word)) sum += j;
  }
  answer = answer + sum + '\n';
}

console.log(answer);
