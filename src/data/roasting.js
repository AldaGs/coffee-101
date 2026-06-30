export const roastingData = [
{
  mod:"Module 1", title:"Foundations: what roasting is", id:"m1",
  desc:"The physical and chemical definition of roasting, and why coffee is an unusually hard material to roast evenly.",
  topics:[
    {t:"Green coffee composition", b:"Polysaccharides, sucrose, chlorogenic acids, lipids, proteins, moisture — the raw material roasting acts on.",
     content: `Green coffee is essentially a dense, woody seed composed of around 50% carbohydrates (mostly insoluble cellulose and hemicellulose). This forms the structural matrix or "scaffold" of the bean. The remaining composition includes water (8-12%), lipids, proteins, chlorogenic acids, and soluble sugars (like sucrose).

**The Role of Moisture**
Moisture isn't just a quality specification to prevent mold; it's a critical process variable. The initial water content conducts heat into the center of the bean during the early stages of roasting. Beans with higher moisture require more energy upfront to drive off that water before the Maillard reaction can fully begin. 

**Flavor Precursors**
- **Sucrose**: This is the primary sugar that will participate in caramelization and the Maillard reaction, contributing to sweetness and body. 
- **[Chlorogenic Acids (CGAs)](https://en.wikipedia.org/wiki/Chlorogenic_acid)**: These are the precursors to perceived acidity, but as roasting progresses, they break down into quinic and caffeic acids, which contribute to astringency and bitterness if over-developed.
- **Lipids**: While they mostly survive the roast intact, they trap aromatic compounds and significantly affect the mouthfeel. Processing methods (washed, natural) alter the surface chemistry and lipid expression.`,
     points:["Cellulose/hemicellulose scaffold vs. soluble sugars and acids","Moisture content (8–12%) and its role as a process variable, not just a quality spec","Lipid content and varietal/processing variation (washed vs. natural vs. honey)","Chlorogenic acid (CGA) family as acidity and astringency precursors"],
     refs:["Schenker, S. (2000). <i>Investigations on the Hot Air Roasting of Coffee Beans</i>. PhD thesis, ETH Zürich.","Farah, A. (2012). 'Coffee constituents.' In <i>Coffee: Emerging Health Effects and Disease Prevention</i>."]},
    {t:"Roasting as a coupled heat/mass transfer + reaction process", b:"Why you can't separate 'temperature' from 'time' from 'chemistry' — they're one coupled system.",
     content: `Coffee roasting is highly complex: a dynamically coupled heat and mass transfer process occurring simultaneously with hundreds of chemical reactions.

**The Porous Reactor**
Think of the coffee bean as a tiny, porous reactor. As heat is applied to the exterior of the bean (**heat transfer inward**), the internal moisture turns to steam. The buildup of this steam and carbon dioxide (from pyrolysis) creates immense internal pressure. These gases must escape the bean (**mass transfer outward**).

**Effective Heat Transfer**
Because the bean is both expanding in volume and losing mass (water and gas), its thermal conductivity changes throughout the roast. This is why you cannot simply set a machine to a fixed "temperature." The *effective* heat transfer depends on:
1. **Batch Size**: The thermal mass of the beans relative to the drum.
2. **Airflow**: How efficiently hot air is pulling moisture away from the bean surface.
3. **Drum Geometry**: How often the beans physically contact the hot metal.`,
     points:["Bean as a porous, shrinking/expanding reactor","Simultaneous heat conduction inward and moisture/CO2 diffusion outward","Why batch size, airflow, and drum geometry all change the *effective* heat transfer coefficient, not just total heat"],
     refs:["Schwartzberg, H.G. (2002). 'Shrinkage and thermal contraction of coffee beans during roasting.' <i>AIChE Annual Meeting</i>.","Eggers, R. & Pietsch, A. (2001). 'Technology I: Roasting.' In <i>Coffee: Recent Developments</i>."]},
    {t:"Endothermic-to-exothermic transition", b:"The single most load-bearing concept in profile reading: roasting flips from heat-absorbing to heat-releasing partway through.",
     content: `One of the most critical concepts for a roaster to understand is the transition from heat absorption to heat generation.

**Endothermic Phase (Heat Absorbing)**
For the first half of the roast (the drying phase and early Maillard), the beans are *endothermic*. They are absorbing energy from the environment to evaporate internal moisture and initiate chemical reactions. During this phase, you must supply ample energy to keep the roast moving.

**Exothermic Phase (Heat Releasing)**
As the bean temperature approaches 160–180°C (depending on the probe and machine), **[pyrolysis](https://en.wikipedia.org/wiki/Pyrolysis)** reactions begin. These are chemical reactions where complex organic compounds break down rapidly, and critically, *they release their own heat*. The bean becomes *exothermic*.

**Reading the RoR (Rate of Rise)**
Because the beans start generating their own heat, the Rate of Rise (how fast the temperature is increasing) will naturally want to flatten out or even spike upwards (a "flick"). If you do not proactively reduce the heat input leading into this transition, the roast will accelerate out of control, leading to baked, ashy, or hollow flavors. Misreading or ignoring this thermodynamic flip is the root cause of the most common roasting defects.`,
     points:["Drying phase is endothermic (driving off free water)","Around 160–180°C bean temp, pyrolysis reactions begin releasing heat","Why ROR (rate of rise) naturally wants to dip then can flatten/rise here if you're not managing energy input","Misreading this transition is the root cause of most flick/crash/baked defects"],
     refs:["Schwartzberg, H.G. (2006). 'Modeling exothermic heat generation during the roasting of coffee.' <i>21st Intl. Conf. on Coffee Science (ASIC)</i>, Montpellier.","Hoos, R. (2015). <i>The Coffee Roaster's Companion</i>. Ch. 'Phases of Roasting.'"]}
  ]
},
{
  mod:"Module 2", title:"Heat transfer mechanics", id:"m2",
  desc:"Conduction, convection, and radiation inside the roasting chamber, and how machine design selects which dominates.",
  topics:[
    {t:"The three heat transfer modes in a roaster", b:"Drum conduction, convective hot air, and radiant heat from the drum/burner — every machine is a different blend.",
     content: `Inside a roasting drum, three distinct modes of heat transfer act simultaneously, though the machine's design dictates which one dominates:

1. **[Conduction](https://en.wikipedia.org/wiki/Thermal_conduction)**: Direct contact between the hot drum surface and the bean. This is the primary heat vector in older, thick-walled cast-iron roasters.
2. **[Convection](https://en.wikipedia.org/wiki/Convection)**: Heat transferred via moving hot air passing through the tumbling bean mass. Modern fluid-bed and hybrid roasters lean heavily on this.
3. **[Thermal Radiation](https://en.wikipedia.org/wiki/Thermal_radiation)**: Heat radiating from glowing elements or extremely hot drum walls without direct contact. Usually minor in drum roasters, but present.

Understanding your machine's balance is critical. If your roaster is convection-forward (like the Bullet R1), manipulating the airflow becomes your most powerful lever for driving heat into the bean.`,
     points:["Conduction: bean-to-drum-surface contact, dominant in older/cast-iron drum designs","Convection: hot air moving through the bean mass, dominant in fluid-bed and high-airflow drum roasters","Radiation: typically a minor term except in some fluid-bed designs","Why this matters directly to you: Bullet R1 is convection-forward (fluid-bed-adjacent airflow path with drum); Kaleido M10 is a more conduction-present hybrid drum — different heat transfer balance changes how you'll need to drive charge temp and airflow profile"],
     refs:["Eggers & Pietsch (2001), op. cit.","Wilson, A.J. (2014). 'The roast: chemical changes and process control.' In <i>Specialty Coffee: A Chemical Perspective</i>."]},
    {t:"Bean temperature vs. environment temperature", b:"The most-confused distinction in home/pro roasting — what the probe reads vs. what the bean actually experiences.",
     content: `One of the most persistent illusions in coffee roasting is trusting the numbers on the screen too literally. 

**Bean Temperature (BT)** probes do not actually read the internal temperature of a bean. Instead, they measure the average temperature of the environment immediately surrounding the probe—a chaotic mix of tumbling beans and hot air. This means the probe's thickness (its thermal mass) and placement create a built-in *lag*.

**Environment Temperature (ET)** measures the air inside the drum. It acts as a leading indicator: you must drive the ET higher to push heat into the BT. Think of ET as the "gas pedal." If ET is falling, BT will soon follow. Always read your probes knowing you are seeing a delayed, smoothed reflection of reality, not instantaneous truth.`,
     points:["Bean Temp (BT) probe placement artifacts — it reads a mix of bean mass and air, not 'true' bean core temp","Environment/air temp (ET) as a leading indicator of energy available to transfer","Lag between ET changes and BT response — thermal mass of the system"],
     refs:["Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Ch. 2–3.","Hoos (2015), op. cit., Ch. on probe calibration."]},
    {t:"Rate of rise (RoR) as a derivative signal", b:"RoR isn't a target, it's the first derivative of BT — and reading it wrong is the #1 novice mistake.",
     content: `The **Rate of Rise (RoR)** is the mathematical first derivative of the Bean Temperature. It tells you *how fast* the temperature is changing per minute (e.g., +15°C/min). 

RoR is arguably the single most important diagnostic tool in a roaster's software (like [Artisan](https://artisan-scope.org/) or [Cropster](https://www.cropster.com/)). The generally accepted standard for specialty roasting is a smooth, steadily declining RoR from the turning point through to the drop. 

**Common RoR Defects**:
- **The Flick**: A sudden spike in RoR late in the roast. Usually caused by the exothermic nature of First Crack overwhelming the machine's heat input if not properly managed, resulting in ashy flavors.
- **The Crash**: A sudden plummet in RoR immediately following First Crack, caused by the sudden release of water vapor. This stalls the roast and bakes the coffee.`,
     points:["Why declining RoR (not flat or rising) through development is the generally accepted target shape","Flick: a late-roast RoR spike, usually from poor airflow/energy timing late in the roast","Crash: a sudden RoR drop, usually from under-driving energy through first crack","Smoothing/averaging artifacts in software (Artisan, Cropster) and why raw vs. smoothed RoR can mislead"],
     refs:["Rao, S. (2020). <i>Coffee Roasting: Best Practices</i>. Entire book is essentially an RoR-shape manual.","Artisan-scope documentation: https://artisan-scope.org"]}
  ]
},
{
  mod:"Module 3", title:"Drying phase", id:"m3",
  desc:"The first and longest phase by convention — removing free moisture without 'baking' the bean.",
  topics:[
    {t:"Physical drying kinetics", b:"How moisture actually leaves the bean, and why drying rate sets up everything downstream.",
     content: `The "drying phase" is somewhat of a misnomer, as moisture loss continues throughout the entire roast. However, the first phase (from charge to roughly 150°C) is dominated by the physical removal of *free water*.

Water has an incredibly high specific heat capacity. This means it absorbs a massive amount of energy before turning into steam. This phase requires significant momentum. If you don't supply enough heat early on, the beans will linger in this zone, flattening the RoR curve and setting you up for a "baked" profile. As the free moisture is driven off, the chlorophyll degrades, and the beans transition from green to yellow, emitting a distinct grassy/hay smell.`,
     points:["Free water vs. bound water and differing removal mechanisms","Typical drying phase end marker: ~150–160°C bean temp (varies by convention/machine)","Color shift green → yellow as a proxy for substantial moisture loss"],
     refs:["Schenker (2000), op. cit., Ch. 4.","Wang, N. & Lim, L.T. (2014). 'Fourier transform infrared and physicochemical analyses of roasted coffee.' <i>J. Agric. Food Chem.</i>"]},
    {t:"'Baking' as a drying-phase defect", b:"A roast that spends too long at moderate temps in the dry phase produces flat, papery, bready flavors — defining and diagnosing this.",
     content: `A "baked" roast is one of the most common, yet misunderstood, defects in specialty coffee. 

**Mechanism**: Baking occurs when the roast stalls or progresses too slowly, particularly during the drying and early Maillard phases, or if the RoR flatlines or crashes entirely. 
When coffee spends too much time at moderate temperatures without adequate energy momentum, the delicate aromatic compounds and volatile acids degrade before the browning reactions can build structural complexity.

**Sensory Signature**: Baked coffee lacks sweetness and acidity. It tastes flat, papery, bready, or like oats, even if the final drop temperature and color suggest a light or medium roast.`,
     points:["Mechanism: extended low-energy exposure degrades aromatics before Maillard can build complexity","Distinguishing baked from underdeveloped (different root causes, similar cupping language)","Charge temperature and turning point as the primary levers"],
     refs:["Hoos (2015), op. cit., Ch. 'Common Defects.'","Giacalone, D. et al. (2019). 'Common roasting defects in coffee.' <i>Food Quality and Preference</i>, 71, 463–474."]},
    {t:"Turning point and charge temperature theory", b:"What turning point actually tells you about charge energy, and how to use it diagnostically rather than ritually.",
     content: `When you drop room-temperature beans into a hot roaster, the BT probe's reading plummets rapidly before eventually stabilizing and climbing again. The exact bottom of this V-shaped dip is called the **Turning Point (TP)**.

It is crucial to understand that TP is mostly a thermodynamic artifact of the probe normalizing to the temperature of the bean mass. It does *not* mean the beans themselves cooled down and are now heating up. 

Your **Charge Temperature** (the drum temp when you drop the beans) dictates the momentum of the entire roast. Denser, higher-altitude beans (or high-moisture lots) generally require a higher charge temperature to build adequate momentum, whereas softer beans might scorch at those same temperatures.`,
     points:["Turning point as a function of charge temp, batch size, and drum thermal mass — not a fixed target","Why chasing a specific TP number across different bean densities/moistures is a category error","Charge temp strategy differences between dense high-altitude vs. lower-density lots"],
     refs:["Rao (2014), op. cit., Ch. 4.","Schenker, S. & Rothgeb, T. (2017). 'The roast — creating the bean's signature.' In <i>The Craft and Science of Coffee</i>, Elsevier, pp. 245–271."]}
  ]
},
{
  mod:"Module 4", title:"Maillard reaction phase", id:"m4",
  desc:"From ~150°C to first crack — the browning chemistry that builds the bulk of body, sweetness precursors, and brown-flavor complexity.",
  topics:[
    {t:"Maillard reaction fundamentals in coffee", b:"Reducing sugars + amino acids/proteins → melanoidins and hundreds of volatile/non-volatile flavor compounds.",
     content: `As the beans cross ~150°C, they enter the browning phase, dominated by the **[Maillard reaction](https://en.wikipedia.org/wiki/Maillard_reaction)**.

This is a form of non-enzymatic browning where reducing sugars react with amino acids under heat. In coffee, this reaction cascades into hundreds of volatile flavor compounds (giving coffee its distinct aroma) and non-volatile polymers called *melanoidins*. Melanoidins are responsible for the brown color of the roasted bean and significantly contribute to the beverage's body and mouthfeel. 

This is distinctly different from **[Caramelization](https://en.wikipedia.org/wiki/Caramelization)**, which occurs at higher temperatures later in the roast and involves the pyrolysis of sugars in the absence of amino acids.`,
     points:["Why Maillard is temperature- and time-dependent in a non-linear way (Arrhenius-type kinetics)","Melanoidins' contribution to body/mouthfeel, not just color","Distinct from caramelization — overlapping temperature range but different substrates and mechanism"],
     refs:["Nunes, F.M. & Coimbra, M.A. (2010). 'Role of hydroxycinnamates in coffee melanoidin formation.' <i>Phytochemistry Reviews</i>.","Hofmann, T. et al. (2002). 'Studies on the chemical structure of coffee melanoidins.' <i>J. Agric. Food Chem.</i>"]},
    {t:"Modulating body via Maillard duration", b:"Hoos's central practical claim: stretching or compressing time in this zone is your primary body/mouthfeel lever.",
     content: `The duration of the Maillard phase is your primary lever for modulating **body and mouthfeel**.

Because the Maillard reaction produces melanoidins (the structural polymers that create viscosity in the cup), extending the time spent in this temperature zone (roughly 150°C to First Crack) will generally yield a heavier, fuller-bodied coffee. 

However, this is a trade-off. Extending the Maillard phase too much will flatten the cup, muting delicate floral top notes and degrading the bright acids that specialty coffee is known for. Managing this duration based on the bean's density and cultivar is a critical profile design decision.`,
     points:["Longer Maillard window generally → more melanoidins → heavier body","Risk of over-extending: dulled acidity, muted top notes, 'flat' cup","Interaction with bean density — denser beans often want a longer Maillard window to develop fully"],
     refs:["Hoos, R. (2015), op. cit., Ch. 5 — explicit framework for this.","Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — extends this by varietal."]},
    {t:"Organic acid degradation and acidity modulation", b:"Why total roast time/energy through this zone is your acidity dial, separate from the body dial above.",
     content: `While the Maillard phase builds body, the total time and energy applied here also acts as an **acidity dial**.

Coffee contains several key organic acids. **[Chlorogenic Acids (CGAs)](https://en.wikipedia.org/wiki/Chlorogenic_acid)** are abundant in green coffee and break down linearly as heat is applied. Citric and malic acids (responsible for bright, fruity notes) also degrade the longer the roast progresses.

If you push through the Maillard phase rapidly, you preserve more of these native acids, resulting in a bright, punchy cup. If you drag the phase out, the acids degrade, creating a rounder but potentially duller profile. The tension between preserving acidity (speed) and developing body/sweetness (time) is the central challenge of roast profiling.`,
     points:["Chlorogenic, citric, malic, quinic acid degradation kinetics differ by acid type","Faster roasts through this zone generally preserve more perceived acidity","Trade-off space between acidity preservation and adequate Maillard development — this is the core profiling tension"],
     refs:["Rao, S. (2020), op. cit. — covers acid/body trade-off framework extensively.","Moon, J.K. & Shibamoto, T. (2009). 'Role of roasting conditions in the profile of volatile compounds in coffee.' <i>J. Agric. Food Chem.</i>"]}
  ]
},
{
  mod:"Module 5", title:"First crack and the pressure mechanism", id:"m5",
  desc:"The audible structural failure event — its physical cause and what it signals chemically.",
  topics:[
    {t:"Internal pressure buildup", b:"CO2 generation plus water vapor expansion inside a structurally weakening bean — the mechanics of the crack itself.",
     content: `First Crack is the defining acoustic marker of coffee roasting. But what physically causes it?

As the bean temperature exceeds 190°C, the creation of steam (from residual bound water) and CO2 (from **pyrolysis**) accelerates dramatically. Because the dense cellular structure of the bean restricts these gases from escaping freely, immense internal pressure builds up—often reaching several atmospheres.

Simultaneously, the heat softens the bean's structural cellulose matrix. Eventually, the pressure overwhelms the weakened cellulose, causing the bean to violently fracture and expand. This sudden release of pressure is the "crack" you hear.`,
     points:["Pyrolysis byproduct gases (mainly CO2, some volatiles) accumulate faster than they can diffuse out","Cellular structure softens from heat before it fails — crack is structural failure, not combustion","Internal pressure estimates from literature (order of several atmospheres) at crack point"],
     refs:["Schenker, S. et al. (2000). 'Pore structure of coffee beans affected by roasting conditions.' <i>J. Food Science</i>, 65(3), 452–457.","Wilson (2014), op. cit."]},
    {t:"First crack as a chemistry marker, not just a sound", b:"What's happening chemically right around FC, and why 'crack temp' alone is a weak signal without RoR context.",
     content: `First Crack is not just a structural failure; it is a critical marker of accelerating chemical reactions.

During First Crack, the release of water vapor acts as an evaporative cooler, which is why you often see a brief crash in the **Rate of Rise (RoR)** if energy isn't managed well. Chemically, the rapid release of trapped moisture and gases allows heat to penetrate the bean differently, speeding up the final stages of the Maillard reaction and initiating deeper caramelization. 

The *temperature* at which First Crack happens is not fixed. A fast, high-energy roast will typically hit First Crack at a slightly higher probe temperature than a slow roast, because the heat is driving into the bean faster than the probe can accurately track the internal equilibrium.`,
     points:["Acceleration of Maillard/early pyrolysis reactions near FC","Why FC *temperature* varies meaningfully with charge temp/profile shape — it's an effect, not a fixed control point","Using FC *timing relative to total roast* (not absolute temp) as the more robust reference"],
     refs:["Schwartzberg (2006), op. cit.","Rao (2014), op. cit., Ch. 6."]},
    {t:"Second crack and the pyrolysis-dominant zone", b:"Past first crack into darker development — when this matters for your specialty-focused work and when it doesn't.",
     content: `If a roast continues well past First Crack, the internal temperature approaches 220°C+. Here, **[Pyrolysis](https://en.wikipedia.org/wiki/Pyrolysis)** becomes the dominant chemical force. 

Pyrolysis is the thermal decomposition of organic material. In coffee, this rapidly destroys remaining sugars and acids, replacing them with roasty, smoky, and bittersweet phenolic compounds. As structural degradation continues, a Second Crack occurs—often a sharper, quieter snapping sound caused by the fracture of the bean's woody matrix and the rapid exudation of internal oils to the surface. 

For specialty coffee (especially light to medium profiles), Second Crack is generally avoided, as origin characteristics (terroir) are eclipsed by roast characteristics.`,
     points:["Mechanistically similar pressure-release event, driven by continued pyrolysis","Rapid flavor compound loss/destruction risk in this zone — generally avoided in specialty/light-medium roasting","Relevance mainly as a boundary marker, not a target zone for Jardín Oculto's medium-roast profile work"],
     refs:["Hoos (2015), op. cit., Ch. 'Development Beyond FC.'"]}
  ]
},
{
  mod:"Module 6", title:"Development phase (post-first-crack)", id:"m6",
  desc:"The most consequential and most argued-over phase: drop temperature, development time ratio, and what they actually control.",
  topics:[
    {t:"Development time ratio (DTR) — origin and limits", b:"The %-of-total-time-after-FC metric — useful heuristic, frequently over-applied.",
     content: `The **Development Time Ratio (DTR)** is the percentage of total roast time that occurs *after* First Crack. For example, if a roast takes 10 minutes total, and First Crack happens at minute 8, the development time is 2 minutes (a 20% DTR).

DTR was popularized by Scott Rao as a heuristic for consistency. A DTR between 15% and 25% is widely considered the "sweet spot" for specialty coffee to ensure the inner core of the bean is cooked without roasting the exterior too dark.

However, DTR is just a ratio. A 20% DTR on a flat-lining RoR tastes entirely different than a 20% DTR on a steadily declining RoR. It is a useful shorthand, but it cannot replace tracking the actual curve shape and drop temperature.`,
     points:["Definition and typical specialty-roasting ranges (commonly cited ~15–25%, highly profile-dependent)","Why DTR alone, without RoR shape and charge/FC temp context, is an incomplete predictor of cup outcome","Critiques: DTR conflates very different RoR shapes that happen to share a duration ratio"],
     refs:["Rao, S. (2020), op. cit. — Rao is explicitly critical of DTR-as-sole-metric while acknowledging its diagnostic use.","Hoos (2015), op. cit."]},
    {t:"Drop temperature and caramelization/pyrolysis balance", b:"Hoos's framing: drop temp is your dial for the caramelization-to-pyrolysis ratio in the cup.",
     content: `Your **Drop Temperature** (the final temperature when you eject the beans into the cooling tray) is the ultimate arbiter of roast degree.

Rob Hoos presents a highly practical framing: the drop temperature controls the ratio of **Caramelization** to **Pyrolysis**. 
- Lower drop temperatures preserve sweetness (caramelization) and acidity but risk tasting underdeveloped or grassy.
- Higher drop temperatures introduce more pyrolysis, adding bittersweet, roasty, and chocolatey notes, but diminishing acidity and floral complexity.

Fine-tuning your drop temperature by even 1°C can radically shift this balance, especially for high-density, high-altitude coffees.`,
     points:["Caramelization continues building sweetness/brown-sugar notes through this zone","Excess pyrolysis at higher drop temps → roastiness, bitterness, reduced complexity","Under-development (dropping too early/cool) → vegetal, grassy, underdeveloped acid notes"],
     refs:["Hoos (2015), op. cit., Ch. 6 — primary source for this exact framing."]},
    {t:"Avoiding common development-phase defects", b:"Diagnosing the three classic post-FC failure modes by their RoR and flavor signatures.",
     content: `The development phase is a tightrope walk. The three most common failures are:

1. **Underdevelopment**: Dropping the roast too early or with too little momentum. The core of the bean remains raw. The cup tastes sour (not acidic, but sharp/vinegary), grassy, or like green peas.
2. **Over-development (Over-roasting)**: Pushing the drop temp too high or dragging the time too long. Pyrolysis dominates, resulting in ashy, carbon, or flat bitterness.
3. **Baked**: As discussed in Module 3, if the RoR crashes flat during development, the coffee loses all its vibrant top notes and tastes like cardboard or baked bread, regardless of the final drop color.`,
     points:["Underdevelopment: grassy/vegetal, sour-sharp, thin body — usually too-short or too-cool development","Over-roasting: ashy/burnt/flat — usually excess pyrolysis from prolonged high heat post-FC","Tipping/scorching: localized over-heating from excess drum-surface conduction or poor bean circulation, distinct from whole-bean over-roasting"],
     refs:["Giacalone et al. (2019), op. cit.","Yang, N. et al. (2016). 'Determination of volatile marker compounds of common coffee roast defects.' <i>Food Chemistry</i>, 211, 206–214."]}
  ]
},
{
  mod:"Module 7", title:"Roast color, density, and physical change", id:"m7",
  desc:"What's measurably happening to the bean — useful for QC consistency once you're running wholesale volume.",
  topics:[
    {t:"Color development and Agtron/photometric measurement", b:"Color as an imperfect but practical proxy for roast degree.",
     content: `Roast color is the most obvious visual indicator of development, but human eyes are highly subjective. Commercial roasteries use **[Spectrophotometers](https://en.wikipedia.org/wiki/Spectrophotometry)** (like the Agtron scale) to measure light reflectance.

An Agtron meter reads the color of whole beans and the color of ground coffee. A significant gap between the whole bean color (darker) and ground color (lighter) indicates uneven development—the outside roasted faster than the inside. 

While color is an excellent QC tool for consistency, it is not an absolute flavor predictor. A coffee roasted fast to Agtron 65 will taste radically different than the same coffee roasted slowly to Agtron 65.`,
     points:["Agtron scale basics and why whole-bean vs. ground readings differ","Color's relationship to (not equivalence with) flavor development — same color can mean different cups depending on path taken","Practical low-cost alternatives for a small operation without an Agtron unit"],
     refs:["Geiger, R. et al. (2005). 'Effect of roasting parameters on coffee colour.' <i>J. Sci. Food Agric.</i>, 85(14)."]},
    {t:"Volume expansion and density loss", b:"Bean physically grows ~50–80%+ in volume while losing 12–20% mass — the structural side of roasting.",
     content: `Roasting physically transforms the bean's structure. As internal steam and CO2 build pressure (triggering First Crack), the cellulose matrix expands. 

By the end of the roast, the bean has grown in volume by 50% to 100%, but it has lost 12% to 20% of its mass (primarily water and gases). This means the **density** of the coffee drops dramatically. 

This has major implications for brewing: less dense (darker roasted) coffee is more porous and extracts much faster than dense, light-roasted coffee. It also impacts wholesale operations, as a 1kg batch of green coffee will only yield ~850g of roasted product.`,
     points:["Cell wall expansion mechanics tied to internal gas pressure (links back to Module 5)","Density loss as a yield/costing variable relevant to your wholesale pricing model","Bulk density consistency as a batch-to-batch QC signal"],
     refs:["Schenker et al. (2000), op. cit.","Bustos-Vanegas, J.D. et al. (2018). 'Modelling biophysical parameters during coffee roasting.' <i>J. Food Eng.</i>"]},
    {t:"Weight loss (roast loss %) as a control variable", b:"Combining moisture loss and pyrolysis gas loss into a single trackable percentage.",
     content: `Tracking your **Roast Loss %** (Weight In - Weight Out / Weight In) is one of the easiest and most powerful Quality Control metrics available without expensive equipment.

For light to medium specialty roasts, expect a weight loss between 12.5% and 15%. Dark roasts can lose up to 20%. If you roast the same profile ten times, and batch #8 shows a 14.5% loss instead of the usual 13%, you instantly know something went wrong—likely a drift in green bean moisture or a massive RoR crash during development.`,
     points:["Typical specialty roast loss ranges by roast level","Using roast loss % as a consistency check across batches of the same bean/profile","Distinguishing roast loss issues caused by green moisture variance vs. profile drift"],
     refs:["Rao (2014), op. cit., Ch. on QC.","Folmer, B., ed. (2017). <i>The Craft and Science of Coffee</i>. Academic Press."]}
  ]
},
{
  mod:"Module 8", title:"Variables that shape every profile", id:"m8",
  desc:"The control surface available on most machines, and what each one actually does mechanistically.",
  topics:[
    {t:"Airflow", b:"Often the most under-used control on hobby/semi-pro machines — and the primary differentiator on convection-forward designs like the Bullet R1.",
     content: `Airflow serves three primary purposes in a drum roaster:
1. **Convective Heat Transfer**: It moves hot air through the tumbling beans, increasing the efficiency of heat transfer.
2. **Moisture & Chaff Evacuation**: It pulls evaporated steam and detached chaff out of the drum, preventing smoky or "baked" flavors.
3. **Cooling (in excess)**: If you pull too much ambient air through the system, the airflow acts as a cooling mechanism, dropping the Environment Temperature (ET).

On convection-forward machines, modulating the fan speed is often more effective at steering the RoR curve than modulating the gas/electric burner, because changes in air velocity impact heat transfer almost instantly.`,
     points:["Airflow's role in chaff removal, even heat distribution, and convective heat delivery rate","Why increasing airflow can paradoxically slow BT rise if pulling more ambient air through (cooling effect) vs. when it increases convective transfer from already-hot air","Airflow's role in 'cleaning up' smoky/ashy notes by clearing combustion byproducts from the bean mass"],
     refs:["Eggers & Pietsch (2001), op. cit.","Bullet R1 and Kaleido M10 manufacturer technical documentation (verify current airflow control specs directly with Aillio/Kaleido before purchase decision)."]},
    {t:"Burner/heater energy input and modulation", b:"Gas BTU or electric element power as the primary energy lever, and the lag between input change and BT response.",
     content: `The burner (gas or electric) provides the gross thermal energy for the system. The most important concept to master here is **Thermal Lag**.

When you adjust the burner, the heat must first transfer to the drum metal and the air, and *then* to the beans, and *finally* to the probe reading the bean temp. This can take anywhere from 10 to 45 seconds depending on the mass of your machine.

Proactive roasting means making burner adjustments *before* you see the curve change on your software. The classic approach is high initial energy (to build momentum during the endothermic drying phase) followed by a gradual tapering of power as the beans approach First Crack (exothermic phase) to prevent the RoR from flicking.`,
     points:["Thermal lag and overshoot risk — why late, large power changes are harder to control than early, small ones","Gas vs. electric heating element response-time differences (relevant directly to your Bullet R1 vs. Kaleido M10 comparison, since they differ in heating approach)","Pre-heat/soak strategy and drum thermal stabilization before charging"],
     refs:["Schenker (2000), op. cit.","Manufacturer specs — verify electric power curves for both candidate machines."]},
    {t:"Batch size and drum loading", b:"Why the same profile on the same machine behaves differently at 200g vs. 1kg loads.",
     content: `Your batch size dramatically alters the thermodynamic environment of the drum. 

Every roaster has a "sweet spot"—usually around 60-80% of its stated maximum capacity. 
- **Under-loading**: A 200g batch in a 1kg roaster means there is too little bean mass to buffer the heat of the heavy drum. The beans will roast too fast by conduction, risking scorching and tipping on the flat surfaces of the bean.
- **Over-loading**: A 1.2kg batch in a 1kg roaster means there is too much thermal mass. The burner cannot supply enough momentum, resulting in a sluggish, baked roast with poor development.

When you change batch size, you must completely recalibrate your Charge Temperature and burner settings to achieve the same RoR curve.`,
     points:["Thermal mass ratio of bean charge to drum mass changes effective heat transfer per bean","Under-loading risks scorching (too little mass to buffer drum heat); over-loading risks sluggish, underdeveloped roasts","Scaling implications directly relevant to your production roaster decision — both R1 and M10 have stated batch ranges worth profiling across, not just at nameplate capacity"],
     refs:["Rao (2014), op. cit., Ch. 3.","Hoos (2015), op. cit."]}
  ]
},
{
  mod:"Module 9", title:"Cultivar, processing, and density as roasting inputs", id:"m9",
  desc:"Directly relevant to your Finca Oltehua lots — how green coffee characteristics should change your profile, not just your purchasing.",
  topics:[
    {t:"Density and altitude effects on heat transfer", b:"Why your higher-density, higher-altitude lots need different energy strategy than lower-density lots.",
     content: `Green coffee density is largely determined by altitude. Coffees grown at higher elevations (like a strict hard bean from Colombia) mature more slowly, creating a tightly packed, dense cellular matrix. 

**Dense beans** have a lower thermal conductivity. This means they can withstand higher charge temperatures without scorching the exterior, but they require a longer Maillard phase to allow the heat to penetrate all the way to the core.

**Soft beans** (from lower altitudes, like some Brazils) require a much gentler charge temperature. Hit them with too much heat, and the exterior will scorch and char before the inside even begins to develop.`,
     points:["Denser beans (often higher-altitude) have lower thermal conductivity and need longer/gentler heat application to develop evenly without scorching exterior","Practical implication for your Marsellesa vs. Sarchimor profiles, which likely differ in density due to varietal and processing"],
     refs:["Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — primary source for this framework.","Bustos-Vanegas et al. (2018), op. cit."]},
    {t:"Processing method's effect on roast behavior", b:"Washed, natural, honey, and extended/co-fermentation lots roast differently — sugar content and surface chemistry differ going in.",
     content: `How a coffee was processed at the farm changes its chemical makeup and its physical behavior in the drum.

- **Washed Coffees**: Generally cleaner and more robust. They handle heat well and have a predictable trajectory through Maillard and First Crack.
- **Natural / Honey Coffees**: These retain much more mucilage (fruit sugar) dried onto the outside of the bean. Because of these surface sugars, they caramelize and scorch *much faster* under intense conductive heat. You must typically use a lower charge temperature and rely more on convection (airflow) to prevent the exterior from turning ashy before the inside is cooked.
- **Co-fermentations**: Like your mango co-ferment Sarchimor, these have altered precursor compounds that can trigger Maillard browning much earlier than expected.`,
     points:["Higher residual sugar in naturals/honeys can accelerate Maillard onset and increase scorching risk at high drum-contact heat","Extended fermentation (your 140-hr whole-cherry Marsellesa, mango co-ferment Sarchimor) changes precursor compound profiles before roasting even starts — worth treating as a distinct input variable, not just a flavor descriptor","Practical implication: your two showcase lots from the June 27 pop-up likely warrant meaningfully different charge/Maillard-duration strategies even at the same final roast level"],
     refs:["Hoos (2024), op. cit.","de Melo Pereira, G.V. et al. (2019). 'Effect of co-fermentation on coffee quality.' <i>Food Research International</i>."]},
    {t:"Cultivar-specific flavor potential", b:"Why genetics set an upper bound on what a roast profile can express.",
     content: `Rob Hoos argues effectively that roasting cannot *create* flavors that aren't genetically present in the green bean; roasting only acts as an amplifier and a filter.

Different cultivars (e.g., Geisha, Bourbon, Sarchimor) possess completely different baseline levels of sucrose, trigonelline, and chlorogenic acids. A Geisha inherently has extreme floral potential and bright acidity, meaning your roast profile should prioritize a fast Maillard phase and a light drop to preserve those notes. A Sarchimor often has excellent body and chocolate notes, favoring a slightly stretched Maillard phase to highlight its structural strengths.`,
     points:["Sucrose and CGA content variance across cultivars (e.g., Marsellesa, Sarchimor lineage) as a starting-point predictor","Matching roast strategy to genetically-set flavor ceiling rather than fighting it"],
     refs:["Hoos (2024), op. cit. — entire book is structured around this thesis."]}
  ]
},
{
  mod:"Module 10", title:"Profile design and repeatability", id:"m10",
  desc:"Moving from one good roast to a repeatable, scalable profile — essential before wholesale production.",
  topics:[
    {t:"Designing a target RoR curve before roasting", b:"Working backward from desired cup outcome to a planned curve shape, rather than improvising live.",
     content: `Professional roasting is not improvisational; it is pre-planned execution. 

Before turning on the machine, you should define your goals based on your sensory evaluation of the green bean:
1. **Acidity**: Do I want this bright or rounded? (Dictates the length of the drying/Maillard phases).
2. **Body**: Do I want this tea-like or syrupy? (Dictates the extension of the Maillard phase).
3. **Sweetness/Roast**: Do I want vibrant fruit or chocolate/caramel? (Dictates the Development Time Ratio and final Drop Temperature).

Once you establish these parameters, you draw your "target" Rate of Rise curve, and use the burner and airflow to steer the physical machine to match the mathematical curve.`,
     points:["Setting target Maillard duration based on desired body","Setting target development time/drop temp based on desired sweetness/roastiness balance","Building in tolerance bands rather than single-point targets, since green moisture varies batch to batch"],
     refs:["Rao, S. (2020), op. cit. — this is the book's central methodology."]},
    {t:"Batch-to-batch consistency and drift sources", b:"What actually causes a profile to drift on you over weeks of production, separate from operator error.",
     content: `You roasted the perfect batch on Tuesday. On Friday, following the exact same gas and airflow changes, the coffee tastes completely different. Why? **Thermal Drift**.

A roasting machine stores massive amounts of heat. Your first batch of the day (even after a warm-up) will act sluggish because the drum is still absorbing energy. By batch #5, the drum is fully saturated with heat, and the exact same burner settings will drive the roast much faster. 

To maintain consistency, you must employ a strict **Between Batch Protocol (BBP)**—a repeatable routine of cooling the drum to a specific ET before dropping the next charge—to ensure the starting thermal state is identical every time.`,
     points:["Drum/machine thermal seasoning over a roasting session (back-to-back batches run hotter without compensation)","Ambient temperature/humidity drift across a day or season","Green coffee aging between purchase and roast affecting moisture and density"],
     refs:["Schenker (2000), op. cit.","Folmer (2017), op. cit."]},
    {t:"Logging and software (Artisan, Cropster) as the feedback loop", b:"Why profile logging isn't bookkeeping — it's the only way to actually iterate scientifically rather than by feel.",
     content: `Human memory is notoriously unreliable, especially when balancing heat, airflow, and time across a 12-minute roast. 

Roast logging software (like [Artisan](https://artisan-scope.org/) or [Cropster](https://www.cropster.com/)) connects to the thermocouples in your machine and graphs the BT, ET, and RoR in real-time. This is not just bookkeeping; it is the fundamental feedback loop of roasting.

By overlaying the graph of an excellent roast on top of a new batch, you can see exactly where the RoR deviated and caused a defect. Without data logging, roasting is guesswork. With it, roasting is iteration.`,
     points:["Minimum viable logging setup for a small operation (this is relevant to your R1/M10 decision since logging integration differs between them)","Overlaying roasts to compare RoR shape directly rather than relying on memory","Tagging cup notes to specific profile features to build your own evidence base over time"],
     refs:["Artisan-scope documentation: https://artisan-scope.org","Cropster documentation: https://www.cropster.com"]}
  ]
},
{
  mod:"Module 11", title:"Machine architecture and how it changes theory into practice", id:"m11",
  desc:"Translating the physics above into what specific machine designs actually do — written with your Bullet R1 vs. Kaleido M10 decision in mind.",
  topics:[
    {t:"Fluid-bed / forced-air convection-forward designs (Bullet R1 category)", b:"Lower thermal mass, fast response, convection-dominant heat transfer.",
     content: `Aillio's Bullet R1 uses an inductive heating element wrapped around a relatively thin drum, paired with highly responsive airflow.

**Pros**: Because the thermal mass of the drum is low, when you change the power, the ET responds almost immediately. It is highly agile, allowing for surgical precision over the RoR curve. Convection dominates, making it excellent for bright, clean, light-roast specialty profiles.
**Cons**: It is less forgiving. Without heavy cast iron to buffer heat, a momentary lapse in energy management will immediately cause the RoR to crash or flick.`,
     points:["Faster ET response to power changes → more responsive but less forgiving control surface","Lower thermal mass means less 'free' heat buffering, so airflow strategy matters more, earlier","Generally favors roasters who want tight, repeatable control via software/electric precision over mechanical feel"],
     refs:["Verify current technical specs directly from Aillio product documentation before finalizing — manufacturer specs change between hardware revisions."]},
    {t:"Drum/hybrid designs with higher thermal mass (Kaleido M10 category)", b:"More conduction-present, generally more thermal buffering, different control philosophy.",
     content: `The Kaleido M10 (and similar traditional heavy-drum architectures) rely on a thick carbon steel or cast-iron drum that acts as a massive thermal battery.

**Pros**: The heavy drum provides immense thermal stability. It radiates and conducts heat steadily, making it harder to accidentally stall a roast. It excels at developing deep, syrupy bodies and handles larger batches with ease.
**Cons**: The thermal lag is significant. If you realize your RoR is heading toward a flick at First Crack and you cut the power, the drum will continue radiating stored heat for another 30 seconds, meaning your adjustment might be too late. You must drive these machines predictively, not reactively.`,
     points:["Higher thermal mass smooths out minor control input noise but responds more slowly to intentional changes","Often more batch-size flexible due to drum buffering, relevant to your demand-validation-before-scaling approach","Different pre-heat/soak discipline required compared to fast-response fluid-bed designs"],
     refs:["Verify current technical specs directly from Kaleido product documentation before finalizing."]},
    {t:"Translating demand validation into machine choice", b:"Connecting this module back to your actual decision: profile repeatability needs vs. batch flexibility vs. capital outlay.",
     content: `When scaling up for wholesale, your machine choice dictates your workflow.

If you are roasting heavily varied, micro-lot coffees (like 100-hour anaerobic honeys) that require vastly different, delicate profiles, the agile control of a convection-forward machine (Bullet R1) is highly advantageous. 

If you are roasting consistent espresso blends or large batches of washed coffees where body, sweetness, and rock-solid batch-to-batch consistency are paramount, the thermal buffering of a heavy drum (Kaleido M10) often makes production roasting less stressful.`,
     points:["Given your wholesale-validation-before-capital-investment framework, the relevant question is which machine's control surface and batch-size range lets you profile *both* the Marsellesa and Sarchimor lots reliably at your current likely batch volumes","Worth running this as an explicit module in its own follow-up conversation once you have current spec sheets in front of you, since I haven't priced-checked current 2026 hardware specs here"]}
  ]
},
{
  mod:"Module 12", title:"Sensory validation: closing the loop", id:"m12",
  desc:"Roasting theory is only useful insofar as it predicts what lands in the cup — cupping as the feedback mechanism.",
  topics:[
    {t:"Cupping protocol as profile feedback", b:"Standardized cupping isn't bureaucracy — it's the control group for your profiling experiments.",
     content: `You cannot improve a roast profile using a V60 or an Espresso machine. Brewing introduces too many external variables (grind size, water chemistry, bypass) that obscure the roast itself.

**[Coffee Cupping](https://en.wikipedia.org/wiki/Coffee_tasting)** is an immersion brewing method designed to remove variables. By standardizing the ratio (usually 8.25g per 150ml), grind, and water temperature, you isolate the roast quality. If a coffee tastes underdeveloped on the cupping table, you know definitively it is a roasting defect, not a brewing error. Cupping is the scientific control group for your roasting experiments.`,
     points:["SCA cupping protocol basics: dry fragrance, wet aroma, break, flavor, body, finish","Calibrating your own palate against a reference flight before trusting single-roast judgments","Connecting specific cup defects (Module 6) back to specific RoR/profile features"],
     refs:["SCA (Specialty Coffee Association). <i>SCA Cupping Protocols</i>. https://sca.coffee","Lingle, T. (2011). <i>The Coffee Cupper's Handbook</i>, 4th ed. SCAA."]},
    {t:"Volatile compound classes and their sensory signatures", b:"The chemistry-to-cup-language bridge — naming what you're tasting in terms of what produced it.",
     content: `Developing a professional palate requires linking sensory experiences to chemical realities.

- **Furans and Furanones**: Formed via caramelization and Maillard reactions. These present as sweet, caramel, and burnt-sugar aromas. If your cup lacks these, your Maillard/development phases were too short.
- **Pyrazines**: Formed later in the Maillard reaction. These contribute to nutty, roasted, and sometimes earthy/bell-pepper notes.
- **Phenolic Compounds**: Driven by high-heat pyrolysis (dark roasting). These taste smoky, medicinal, or spicy, and indicate heavy structural degradation of the bean.`,
     points:["Furans/furanones: caramel, sweet notes from Maillard/caramelization","Pyrazines: roasty, nutty, sometimes green-bell-pepper notes depending on type","Phenolics: smoky, medicinal notes, often associated with over-roasting or certain processing defects"],
     refs:["Moon & Shibamoto (2009), op. cit.","Yeretzian, C. et al. (2002). 'Composition of the headspace above roasted coffee.' <i>European Food Research and Technology</i>."]},
    {t:"Building a tasting-to-profile feedback log", b:"Operationalizing everything above into a repeatable personal practice for Jardín Oculto.",
     content: `The final step to mastering coffee roasting is the Feedback Loop. 

After cupping a batch, you must return to the Artisan/Cropster profile graph and tag the sensory defects to physical events. Did it taste baked? Look at the RoR between minutes 4 and 6. Was it too acidic? Look at the development time ratio. 

By building a systematic log tying specific sensory notes to specific RoR anomalies, you move from roasting by guesswork to roasting by intent. This log becomes the proprietary intellectual property of your roastery.`,
     points:["Standard template: profile parameters logged alongside structured cupping notes per batch","Pattern-matching across batches over time rather than single-roast conclusions","Using this log as the actual evidence base when pitching wholesale clients on consistency"]}
  ]
}
];
