const input = require("fs").readFileSync("dev/stdin").toString().trim();

const dials = [
  {
    id: ["A", "B", "C"],
    num: 2,
  },
  {
    id: ["D", "E", "F"],
    num: 3,
  },
  {
    id: ["G", "H", "I"],
    num: 4,
  },
  {
    id: ["J", "K", "L"],
    num: 5,
  },
  {
    id: ["M", "N", "O"],
    num: 6,
  },
  {
    id: ["P", "Q", "R", "S"],
    num: 7,
  },
  {
    id: ["T", "U", "V"],
    num: 8,
  },
  {
    id: ["W", "X", "Y", "Z"],
    num: 9,
  },
];

let sum = 0;

for (let i = 0; i < input.length; i++) {
  const letter = input[i];
  for (let j = 0; j < dials.length; j++) {
    if (dials[j].id.includes(letter)) {
      sum += dials[j].num + 1;
    }
  }
}
console.log(sum);
