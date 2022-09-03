const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

let info = input[0].split(' ').map((item) => Number(item)); // 10 5
let total = info[0]; // 10
let limit = info[1]; // 5

let numbers = input[1].split(' ').map((item) => Number(item)); // [1, 10, 4, 9, 2, 3, 8, ...]

result = '';

for (let i = 0; i < total; i++) {
  if (numbers[i] < limit) {
    result += numbers[i] + ' ';
  }
}

console.log(result);
