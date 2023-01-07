const input = require('fs').readFileSync('dev/stdin').toString().trim();

const num = +input;

const sequence = [0, 1];

for (let i = 1; i < num; i++) {
  sequence[i + 1] = BigInt(sequence[i]) + BigInt(sequence[i - 1]);
}

console.log(sequence[num].toString());
