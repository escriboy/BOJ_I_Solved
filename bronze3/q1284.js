const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function numToArray(n) {
  let nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return nums;
}

for (let i = 0; i < input.length - 1; i++) {
  const numArr = numToArray(input[i]);
  let sum = 0;
  for (let j = 0; j < numArr.length; j++) {
    if (numArr[j] === 0) sum += 4;
    else if (numArr[j] === 1) sum += 2;
    else sum += 3;
  }
  sum = sum + 1 + numArr.length;
  console.log(sum);
}
/**
 * 숫자 사이 여백: 1cm
 * 1: 2cm, 0: 4cm, 그 외의 숫자: 3cm
 * 앞 뒤 각각 1cm
 * 2 + 2 + 4 + 3 + 2 = 13
 *
 * 마지막 0이 들어오면 끝
 *
 * 각 배열에 대해 결과값을 구하는 공식 세우기
 * 각 배열의 숫자를 나눈 배열을 다시 만들기
 *
 *
 * 1) 각 배열의 숫자를 하나의 배열로 만들어 쪼갠다.
 * 2) for문을 돌면서 각 숫자에 대한 값을 구한다.
 * 3) 양 옆의 2를 더해준다.
 * 4) 숫자가 3개면 공백이 2개 => +2
 * 5) 숫자가 4개면 공백이 3개 => +3를 해준다. (배열의 길이 -1)
 * 6) 결과값을 출력한다.
 */
