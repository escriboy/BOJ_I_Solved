const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const place = input[0]; // 시험장 개수 ( === peopleArr.length)
const peopleArr = input[1].split(" ").map(Number); // 시험장 별 응시자 수
const adminArr = input[2].split(" ").map(Number); // 감시할 수 있는 응시자 수(총감, 부감)

let sum = 0;

for (let i = 0; i < place; i++) {
  const people = peopleArr[i]; // 시험장
  const admin1 = adminArr[0]; // 총감독(1명)
  const admin2 = Math.floor((people - admin1) / adminArr[1]) + 1; // 부감독(n명)

  if (people - admin1 <= 0) {
    // 총감독 1명만 필요한 경우
    sum += 1;
  } else {
    // 나머지가 없는 경우와 있는 경우 나누기
    sum += (people - admin1) % adminArr[1] === 0 ? admin2 : admin2 + 1;
  }
}

console.log(sum);

// 총감독은 1명이니까 필요한 감독 구하는 공식은
// (해당 시험실 응시자 - 총감독이 커버할 수 있는 인원) / 부감독이 커버할 수 있는 인원 = 필요한 부감독 수
// 1) 총감독이 모두 커버 가능한 경우
// 2) 남는 경우
// 2-1) Math.floor() + 1 해주면 되지 않을까.
