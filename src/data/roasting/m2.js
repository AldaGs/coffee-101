export default {
  "mod": "Module 2",
  "title": "Heat transfer mechanics",
  "id": "m2",
  "desc": "Conduction, convection, and radiation inside the roasting chamber, and how machine design selects which dominates.",
  "topics": [
    {
      "t": "The three heat transfer modes in a roaster",
      "b": "Drum conduction, convective hot air, and radiant heat from the drum/burner — every machine is a different blend.",
      "content": "Inside a roasting drum, three distinct modes of heat transfer act simultaneously, though the machine's design dictates which one dominates:\n\n1. **[Conduction](https://en.wikipedia.org/wiki/Thermal_conduction)**: Direct contact between the hot drum surface and the bean. This is the primary heat vector in older, thick-walled cast-iron roasters.\n2. **[Convection](https://en.wikipedia.org/wiki/Convection)**: Heat transferred via moving hot air passing through the tumbling bean mass. Modern fluid-bed and hybrid roasters lean heavily on this.\n3. **[Thermal Radiation](https://en.wikipedia.org/wiki/Thermal_radiation)**: Heat radiating from glowing elements or extremely hot drum walls without direct contact. Usually minor in drum roasters, but present.\n\nUnderstanding your machine's balance is critical. If your roaster is convection-forward (like the Bullet R1), manipulating the airflow becomes your most powerful lever for driving heat into the bean.",
      "points": [
        "Conduction: bean-to-drum-surface contact, dominant in older/cast-iron drum designs",
        "Convection: hot air moving through the bean mass, dominant in fluid-bed and high-airflow drum roasters",
        "Radiation: typically a minor term except in some fluid-bed designs",
        "Why this matters directly to you: Bullet R1 is convection-forward (fluid-bed-adjacent airflow path with drum); Kaleido M10 is a more conduction-present hybrid drum — different heat transfer balance changes how you'll need to drive charge temp and airflow profile"
      ],
      "refs": [
        "Eggers & Pietsch (2001), op. cit.",
        "Wilson, A.J. (2014). 'The roast: chemical changes and process control.' In <i>Specialty Coffee: A Chemical Perspective</i>."
      ]
    },
    {
      "t": "Bean temperature vs. environment temperature",
      "b": "The most-confused distinction in home/pro roasting — what the probe reads vs. what the bean actually experiences.",
      "content": "One of the most persistent illusions in coffee roasting is trusting the numbers on the screen too literally. \n\n**Bean Temperature (BT)** probes do not actually read the internal temperature of a bean. Instead, they measure the average temperature of the environment immediately surrounding the probe—a chaotic mix of tumbling beans and hot air. This means the probe's thickness (its thermal mass) and placement create a built-in *lag*.\n\n**Environment Temperature (ET)** measures the air inside the drum. It acts as a leading indicator: you must drive the ET higher to push heat into the BT. Think of ET as the \"gas pedal.\" If ET is falling, BT will soon follow. Always read your probes knowing you are seeing a delayed, smoothed reflection of reality, not instantaneous truth.",
      "points": [
        "Bean Temp (BT) probe placement artifacts — it reads a mix of bean mass and air, not 'true' bean core temp",
        "Environment/air temp (ET) as a leading indicator of energy available to transfer",
        "Lag between ET changes and BT response — thermal mass of the system"
      ],
      "refs": [
        "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Ch. 2–3.",
        "Hoos (2015), op. cit., Ch. on probe calibration."
      ]
    },
    {
      "t": "Rate of rise (RoR) as a derivative signal",
      "b": "RoR isn't a target, it's the first derivative of BT — and reading it wrong is the #1 novice mistake.",
      "content": "The **Rate of Rise (RoR)** is the mathematical first derivative of the Bean Temperature. It tells you *how fast* the temperature is changing per minute (e.g., +15°C/min). \n\nRoR is arguably the single most important diagnostic tool in a roaster's software (like [Artisan](https://artisan-scope.org/) or [Cropster](https://www.cropster.com/)). The generally accepted standard for specialty roasting is a smooth, steadily declining RoR from the turning point through to the drop. \n\n**Common RoR Defects**:\n- **The Flick**: A sudden spike in RoR late in the roast. Usually caused by the exothermic nature of First Crack overwhelming the machine's heat input if not properly managed, resulting in ashy flavors.\n- **The Crash**: A sudden plummet in RoR immediately following First Crack, caused by the sudden release of water vapor. This stalls the roast and bakes the coffee.",
      "points": [
        "Why declining RoR (not flat or rising) through development is the generally accepted target shape",
        "Flick: a late-roast RoR spike, usually from poor airflow/energy timing late in the roast",
        "Crash: a sudden RoR drop, usually from under-driving energy through first crack",
        "Smoothing/averaging artifacts in software (Artisan, Cropster) and why raw vs. smoothed RoR can mislead"
      ],
      "refs": [
        "Rao, S. (2020). <i>Coffee Roasting: Best Practices</i>. Entire book is essentially an RoR-shape manual.",
        "Artisan-scope documentation: https://artisan-scope.org"
      ]
    }
  ]
};
