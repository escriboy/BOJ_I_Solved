const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map(x => +x);

const bacationDay = input[0];
const gukPage = input[1];
const matPage = input[2];
const gukPerDay = input[3];
const matPerDay = input[4];

const solveGukDay =
  gukPage % gukPerDay === 0
    ? Math.floor(gukPage / gukPerDay)
    : Math.floor(gukPage / gukPerDay) + 1;
const solveMatDay =
  matPage % matPerDay === 0
    ? Math.floor(matPage / matPerDay)
    : Math.floor(matPage / matPerDay) + 1;

console.log(
  `${
    solveGukDay >= solveMatDay
      ? bacationDay - solveGukDay
      : bacationDay - solveMatDay
  }`,
);

// const solveDay =

/**
 * L : 방학의 총 일 수
 * A : 국어 페이지 수
 * B : 수학 페이지 수
 * C : 하루에 최대 풀 수 있는 국어 페이지 수
 * D : 하루에 최대 풀 수 있는 수학 페이지 수
 *
 * 상근이가 최대 놀 수 있는 날을 구하려면 어떻게 해야 할까?
 * 1) 상근이가 놀 수 있는 날 = 방학의 일 수 - 문제를 푸는 데 걸리는 일 수
 * 2) 수학이든 국어든 둘 중 큰 값이 놀 수 있는 날을 결정한다.
 * 3) %해서 나머지가 0이면 몫이 총 걸리는 일 수가 된다.
 * 4) %해서 나머지가 0이 아니면 몫 + 1이 총 걸리는 일 수가 된다.
 *
 */
