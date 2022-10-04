const N = Number(require('fs').readFileSync('dev/stdin').toString().trim());
let result = '';

for (let i = N; i > 0; i--) {
  for (let k = N - i; k > 0; k--) {
    result += ' ';
  }
  for (let j = 2 * i - 1; j > 0; j--) {
    result += '*';
  }

  result += '\n';
}

console.log(result);
