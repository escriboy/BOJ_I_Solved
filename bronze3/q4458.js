const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const newArr = input.slice(1);

const convertFirstLetter = function (title) {
  const titleCase = title.split(' ');
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  titleCase[0] = capitalize(titleCase[0]);

  return titleCase.join(' ');
};

for (const i of newArr) {
  console.log(convertFirstLetter(i));
}

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };
