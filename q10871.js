const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

const arrayInfo = input[0].split(' '); // 10 5
// const total = +arrayInfo[0]; // 10
const limit = +arrayInfo[1]; // 5

let filteredNumbers = input[1]
  .split(' ')
  .map((item) => Number(item))
  .filter((number) => number < limit);

let result = '';

// 공백으로 구분해 출력 => for문 사용
for (let i = 0; i <= filteredNumbers.length - 1; i++) {
  result += filteredNumbers[i] + ' ';
}

console.log(result);
