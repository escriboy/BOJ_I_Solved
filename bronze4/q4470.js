const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const number = +input[0];

for (let i = 1; i <= number; i++) {
  console.log(`${i}. ${input[i]}`);
}
