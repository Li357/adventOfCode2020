const init = require('../util/init');

init('\n\n').then((lines) => {
  const reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const count = lines.filter((line) => reqFields.every((field) => line.includes(field))).length;
  console.log(count);
});
