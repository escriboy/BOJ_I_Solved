const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const A = input[0];
const B = input[1];
const V = input[2];

console.log(Math.ceil((V - B) / (A - B)));

/**
 * V미터인 나무 막대를 올라간다.
 * A미터 올라가고 B미터 떨어진다.
 * 정상에 올라간 뒤로는 떨어지지 않는다.
 * 며칠이 걸려서 다 오를 수 있을까.
 * while문으로 구하면 시간이 초과함
 */
