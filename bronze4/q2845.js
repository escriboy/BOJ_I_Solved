const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const info = input[0].split(' ');
const people = info[0] * info[1];

const guessList = input[1].split(' ').map(x => +x);

const result = guessList.map(e => e - people);

console.log(...result);

/*
 * 사람의 수: 1당 1, 총 10m => 1 * 10 = 100
 * 사람의 수: 1당 5, 총 20m2 => 5 * 20 = 100
 * input[0]의 두 수를 더한 값이 총 사람의 수
 * input[1]과 각각 비교 => 10 - 10 = 0, 99(input[1]의 입력값) - 100(총 인원 수)
 */
