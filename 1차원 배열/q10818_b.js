// if문 사용

const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

const totalNumber = +input[0];

let numbers = input[1].split(' ').map((item) => Number(item));

let max = number[0];
let min = number[0];

for (let i = 1; i < totalNumber; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
