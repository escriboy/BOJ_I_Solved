const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cases = input.slice(1);

for (let arr of cases) {
  arr = arr.split(' ');
  const H = arr[0]; // 6
  const W = arr[1]; // 12
  const N = arr[2]; // 10

  const floor = N % H === 0 ? H : N % H;
  const room = Math.floor(N % H) === 0 ? N / H : Math.floor(N / H) + 1;
  const roomNumber = room < 10 ? '0' + room : room;

  console.log(+('' + floor + roomNumber));
}

// H 가 다 차면 W를 1씩 늘려가기
