const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const spotA = input[0].split(' ').map(Number);
const spotB = input[1].split(' ').map(Number);
const spotC = input[2].split(' ').map(Number);
const spotD = [];

const findSpot = function (el) {
  if (spotA[el] === spotB[el]) {
    spotD.push(spotC[el]);
  } else if (spotA[el] === spotC[el]) {
    spotD.push(spotB[el]);
  } else {
    spotD.push(spotA[el]);
  }
};

findSpot(0);
findSpot(1);

console.log(spotD.join(' '));

/*
  좌표가 x축 y축으로 찍힘
  둘 둘씩 짝이 지어져야 함
  */
