const input = require('fs').readFileSync('dev/stdin').toString().trim();

const result = num => {
  let answer = '';
  const oct = input.split('');

  oct.forEach((i, j) => {
    let binary = parseInt(i, 8).toString(2);
    while (j !== 0 && binary.length < 3) {
      binary = '0' + binary;
    }
    answer += binary;
  });

  return answer;
};

console.log(result(input));
