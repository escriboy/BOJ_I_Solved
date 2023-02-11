const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = Number(input);

const Fibonacci = [0, 1];
let i = 0;
while (i !== N) {
  Fibonacci.push(Fibonacci[i] + Fibonacci[i + 1]);
  i++;
}

if (N === 0) console.log(0);
else if (N === 1) console.log(1);
else console.log(Fibonacci[i]);
