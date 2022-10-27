const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const timeToSec = function (time) {
  let h = +time.slice(0, 2);
  let m = +time.slice(3, 5);
  let s = +time.slice(6);

  return h * 3600 + m * 60 + s;
};

const secToTime = function (second) {
  let h = Math.floor(second / 3600) + '';
  let m = Math.floor((second % 3600) / 60) + '';
  let s = Math.floor((second % 3600) % 60) + '';

  return `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`;
};

const secondA = timeToSec(input[0]);
const secondB = timeToSec(input[1]);

const waitSec =
  secondB < secondA ? secondB - secondA + 86400 : secondB - secondA;

console.log(secToTime(waitSec));
