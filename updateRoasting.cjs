const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'roasting.js');
let content = fs.readFileSync(filePath, 'utf8');

const t1Content = `
content: \`Green coffee is essentially a dense, woody seed composed of around 50% carbohydrates (mostly insoluble cellulose and hemicellulose). This forms the structural matrix or "scaffold" of the bean. The remaining composition includes water (8-12%), lipids, proteins, chlorogenic acids, and soluble sugars (like sucrose).

**The Role of Moisture**
Moisture isn't just a quality specification to prevent mold; it's a critical process variable. The initial water content conducts heat into the center of the bean during the early stages of roasting. Beans with higher moisture require more energy upfront to drive off that water before the Maillard reaction can fully begin. 

**Flavor Precursors**
- **Sucrose**: This is the primary sugar that will participate in caramelization and the Maillard reaction, contributing to sweetness and body. 
- **Chlorogenic Acids (CGAs)**: These are the precursors to perceived acidity, but as roasting progresses, they break down into quinic and caffeic acids, which contribute to astringency and bitterness if over-developed.
- **Lipids**: While they mostly survive the roast intact, they trap aromatic compounds and significantly affect the mouthfeel. Processing methods (washed, natural) alter the surface chemistry and lipid expression.\`,`;

const t2Content = `
content: \`Coffee roasting is highly complex: a dynamically coupled heat and mass transfer process occurring simultaneously with hundreds of chemical reactions.

**The Porous Reactor**
Think of the coffee bean as a tiny, porous reactor. As heat is applied to the exterior of the bean (**heat transfer inward**), the internal moisture turns to steam. The buildup of this steam and carbon dioxide (from pyrolysis) creates immense internal pressure. These gases must escape the bean (**mass transfer outward**).

**Effective Heat Transfer**
Because the bean is both expanding in volume and losing mass (water and gas), its thermal conductivity changes throughout the roast. This is why you cannot simply set a machine to a fixed "temperature." The *effective* heat transfer depends on:
1. **Batch Size**: The thermal mass of the beans relative to the drum.
2. **Airflow**: How efficiently hot air is pulling moisture away from the bean surface.
3. **Drum Geometry**: How often the beans physically contact the hot metal.\`,`;

const t3Content = `
content: \`One of the most critical concepts for a roaster to understand is the transition from heat absorption to heat generation.

**Endothermic Phase (Heat Absorbing)**
For the first half of the roast (the drying phase and early Maillard), the beans are *endothermic*. They are absorbing energy from the environment to evaporate internal moisture and initiate chemical reactions. During this phase, you must supply ample energy to keep the roast moving.

**Exothermic Phase (Heat Releasing)**
As the bean temperature approaches 160–180°C (depending on the probe and machine), pyrolysis reactions begin. These are chemical reactions where complex organic compounds break down rapidly, and critically, *they release their own heat*. The bean becomes *exothermic*.

**Reading the RoR (Rate of Rise)**
Because the beans start generating their own heat, the Rate of Rise (how fast the temperature is increasing) will naturally want to flatten out or even spike upwards (a "flick"). If you do not proactively reduce the heat input leading into this transition, the roast will accelerate out of control, leading to baked, ashy, or hollow flavors. Misreading or ignoring this thermodynamic flip is the root cause of the most common roasting defects.\`,`;

// We inject the content properties right after `t:"..."` for each of the first 3 topics
content = content.replace(/t:"Green coffee composition",/, 't:"Green coffee composition",\n' + t1Content);
content = content.replace(/t:"Roasting as a coupled heat\/mass transfer \+ reaction process",/, 't:"Roasting as a coupled heat/mass transfer + reaction process",\n' + t2Content);
content = content.replace(/t:"Endothermic-to-exothermic transition",/, 't:"Endothermic-to-exothermic transition",\n' + t3Content);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated roasting.js with actual content for module 1');
