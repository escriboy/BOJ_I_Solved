const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const n = input[0];
const k = input[1];
let answer = [];

const arr = Array.from({ length: n }, (v, i) => i + 1);
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= k; j++) {
    if (j === k) {
      answer.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
  }
}

console.log('<' + answer.join(', ') + '>');

/**
 * 1~7번 까지 7명의 사람이 원을 이루며 앉아 있고, 양의 정수 3이 주어진다.
 * 이제 순서대로 3번째 사람을 제거한다. 한 사람이 제거되면 원을 따라 과정을 계속하고 7명의 사람이 모두 제거될 때까지 계속된다.
 *
 */
