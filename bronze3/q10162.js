const input = require("fs").readFileSync("dev/stdin").toString().trim();

const time = +input;
const bt1 = Math.floor(time / 300);
const bt2 = Math.floor((time - bt1 * 300) / 60);
const bt3 = Math.floor((time - bt1 * 300 - bt2 * 60) / 10);

time - bt1 * 300 - bt2 * 60 - bt3 * 10 === 0
  ? console.log(`${bt1} ${bt2} ${bt3}`)
  : console.log(-1);
