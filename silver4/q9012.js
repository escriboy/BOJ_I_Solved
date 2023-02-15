const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();
const result = [];

for (let i = 0; i < N; i++) {
  let count = 0;

  for (const s of input[i]) {
    count += s === '(' ? 1 : -1;
    if (count < 0) break;
  }

  result.push(count === 0 ? 'YES' : 'NO');
}

console.log(result.join('\n'));
