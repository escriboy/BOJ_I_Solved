const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map(x => +x);

let second = input[0] + input[1] + input[2] + input[3];

const minute = Math.floor(second / 60);
second = second - minute * 60;

console.log(minute);
console.log(second);
