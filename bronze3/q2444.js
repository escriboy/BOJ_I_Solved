// const input = require('fs').readFileSync('dev/stdin').toString();
// const N = +input;

const N = 5;
let result = '';

for (let i = 1; i <= N; i++) {
  for (let j = N - i; j > 0; j--) {
    result += ' ';
  }
  for (let k = 1; k < 2 * i; k++) {
    result += '*';
  }
  result += '\n';
}

for (let i = N; i > 0; i--) {
  for (let k = N - i + 1; k > 0; k--) {
    result += ' ';
  }
  for (let j = 2 * i - 3; j > 0; j--) {
    result += '*';
  }

  result += '\n';
}

console.log(result);
