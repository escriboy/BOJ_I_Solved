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

const timeToSec = function (time) {
  let h = +time.slice(0, 2);
  let m = +time.slice(3, 5);
  let s = +time.slice(6);
};

const secToTime = function (second) {
  let h = Math.floor(second / 3600) + '';
  let m = Math.floor((second % 3600) / 60) + '';
  let s = Math.floor((second % 3600) % 60) + '';
};
