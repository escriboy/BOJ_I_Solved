const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

// let total = +input[0]; // 5 (테스트케이스의 개수)

for (let i = 1; i <= input[0]; i++) {
  // i = 1, 2, 3, 4, 5
  let nums = input[i].split(' ').map((item) => Number(item)); // 1 1
  console.log(`Case #${i}: ${nums[0] + nums[1]}`); // 1 + 1 = 2
}
