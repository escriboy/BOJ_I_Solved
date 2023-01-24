// 메모리 초과
const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [e, s, m] = [...input];
let count = 1;

while (true) {
  if (
    (count - e) % 15 === 0 &&
    (count - s) % 28 === 0 &&
    (count - m) % 19 === 0
  ) {
    console.log(count);
    break;
  }
  count++;
}
