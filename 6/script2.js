const init = require('../util/init');

init('\n\n').then((lines) => {
  const sum = lines
    .map((group) => {
      const noMembers = group.split('\n').length;
      const dict = group
        .split('')
        .filter((char) => char !== '\n')
        .reduce(
          (o, letter) => {
            o.seen[letter] = o.seen[letter] || 0;
            if (++o.seen[letter] === noMembers) {
              o.all[letter] = 1;
            }
            return o;
          },
          { seen: {}, all: {} },
        );
      return Object.keys(dict.all).length;
    })
    .reduce((a, b) => a + b, 0);
  console.log(sum);
});
