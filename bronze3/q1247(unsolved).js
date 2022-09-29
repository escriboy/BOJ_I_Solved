const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map(BigInt);

const firstCase = input[0]; // input[0], 3
const secondCase = input[firstCase + 1]; // input[4], 10 => input[5] + ... + input[14]
const thirdCase = input[firstCase + secondCase + 2]; // 3 + 10 + 2 = input[15], 6  => input[15] => input[16] + ... + input[21]
let sum1,
  sum2,
  sum3 = 0;

for (let i = 1; i <= firstCase; i++) {
  sum1 += input[i];
}
// i = 5 ~ 14 // 3+2 , <= 3 + 1 + 10 = 14
for (let j = firstCase + 2; j <= secondCase + firstCase + 1; j++) {
  sum2 += input[i];
}
// 3 + 10 + 2 = 15 , <= 21 = 3 + 10 + 6 + 2
for (
  let k = firstCase + secondCase + 2;
  k <= firstCase + secondCase + thirdCase + 2;
  k++
) {
  sum3 += input[i];
}

const findValue = function (val) {
  if (val > 0) console.log('+');
  else if (val < 0) console.log('-');
  else console.log(0);
};

findValue(sum1);
findValue(sum2);
findValue(sum3);

// Big int 사용?
// n 개의 정수 => 합 구하는 for문 작성하기 (몇 개인지 모름))
// 첫 번째 테스트 => input[0] 개, input[1]~input[input[0]]
// 두 번째 테스트 => input[input[0]+1] 개,
