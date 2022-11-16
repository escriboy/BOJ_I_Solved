const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    // const line = input[i];
    for (let j = 0; j < input[i].length; j++) {
      if (j % 2 === 0 && input[i][j] === 'F') sum++;
    }
  } else {
    for (let j = 0; j < input[i].length; j++) {
      if (j % 2 !== 0 && input[i][j] === 'F') sum++;
    }
  }
}

console.log(sum);

/*
  홀수 라인은 홀수가 흰 색
  짝수 라인은 짝수가 흰 색
  8*8 = 64
  */
