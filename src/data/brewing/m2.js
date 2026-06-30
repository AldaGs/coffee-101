export default {
  "en": {
    "mod": "Module 2",
    "title": "Water chemistry",
    "id": "m2",
    "desc": "Water is 98%+ of the finished beverage by weight — its mineral content actively participates in extraction, not just dilutes it.",
    "topics": [
      {
        "t": "General hardness (GH) and extraction",
        "b": "Calcium and magnesium ions coordinate with coffee solubles and measurably change extraction rate and flavor compound solubility.",
        "content": "Water is a chemical solvent, but it is not empty. The **[General Hardness (GH)](https://en.wikipedia.org/wiki/Hard_water)** of water primarily measures the presence of Calcium (Ca2+) and Magnesium (Mg2+) cations.\n\nThese positively charged ions act like tiny chemical hooks. As water enters the coffee grounds, Calcium and Magnesium actively pull out negatively charged flavor compounds, particularly heavy fruit acids and complex sugars. Magnesium is especially effective at extracting smaller, sweeter flavor compounds.\n\nIf you brew with pure distilled or reverse osmosis (RO) water (GH = 0), the water lacks these 'hooks.' As a result, the coffee extracts poorly and tastes incredibly flat, thin, and lifeless.",
        "points": [
          "Mg2+ in particular shown to enhance extraction of certain flavor compounds more than Ca2+",
          "Practical GH targets debated, but near-zero GH water under-extracts and tastes flat/thin",
          "Hendon & Colonna-Dashwood's 2014 ACS paper as the foundational mechanistic study"
        ],
        "refs": [
          "Hendon, C.H., Colonna-Dashwood, L., & Colonna-Dashwood, M. (2014). 'The role of dissolved cations in coffee extraction.' <i>J. Agric. Food Chem.</i>, 62(21), 4947-4950.",
          "Colonna-Dashwood, M. & Hendon, C.H. (2015). <i>Water for Coffee</i>."
        ],
        "flashcards": [
          { "q": "What does GH (General Hardness) measure in brewing water?", "a": "The concentration of Ca²⁺ and Mg²⁺ cations — positively charged ions that act as chemical 'hooks' for coffee flavor compounds." },
          { "q": "What happens if you brew with pure distilled or RO water (GH ≈ 0)?", "a": "The water lacks mineral hooks, so extraction is weak — the cup tastes flat, thin, and lifeless." },
          { "q": "Which ion — Ca²⁺ or Mg²⁺ — is more effective at extracting sweeter flavor compounds?", "a": "Mg²⁺ (Magnesium) — shown by Hendon & Colonna-Dashwood (2014) to extract smaller, sweeter compounds more effectively." }
        ]
      },
      {
        "t": "Alkalinity / carbonate hardness (KH) and acidity perception",
        "b": "Bicarbonate buffers against the acids extracted from coffee — too much and you mute acidity entirely; too little and brews can taste sharp or unstable.",
        "content": "**[Carbonate Hardness (KH)](https://en.wikipedia.org/wiki/Carbonate_hardness)**, or Alkalinity, measures the water's buffering capacity, usually through bicarbonate ions.\n\nCoffee is naturally acidic. When you brew it, you are extracting those acids into the cup. Alkalinity acts as a sponge that soaks up or neutralizes those acids. \n\n- **High KH**: Mutes all acidity. Your bright washed Ethiopian will taste flat, chalky, and lifeless.\n- **Low KH**: Allows all the acidity to shine through, but the cup can taste sharply sour or unpleasantly biting if not managed.\n\nMost specialty coffee water aims for a moderate KH (around 40 ppm as CaCO3) to balance the acidity without destroying it.",
        "points": [
          "KH's buffering mechanism against carbonic and other extracted acids",
          "Practical trade-off: low-KH water preserves bright acidity but risks instability/sourness; higher KH mutes and rounds",
          "Scaling risk in equipment from high KH, separate from flavor consideration"
        ],
        "refs": [
          "Colonna-Dashwood & Hendon (2015), op. cit. — primary source for the GH/KH framework.",
          "Bell, L. et al. (2020). 'Impact of water chemistry on coffee extraction.' <i>J. Food Sci.</i>"
        ],
        "flashcards": [
          { "q": "What does KH (Carbonate Hardness / Alkalinity) control in brewing?", "a": "The buffering capacity — how much of the coffee's extracted natural acidity gets neutralized in the cup." },
          { "q": "What does high KH water do to a bright washed Ethiopian?", "a": "Mutes the acidity entirely — the cup tastes flat, chalky, and lifeless because bicarbonate neutralizes the extracted acids." },
          { "q": "What is the typical SCA target for alkalinity (KH)?", "a": "Around 40 ppm as CaCO₃ — enough to buffer without destroying the coffee's natural brightness." }
        ]
      },
      {
        "t": "Building your own brew water",
        "b": "Practical recipe construction using mineral concentrates — directly actionable for a small operation needing consistent water regardless of municipal supply variance.",
        "content": "Because municipal tap water varies wildly (and can ruin an otherwise perfect roast), many specialty cafes build their own water.\n\nThe process involves starting with purely stripped water (Distilled or RO) and adding back specific amounts of minerals:\n- **Epsom Salt (Magnesium Sulfate)**: To add GH for extraction power.\n- **Baking Soda (Sodium Bicarbonate)**: To add KH to buffer the acidity.\n\nBy making mineral concentrates, you can exactly replicate a target recipe (like the Barista Hustle water recipe) anywhere in the world. This is the single most effective upgrade you can make to your brewing consistency.",
        "points": [
          "RO/distilled water as a near-zero baseline, then add back minerals to target",
          "Common salts used: Epsom salt (MgSO4) for GH, baking soda (NaHCO3) or potassium bicarbonate for KH",
          "Calculator tools (Aqion, Barista Hustle water calculator) for precise recipe building",
          "Why this matters for you specifically: Puebla municipal water mineral content will differ from wherever your recipes were last dialed in"
        ],
        "refs": [
          "Barista Hustle. 'DIY Water Recipes.' https://www.baristahustle.com/diy-water-recipes-redux/",
          "Coffee ad Astra. 'Water for Coffee Extraction.' https://coffeeadastra.com/2018/12/16/water-for-coffee-extraction/"
        ],
        "flashcards": [
          { "q": "What two common compounds are used to build custom brew water from RO?", "a": "Epsom salt (MgSO₄) adds GH (extraction hardness); baking soda (NaHCO₃) adds KH (alkalinity buffer)." },
          { "q": "Why do specialty cafés build water from RO rather than using tap?", "a": "Municipal tap water varies unpredictably — starting from a near-zero mineral baseline allows a precise, consistent, replicable recipe." },
          { "q": "Why is starting from RO or distilled water essential for a custom recipe?", "a": "You need a near-zero baseline to add back minerals in exact amounts. Adding minerals to unknown tap water produces uncontrolled results." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Química del agua",
    "id": "m2",
    "desc": "El agua es más del 98% del peso de la bebida final — su contenido mineral participa activamente en la extracción, no solo la diluye.",
    "topics": [
      {
        "t": "Dureza general (GH) y extracción",
        "b": "Los iones de calcio y magnesio se coordinan con los solubles del café y cambian medible la velocidad de extracción y la solubilidad de compuestos de sabor.",
        "content": "El agua es un solvente químico, pero no está vacía. La **[Dureza General (GH)](https://es.wikipedia.org/wiki/Dureza_del_agua)** mide principalmente la presencia de cationes de Calcio (Ca2+) y Magnesio (Mg2+).\n\nEstos iones de carga positiva actúan como pequeños ganchos químicos. A medida que el agua entra en el café, el Calcio y el Magnesio jalan activamente los compuestos de sabor de carga negativa, particularmente los ácidos frutales pesados y los azúcares complejos. El magnesio es especialmente efectivo para extraer compuestos más pequeños y dulces.\n\nSi filtras con agua destilada o de ósmosis inversa pura (GH = 0), el agua carece de estos 'ganchos'. Como resultado, el café se extrae muy mal y sabe increíblemente plano, delgado y sin vida.",
        "points": [
          "Se ha mostrado que el Mg2+ en particular potencia la extracción de ciertos compuestos de sabor más que el Ca2+",
          "Los objetivos prácticos de GH se debaten, pero agua con GH casi nulo subextrae y sabe plana/delgada",
          "El artículo fundacional de Hendon y Colonna-Dashwood (2014, ACS) como el estudio mecanístico base"
        ],
        "refs": [
          "Hendon, C.H., Colonna-Dashwood, L., & Colonna-Dashwood, M. (2014). 'The role of dissolved cations in coffee extraction.' <i>J. Agric. Food Chem.</i>, 62(21), 4947-4950.",
          "Colonna-Dashwood, M. & Hendon, C.H. (2015). <i>Water for Coffee</i>."
        ]
      },
      {
        "t": "Alcalinidad / dureza de carbonatos (KH) y percepción de acidez",
        "b": "El bicarbonato amortigua los ácidos extraídos del café — demasiado y silencias por completo la acidez; muy poco y la extracción puede saber punzante o inestable.",
        "content": "La **[Dureza de Carbonatos (KH)](https://es.wikipedia.org/wiki/Alcalinidad)**, o Alcalinidad, mide la capacidad de amortiguación del agua, usualmente a través de iones de bicarbonato.\n\nEl café es naturalmente ácido. Al prepararlo, extraes esos ácidos en la taza. La alcalinidad actúa como una esponja que absorbe o neutraliza esos ácidos.\n\n- **KH Alto**: Silencia toda la acidez. Tu lavado etíope brillante sabrá plano, a tiza y sin vida.\n- **KH Bajo**: Permite que toda la acidez brille, pero la taza puede saber afilada, punzante o desagradablemente ácida si no se controla.\n\nLa mayoría del agua para café de especialidad apunta a un KH moderado (alrededor de 40 ppm como CaCO3) para balancear la acidez sin destruirla.",
        "points": [
          "El mecanismo de amortiguación del KH contra el ácido carbónico y otros ácidos extraídos",
          "Compromiso práctico: agua con KH bajo preserva acidez brillante pero arriesga inestabilidad/acidez excesiva; KH más alto silencia y redondea",
          "Riesgo de sarro en el equipo por KH alto, aparte de la consideración de sabor"
        ],
        "refs": [
          "Colonna-Dashwood y Hendon (2015), op. cit. — fuente principal del marco GH/KH.",
          "Bell, L. et al. (2020). 'Impact of water chemistry on coffee extraction.' <i>J. Food Sci.</i>"
        ]
      },
      {
        "t": "Construir tu propia agua de extracción",
        "b": "Construcción práctica de recetas usando concentrados minerales — directamente aplicable para una operación pequeña que necesita agua consistente sin depender de la variación del suministro municipal.",
        "content": "Debido a que el agua de grifo municipal varía enormemente (y puede arruinar un tueste perfecto), muchas cafeterías de especialidad construyen su propia agua.\n\nEl proceso implica comenzar con agua puramente desmineralizada (Destilada o RO) y volver a añadir cantidades específicas de minerales:\n- **Sal de Epsom (Sulfato de Magnesio)**: Para agregar GH para poder de extracción.\n- **Bicarbonato de Sodio**: Para agregar KH para amortiguar la acidez.\n\nAl hacer concentrados minerales, puedes replicar exactamente una receta objetivo (como la receta de Barista Hustle) en cualquier parte del mundo. Esta es la mejora más efectiva que puedes hacer para la consistencia de tu preparación.",
        "points": [
          "Agua RO/destilada como línea base casi nula, luego agregar minerales hasta el objetivo",
          "Sales comunes: sal de Epsom (MgSO4) para GH, bicarbonato de sodio (NaHCO3) o bicarbonato de potasio para KH",
          "Herramientas calculadoras para construir recetas con precisión",
          "Por qué esto te importa específicamente: el agua municipal de Puebla tendrá un contenido mineral distinto"
        ],
        "refs": [
          "Barista Hustle. 'DIY Water Recipes.' https://www.baristahustle.com/diy-water-recipes-redux/",
          "Coffee ad Astra. 'Water for Coffee Extraction.' https://coffeeadastra.com/2018/12/16/water-for-coffee-extraction/"
        ]
      }
    ]
  }
};