const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = +input;
const numArr = [];
let result = [];

for (let i = 1; i <= N; i++) {
  numArr.push(i);
}

for (let i = 0; i < N; i++) {
  const left = numArr.shift();
  result.push(left);
  if (numArr.length !== 0) {
    const move = numArr.shift();
    numArr.push(move);
  }
}
console.log(result.join(' '));
