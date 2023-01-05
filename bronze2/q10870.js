const input = require('fs').readFileSync('dev/stdin').toString().trim();

const num = +input;

const sequence = [0, 1];

const findFibonacci = function (number) {
  if (number === 0) console.log(sequence[0]);
  else if (number === 1) console.log(sequence[1]);
  else {
    for (let i = 0; i < number - 1; i++) {
      sequence.push(sequence[i] + sequence[i + 1]);
    }
    console.log(sequence.pop());
  }
};
findFibonacci(num);
