const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const campday = input[i].split(' ').map(Number);
  const L = campday[0]; // 사용 가능한 날
  const P = campday[1]; // 총 일 수(사이클)
  const V = campday[2]; // 휴가 일수
  let num = i + 1;

  let day = V % P > L ? L : V % P;
  const answer = Math.floor(V / P) * L + day;

  console.log(`Case ${num}: ${answer}`);
  num++;
}

// const input = ['5 8 20', '5 8 17', '0 0 0'];
