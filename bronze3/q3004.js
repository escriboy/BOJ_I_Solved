const input = require('fs').readFileSync('dev/stdin').toString().trim();

const totalSlice = +input + 2;
const lineA = Math.floor(totalSlice / 2);
const lineB = Math.round(totalSlice / 2);
const totalPiece = input === 1 ? 2 : lineA * lineB;

console.log(totalPiece);
