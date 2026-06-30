export default {
  "mod": "Module 3",
  "title": "Drying phase",
  "id": "m3",
  "desc": "The first and longest phase by convention — removing free moisture without 'baking' the bean.",
  "topics": [
    {
      "t": "Physical drying kinetics",
      "b": "How moisture actually leaves the bean, and why drying rate sets up everything downstream.",
      "content": "The \"drying phase\" is somewhat of a misnomer, as moisture loss continues throughout the entire roast. However, the first phase (from charge to roughly 150°C) is dominated by the physical removal of *free water*.\n\nWater has an incredibly high specific heat capacity. This means it absorbs a massive amount of energy before turning into steam. This phase requires significant momentum. If you don't supply enough heat early on, the beans will linger in this zone, flattening the RoR curve and setting you up for a \"baked\" profile. As the free moisture is driven off, the chlorophyll degrades, and the beans transition from green to yellow, emitting a distinct grassy/hay smell.",
      "points": [
        "Free water vs. bound water and differing removal mechanisms",
        "Typical drying phase end marker: ~150–160°C bean temp (varies by convention/machine)",
        "Color shift green → yellow as a proxy for substantial moisture loss"
      ],
      "refs": [
        "Schenker (2000), op. cit., Ch. 4.",
        "Wang, N. & Lim, L.T. (2014). 'Fourier transform infrared and physicochemical analyses of roasted coffee.' <i>J. Agric. Food Chem.</i>"
      ]
    },
    {
      "t": "'Baking' as a drying-phase defect",
      "b": "A roast that spends too long at moderate temps in the dry phase produces flat, papery, bready flavors — defining and diagnosing this.",
      "content": "A \"baked\" roast is one of the most common, yet misunderstood, defects in specialty coffee. \n\n**Mechanism**: Baking occurs when the roast stalls or progresses too slowly, particularly during the drying and early Maillard phases, or if the RoR flatlines or crashes entirely. \nWhen coffee spends too much time at moderate temperatures without adequate energy momentum, the delicate aromatic compounds and volatile acids degrade before the browning reactions can build structural complexity.\n\n**Sensory Signature**: Baked coffee lacks sweetness and acidity. It tastes flat, papery, bready, or like oats, even if the final drop temperature and color suggest a light or medium roast.",
      "points": [
        "Mechanism: extended low-energy exposure degrades aromatics before Maillard can build complexity",
        "Distinguishing baked from underdeveloped (different root causes, similar cupping language)",
        "Charge temperature and turning point as the primary levers"
      ],
      "refs": [
        "Hoos (2015), op. cit., Ch. 'Common Defects.'",
        "Giacalone, D. et al. (2019). 'Common roasting defects in coffee.' <i>Food Quality and Preference</i>, 71, 463–474."
      ]
    },
    {
      "t": "Turning point and charge temperature theory",
      "b": "What turning point actually tells you about charge energy, and how to use it diagnostically rather than ritually.",
      "content": "When you drop room-temperature beans into a hot roaster, the BT probe's reading plummets rapidly before eventually stabilizing and climbing again. The exact bottom of this V-shaped dip is called the **Turning Point (TP)**.\n\nIt is crucial to understand that TP is mostly a thermodynamic artifact of the probe normalizing to the temperature of the bean mass. It does *not* mean the beans themselves cooled down and are now heating up. \n\nYour **Charge Temperature** (the drum temp when you drop the beans) dictates the momentum of the entire roast. Denser, higher-altitude beans (or high-moisture lots) generally require a higher charge temperature to build adequate momentum, whereas softer beans might scorch at those same temperatures.",
      "points": [
        "Turning point as a function of charge temp, batch size, and drum thermal mass — not a fixed target",
        "Why chasing a specific TP number across different bean densities/moistures is a category error",
        "Charge temp strategy differences between dense high-altitude vs. lower-density lots"
      ],
      "refs": [
        "Rao (2014), op. cit., Ch. 4.",
        "Schenker, S. & Rothgeb, T. (2017). 'The roast — creating the bean's signature.' In <i>The Craft and Science of Coffee</i>, Elsevier, pp. 245–271."
      ]
    }
  ]
};
