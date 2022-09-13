const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((x) => Number(x));

const A = input[0];
const B = input[1];
const C = input[2];

const abc = A * B * C; // 17037300

let numArr = Array.from(abc.toString()).map(Number); // [1, 7, 0, 3, 7, 3, 0, 0]

for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < numArr.length; j++) {
    if (i === numArr[j]) {
      count++;
    }
  }
  console.log(count);
}
