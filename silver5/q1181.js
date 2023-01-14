const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const words = input.slice(1);
const orderedArr = words
  .sort()
  .sort((x, y) => x.length - y.length)
  .filter((v, i) => words.indexOf(v) === i);

console.log(orderedArr.join('\n'));
