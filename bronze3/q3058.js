const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const count = +input[0];

const findEvenNum = function (arr) {
  let sum = 0;
  const newArr = [];
  for (const i of arr) {
    if (i % 2 === 0) {
      sum += i;
      newArr.push(i);
    }
  }
  newArr.sort((a, b) => a - b);
  console.log(sum, newArr[0]);
};

for (let i = 1; i <= count; i++) {
  const arr = input[i].split(' ').map(Number);
  findEvenNum(arr);
}
