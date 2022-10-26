const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const timeA = input[0].split(':').map(Number);
const timeB = input[1].split(':').map(Number);

const secondA = timeA[0] * 3600 + timeA[1] * 60 + timeA[2];
const secondB = timeB[0] * 3600 + timeB[1] * 60 + timeB[2];

const waitSec =
  secondB < secondA ? secondB - secondA + 86400 : secondB - secondA;

let hour = Math.floor(waitSec / 3600);
let minute = Math.floor((waitSec % 3600) / 60);
let second = Math.floor((waitSec % 3600) % 60);

hour = hour + '';
minute = minute + '';
second = second + '';

const result = `${hour.padStart(2, '0')}:${minute.padStart(
  2,
  '0',
)}:${second.padStart(2, '0')}`;

console.log(result);

loream;
