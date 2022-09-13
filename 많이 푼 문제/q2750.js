const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((x) => Number(x));

const number = input[0]; // 5
let newArr = [];

for (let i = 1; i <= number; i++) {
  newArr.push(input[i]);
}

newArr.sort(function (a, b) {
  return a - b;
});

for (let j = 0; j < newArr.length; j++) {
  console.log(newArr[j]);
}
