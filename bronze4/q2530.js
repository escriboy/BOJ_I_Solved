const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let time = input[0].split(' ').map(x => Number(x));
let hour = time[0];
let minute = time[1];
let second = time[2];

const addSecond = +input[1];
let sum = second + addSecond;

minute = minute + parseInt(sum / 60);
sum %= 60;
hour = hour + parseInt(minute / 60);
minute %= 60;
hour %= 24;

console.log(hour, minute, sum);
