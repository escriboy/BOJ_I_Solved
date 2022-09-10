const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let count = Number(input[0]);
let result = 0;

// 5, 54321 => 15
for (let i = 0; i < count; i++) {
  result += Number(input[1][i]);
}

console.log(result);
