const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'roasting.js');
let content = fs.readFileSync(filePath, 'utf8');

const m2t1 = `content: \`Inside a roasting drum, three distinct modes of heat transfer act simultaneously, though the machine's design dictates which one dominates:

1. **[Conduction](https://en.wikipedia.org/wiki/Thermal_conduction)**: Direct contact between the hot drum surface and the bean. This is the primary heat vector in older, thick-walled cast-iron roasters.
2. **[Convection](https://en.wikipedia.org/wiki/Convection)**: Heat transferred via moving hot air passing through the tumbling bean mass. Modern fluid-bed and hybrid roasters lean heavily on this.
3. **[Thermal Radiation](https://en.wikipedia.org/wiki/Thermal_radiation)**: Heat radiating from glowing elements or extremely hot drum walls without direct contact. Usually minor in drum roasters, but present.

Understanding your machine's balance is critical. If your roaster is convection-forward (like the Bullet R1), manipulating the airflow becomes your most powerful lever for driving heat into the bean.\`,`;

const m2t2 = `content: \`One of the most persistent illusions in coffee roasting is trusting the numbers on the screen too literally. 

**Bean Temperature (BT)** probes do not actually read the internal temperature of a bean. Instead, they measure the average temperature of the environment immediately surrounding the probe—a chaotic mix of tumbling beans and hot air. This means the probe's thickness (its thermal mass) and placement create a built-in *lag*.

**Environment Temperature (ET)** measures the air inside the drum. It acts as a leading indicator: you must drive the ET higher to push heat into the BT. Think of ET as the "gas pedal." If ET is falling, BT will soon follow. Always read your probes knowing you are seeing a delayed, smoothed reflection of reality, not instantaneous truth.\`,`;

const m2t3 = `content: \`The **Rate of Rise (RoR)** is the mathematical first derivative of the Bean Temperature. It tells you *how fast* the temperature is changing per minute (e.g., +15°C/min). 

RoR is arguably the single most important diagnostic tool in a roaster's software (like [Artisan](https://artisan-scope.org/) or [Cropster](https://www.cropster.com/)). The generally accepted standard for specialty roasting is a smooth, steadily declining RoR from the turning point through to the drop. 

**Common RoR Defects**:
- **The Flick**: A sudden spike in RoR late in the roast. Usually caused by the exothermic nature of First Crack overwhelming the machine's heat input if not properly managed, resulting in ashy flavors.
- **The Crash**: A sudden plummet in RoR immediately following First Crack, caused by the sudden release of water vapor. This stalls the roast and bakes the coffee.\`,`;

const m3t1 = `content: \`The "drying phase" is somewhat of a misnomer, as moisture loss continues throughout the entire roast. However, the first phase (from charge to roughly 150°C) is dominated by the physical removal of *free water*.

Water has an incredibly high specific heat capacity. This means it absorbs a massive amount of energy before turning into steam. This phase requires significant momentum. If you don't supply enough heat early on, the beans will linger in this zone, flattening the RoR curve and setting you up for a "baked" profile. As the free moisture is driven off, the chlorophyll degrades, and the beans transition from green to yellow, emitting a distinct grassy/hay smell.\`,`;

const m3t2 = `content: \`A "baked" roast is one of the most common, yet misunderstood, defects in specialty coffee. 

**Mechanism**: Baking occurs when the roast stalls or progresses too slowly, particularly during the drying and early Maillard phases, or if the RoR flatlines or crashes entirely. 
When coffee spends too much time at moderate temperatures without adequate energy momentum, the delicate aromatic compounds and volatile acids degrade before the browning reactions can build structural complexity.

**Sensory Signature**: Baked coffee lacks sweetness and acidity. It tastes flat, papery, bready, or like oats, even if the final drop temperature and color suggest a light or medium roast.\`,`;

