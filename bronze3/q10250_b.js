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

  let floor = 0;
  let roomNumber = 0;

  if (N % H === 0) {
    floor = H;
    roomNumber = N / H;
  } else {
    floor = N % H;
    roomNumber = Math.floor(N / H) + 1;
  }
  if (roomNumber < 10) roomNumber = `0${roomNumber}`;

  console.log(`${floor}${roomNumber}`);
}
