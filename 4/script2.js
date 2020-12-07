const { Console } = require('console');
const init = require('../util/init');

const byr = (str) => ((n = Number(str)), 1920 <= n && n <= 2002);
const iyr = (str) => ((n = Number(str)), 2010 <= n && n <= 2020);
const eyr = (str) => ((n = Number(str)), 2020 <= n && n <= 2030);

const hgt = (str) => {
  const n = Number(str.slice(0, -2));
  return (str.endsWith('cm') && 150 <= n && n <= 193) || (str.endsWith('in') && 59 <= n && n <= 76);
};

const hcl = (str) => /^#[0-9a-f]{6}$/.test(str);
const ecl = (str) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(str);
const pid = (str) => /^\d{9}$/.test(str);

init('\n\n').then((lines) => {
  const validators = { byr, iyr, eyr, hgt, hcl, ecl, pid };
  const requiredFields = Object.keys(validators);

  const count = lines.filter((line) => {
    const fields = line.split(/[\s+\n]/).reduce((o, kv) => {
      const [k, v] = kv.split(':');
      o[k] = v;
      return o;
    }, {});
    return requiredFields.every((reqField) => fields.hasOwnProperty(reqField) && validators[reqField](fields[reqField]));
  }).length;
  console.log(count);
});
