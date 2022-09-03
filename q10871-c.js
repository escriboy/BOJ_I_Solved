const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

const arrayInfo = input[0].split(' '); // 10 5
const limit = +arrayInfo[1]; // 5

let filteredNumbers = input[1]
  .split(' ')
  .map((item) => Number(item))
  .filter((number) => number < limit);

console.log(filteredNumbers.join(' '));
