const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const information = input[0].split(' ').map(Number);
const sum = information[0];
const max_per_room = information[1];

const students = input.slice(1);
let arr = [];

for (let i = 0; i < students.length; i++) {
  if (!arr.includes(students[i])) {
    arr.push(students[i]);
  }
  // 다른 것들만 받아들이는 수식
}

const isLimit = students.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

let isLimitArr = [];

for (let objKey in isLimit) {
  if (isLimit.hasOwnProperty(objKey)) {
    isLimitArr.push(isLimit[objKey]);
  }
}

for (const i of isLimitArr) {
  if (i > max_per_room) arr.length += 1;
}

console.log(arr.length);

// 몇 개인지 세는 수식 =>

/**
 * 같은 학년 + 같은 성별 => 방배정 가능(1명부터)
 * 방의 최소 개수는?
 *
 */
// const input = [
//   '16 2',
//   '1 1',
//   '0 1',
//   '1 1',
//   '0 2',
//   '1 2',
//   '0 2',
//   '0 3',
//   '1 3',
//   '1 4',
//   '1 3',
//   '1 3',
//   '0 6',
//   '1 5',
//   '0 5',
//   '1 5',
//   '1 6',
// ];
