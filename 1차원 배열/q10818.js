// Math.max, Math.min 사용

const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

let numbers = input[1].split(' ').map((item) => Number(item));

const maxValue = Math.max(...numbers);
const minValue = Math.min(...numbers);

console.log(`${minValue} ${maxValue}`);
