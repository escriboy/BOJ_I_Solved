const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sub;
let sum = 0;
let passenger = [];

for (let i = 0; i < input.length; i++) {
  sub = input[i].split(' ').map(Number);
  sum += sub[1] - sub[0];
  passenger.push(sum);
}

passenger.sort((a, b) => b - a);
console.log(passenger[0]);

/* 1) input[i].split(' ').map(Number) 을 이용해 내린사람과 탄 사람 나누기
내린 사람은 마이너스(-), 탄 사람은 플러스(+)해 준다.
i를 돌 때마다 현재 탄 사람이 몇 명인지 센다. (배열에 집어넣기?)
sort 메서드를 이용해 오름차순 정렬한 뒤, 첫 번째 값을 출력한다.

승객을 구하는 공식 

*/
