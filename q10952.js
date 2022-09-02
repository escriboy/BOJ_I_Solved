const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

let i = 0;

while (true) {
  let numbers = input[i].split(' ').map((item) => Number(item)); // 1 1

  a = numbers[0];
  b = numbers[1];

  if (a == 0 && b == 0) {
    break;
  }
  console.log(a + b);
  i++;
}
