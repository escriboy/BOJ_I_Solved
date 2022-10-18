const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const sumArr = [];

for (let i = 0; i < input.length; i++) {
  sumArr.push(
    input[i]
      .split(' ')
      .map(Number)
      .reduce((cur, acc) => cur + acc, 0),
  );
}

const newArr = sumArr.slice();
newArr.sort((a, b) => b - a);

console.log(sumArr.indexOf(newArr[0]) + 1, newArr[0]);

/*

각 입력 값의 합을 구한 뒤 sumArr 배열에 저장한다.
i + 1의 값, sumArr에 기록된 합을 출력한다.
*/
