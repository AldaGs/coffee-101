export default {
  "mod": "Module 1",
  "title": "Foundations: what roasting is",
  "id": "m1",
  "desc": "The physical and chemical definition of roasting, and why coffee is an unusually hard material to roast evenly.",
  "topics": [
    {
      "t": "Green coffee composition",
      "b": "Polysaccharides, sucrose, chlorogenic acids, lipids, proteins, moisture — the raw material roasting acts on.",
      "content": "Green coffee is essentially a dense, woody seed composed of around 50% carbohydrates (mostly insoluble cellulose and hemicellulose). This forms the structural matrix or \"scaffold\" of the bean. The remaining composition includes water (8-12%), lipids, proteins, chlorogenic acids, and soluble sugars (like sucrose).\n\n**The Role of Moisture**\nMoisture isn't just a quality specification to prevent mold; it's a critical process variable. The initial water content conducts heat into the center of the bean during the early stages of roasting. Beans with higher moisture require more energy upfront to drive off that water before the Maillard reaction can fully begin. \n\n**Flavor Precursors**\n- **Sucrose**: This is the primary sugar that will participate in caramelization and the Maillard reaction, contributing to sweetness and body. \n- **[Chlorogenic Acids (CGAs)](https://en.wikipedia.org/wiki/Chlorogenic_acid)**: These are the precursors to perceived acidity, but as roasting progresses, they break down into quinic and caffeic acids, which contribute to astringency and bitterness if over-developed.\n- **Lipids**: While they mostly survive the roast intact, they trap aromatic compounds and significantly affect the mouthfeel. Processing methods (washed, natural) alter the surface chemistry and lipid expression.",
      "points": [
        "Cellulose/hemicellulose scaffold vs. soluble sugars and acids",
        "Moisture content (8–12%) and its role as a process variable, not just a quality spec",
        "Lipid content and varietal/processing variation (washed vs. natural vs. honey)",
        "Chlorogenic acid (CGA) family as acidity and astringency precursors"
      ],
      "refs": [
        "Schenker, S. (2000). <i>Investigations on the Hot Air Roasting of Coffee Beans</i>. PhD thesis, ETH Zürich.",
        "Farah, A. (2012). 'Coffee constituents.' In <i>Coffee: Emerging Health Effects and Disease Prevention</i>."
      ]
    },
    {
      "t": "Roasting as a coupled heat/mass transfer + reaction process",
      "b": "Why you can't separate 'temperature' from 'time' from 'chemistry' — they're one coupled system.",
      "content": "Coffee roasting is highly complex: a dynamically coupled heat and mass transfer process occurring simultaneously with hundreds of chemical reactions.\n\n**The Porous Reactor**\nThink of the coffee bean as a tiny, porous reactor. As heat is applied to the exterior of the bean (**heat transfer inward**), the internal moisture turns to steam. The buildup of this steam and carbon dioxide (from pyrolysis) creates immense internal pressure. These gases must escape the bean (**mass transfer outward**).\n\n**Effective Heat Transfer**\nBecause the bean is both expanding in volume and losing mass (water and gas), its thermal conductivity changes throughout the roast. This is why you cannot simply set a machine to a fixed \"temperature.\" The *effective* heat transfer depends on:\n1. **Batch Size**: The thermal mass of the beans relative to the drum.\n2. **Airflow**: How efficiently hot air is pulling moisture away from the bean surface.\n3. **Drum Geometry**: How often the beans physically contact the hot metal.",
      "points": [
        "Bean as a porous, shrinking/expanding reactor",
        "Simultaneous heat conduction inward and moisture/CO2 diffusion outward",
        "Why batch size, airflow, and drum geometry all change the *effective* heat transfer coefficient, not just total heat"
      ],
      "refs": [
        "Schwartzberg, H.G. (2002). 'Shrinkage and thermal contraction of coffee beans during roasting.' <i>AIChE Annual Meeting</i>.",
        "Eggers, R. & Pietsch, A. (2001). 'Technology I: Roasting.' In <i>Coffee: Recent Developments</i>."
      ]
    },
    {
      "t": "Endothermic-to-exothermic transition",
      "b": "The single most load-bearing concept in profile reading: roasting flips from heat-absorbing to heat-releasing partway through.",
      "content": "One of the most critical concepts for a roaster to understand is the transition from heat absorption to heat generation.\n\n**Endothermic Phase (Heat Absorbing)**\nFor the first half of the roast (the drying phase and early Maillard), the beans are *endothermic*. They are absorbing energy from the environment to evaporate internal moisture and initiate chemical reactions. During this phase, you must supply ample energy to keep the roast moving.\n\n**Exothermic Phase (Heat Releasing)**\nAs the bean temperature approaches 160–180°C (depending on the probe and machine), **[pyrolysis](https://en.wikipedia.org/wiki/Pyrolysis)** reactions begin. These are chemical reactions where complex organic compounds break down rapidly, and critically, *they release their own heat*. The bean becomes *exothermic*.\n\n**Reading the RoR (Rate of Rise)**\nBecause the beans start generating their own heat, the Rate of Rise (how fast the temperature is increasing) will naturally want to flatten out or even spike upwards (a \"flick\"). If you do not proactively reduce the heat input leading into this transition, the roast will accelerate out of control, leading to baked, ashy, or hollow flavors. Misreading or ignoring this thermodynamic flip is the root cause of the most common roasting defects.",
      "points": [
        "Drying phase is endothermic (driving off free water)",
        "Around 160–180°C bean temp, pyrolysis reactions begin releasing heat",
        "Why ROR (rate of rise) naturally wants to dip then can flatten/rise here if you're not managing energy input",
        "Misreading this transition is the root cause of most flick/crash/baked defects"
      ],
      "refs": [
        "Schwartzberg, H.G. (2006). 'Modeling exothermic heat generation during the roasting of coffee.' <i>21st Intl. Conf. on Coffee Science (ASIC)</i>, Montpellier.",
        "Hoos, R. (2015). <i>The Coffee Roaster's Companion</i>. Ch. 'Phases of Roasting.'"
      ]
    }
  ]
};
