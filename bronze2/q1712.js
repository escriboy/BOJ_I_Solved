const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [A, B, C] = [input[0], input[1], input[2]];

let i = 0;

const answer = Math.floor(A / (C - B)) + 1;

B >= C ? console.log(-1) : console.log(answer);

/*

while (true) {
    if (C * i - A > B * i) {
      console.log(i);
      break;
    }
    i++;
  }

*/
