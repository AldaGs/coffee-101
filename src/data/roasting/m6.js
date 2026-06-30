export default {
  "mod": "Module 6",
  "title": "Development phase (post-first-crack)",
  "id": "m6",
  "desc": "The most consequential and most argued-over phase: drop temperature, development time ratio, and what they actually control.",
  "topics": [
    {
      "t": "Development time ratio (DTR) — origin and limits",
      "b": "The %-of-total-time-after-FC metric — useful heuristic, frequently over-applied.",
      "content": "The **Development Time Ratio (DTR)** is the percentage of total roast time that occurs *after* First Crack. For example, if a roast takes 10 minutes total, and First Crack happens at minute 8, the development time is 2 minutes (a 20% DTR).\n\nDTR was popularized by Scott Rao as a heuristic for consistency. A DTR between 15% and 25% is widely considered the \"sweet spot\" for specialty coffee to ensure the inner core of the bean is cooked without roasting the exterior too dark.\n\nHowever, DTR is just a ratio. A 20% DTR on a flat-lining RoR tastes entirely different than a 20% DTR on a steadily declining RoR. It is a useful shorthand, but it cannot replace tracking the actual curve shape and drop temperature.",
      "points": [
        "Definition and typical specialty-roasting ranges (commonly cited ~15–25%, highly profile-dependent)",
        "Why DTR alone, without RoR shape and charge/FC temp context, is an incomplete predictor of cup outcome",
        "Critiques: DTR conflates very different RoR shapes that happen to share a duration ratio"
      ],
      "refs": [
        "Rao, S. (2020), op. cit. — Rao is explicitly critical of DTR-as-sole-metric while acknowledging its diagnostic use.",
        "Hoos (2015), op. cit."
      ]
    },
    {
      "t": "Drop temperature and caramelization/pyrolysis balance",
      "b": "Hoos's framing: drop temp is your dial for the caramelization-to-pyrolysis ratio in the cup.",
      "content": "Your **Drop Temperature** (the final temperature when you eject the beans into the cooling tray) is the ultimate arbiter of roast degree.\n\nRob Hoos presents a highly practical framing: the drop temperature controls the ratio of **Caramelization** to **Pyrolysis**. \n- Lower drop temperatures preserve sweetness (caramelization) and acidity but risk tasting underdeveloped or grassy.\n- Higher drop temperatures introduce more pyrolysis, adding bittersweet, roasty, and chocolatey notes, but diminishing acidity and floral complexity.\n\nFine-tuning your drop temperature by even 1°C can radically shift this balance, especially for high-density, high-altitude coffees.",
      "points": [
        "Caramelization continues building sweetness/brown-sugar notes through this zone",
        "Excess pyrolysis at higher drop temps → roastiness, bitterness, reduced complexity",
        "Under-development (dropping too early/cool) → vegetal, grassy, underdeveloped acid notes"
      ],
      "refs": [
        "Hoos (2015), op. cit., Ch. 6 — primary source for this exact framing."
      ]
    },
    {
      "t": "Avoiding common development-phase defects",
      "b": "Diagnosing the three classic post-FC failure modes by their RoR and flavor signatures.",
      "content": "The development phase is a tightrope walk. The three most common failures are:\n\n1. **Underdevelopment**: Dropping the roast too early or with too little momentum. The core of the bean remains raw. The cup tastes sour (not acidic, but sharp/vinegary), grassy, or like green peas.\n2. **Over-development (Over-roasting)**: Pushing the drop temp too high or dragging the time too long. Pyrolysis dominates, resulting in ashy, carbon, or flat bitterness.\n3. **Baked**: As discussed in Module 3, if the RoR crashes flat during development, the coffee loses all its vibrant top notes and tastes like cardboard or baked bread, regardless of the final drop color.",
      "points": [
        "Underdevelopment: grassy/vegetal, sour-sharp, thin body — usually too-short or too-cool development",
        "Over-roasting: ashy/burnt/flat — usually excess pyrolysis from prolonged high heat post-FC",
        "Tipping/scorching: localized over-heating from excess drum-surface conduction or poor bean circulation, distinct from whole-bean over-roasting"
      ],
      "refs": [
        "Giacalone et al. (2019), op. cit.",
        "Yang, N. et al. (2016). 'Determination of volatile marker compounds of common coffee roast defects.' <i>Food Chemistry</i>, 211, 206–214."
      ]
    }
  ]
};
