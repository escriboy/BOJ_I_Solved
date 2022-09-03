const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

// let T = +input[0];

for(let i = 1; i<=input[0]; i++) {
  let nums = input[i].split(' ').map((item) => Number(item));
  console.log(`Case #${i}: ${nums[0]} + ${nums[1]} = ${nums[0]+nums[1]}`);
}