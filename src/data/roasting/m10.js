export default {
  "mod": "Module 10",
  "title": "Profile design and repeatability",
  "id": "m10",
  "desc": "Moving from one good roast to a repeatable, scalable profile — essential before wholesale production.",
  "topics": [
    {
      "t": "Designing a target RoR curve before roasting",
      "b": "Working backward from desired cup outcome to a planned curve shape, rather than improvising live.",
      "content": "Professional roasting is not improvisational; it is pre-planned execution. \n\nBefore turning on the machine, you should define your goals based on your sensory evaluation of the green bean:\n1. **Acidity**: Do I want this bright or rounded? (Dictates the length of the drying/Maillard phases).\n2. **Body**: Do I want this tea-like or syrupy? (Dictates the extension of the Maillard phase).\n3. **Sweetness/Roast**: Do I want vibrant fruit or chocolate/caramel? (Dictates the Development Time Ratio and final Drop Temperature).\n\nOnce you establish these parameters, you draw your \"target\" Rate of Rise curve, and use the burner and airflow to steer the physical machine to match the mathematical curve.",
      "points": [
        "Setting target Maillard duration based on desired body",
        "Setting target development time/drop temp based on desired sweetness/roastiness balance",
        "Building in tolerance bands rather than single-point targets, since green moisture varies batch to batch"
      ],
      "refs": [
        "Rao, S. (2020), op. cit. — this is the book's central methodology."
      ]
    },
    {
      "t": "Batch-to-batch consistency and drift sources",
      "b": "What actually causes a profile to drift on you over weeks of production, separate from operator error.",
      "content": "You roasted the perfect batch on Tuesday. On Friday, following the exact same gas and airflow changes, the coffee tastes completely different. Why? **Thermal Drift**.\n\nA roasting machine stores massive amounts of heat. Your first batch of the day (even after a warm-up) will act sluggish because the drum is still absorbing energy. By batch #5, the drum is fully saturated with heat, and the exact same burner settings will drive the roast much faster. \n\nTo maintain consistency, you must employ a strict **Between Batch Protocol (BBP)**—a repeatable routine of cooling the drum to a specific ET before dropping the next charge—to ensure the starting thermal state is identical every time.",
      "points": [
        "Drum/machine thermal seasoning over a roasting session (back-to-back batches run hotter without compensation)",
        "Ambient temperature/humidity drift across a day or season",
        "Green coffee aging between purchase and roast affecting moisture and density"
      ],
      "refs": [
        "Schenker (2000), op. cit.",
        "Folmer (2017), op. cit."
      ]
    },
    {
      "t": "Logging and software (Artisan, Cropster) as the feedback loop",
      "b": "Why profile logging isn't bookkeeping — it's the only way to actually iterate scientifically rather than by feel.",
      "content": "Human memory is notoriously unreliable, especially when balancing heat, airflow, and time across a 12-minute roast. \n\nRoast logging software (like [Artisan](https://artisan-scope.org/) or [Cropster](https://www.cropster.com/)) connects to the thermocouples in your machine and graphs the BT, ET, and RoR in real-time. This is not just bookkeeping; it is the fundamental feedback loop of roasting.\n\nBy overlaying the graph of an excellent roast on top of a new batch, you can see exactly where the RoR deviated and caused a defect. Without data logging, roasting is guesswork. With it, roasting is iteration.",
      "points": [
        "Minimum viable logging setup for a small operation (this is relevant to your R1/M10 decision since logging integration differs between them)",
        "Overlaying roasts to compare RoR shape directly rather than relying on memory",
        "Tagging cup notes to specific profile features to build your own evidence base over time"
      ],
      "refs": [
        "Artisan-scope documentation: https://artisan-scope.org",
        "Cropster documentation: https://www.cropster.com"
      ]
    }
  ]
};
