const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((x) => Number(x));

let month = input[0];
let day = input[1];

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let number = 0;

for (let i = 0; i < month - 1; i++) {
  number += date[i];
}

number += day;

console.log(week[number % 7]);
