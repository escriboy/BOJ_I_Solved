const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const minguk = input[0].split(' ').map(x => +x);
const mansae = input[1].split(' ').map(x => +x);

const calcScore = function (arr) {
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    score += arr[i];
  }
  return score;
};

const result =
  calcScore(minguk) >= calcScore(mansae)
    ? calcScore(minguk)
    : calcScore(mansae);

console.log(result);
