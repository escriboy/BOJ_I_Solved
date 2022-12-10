const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

for (const letter of input) {
  let answer = [0, 0, 0, 0];
  if (letter !== "") {
    for (let i = 0; i < letter.length; i++) {
      if (
        letter[i] !== letter[i].toUpperCase() &&
        letter[i] === letter[i].toLowerCase()
      )
        answer[0] += 1;

      if (
        letter[i] !== letter[i].toLowerCase() &&
        letter[i] === letter[i].toUpperCase()
      )
        answer[1] += 1;

      if (!isNaN(+letter[i]) && letter[i] !== " ") answer[2] += 1;

      if (letter[i] === " ") answer[3] += 1;
    }
    console.log(answer.join(" "));
  }
}

// const input = [
//     "This is String",
//     "SPACE    1    SPACE",
//     " S a M p L e I n P u T     ",
//     "0L1A2S3T4L5I6N7E8",
// ];
