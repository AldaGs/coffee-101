const fs = require('fs');

function extractTitles(dir, prefix) {
  const files = fs.readdirSync(dir).filter(f => f.match(/^m\d+\.js$/));
  files.sort();
  files.forEach(f => {
    const text = fs.readFileSync(dir + '/' + f, 'utf8');
    const titles = text.match(/"title":\s*"([^"]+)"/g);
    const topics = text.match(/"t":\s*"([^"]+)"/g);
    console.log(`\n=== ${prefix}/${f} ===`);
    if (titles) titles.forEach(t => console.log('  Module:', t));
    if (topics) {
      const enTopics = [];
      // Only grab first half (EN topics)
      const enSection = text.split('"es"')[0];
      const tMatches = enSection.match(/"t":\s*"([^"]+)"/g);
      if (tMatches) tMatches.forEach(t => console.log('    Topic:', t));
    }
  });
}

const dirs = [
  ['src/data/brewing', 'brewing'],
  ['src/data/espresso', 'espresso'],
  ['src/data/roasting', 'roasting'],
  ['src/data/roasting2', 'roasting2'],
  ['src/data/agronomy', 'agronomy'],
  ['src/data/sensory', 'sensory'],
];

dirs.forEach(([dir, name]) => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`COURSE: ${name}`);
  console.log('='.repeat(60));
  extractTitles(dir, name);
});
