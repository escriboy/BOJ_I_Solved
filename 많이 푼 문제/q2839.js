const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = Number(input);
let results = [];
let answer;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (5 * i + 3 * j != N) {
      continue;
    } else {
      results.push(i + j);
    }
  }
}

if (results.length === 0) {
  answer = -1;
} else {
  answer = Math.min(...results);
}

// 1) 결과값 중 i가 더 큰 것을 log한다. (어디에다 저장해두었다가 꺼내기?)
// 2) 결과값이 나오지 않으면 -1 log한다.
