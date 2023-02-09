const input = require('fs').readFileSync('dev/stdin').toString().trim();

let N = +input;

function solution(n) {
  let answer = 0;
  if (N === 1 || N === 3) return -1;

  while (N > 0) {
    if (N % 2 === 1 || N % 5 === 0) {
      answer += 1;
      N -= 5;
    } else if (N % 2 === 0) {
      answer += 1;
      N -= 2;
    }
  }
  return answer;
}

const answer = solution(N);
console.log(answer);
