const input = require('fs').readFileSync('dev/stdin').toString();
const N = Number(input); // 5

let result = '';

for (let i = 1; i <= N; i++) {
  result += i + '\n';
}

console.log(result);
