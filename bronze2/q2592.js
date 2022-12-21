const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur);
const average = sum / input.length;

function solution(arr) {
  const obj = {};
  const answer = [];

  arr.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  for (let key in obj) {
    answer.push([key, obj[key]]);
  }

  answer.sort((a, b) => b[1] - a[1]);

  // if (answer[0][1] === answer[1][1]) return -1;

  return Number(answer[0][0]);
}

console.log(average + '\n' + solution(input));
