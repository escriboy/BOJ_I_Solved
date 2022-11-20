const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(str => str.split(''));

let sum = 0;

for (let i = 0; i < input[0].length; i++) {
  for (let j = 0; j < input[1].length; j++) {
    sum += +input[0][i] * +input[1][j];
  }
}

console.log(sum);
