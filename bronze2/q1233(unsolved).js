// const input = require('fs')
//   .readFileSync('dev/stdin')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);

const input = [3, 2, 3];
const sumArr = [];

for (let i = 1; i <= input[0]; i++) {
  for (let j = 1; j <= input[1]; j++) {
    for (let k = 1; k <= input[2]; k++) {
      sumArr.push(i + j + k);
    }
  }
}

const result = sumArr.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

// console.log(result);

const asc = Object.fromEntries(
  Object.entries(result).sort(([, a], [, b]) => (a > b ? -1 : 1)),
);

console.log(asc);

/*
  1) 경우의 수에 맞게 주사위의 값을 더함 
  2) 더한 값을 배열에 저장
  3) reduce 메서드를 사용해 중복값의 개수를 각각 구하기
  4) 그 중 가장 큰 값을 반환

  */
