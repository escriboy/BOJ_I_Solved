const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const exams = +input[0];
let scores = input[1].split(' ').map((item) => Number(item));
const max = Math.max(...scores);

let sum = 0;

for (let i = 0; i < exams; i++) {
  sum += (scores[i] / max) * 100;
}

console.log(sum / exams);
