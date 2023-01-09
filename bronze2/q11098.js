const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let arr = input.slice(1);
let yet = true;
while (yet) {
  let max = 0;
  let buy_who = '';
  for (let i = 1; i <= arr[0]; i++) {
    let player = arr[i].split(' ');
    let price = +player[0];
    let name = player[1];
    if (max < price) {
      max = price;
      buy_who = name;
    }
  }
  console.log(buy_who);
  arr = arr.slice(+arr[0] + 1);
  if (arr.length === 0) yet = false;
}
