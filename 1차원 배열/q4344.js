const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const testCase = +input[0];

for (let i = 1; i <= testCase; i++) {
  let scores = input[i].split(' ').map((x) => Number(x));
  let numberOfStudents = scores[0];
  let sum = 0;

  for (let j = 1; j <= numberOfStudents; j++) {
    sum += scores[j];
  }

  let avg = sum / numberOfStudents;
  let overAvg = 0;

  for (let k = 1; k <= numberOfStudents; k++) {
    if (scores[k] > avg) {
      overAvg++;
    }
  }

  result = ((overAvg / numberOfStudents) * 100).toFixed(3);
  console.log(result + '%');
}
