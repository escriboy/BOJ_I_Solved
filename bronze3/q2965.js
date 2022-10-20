const Kangaroo = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const caseA = Kangaroo[2] - Kangaroo[1] - 1;
const caseB = Kangaroo[1] - Kangaroo[0] - 1;

caseA >= caseB ? console.log(caseA) : console.log(caseB);

/*


  Kangaroo[2] - Kangaroo[1] /// Kangaroo[1] - Kangaroo[0]

  */
