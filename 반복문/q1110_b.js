const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split(' ');

let number = +input[0];
let count = 0;
let isNotSame = true;

while (isNotSame) {
  let a = Math.floor(number / 10); // 십의 자리
  let b = number % 10; // 일의 자리
  let c = a + b;
  number = b * 10 + (c % 10);
  count++;
  if (number == input[0]) {
    console.log(count);
    isNotSame = false;
  }
}
