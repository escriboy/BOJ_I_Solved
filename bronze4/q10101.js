const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map(x => +x);

if (input[0] === input[1] && input[0] === input[2] && input[0] === 60) {
  console.log('Equilateral');
} else if (input[0] + input[1] + input[2] === 180) {
  if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2]) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
} else {
  console.log('Error');
}
