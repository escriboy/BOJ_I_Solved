const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let testArr = input.slice(1);
let count = 0;

const rsp = function (arr) {
  for (const i of arr) {
    const test = i.split(' ');
    const player1 = test[0];
    const player2 = test[1];

    if (player1 === 'R') {
      if (player2 === 'S') count++;
      if (player2 === 'P') count--;
    } else if (player1 === 'S') {
      if (player2 === 'R') count--;
      if (player2 === 'P') count++;
    } else if (player1 === 'P') {
      if (player2 === 'R') count++;
      if (player2 === 'S') count--;
    }
  }
  if (count > 0) console.log('Player 1');
  if (count === 0) console.log('TIE');
  if (count < 0) console.log('Player 2');
};

for (let i = 0; i < testArr.length; i++) {
  if (typeof +testArr[i] === 'number' && !isNaN(+testArr[i])) {
    let arr = testArr.slice(i + 1, Number(testArr[i]) + (i + 1));

    rsp(arr);
    count = 0;
  }
}
