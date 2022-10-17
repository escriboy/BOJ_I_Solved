const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const A = input[0];
const B = input[2];
const operator = input[1];

if (operator === '*') console.log(A + B.slice(1));
if (operator === '+') {
  if (A.length > B.length) {
    console.log(A.slice(0, A.length - B.length) + B);
  } else if (B.length > A.length) {
    console.log(B.slice(0, B.length - A.length) + A);
  } else {
    console.log('2' + A.slice(1));
  }
}

/*

곱하기, 더하기를 string으로 구현하기

"*"일 경우
=> 앞은 무조건 1이고, 0 개수를 합쳐서 더하면 됨

"+"일 경우
=> 1000 + 10 = 1010
a와 b 중 더 큰 수에서 작은수의 문자 개수만큼 0을 뺀 다음 뒤에다가 작은 수를 붙이면 된다.

1000 + 1000 = 2000 = 2 + 000
1000.slice(-1)

*/
