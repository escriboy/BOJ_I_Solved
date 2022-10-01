const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const m = +input.shift(); // 첫 번째 요소 제거 : 4

let arr = [0, 1, 2, 3];

for (let i = 0; i < m; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  let a = arr.indexOf(x);
  let b = arr.indexOf(y);

  arr[a] = b;
  arr[b] = a;
}

console.log(arr[1]);
