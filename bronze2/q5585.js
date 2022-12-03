const input = require("fs").readFileSync("dev/stdin").toString().trim();

let money = 1000 - +input;
let sum = 0;

if (money >= 500) {
  sum += Math.floor(money / 500);
  money = money - Math.floor(money / 500) * 500;
}

if (money >= 100) {
  sum += Math.floor(money / 100);
  money = money - Math.floor(money / 100) * 100;
}

if (money >= 50) {
  sum += Math.floor(money / 50);
  money = money - Math.floor(money / 50) * 50;
}

if (money >= 10) {
  sum += Math.floor(money / 10);
  money = money - Math.floor(money / 10) * 10;
}

if (money >= 5) {
  sum += Math.floor(money / 5);
  money = money - Math.floor(money / 5) * 5;
}

if (money >= 1) {
  sum += money % 10;
}

console.log(sum);
