const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let number;

for (let i = 0; i < input.length; i++) {
  number = input[i].split(' ').map(x => Number(x));
  console.log(Math.floor(number[1] / (number[0] + 1)));
}

/**
 *
 * N 이 S를 동등하게 나눠 가진다.
 * 1이 100을 동등하게 나눠 가진다.
 * 2가 7을 동등하게 나눠 가진다.
 * S 를 N+1로 나눈다.
 */
