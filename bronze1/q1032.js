const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = +input[0];
const words = [];

for (let i = 1; i <= N; i++) {
  words.push(input[i]);
}

solution(words);

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr[0].length; i++) {
    let tmp = arr[0][i];
    let num = 0;
    for (let j = 0; j < arr.length; j++) {
      if (tmp !== arr[j][i]) {
        answer.push('?');
        break;
      } else {
        num++;
      }
      if (num === arr.length) answer.push(tmp);
    }
  }
  console.log(answer.join(''));
}
