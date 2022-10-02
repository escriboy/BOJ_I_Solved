const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input[0];
let sum = 0;

for (let i = 1; i <= N; i++) {
  i === N ? (sum += input[i]) : (sum += input[i] - 1);
}

console.log(sum);

/*
멀티탭: 3, 1 1 1
// 3개의 멀티탭이 각각 하나의 플러그만 갖고 있음 => 컴퓨터 한 대 연결
// (1-1) + (1-1) + 1 = 1
멀티탭: 2, 5 8
// (5-1) + 8 = 12
마지막 숫자를 제외하고는 -1씩 해준다.
*/
