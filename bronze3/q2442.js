const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = +input;
let result = '';

for (let i = 1; i < N + 1; i++) {
  for (let j = N - i; j > 0; j--) {
    result += ' ';
  }
  for (let k = 1; k < 2 * i; k++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);
