const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim('')
  .split('\n');

const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

console.log(
  (colors[input[0]] * 10 + colors[input[1]]) * Math.pow(10, colors[input[2]]),
);
