const [nm, ...arr] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

// n 세로 m 가로
const [n, m] = nm.split(' ').map(Number);

function solution(n, m, arr) {
  let row = 0,
    col = 0,
    cnt = 0;

  // row check
  for (let i = 0; i < n; i++) {
    if (!arr[i].includes('X')) {
      row++;
    }
  }

  // column check
  for (let j = 0; j < m; j++) {
    cnt = 0;
    for (let k = 0; k < n; k++) {
      if (arr[k][j] === 'X') {
        cnt++;
      }
      if (k === n - 1 && cnt === 0) {
        col++;
      }
    }
  }

  // 둘 중 큰 수 리턴
  return Math.max(row, col);
}

console.log(solution(n, m, arr));
