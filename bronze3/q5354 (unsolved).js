const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = input.slice(1);
const sharp = '#';
const J = 'J';
let result = '';

for (const i of arr) {
  if (i <= 10) {
    result += sharp.repeat(i);
    result +=
      '\n' + (sharp + J.repeat(i - 2) + sharp + ' ' + '\n').repeat(i - 2);
    result += sharp.repeat(i);

    console.log(result + ' ');
    result = '';
  }
}

/*
J에 따라 바뀌는 거 
J : 1일 때 가로 3 세로 3
J : 9일 때 가로 5 세로 5

#은 문자열인데, 문자열이 반복되어야 함.
for문 밖에 없나?

*/
