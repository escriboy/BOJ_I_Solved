const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let totArr = [];
for (let i = 0; i < 9; i++) {
  totArr.push(input[i].split(' ').map(Number));
}

let flatArr = totArr.flat();

// 1) 최댓값 구하기
let maxVal = flatArr.slice().sort((a, b) => b - a)[0];
console.log(maxVal);

// 2) 몇 행 몇 열인지 구하기
const maxNumIdx = flatArr.indexOf(maxVal);
const h = Math.floor(maxNumIdx / 9) + 1;
const y = (maxNumIdx % 9) + 1;
console.log(h, y);
