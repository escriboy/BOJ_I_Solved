const fs = require('fs');

const inputData = fs.readFileSync(0).toString().split('\n');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

if (A >= -1000 && A <= 1000 && B >= -1000 && B <= 1000 && A != 0 && B != 0) {
  if (A > 0 && B > 0) {
    console.log(1);
  } else if (A < 0 && B > 0) {
    console.log(2);
  } else if (A > 0 && B < 0) {
    console.log(4);
  } else if (A < 0 && B < 0) {
    console.log(3);
  }
}
