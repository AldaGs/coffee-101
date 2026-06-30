export default {
  "en": {
    "mod": "Module 3",
    "title": "Particle size and grind dynamics",
    "id": "m3",
    "desc": "Surface area is the lever that controls extraction rate more than almost any other variable — and grind distribution, not just average size, matters.",
    "topics": [
      {
        "t": "Surface area to volume ratio",
        "b": "Finer grind = more surface area exposed to water = faster extraction at a given time — the core physical relationship underlying every grind-size decision.",
        "content": "Grinding coffee does not change what is in the bean; it only changes how fast water can get to it. This is governed by the surface-area-to-volume ratio.\n\nBecause surface area scales geometrically, halving the diameter of a coffee particle roughly **quadruples** its surface area. This means grinding just slightly finer drastically increases the speed at which **[Diffusion](https://en.wikipedia.org/wiki/Diffusion)** occurs (as described by Fick's Law).\n\nThis makes the grinder the most sensitive lever you have. If a brew is flowing too fast and tastes sour, shifting the grind a few notches finer exposes vastly more surface area, fixing the extraction far more predictably than pouring the water slower.",
        "points": [
          "Why halving particle size roughly quadruples surface area (geometric, not linear relationship)",
          "Fick's law of diffusion as the underlying transport mechanism for solubles moving from particle into water",
          "Practical translation: grind change is usually a faster/more predictable lever than time change for adjusting extraction"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Cameron, M.I. et al. (2020). 'Systematically improving espresso: insights from mathematical modeling and experiment.' <i>Matter</i>, 3(3)."
        ],
        "flashcards": [
          { "q": "What happens to a coffee particle's surface area when you halve its diameter?", "a": "It roughly **quadruples** — surface area scales geometrically, not linearly. This is why even small grind adjustments cause dramatic shifts in extraction speed." },
          { "q": "What physical law governs how coffee solubles move from a particle into water?", "a": "**Fick's Law of Diffusion** — solubles migrate from high concentration inside the particle to low concentration in the surrounding water. More exposed surface area = faster diffusion rate." },
          { "q": "Why is grind adjustment a more predictable lever than changing pour timing?", "a": "Grind directly controls exposed surface area, which directly governs diffusion rate — it's the highest-leverage, most upstream variable in the extraction chain." }
        ]
      },
      {
        "t": "Particle size distribution (PSD) and fines",
        "b": "Average grind size is a misleading single number — the spread of particle sizes around that average changes extraction evenness.",
        "content": "When you set a grinder to 'medium,' it does not produce identically sized 'medium' particles. It produces a **Particle Size Distribution (PSD)**—a bell curve of sizes.\n\nAll grinders produce *boulders* (large chunks) and *fines* (microscopic dust). \n\n- **Fines** extract almost instantly. They provide the heavy, bitter baseline to the cup. Too many fines will muddy the flavor and physically clog the paper filter, stalling the brew.\n- **Boulders** extract very slowly. If you have too many, the core of the particles remains dry, contributing sour, grassy under-extracted notes.\n\nA high-quality grinder (like a Mahlkönig or a good hand grinder like a Comandante) justifies its price by tightening this bell curve, producing fewer fines and fewer boulders, allowing you to extract more flavor without hitting bitterness.",
        "points": [
          "Bimodal distributions (a cluster of fines plus a cluster of boulders) common with lower-quality grinders",
          "Fines extract much faster than coarse particles at the same nominal 'setting,' creating extraction inconsistency within a single brew",
          "Burr geometry and grinder quality as the main lever for tightening PSD, separate from the dial setting itself"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit.",
          "Uman, E. et al. (2016). 'The effect of bean origin and temperature on grinding roasted coffee.' <i>Scientific Reports</i>, 6."
        ],
        "flashcards": [
          { "q": "What is PSD and why does it matter more than average grind size alone?", "a": "Particle Size Distribution — the full spread of all particle sizes produced. A wide PSD means fines over-extract and boulders under-extract simultaneously in the same brew." },
          { "q": "How do fines cause problems in pour-over brewing?", "a": "They extract almost instantly (contributing bitter notes) and physically clog paper filters — slowing or stalling the brew flow." },
          { "q": "What distinguishes a high-quality grinder from a cheap one in terms of PSD?", "a": "Better burr geometry produces a **tighter bell curve** — fewer ultra-fine dust particles and fewer oversized boulders — enabling more even extraction across all particles." }
        ]
      },
      {
        "t": "Channeling and bed uniformity",
        "b": "Even with good PSD, uneven bed packing creates preferential flow paths that locally over-extract while leaving other zones under-extracted.",
        "content": "Water is lazy. It will always find the path of least resistance through the bed of coffee grounds.\n\nIf your coffee bed is not perfectly uniform, water will carve a narrow path—a **Channel**—and rush through it. The coffee immediately surrounding the channel will be violently over-extracted (tasting harsh and bitter), while the dry islands of coffee elsewhere will be completely under-extracted (tasting sour and weak).\n\n**[Channeling](https://en.wikipedia.org/wiki/Fluidization)** is the primary enemy of manual brewing. Your pour technique (circles vs. center pours) and bed preparation are entirely about creating a homogeneous resistance so water flows evenly through every particle.",
        "points": [
          "Mechanism: water always finds the path of least resistance through a particle bed",
          "Pour technique (especially in pour-over) as a primary channeling-prevention lever — distribution matters as much as grind",
          "Why this connects directly to your brewer comparisons (V60 vs. Mugen vs. Origami vs. Kalita) — each geometry handles channeling risk differently"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Melrose, J. et al. (2021). 'Toward a multiscale model of the brewing process.' <i>AIChE Journal</i>."
        ],
        "flashcards": [
          { "q": "What is channeling, and why is it the primary enemy of even extraction?", "a": "When the coffee bed is uneven, water carves a path of least resistance. That channel over-extracts surrounding coffee while dry islands under-extract — producing bitter AND sour flavors simultaneously." },
          { "q": "How does pour technique prevent channeling in pour-over brewing?", "a": "Circular, controlled pours agitate and redistribute the coffee bed, maintaining homogeneous particle density so all zones offer equal resistance to the water." },
          { "q": "Why do different pour-over designs (V60 vs. Kalita Wave) have different channeling risks?", "a": "Bed geometry affects water distribution. A flat bed (Kalita) distributes flow laterally; a conical bed (V60) concentrates flow toward the center, requiring better pour technique to compensate." }
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
        "content": "Moler el café no cambia lo que hay en el grano; solo cambia qué tan rápido puede llegar el agua a él. Esto se rige por la relación área superficial a volumen.\n\nDebido a que el área superficial escala geométricamente, reducir a la mitad el diámetro de una partícula de café aproximadamente **cuadruplica** su área superficial. Esto significa que moler un poco más fino aumenta drásticamente la velocidad a la que ocurre la **[Difusión](https://es.wikipedia.org/wiki/Difusi%C3%B3n_(f%C3%ADsica))** (como describe la Ley de Fick).\n\nEsto hace que el molino sea la palanca más sensible que tienes. Si una extracción fluye demasiado rápido y sabe ácida, ajustar la molienda unos puntos más fino expone mucha más área superficial, corrigiendo la extracción de manera mucho más predecible que simplemente verter el agua más lentamente.",
        "points": [
          "Por qué reducir a la mitad el tamaño de partícula aproximadamente cuadruplica el área superficial (relación geométrica, no lineal)",
          "La ley de difusión de Fick como mecanismo de transporte subyacente para que los solubles pasen de la partícula al agua",
          "Traducción práctica: cambiar la molienda suele ser una palanca más rápida y predecible que cambiar el tiempo para ajustar la extracción"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Cameron, M.I. et al. (2020). 'Systematically improving espresso: insights from mathematical modeling and experiment.' <i>Matter</i>, 3(3)."
        ],
        "flashcards": [
          { "q": "¿Qué le pasa al área superficial de una partícula de café cuando reduces su diámetro a la mitad?", "a": "Se **cuadruplica** aproximadamente — el área superficial escala de forma geométrica, no lineal. Por eso incluso ajustes pequeños de molienda producen cambios drásticos en la velocidad de extracción." },
          { "q": "¿Qué ley física rige cómo los solubles del café pasan de la partícula al agua?", "a": "La **Ley de Fick de Difusión** — los solubles migran de alta concentración (interior de la partícula) a baja (el agua). Más área superficial expuesta = mayor tasa de difusión." },
          { "q": "¿Por qué ajustar la molienda es más predecible que cambiar el tiempo de vertido?", "a": "La molienda controla directamente el área superficial expuesta, que controla directamente la tasa de difusión — es la variable más upstream y de mayor apalancamiento en la cadena de extracción." }
        ]
      },
      {
        "t": "Distribución de tamaño de partícula (PSD) y finos",
        "b": "El tamaño de molienda promedio es un número engañoso por sí solo — la dispersión de tamaños alrededor de ese promedio cambia la uniformidad de la extracción.",
        "content": "Cuando ajustas un molino en 'medio', no produce partículas idénticas de tamaño 'medio'. Produce una **Distribución de Tamaño de Partícula (PSD)**—una curva de campana de tamaños.\n\nTodos los molinos producen *rocas* (trozos grandes) y *finos* (polvo microscópico).\n\n- **Los finos** se extraen casi al instante. Proporcionan la base pesada y amarga de la taza. Demasiados finos enturbiarán el sabor y obstruirán físicamente el filtro de papel, atascando la extracción.\n- **Las rocas** se extraen muy lentamente. Si tienes demasiadas, el núcleo de las partículas permanece seco, aportando notas agrias y herbáceas de subextracción.\n\nUn molino de alta calidad justifica su precio al estrechar esta curva de campana, produciendo menos finos y menos rocas, lo que te permite extraer más sabor sin llegar a la amargura.",
        "points": [
          "Distribuciones bimodales (un cúmulo de finos más un cúmulo de partículas grandes) comunes en molinos de menor calidad",
          "Los finos se extraen mucho más rápido que las partículas gruesas en el mismo ajuste nominal, creando inconsistencia de extracción dentro de una misma preparación",
          "La geometría de las muelas y la calidad del molino como la palanca principal para ajustar el PSD, aparte del ajuste del dial en sí"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit.",
          "Uman, E. et al. (2016). 'The effect of bean origin and temperature on grinding roasted coffee.' <i>Scientific Reports</i>, 6."
        ],
        "flashcards": [
          { "q": "¿Qué es el PSD y por qué importa más que el tamaño de molienda promedio solo?", "a": "Distribución de Tamaño de Partícula — la dispersión completa de todos los tamaños producidos. Un PSD amplio significa que los finos sobreextraen y las rocas subextraen al mismo tiempo." },
          { "q": "¿Cómo causan problemas los finos en la extracción por vertido (pour-over)?", "a": "Se extraen casi al instante (añadiendo notas amargas) y obstruyen físicamente los filtros de papel — ralentizando o atascando el flujo de extracción." },
          { "q": "¿Qué distingue a un molino de alta calidad de uno barato en términos de PSD?", "a": "Mejor geometría de muelas produce una **curva de campana más estrecha** — menos polvo ultra-fino y menos partículas demasiado grandes — permitiendo una extracción más uniforme." }
        ]
      },
      {
        "t": "Canalización y uniformidad del lecho",
        "b": "Aun con buen PSD, un empacado desigual del lecho crea caminos de flujo preferenciales que sobreextraen localmente mientras otras zonas quedan subextraídas.",
        "content": "El agua es perezosa. Siempre encontrará el camino de menor resistencia a través del lecho de café.\n\nSi tu lecho de café no es perfectamente uniforme, el agua cavará un camino estrecho—un **Canal**—y se precipitará a través de él. El café que rodea inmediatamente el canal se sobreextraerá violentamente (sabiendo áspero y amargo), mientras que las islas secas de café en otros lugares quedarán completamente subextraídas (sabiendo ácidas y débiles).\n\nLa **Canalización** es el principal enemigo de la extracción manual. Tu técnica de vertido (círculos vs. vertidos centrales) y la preparación del lecho tratan enteramente sobre crear una resistencia homogénea para que el agua fluya uniformemente a través de cada partícula.",
        "points": [
          "Mecanismo: el agua siempre encuentra el camino de menor resistencia a través de un lecho de partículas",
          "La técnica de vertido (especialmente en pour-over) como palanca principal para prevenir canalización — la distribución importa tanto como la molienda",
          "Por qué esto conecta directamente con tus comparaciones de extractores (V60 vs. Mugen vs. Origami vs. Kalita) — cada geometría maneja el riesgo de canalización de forma distinta"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Melrose, J. et al. (2021). 'Toward a multiscale model of the brewing process.' <i>AIChE Journal</i>."
        ],
        "flashcards": [
          { "q": "¿Qué es la canalización y por qué es el principal enemigo de la extracción uniforme?", "a": "Cuando el lecho de café es desigual, el agua cava un canal de menor resistencia. Ese canal sobreextrae el café adyacente mientras zonas secas quedan subextraídas — produciendo sabores amargos Y ácidos al mismo tiempo." },
          { "q": "¿Cómo previene la técnica de vertido la canalización en el pour-over?", "a": "Los vertidos circulares y controlados agitan y redistribuyen el lecho, manteniendo una densidad de partículas homogénea para que el agua fluya con igual resistencia por todas partes." },
          { "q": "¿Por qué diferentes diseños de pour-over (V60 vs. Kalita Wave) tienen distintos riesgos de canalización?", "a": "La geometría del lecho afecta la distribución del agua. El lecho plano (Kalita) distribuye el flujo lateralmente; el lecho cónico (V60) concentra el flujo al centro, exigiendo mejor técnica de vertido." }
        ]
      }
    ]
  }
};
