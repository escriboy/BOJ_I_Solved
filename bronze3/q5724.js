const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.pop();

const arr = input;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = arr[i]; j > 0; j--) {
    sum += j * j;
  }
  console.log(sum);
}

/*

2 => 2*2 + 1
3 => 3*3 + 2*2 + 1
4 => 4*4 + 3*3 + 2*2 + 1

a = a*a + (a-1)*(a-1) + ... + 1



*/
