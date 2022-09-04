const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const uniqueNumbers = [];

input.forEach((x) => {
  // 배열 요소 각각에 대해 실행
  const num = x % 42;

  if (uniqueNumbers.indexOf(num) === -1) {
    // 일치하는 값이 없으면 uniqueNumbers 배열에 값을 push한다.
    uniqueNumbers.push(num);
  }
});

console.log(uniqueNumbers.length);
