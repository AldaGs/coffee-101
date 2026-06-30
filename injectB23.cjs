const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'brewing', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(2, () => `export default {
  "en": {
    "mod": "Module 2",
    "title": "Water chemistry",
    "id": "m2",
    "desc": "Water is 98%+ of the finished beverage by weight — its mineral content actively participates in extraction, not just dilutes it.",
    "topics": [
      {
        "t": "General hardness (GH) and extraction",
        "b": "Calcium and magnesium ions coordinate with coffee solubles and measurably change extraction rate and flavor compound solubility.",
        "content": "Water is a chemical solvent, but it is not empty. The **[General Hardness (GH)](https://en.wikipedia.org/wiki/Hard_water)** of water primarily measures the presence of Calcium (Ca2+) and Magnesium (Mg2+) cations.\\n\\nThese positively charged ions act like tiny chemical hooks. As water enters the coffee grounds, Calcium and Magnesium actively pull out negatively charged flavor compounds, particularly heavy fruit acids and complex sugars. Magnesium is especially effective at extracting smaller, sweeter flavor compounds.\\n\\nIf you brew with pure distilled or reverse osmosis (RO) water (GH = 0), the water lacks these 'hooks.' As a result, the coffee extracts poorly and tastes incredibly flat, thin, and lifeless.",
        "points": [
          "Mg2+ in particular shown to enhance extraction of certain flavor compounds more than Ca2+",
          "Practical GH targets debated, but near-zero GH water under-extracts and tastes flat/thin",
          "Hendon & Colonna-Dashwood's 2014 ACS paper as the foundational mechanistic study"
        ],
        "refs": [
          "Hendon, C.H., Colonna-Dashwood, L., & Colonna-Dashwood, M. (2014). 'The role of dissolved cations in coffee extraction.' <i>J. Agric. Food Chem.</i>, 62(21), 4947-4950.",
          "Colonna-Dashwood, M. & Hendon, C.H. (2015). <i>Water for Coffee</i>."
        ]
      },
      {
        "t": "Alkalinity / carbonate hardness (KH) and acidity perception",
        "b": "Bicarbonate buffers against the acids extracted from coffee — too much and you mute acidity entirely; too little and brews can taste sharp or unstable.",
        "content": "**[Carbonate Hardness (KH)](https://en.wikipedia.org/wiki/Carbonate_hardness)**, or Alkalinity, measures the water's buffering capacity, usually through bicarbonate ions.\\n\\nCoffee is naturally acidic. When you brew it, you are extracting those acids into the cup. Alkalinity acts as a sponge that soaks up or neutralizes those acids. \\n\\n- **High KH**: Mutes all acidity. Your bright washed Ethiopian will taste flat, chalky, and lifeless.\\n- **Low KH**: Allows all the acidity to shine through, but the cup can taste sharply sour or unpleasantly biting if not managed.\\n\\nMost specialty coffee water aims for a moderate KH (around 40 ppm as CaCO3) to balance the acidity without destroying it.",
        "points": [
          "KH's buffering mechanism against carbonic and other extracted acids",
          "Practical trade-off: low-KH water preserves bright acidity but risks instability/sourness; higher KH mutes and rounds",
          "Scaling risk in equipment from high KH, separate from flavor consideration"
        ],
        "refs": [
          "Colonna-Dashwood & Hendon (2015), op. cit. — primary source for the GH/KH framework.",
          "Bell, L. et al. (2020). 'Impact of water chemistry on coffee extraction.' <i>J. Food Sci.</i>"
        ]
      },
      {
        "t": "Building your own brew water",
        "b": "Practical recipe construction using mineral concentrates — directly actionable for a small operation needing consistent water regardless of municipal supply variance.",
        "content": "Because municipal tap water varies wildly (and can ruin an otherwise perfect roast), many specialty cafes build their own water.\\n\\nThe process involves starting with purely stripped water (Distilled or RO) and adding back specific amounts of minerals:\\n- **Epsom Salt (Magnesium Sulfate)**: To add GH for extraction power.\\n- **Baking Soda (Sodium Bicarbonate)**: To add KH to buffer the acidity.\\n\\nBy making mineral concentrates, you can exactly replicate a target recipe (like the Barista Hustle water recipe) anywhere in the world. This is the single most effective upgrade you can make to your brewing consistency.",
        "points": [
          "RO/distilled water as a near-zero baseline, then add back minerals to target",
          "Common salts used: Epsom salt (MgSO4) for GH, baking soda (NaHCO3) or potassium bicarbonate for KH",
          "Calculator tools (Aqion, Barista Hustle water calculator) for precise recipe building",
          "Why this matters for you specifically: Puebla municipal water mineral content will differ from wherever your recipes were last dialed in"
        ],
        "refs": [
          "Barista Hustle. 'DIY Water Recipes.' https://www.baristahustle.com/diy-water-recipes-redux/",
          "Coffee ad Astra. 'Water for Coffee Extraction.' https://coffeeadastra.com/2018/12/16/water-for-coffee-extraction/"
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
        "content": "El agua es un solvente químico, pero no está vacía. La **[Dureza General (GH)](https://es.wikipedia.org/wiki/Dureza_del_agua)** mide principalmente la presencia de cationes de Calcio (Ca2+) y Magnesio (Mg2+).\\n\\nEstos iones de carga positiva actúan como pequeños ganchos químicos. A medida que el agua entra en el café, el Calcio y el Magnesio jalan activamente los compuestos de sabor de carga negativa, particularmente los ácidos frutales pesados y los azúcares complejos. El magnesio es especialmente efectivo para extraer compuestos más pequeños y dulces.\\n\\nSi filtras con agua destilada o de ósmosis inversa pura (GH = 0), el agua carece de estos 'ganchos'. Como resultado, el café se extrae muy mal y sabe increíblemente plano, delgado y sin vida.",
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
        "content": "La **[Dureza de Carbonatos (KH)](https://es.wikipedia.org/wiki/Alcalinidad)**, o Alcalinidad, mide la capacidad de amortiguación del agua, usualmente a través de iones de bicarbonato.\\n\\nEl café es naturalmente ácido. Al prepararlo, extraes esos ácidos en la taza. La alcalinidad actúa como una esponja que absorbe o neutraliza esos ácidos.\\n\\n- **KH Alto**: Silencia toda la acidez. Tu lavado etíope brillante sabrá plano, a tiza y sin vida.\\n- **KH Bajo**: Permite que toda la acidez brille, pero la taza puede saber afilada, punzante o desagradablemente ácida si no se controla.\\n\\nLa mayoría del agua para café de especialidad apunta a un KH moderado (alrededor de 40 ppm como CaCO3) para balancear la acidez sin destruirla.",
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
        "content": "Debido a que el agua de grifo municipal varía enormemente (y puede arruinar un tueste perfecto), muchas cafeterías de especialidad construyen su propia agua.\\n\\nEl proceso implica comenzar con agua puramente desmineralizada (Destilada o RO) y volver a añadir cantidades específicas de minerales:\\n- **Sal de Epsom (Sulfato de Magnesio)**: Para agregar GH para poder de extracción.\\n- **Bicarbonato de Sodio**: Para agregar KH para amortiguar la acidez.\\n\\nAl hacer concentrados minerales, puedes replicar exactamente una receta objetivo (como la receta de Barista Hustle) en cualquier parte del mundo. Esta es la mejora más efectiva que puedes hacer para la consistencia de tu preparación.",
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
};`);

