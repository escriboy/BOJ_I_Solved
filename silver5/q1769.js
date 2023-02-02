let input = require('fs').readFileSync('dev/stdin').toString().trim();

let sum = 0;
let count = 0;

while (true) {
  for (let i = 0; i < input.length; i++) {
    sum += Number(input[i]);
  }
  if (sum >= 10) {
    input = sum + '';
    sum = 0;
    count++;
  } else {
    count++;
    sum % 4 === 0
      ? console.log(count + '\n' + 'YES')
      : console.log(count + '\n' + 'NO');
    break;
  }
}
