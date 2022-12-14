const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

const numA = input[0];
const numB = input[1];

const bigA = numA.replace(/5/g, '6');
const bigB = numB.replace(/5/g, '6');

const smallA = numA.replace(/6/g, '5');
const smallB = numB.replace(/6/g, '5');

const max = +bigA + +bigB;
const min = +smallA + +smallB;

console.log(min, max);
