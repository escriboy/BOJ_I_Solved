// const input = require('fs')
//   .readFileSync('dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

const input = [
  '16 2',
  '1 1',
  '0 1',
  '1 1',
  '0 2',
  '1 2',
  '0 2',
  '0 3',
  '1 3',
  '1 4',
  '1 3',
  '1 3',
  '0 6',
  '1 5',
  '0 5',
  '1 5',
  '1 6',
];

const information = input[0].split(' ').map(Number);
const sum = information[0];
const max = information[1];

const students = input.slice(1);

for (let i = 0; i < students.length; i++) {}

/**
 * 같은 학년 + 같은 성별 => 방배정 가능(1명부터)
 * 방의 최소 개수는?
 *
 */
