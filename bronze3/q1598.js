const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const firstNum = input[0];
const secondNum = input[1];

let height;
let length;

if (firstNum % 4 === 0 && secondNum % 4 === 0) {
  height = 0;
} else if (firstNum % 4 !== 0 && secondNum % 4 === 0) {
  height = 4 - (firstNum % 4);
} else if (firstNum % 4 === 0 && secondNum % 4 !== 0) {
  height = 4 - (secondNum % 4);
} else {
  height = Math.abs((secondNum % 4) - (firstNum % 4));
}

if (firstNum % 4 === 0 && secondNum % 4 === 0) {
  length = Math.abs(Math.floor(secondNum / 4) - Math.floor(firstNum / 4));
} else if (firstNum % 4 !== 0 && secondNum % 4 === 0) {
  length = Math.abs(Math.floor(secondNum / 4) - Math.floor(firstNum / 4)) - 1;
} else if (firstNum % 4 === 0 && secondNum % 4 !== 0) {
  length = Math.abs(Math.floor(secondNum / 4) - Math.floor(firstNum / 4)) + 1;
} else {
  length = Math.abs(Math.floor(secondNum / 4) - Math.floor(firstNum / 4));
}

console.log(height + length);

// let length =
//   firstNum % 4 === 0 || secondNum % 4 === 0
//     ? Math.abs((secondNum % 4) - (firstNum % 4)) - 1
//     : Math.abs(Math.floor(secondNum / 4) - Math.floor(firstNum / 4));

// let length => Math.abs(Math.floor(secondNum / 4) - Math.floor(firstNum / 4))
// let height => Math.abs((secondNum % 4) - (firstNum % 4))
// 둘 중 하나가 4의 배수일 때 => 수평/수직 거리
// 수평 거리 (length)=> Math.abs((secondNum % 4) - (firstNum % 4)) - 1
// 수직 거리 (height)=> 1)
// firstNum이 4의 배수일 때 : 4 - (secondNum%4),
// secondNum이 4의 배수일 때 : 4 - (firstNum%4)

// const height =
//   firstNum % 4 === 0 || secondNum % 4 === 0
//     ? Math.abs((secondNum % 4) - (firstNum % 4))
//     : Math.abs((secondNum % 4) - (firstNum % 4));
