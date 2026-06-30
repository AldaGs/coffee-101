import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { roastingData } from './src/data/roasting.js';
import { brewingData } from './src/data/brewing.js';
import { espressoData } from './src/data/espresso.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'src', 'data');

function writeModule(courseName, isBilingual, data) {
  const courseDir = path.join(dataDir, courseName);
  if (!fs.existsSync(courseDir)) {
    fs.mkdirSync(courseDir, { recursive: true });
  }

  let indexContent = `// Assembled ${courseName} data\n`;
  let numModules = 0;

  if (isBilingual) {
    // data is { en: [...], es: [...] }
    numModules = data.en.length;
    for (let i = 0; i < numModules; i++) {
      const mIdx = i + 1;
      const modObj = {
        en: data.en[i],
        es: data.es[i]
      };
      
      const fileContent = `export default ${JSON.stringify(modObj, null, 2)};\n`;
      fs.writeFileSync(path.join(courseDir, `m${mIdx}.js`), fileContent);
      indexContent += `import m${mIdx} from './m${mIdx}';\n`;
    }

    indexContent += `\nexport const ${courseName}Data = {\n`;
    indexContent += `  en: [\n`;
    for (let i = 1; i <= numModules; i++) indexContent += `    m${i}.en${i < numModules ? ',' : ''}\n`;
    indexContent += `  ],\n`;
    indexContent += `  es: [\n`;
    for (let i = 1; i <= numModules; i++) indexContent += `    m${i}.es${i < numModules ? ',' : ''}\n`;
    indexContent += `  ]\n`;
    indexContent += `};\n`;
  } else {
    // data is [...]
    numModules = data.length;
    for (let i = 0; i < numModules; i++) {
      const mIdx = i + 1;
      const fileContent = `export default ${JSON.stringify(data[i], null, 2)};\n`;
      fs.writeFileSync(path.join(courseDir, `m${mIdx}.js`), fileContent);
      indexContent += `import m${mIdx} from './m${mIdx}';\n`;
    }
    
    indexContent += `\nexport const ${courseName}Data = [\n`;
    for (let i = 1; i <= numModules; i++) indexContent += `  m${i}${i < numModules ? ',' : ''}\n`;
    indexContent += `];\n`;
  }

  fs.writeFileSync(path.join(courseDir, 'index.js'), indexContent);
}

writeModule('roasting', false, roastingData);
writeModule('brewing', true, brewingData);
writeModule('espresso', true, espressoData);

console.log('Refactor complete.');
