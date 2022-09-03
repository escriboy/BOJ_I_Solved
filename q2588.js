const fs = require('fs');

// 첫 번째 입력과 두 번째 입력을 행으로 나눔
const inputData = fs.readFileSync('dev/stdin').toString().split('\n');

const num1 = parseInt(inputData[0]); // 128
const num2 = parseInt(inputData[1]); // 326

// 326 % 10 = 6
const oneNum = num2 % 10;
// (326 % 100) / 10 = 26 / 10 = Math.floor(2.6) => 2
const tenNum = Math.floor((num2 % 100) / 10);
// 326 / 100 = Math.floor(3.26) => 3
const hundredNum = Math.floor(num2 / 100);

// 128 * 6
console.log(num1 * oneNum);
// 128 * 2
console.log(num1 * tenNum);
// 128 * 3
console.log(num1 * hundredNum);
// 128 * 326
console.log(num1 * num2);
