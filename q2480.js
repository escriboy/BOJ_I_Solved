const fs = require('fs');

const inputData = fs
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

const A = inputData[0];
const B = inputData[1];
const C = inputData[2];

let money = 0;
let maxDice = 0;

if (A == B && A == C) {
  money = 10000 + A * 1000;
} else if (A == B || A == C || B == C) {
  if (A == B || A == C) {
    money = 1000 + A * 100;
  } else {
    money = 1000 + B * 100;
  }
} else {
  maxDice = Math.max(...inputData);
  money = maxDice * 100;
}

console.log(money);
