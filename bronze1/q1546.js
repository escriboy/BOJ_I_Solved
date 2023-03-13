const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const scores = input[1]
  .split(' ')
  .sort((a, b) => b - a)
  .map(Number);

const newScores = scores.map((score) => (score / scores[0]) * 100);

const sum = newScores.reduce((acc, cur) => acc + cur);
const newAvg = sum / newScores.length;

console.log(newAvg);
