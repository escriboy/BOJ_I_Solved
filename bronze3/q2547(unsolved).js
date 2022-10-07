const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0]; // 2

// 1) 공백이 있는 지점을 기록 (케이스가 바뀌므로)
let changePoint = []; // [1, 8]
for (let i = 1; i <= input.length; i++) {
  if (input[i] === '') changePoint.push(i);
}
// 2) 공백을 제거한 배열을 생성
const filteredInput = input.filter(e => e !== '');

/**
 *
 * 1) 공백이 있는 지점을 기록 => input[1], input[8]
 * 2) 첫 공백에서 다음 공백까지의 합을 구하기
 * 3) 마지막은 어떻게 처리?
 *
 *
 */
