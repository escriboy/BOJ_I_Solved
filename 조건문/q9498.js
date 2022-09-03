const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString();
const score = parseInt(inputData);

if (score >= 0 && score <= 100) {
  if (score >= 90) {
    console.log('A');
  } else if (score >= 80 && score <= 89) {
    console.log('B');
  } else if (score >= 70 && score <= 79) {
    console.log('C');
  } else if (score >= 60 && score <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}
