const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let time = input[1].split(' ').map(Number);
let ySum = 0;
let mSum = 0;

for (let i = 0; i < time.length; i++) {
  ySum +=
    time[i] % 30 === 0 ? (time[i] / 30 + 1) * 10 : Math.ceil(time[i] / 30) * 10;
  mSum +=
    time[i] % 60 === 0 ? (time[i] / 60 + 1) * 15 : Math.ceil(time[i] / 60) * 15;
}

if (mSum === ySum) console.log('Y M' + mSum);
else if (mSum > ySum) console.log('Y' + ySum);
else console.log('M' + mSum);
