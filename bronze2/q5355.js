const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input.slice(1);

for (const line of cases) {
  const mars = line.split(' ');
  let result = +mars[0];
  for (let i = 1; i < mars.length; i++) {
    if (mars[i] === '@') result *= 3;
    if (mars[i] === '%') result += 5;
    if (mars[i] === '#') result -= 7;
  }
  console.log(result.toFixed(2));
}
