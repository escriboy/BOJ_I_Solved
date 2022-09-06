const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const number = +input[0];

for (let i = 1; i <= number; i++) {
  let score = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      score++;
    } else {
      score = 0;
    }
    sum += score;
  }
  console.log(sum);
}
