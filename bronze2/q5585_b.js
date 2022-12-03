const input = require("fs").readFileSync("dev/stdin").toString().trim();
// const input = "1";

let money = 1000 - +input;
const coins = [500, 100, 50, 10, 5, 1];
let sum = 0;

coins.forEach((coin) => {
  if (money >= coin) {
    const needed = Math.floor(money / coin);
    money -= needed * coin;
    sum += needed;
  }
});

console.log(sum);
