const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.pop();

for (const arr of input) {
  const newArr = arr.split(' ').map(Number);
  newArr.sort((a, b) => a - b);
  Math.pow(newArr[0], 2) + Math.pow(newArr[1], 2) === Math.pow(newArr[2], 2)
    ? console.log('right')
    : console.log('wrong');
}
