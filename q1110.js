const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split(' ');

let number = +input[0];
let count = 0;
let isNotSame = true;

while (isNotSame) {
  let splitNum = Array.from(number.toString()); // ['2', '6']
  if (number < 10) {
    splitNum.push('0');
  }
  let a = Number(splitNum[0]); // 2
  let b = Number(splitNum[1]); // 6
  let c = a + b; // 2+6 = 8

  number = b * 10 + (c % 10); // 60 + 8 = 68
  count++;
  if (number == input[0]) {
    console.log(count);
    isNotSame = false;
  }
}

/*  
  if (Number(number) >= 10) {
    number = splitNum[1] + (Number(splitNum[0]) + Number(splitNum[1])); // '6' + 8 = 68
  } else {
    number += '0'; // 2 => 20
    number = splitNum[1] + (Number(splitNum[0]) + Number(splitNum[1])); // '2' + 2 => 22
  }
  count++;
}

console.log(count);
*/
