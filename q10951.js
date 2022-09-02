const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(' ').map((item) => Number(item));
  console.log(numbers[0] + numbers[1]);
}
