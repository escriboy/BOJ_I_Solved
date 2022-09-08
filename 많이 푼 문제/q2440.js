const input = require('fs').readFileSync('dev/stdin').toString().split(' ');
const N = +input[0];

let result = '';

for (let i = 1; i <= N; i++) {
  for (let j = 1; j < i; j++) {
    // 0, 1, 2, 3, 4 번 돈다.
    result += ' ';
  }
  for (let k = N; k >= i; k--) {
    // 5 4 3 2 1 번 돈다.
    result += '*';
  }
  result += '\n';
}

console.log(result);
