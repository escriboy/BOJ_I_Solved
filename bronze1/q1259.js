const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.pop();

const reverse_input = input.map((el) => el.split('').reverse().join(''));

for (let i = 0; i < input.length; i++) {
  input[i] === reverse_input[i] ? console.log('yes') : console.log('no');
}
