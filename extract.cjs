const fs = require('fs');
const path = require('path');

const files = [
  '../brewing-theory-syllabus.html',
  '../espresso-theory-syllabus.html',
  '../roasting-theory-syllabus.html'
];

fs.mkdirSync('./src/data', { recursive: true });

for (let file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const name = path.basename(file).replace('-theory-syllabus.html', '');
  
  let dataStr = '';
  // Match `const DATA = { ... };` or `const DATA = [ ... ];`
  const objMatch = content.match(/const DATA = (\{[\s\S]*?\n\});/);
  const arrMatch = content.match(/const DATA = (\[[\s\S]*?\n\]);/);
  
  if (objMatch) {
    dataStr = objMatch[1];
  } else if (arrMatch) {
    dataStr = arrMatch[1];
  }

  if (dataStr) {
    fs.writeFileSync(`./src/data/${name}.js`, `export const ${name}Data = ${dataStr};\n`);
    console.log('Extracted ' + name);
  } else {
    console.log('DATA not found in ' + file);
  }
}
