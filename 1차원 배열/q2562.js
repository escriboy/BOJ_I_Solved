// sort 메서드 사용

const fs = require('fs');

const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((item) => Number(item));

let max = input[0];
let num = 0;

console.log(max);
console.log(num + 1);

// 최대값은 구할 수 있는데, 최대값이 몇 번째 수인지는 어떻게 구할까
