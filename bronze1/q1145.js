const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let result = 1;
while (true) {
  let n = 0;
  for (const number of input) {
    if (result % number === 0) n++;
    if (n >= 3) break;
    result++;
  }
  console.log(result);
}
