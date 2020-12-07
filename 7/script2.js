const init = require('../util/init');

function countBags(map, { color }) {
  if (!map[color]) return 0;
  return map[color].reduce((total, child) => total + child.number + child.number * countBags(map, child), 0);
}

init().then((rules) => {
  const map = rules.reduce((o, rule) => {
    const [parent, rawContents] = rule.split(' bags contain ');
    if (rawContents.includes('no other bags')) {
      return o;
    }

    const children = rawContents
      .split(/ bags?[\.,]\s*/)
      .slice(0, -1)
      .map((bag) => {
        const { number, color } = bag.match(/(?<number>\d+) (?<color>.+)/).groups;
        return { number: Number(number), color };
      });
    o[parent] = children;
    return o;
  }, {});
  const count = countBags(map, { number: 1, color: 'shiny gold' });
  console.log(count);
});