updateModule(3, () => `export default {
  "en": {
    "mod": "Module 3",
    "title": "Particle size and grind dynamics",
    "id": "m3",
    "desc": "Surface area is the lever that controls extraction rate more than almost any other variable — and grind distribution, not just average size, matters.",
    "topics": [
      {
        "t": "Surface area to volume ratio",
        "b": "Finer grind = more surface area exposed to water = faster extraction at a given time — the core physical relationship underlying every grind-size decision.",
        "content": "Grinding coffee does not change what is in the bean; it only changes how fast water can get to it. This is governed by the surface-area-to-volume ratio.\\n\\nBecause surface area scales geometrically, halving the diameter of a coffee particle roughly **quadruples** its surface area. This means grinding just slightly finer drastically increases the speed at which **[Diffusion](https://en.wikipedia.org/wiki/Diffusion)** occurs (as described by Fick's Law).\\n\\nThis makes the grinder the most sensitive lever you have. If a brew is flowing too fast and tastes sour, shifting the grind a few notches finer exposes vastly more surface area, fixing the extraction far more predictably than pouring the water slower.",
        "points": [
          "Why halving particle size roughly quadruples surface area (geometric, not linear relationship)",
          "Fick's law of diffusion as the underlying transport mechanism for solubles moving from particle into water",
          "Practical translation: grind change is usually a faster/more predictable lever than time change for adjusting extraction"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Cameron, M.I. et al. (2020). 'Systematically improving espresso: insights from mathematical modeling and experiment.' <i>Matter</i>, 3(3)."
        ]
      },
      {
        "t": "Particle size distribution (PSD) and fines",
        "b": "Average grind size is a misleading single number — the spread of particle sizes around that average changes extraction evenness.",
        "content": "When you set a grinder to 'medium,' it does not produce identically sized 'medium' particles. It produces a **Particle Size Distribution (PSD)**—a bell curve of sizes.\\n\\nAll grinders produce *boulders* (large chunks) and *fines* (microscopic dust). \\n\\n- **Fines** extract almost instantly. They provide the heavy, bitter baseline to the cup. Too many fines will muddy the flavor and physically clog the paper filter, stalling the brew.\\n- **Boulders** extract very slowly. If you have too many, the core of the particles remains dry, contributing sour, grassy under-extracted notes.\\n\\nA high-quality grinder (like a Mahlkönig or a good hand grinder like a Comandante) justifies its price by tightening this bell curve, producing fewer fines and fewer boulders, allowing you to extract more flavor without hitting bitterness.",
        "points": [
          "Bimodal distributions (a cluster of fines plus a cluster of boulders) common with lower-quality grinders",
          "Fines extract much faster than coarse particles at the same nominal 'setting,' creating extraction inconsistency within a single brew",
          "Burr geometry and grinder quality as the main lever for tightening PSD, separate from the dial setting itself"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit.",
          "Uman, E. et al. (2016). 'The effect of bean origin and temperature on grinding roasted coffee.' <i>Scientific Reports</i>, 6."
        ]
      },
      {
        "t": "Channeling and bed uniformity",
        "b": "Even with good PSD, uneven bed packing creates preferential flow paths that locally over-extract while leaving other zones under-extracted.",
        "content": "Water is lazy. It will always find the path of least resistance through the bed of coffee grounds.\\n\\nIf your coffee bed is not perfectly uniform, water will carve a narrow path—a **Channel**—and rush through it. The coffee immediately surrounding the channel will be violently over-extracted (tasting harsh and bitter), while the dry islands of coffee elsewhere will be completely under-extracted (tasting sour and weak).\\n\\n**[Channeling](https://en.wikipedia.org/wiki/Fluidization)** is the primary enemy of manual brewing. Your pour technique (circles vs. center pours) and bed preparation are entirely about creating a homogeneous resistance so water flows evenly through every particle.",
        "points": [
          "Mechanism: water always finds the path of least resistance through a particle bed",
          "Pour technique (especially in pour-over) as a primary channeling-prevention lever — distribution matters as much as grind",
          "Why this connects directly to your brewer comparisons (V60 vs. Mugen vs. Origami vs. Kalita) — each geometry handles channeling risk differently"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Melrose, J. et al. (2021). 'Toward a multiscale model of the brewing process.' <i>AIChE Journal</i>."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "Tamaño de partícula y dinámica de molienda",
    "id": "m3",
    "desc": "El área superficial es la palanca que controla la velocidad de extracción más que casi cualquier otra variable — y la distribución de la molienda, no solo el tamaño promedio, importa.",
    "topics": [
      {
        "t": "Relación área superficial / volumen",
        "b": "Molienda más fina = más área superficial expuesta al agua = extracción más rápida en un tiempo dado — la relación física central detrás de toda decisión de molienda.",
        "content": "Moler el café no cambia lo que hay en el grano; solo cambia qué tan rápido puede llegar el agua a él. Esto se rige por la relación área superficial a volumen.\\n\\nDebido a que el área superficial escala geométricamente, reducir a la mitad el diámetro de una partícula de café aproximadamente **cuadruplica** su área superficial. Esto significa que moler un poco más fino aumenta drásticamente la velocidad a la que ocurre la **[Difusión](https://es.wikipedia.org/wiki/Difusi%C3%B3n_(f%C3%ADsica))** (como describe la Ley de Fick).\\n\\nEsto hace que el molino sea la palanca más sensible que tienes. Si una extracción fluye demasiado rápido y sabe ácida, ajustar la molienda unos puntos más fino expone mucha más área superficial, corrigiendo la extracción de manera mucho más predecible que simplemente verter el agua más lentamente.",
        "points": [
          "Por qué reducir a la mitad el tamaño de partícula aproximadamente cuadruplica el área superficial (relación geométrica, no lineal)",
          "La ley de difusión de Fick como mecanismo de transporte subyacente para que los solubles pasen de la partícula al agua",
          "Traducción práctica: cambiar la molienda suele ser una palanca más rápida y predecible que cambiar el tiempo para ajustar la extracción"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Cameron, M.I. et al. (2020). 'Systematically improving espresso: insights from mathematical modeling and experiment.' <i>Matter</i>, 3(3)."
        ]
      },
      {
        "t": "Distribución de tamaño de partícula (PSD) y finos",
        "b": "El tamaño de molienda promedio es un número engañoso por sí solo — la dispersión de tamaños alrededor de ese promedio cambia la uniformidad de la extracción.",
        "content": "Cuando ajustas un molino en 'medio', no produce partículas idénticas de tamaño 'medio'. Produce una **Distribución de Tamaño de Partícula (PSD)**—una curva de campana de tamaños.\\n\\nTodos los molinos producen *rocas* (trozos grandes) y *finos* (polvo microscópico).\\n\\n- **Los finos** se extraen casi al instante. Proporcionan la base pesada y amarga de la taza. Demasiados finos enturbiarán el sabor y obstruirán físicamente el filtro de papel, atascando la extracción.\\n- **Las rocas** se extraen muy lentamente. Si tienes demasiadas, el núcleo de las partículas permanece seco, aportando notas agrias y herbáceas de subextracción.\\n\\nUn molino de alta calidad justifica su precio al estrechar esta curva de campana, produciendo menos finos y menos rocas, lo que te permite extraer más sabor sin llegar a la amargura.",
        "points": [
          "Distribuciones bimodales (un cúmulo de finos más un cúmulo de partículas grandes) comunes en molinos de menor calidad",
          "Los finos se extraen mucho más rápido que las partículas gruesas en el mismo ajuste nominal, creando inconsistencia de extracción dentro de una misma preparación",
          "La geometría de las muelas y la calidad del molino como la palanca principal para ajustar el PSD, aparte del ajuste del dial en sí"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit.",
          "Uman, E. et al. (2016). 'The effect of bean origin and temperature on grinding roasted coffee.' <i>Scientific Reports</i>, 6."
        ]
      },
      {
        "t": "Canalización y uniformidad del lecho",
        "b": "Aun con buen PSD, un empacado desigual del lecho crea caminos de flujo preferenciales que sobreextraen localmente mientras otras zonas quedan subextraídas.",
        "content": "El agua es perezosa. Siempre encontrará el camino de menor resistencia a través del lecho de café.\\n\\nSi tu lecho de café no es perfectamente uniforme, el agua cavará un camino estrecho—un **Canal**—y se precipitará a través de él. El café que rodea inmediatamente el canal se sobreextraerá violentamente (sabiendo áspero y amargo), mientras que las islas secas de café en otros lugares quedarán completamente subextraídas (sabiendo ácidas y débiles).\\n\\nLa **Canalización** es el principal enemigo de la extracción manual. Tu técnica de vertido (círculos vs. vertidos centrales) y la preparación del lecho tratan enteramente sobre crear una resistencia homogénea para que el agua fluya uniformemente a través de cada partícula.",
        "points": [
          "Mecanismo: el agua siempre encuentra el camino de menor resistencia a través de un lecho de partículas",
          "La técnica de vertido (especialmente en pour-over) como palanca principal para prevenir canalización — la distribución importa tanto como la molienda",
          "Por qué esto conecta directamente con tus comparaciones de extractores (V60 vs. Mugen vs. Origami vs. Kalita) — cada geometría maneja el riesgo de canalización de forma distinta"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Melrose, J. et al. (2021). 'Toward a multiscale model of the brewing process.' <i>AIChE Journal</i>."
        ]
      }
    ]
  }
};`);
console.log("Updated M2 and M3");
