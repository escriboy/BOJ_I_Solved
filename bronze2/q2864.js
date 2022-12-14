const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

let min = 0;
let max = 0;
for (const nums of input) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === '5') max += Math.pow(10, nums.length - i - 1);
    if (nums[i] === '6') min -= Math.pow(10, nums.length - i - 1);
  }
  min += +nums;
  max += +nums;
}

console.log(min, max);
