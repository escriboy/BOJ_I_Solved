const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

let num1 = input[0];
let num2 = input[1];

const num1_arr = [];
const num2_arr = [];

let sum = 0;

const splitNumber = function (number, arr) {
  for (let i = 1; i <= number.length; i++) {
    let test = number.slice(0, i);
    arr.push(test % 10);
  }
  return arr;
};

splitNumber(num1, num1_arr);
splitNumber(num2, num2_arr);

for (const first of num1_arr) {
  for (const second of num2_arr) {
    sum += first * second;
  }
}

console.log(sum);
