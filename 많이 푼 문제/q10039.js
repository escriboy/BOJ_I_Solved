let scores = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

let total = 0;

for (let i = 0; i < scores.length; i++) {
  if(scores[i] < 40) {
    scores[i] = 40;
  }
  total += scores[i];
}

const avg = total / 5;

console.log(avg);