const m3t3 = `content: \`When you drop room-temperature beans into a hot roaster, the BT probe's reading plummets rapidly before eventually stabilizing and climbing again. The exact bottom of this V-shaped dip is called the **Turning Point (TP)**.

It is crucial to understand that TP is mostly a thermodynamic artifact of the probe normalizing to the temperature of the bean mass. It does *not* mean the beans themselves cooled down and are now heating up. 

Your **Charge Temperature** (the drum temp when you drop the beans) dictates the momentum of the entire roast. Denser, higher-altitude beans (or high-moisture lots) generally require a higher charge temperature to build adequate momentum, whereas softer beans might scorch at those same temperatures.\`,`;

const m4t1 = `content: \`As the beans cross ~150°C, they enter the browning phase, dominated by the **[Maillard reaction](https://en.wikipedia.org/wiki/Maillard_reaction)**.

This is a form of non-enzymatic browning where reducing sugars react with amino acids under heat. In coffee, this reaction cascades into hundreds of volatile flavor compounds (giving coffee its distinct aroma) and non-volatile polymers called *melanoidins*. Melanoidins are responsible for the brown color of the roasted bean and significantly contribute to the beverage's body and mouthfeel. 

This is distinctly different from **[Caramelization](https://en.wikipedia.org/wiki/Caramelization)**, which occurs at higher temperatures later in the roast and involves the pyrolysis of sugars in the absence of amino acids.\`,`;

const m4t2 = `content: \`The duration of the Maillard phase is your primary lever for modulating **body and mouthfeel**.

Because the Maillard reaction produces melanoidins (the structural polymers that create viscosity in the cup), extending the time spent in this temperature zone (roughly 150°C to First Crack) will generally yield a heavier, fuller-bodied coffee. 

However, this is a trade-off. Extending the Maillard phase too much will flatten the cup, muting delicate floral top notes and degrading the bright acids that specialty coffee is known for. Managing this duration based on the bean's density and cultivar is a critical profile design decision.\`,`;

const m4t3 = `content: \`While the Maillard phase builds body, the total time and energy applied here also acts as an **acidity dial**.

Coffee contains several key organic acids. **[Chlorogenic Acids (CGAs)](https://en.wikipedia.org/wiki/Chlorogenic_acid)** are abundant in green coffee and break down linearly as heat is applied. Citric and malic acids (responsible for bright, fruity notes) also degrade the longer the roast progresses.

If you push through the Maillard phase rapidly, you preserve more of these native acids, resulting in a bright, punchy cup. If you drag the phase out, the acids degrade, creating a rounder but potentially duller profile. The tension between preserving acidity (speed) and developing body/sweetness (time) is the central challenge of roast profiling.\`,`;

content = content.replace('t:"The three heat transfer modes in a roaster",', \`t:"The three heat transfer modes in a roaster",\\n\` + m2t1);
content = content.replace('t:"Bean temperature vs. environment temperature",', \`t:"Bean temperature vs. environment temperature",\\n\` + m2t2);
content = content.replace('t:"Rate of rise (RoR) as a derivative signal",', \`t:"Rate of rise (RoR) as a derivative signal",\\n\` + m2t3);

content = content.replace('t:"Physical drying kinetics",', \`t:"Physical drying kinetics",\\n\` + m3t1);
content = content.replace('t:"\\'Baking\\' as a drying-phase defect",', \`t:"\\'Baking\\' as a drying-phase defect",\\n\` + m3t2);
content = content.replace('t:"Turning point and charge temperature theory",', \`t:"Turning point and charge temperature theory",\\n\` + m3t3);

content = content.replace('t:"Maillard reaction fundamentals in coffee",', \`t:"Maillard reaction fundamentals in coffee",\\n\` + m4t1);
content = content.replace('t:"Modulating body via Maillard duration",', \`t:"Modulating body via Maillard duration",\\n\` + m4t2);
content = content.replace('t:"Organic acid degradation and acidity modulation",', \`t:"Organic acid degradation and acidity modulation",\\n\` + m4t3);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated Modules 2, 3, 4');
