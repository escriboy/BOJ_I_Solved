//아직 못 품

let notSelfNumber = [];
var range = [...Array(101)].map((v, k) => k);

for (let i = 1; i <= 30; i++) {
  let result = 0;
  let numString = i.toString(); // '3567'
  let numDigit = numString.length; // 4

  for (let j = 0; j < numDigit; j++) {
    result += Number(numString[j]); // 3 + 5 + 6 + 7
    notSelfNumber.push(i + result);
  }
}
// console.log(notSelfNumber);
