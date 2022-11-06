const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const moneyArr = [350.34, 230.9, 190.55, 125.3, 180.9];

const arr = input.slice(1);

result = '$';

for (const i of arr) {
  const numArr = i.split(' ').map(Number);
  let money = 0;
  for (let j = 0; j < numArr.length; j++) {
    money += numArr[j] * moneyArr[j];
  }
  money = money.toFixed(2);
  result += money;
  console.log(result);
  result = '$';
}
