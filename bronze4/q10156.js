const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

const K = input[0];
const N = input[1];
const M = input[2];

const money = K * N - M >= 0 ? console.log(K * N - M) : console.log(0);

/**
 * K : 과자 한 개의 가격
 * N : 사려고 하는 과자의 개수
 * M : 가진 돈의 액수
 * => 동수가 부모님께 받아야 하는 모자란 돈 => K * N - M => 음수이면 0을 출력
 */
