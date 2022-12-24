const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input.slice(1);

for (const sentence of cases) {
  const find_err = sentence.split(' ');
  const fixed_sentence = find_err[1].split('');
  fixed_sentence.splice(+find_err[0] - 1, 1);
  console.log(fixed_sentence.join(''));
}
