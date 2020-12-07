const init = require('../util/init');

init('\n\n').then((lines) => {
  const sum = lines
    .map((group) => {
      const dict = group
        .split('')
        .filter((char) => char !== '\n')
        .reduce((o, letter) => ((o[letter] = 1), o), {});
      return Object.keys(dict).length;
    })
    .reduce((a, b) => a + b, 0);
  console.log(sum);
});
