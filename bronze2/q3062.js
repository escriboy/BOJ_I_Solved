const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input.slice(1);

for (const num of cases) {
  const reversed_num = num.split('').reverse().join('');
  const sum = +reversed_num + +num;
  const reversed_sum = (sum + '').split('').reverse().join('');
  sum === +reversed_sum ? console.log('YES') : console.log('NO');
}
