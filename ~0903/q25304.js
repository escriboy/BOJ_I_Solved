const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let total = +input[0];
let cnt = +input[1];
let sum = 0;

// i=2인 이유 = input[2]부터 영수증에 개별 금액이 찍히므로
// i<= cnt + 1인 이유 = cnt:3이면 3개의 물건을 받아야 함, 그러면 i<= input[2] ~ input[4] = input[3+1] 이므로

for (let i = 2; i <= cnt + 1; i++) {
  let newArr = input[i].split(' ').map((item) => Number(item));
  // i가 1씩 증가할 때마다 newArr에는 [0]과 [1]에 각각 새로운 변수가 담긴다.
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? 'Yes' : 'No');
