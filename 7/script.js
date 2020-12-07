const init = require('../util/init');

function hasShinyGoldBag(map, bag) {
  if (bag === 'shiny gold') return true;
  if (!map[bag]) return false;
  for (const child of map[bag]) {
    if (hasShinyGoldBag(map, child)) return true;
  }
  return false;
}

init().then((rules) => {
  const map = rules.reduce((o, rule) => {
    const [parent, rawContents] = rule.split(' bags contain ');
    const children = rawContents
      .replace(/\d+\s+/g, '')
      .split(/ bags?[\.,]\s*/)
      .slice(0, -1);
    o[parent] = children;
    return o;
  }, {});
  const count = Object.keys(map).filter((bag) => bag !== 'shiny gold' && hasShinyGoldBag(map, bag)).length;
  console.log(count);
});
