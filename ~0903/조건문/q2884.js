const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split(' ');

const hour = parseInt(inputData[0]);
const minute = parseInt(inputData[1]);

if (minute - 45 >= 0) {
  console.log(`${hour} ${minute - 45}`);
} else if (minute - 45 < 0) {
  if (hour == 0) {
    console.log(`${hour + 23} ${minute + 15}`);
  } else {
    console.log(`${hour - 1} ${minute + 15}`);
  }
}
