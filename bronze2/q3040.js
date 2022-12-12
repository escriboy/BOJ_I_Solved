const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let sum = input.reduce((acc, cur) => {
  return acc + cur;
});

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === sum - 100) {
      console.log(
        input.filter((el) => el !== input[i] && el !== input[j]).join('\n')
      );
    }
  }
}

// const input = [7, 8, 10, 13, 15, 19, 20, 23, 25];
/**
 * 의자,접시,나이프 7개
 * 모자에 100보다 작은 양의 정수, 숫자의 합이 100
 * 아홉 개의 자연수의 합이 100일 때 그 합이 되는 7개의 숫자들을 골라라
 *
 */
