// sort 메서드 사용

const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

let totalNumber = +input[0];
let numbers = input[1].split(' ').map((item) => Number(item));

numbers.sort((a, b) => a - b);

console.log(`${numbers[0]} ${numbers[totalNumber - 1]}`);
