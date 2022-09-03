const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split('\n');

const a = parseInt(inputData[0].split(' ')[0]);
const b = parseInt(inputData[0].split(' ')[1]);
const c = parseInt(inputData[1]);

let d = b + c;
let e = Math.floor(d / 60);

if (e >= 1) {
  if (a + e >= 24) {
    console.log(`${a + e - 24} ${d - e * 60}`);
  } else {
    console.log(`${a + e} ${d - e * 60}`);
  }
} else {
  console.log(`${a} ${d}`);
}
