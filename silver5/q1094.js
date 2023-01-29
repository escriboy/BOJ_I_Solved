const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = +input;

let i = 1;
let sum = 0;
let count = 0;

while (N !== sum) {
  if (N - (sum + i) > i || sum + i === N) {
    sum += i;
    count++;
  }
  i++;
}
console.log(count);
