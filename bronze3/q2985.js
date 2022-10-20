const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const numA = input[0];
const numB = input[1];
const numC = input[2];

if (numA + numB === numC) console.log(`${numA}+${numB}=${numC}`);
if (numA - numB === numC) console.log(`${numA}-${numB}=${numC}`);
if (numA * numB === numC) console.log(`${numA}*${numB}=${numC}`);
if (numA / numB === numC) console.log(`${numA}/${numB}=${numC}`);

if (numA === numB + numC) console.log(`${numA}=${numB}+${numC}`);
if (numA === numB - numC) console.log(`${numA}=${numB}-${numC}`);
if (numA === numB * numC) console.log(`${numA}=${numB}*${numC}`);
if (numA === numB / numC) console.log(`${numA}=${numB}/${numC}`);

/* 
  
  경우의 수를 나누자. 
  우선 등호(=)는 
  
  input[0] 과 input[1] 사이 혹은
  input[1]과 input[2] 사이에 올 수 있다.
  


  */
