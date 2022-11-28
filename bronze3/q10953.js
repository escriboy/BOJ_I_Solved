const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input.slice(1);

for (const i of cases) {
  const num1 = +i[0];
  const num2 = +i[2];
  console.log(num1 + num2);
}
