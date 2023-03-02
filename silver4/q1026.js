const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();

const A = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const B = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += A[i] * B[i];
}

console.log(sum);

// B의 가장 큰 수와 A의 가장 작은 수를 곱한다.
//

/**
 * B에서 가장 큰 수에 A의 가장 작은 수를 곱해준다.
 * 변수가 있음. 100 * 11 > 15 * 9인 경우...?
 * 결국 A에 있는 수를 돌려가면서 B의 값과 곱해주다가 그중 최소값을 추출해내는 거임
 */
