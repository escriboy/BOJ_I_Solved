const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split('\n');

const num1 = parseInt(inputData[0]); // 128
const num2 = parseInt(inputData[1]); // 326

const oneNum = num2 % 10;
const tenNum = Math.floor((num2 % 100) / 10);
const hundredNum = Math.floor(num2 / 100);

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hundredNum);
console.log(num1 * num2);
