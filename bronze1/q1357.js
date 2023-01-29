const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

const revX = +input[0].split('').reverse().join('');
const revY = +input[1].split('').reverse().join('');

const result = +(revX + revY + '').split('').reverse().join('');
console.log(result);
