const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'brewing', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(7, () => `export default {
  "en": {
    "mod": "Module 7",
    "title": "Brew ratio and recipe design",
    "id": "m7",
    "desc": "Translating the variables above into an actual, repeatable recipe — and how to adjust deliberately rather than by feel.",
    "topics": [
      {
        "t": "Brew ratio as the starting design decision",
        "b": "Coffee-to-water ratio sets your strength ceiling before any other variable is touched.",
        "content": "Your brew ratio (e.g., 1 part coffee to 15 parts water, or **1:15**) is the most fundamental decision you make.\\n\\nThe ratio dictates the maximum possible strength (TDS) of your coffee. If you use a 1:18 ratio, the coffee will be lighter and more tea-like, no matter how finely you grind it. If you use a 1:14 ratio, it will be dense and punchy.\\n\\n**Standard Ranges**:\\n- **1:15**: Strong, punchy, good for coffees with heavy body.\\n- **1:16**: The classic specialty gold standard. Excellent balance.\\n- **1:17**: Lighter, tea-like, excellent for highlighting delicate floral notes in washed Ethiopian or Geisha coffees.\\n\\nAlways lock your ratio in first. Do not change the ratio to fix a sour/bitter extraction problem; change the ratio only to fix a strong/weak problem.",
        "points": [
          "Common specialty ratios (roughly 1:15 to 1:17 for filter) and why this range exists empirically",
          "Ratio as independent from extraction percentage — a strong but under-extracted brew and a weak but well-extracted brew are both 'wrong' in different ways",
          "Adjusting ratio as a strength-only lever, holding grind/time roughly constant, when troubleshooting"
        ],
        "refs": [
          "SCA Brewing Control Chart, op. cit.",
          "Rao (2010), op. cit., Ch. 5."
        ]
      },
      {
        "t": "Designing a recipe around a specific lot",
        "b": "Connecting back to your Finca Oltehua work — how lot characteristics (density, processing, roast profile) should inform brew recipe starting points rather than using one default recipe across everything.",
        "content": "You cannot use the same V60 recipe for a washed Kenyan and an anaerobic natural Colombian. Their cellular structures and solubilities are completely different.\\n\\n- **Dense / Light Roast / Washed**: These coffees are hard to extract. They require hotter water (95°C+), finer grinds, and more agitation to pull the flavors out.\\n- **Soft / Dark Roast / Natural / Anaerobic**: These coffees are highly porous and extract very easily. They are prone to bitterness. You must protect them by using cooler water (90°C), coarser grinds, or gentler brewers (like the Kalita Wave or Mugen) to prevent over-extraction.\\n\\nYour Finca Oltehua 140-hr co-fermented Sarchimor likely extracted beautifully on the Mugen because the brewer buffered the extraction, preventing the delicate fermentation notes from being overpowered by harsh tannins.",
        "points": [
          "Extended-fermentation lots (your 140-hr Marsellesa) often carry more soluble sugar/flavor precursor load, which can argue for a slightly shorter contact time or coarser grind",
          "Co-fermented lots (mango Sarchimor) with added external flavor compounds may benefit from gentler, more even extraction (supporting your Mugen finding)",
          "Building a recipe log structured the same way as your roasting profile log"
        ],
        "refs": [
          "Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — extends similarly to brewing decisions by lot characteristic, though primarily roasting-focused."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 7",
    "title": "Proporción de extracción y diseño de receta",
    "id": "m7",
    "desc": "Traducir las variables anteriores en una receta real y repetible — y cómo ajustar deliberadamente en lugar de a sentimiento.",
    "topics": [
      {
        "t": "La proporción de extracción como decisión de diseño inicial",
        "b": "La proporción café-agua define tu techo de fuerza antes de tocar cualquier otra variable.",
        "content": "Tu proporción de extracción o ratio (p. ej., 1 parte de café por 15 partes de agua, o **1:15**) es la decisión más fundamental que tomas.\\n\\nLa proporción dicta la fuerza máxima posible (TDS) de tu café. Si usas una proporción de 1:18, el café será más ligero y parecido al té, sin importar qué tan fino lo muelas. Si usas una proporción de 1:14, será denso y con cuerpo.\\n\\n**Rangos Estándar**:\\n- **1:15**: Fuerte, con cuerpo, bueno para cafés densos.\\n- **1:16**: El estándar de oro clásico de especialidad. Excelente equilibrio.\\n- **1:17**: Más ligero, excelente para resaltar notas florales delicadas en cafés lavados (p.ej. Etiopía o Geisha).\\n\\nSiempre fija tu proporción primero. No cambies la proporción para arreglar un problema de extracción (ácido/amargo); cambia la proporción solo para arreglar un problema de intensidad (fuerte/débil).",
        "points": [
          "Proporciones especialidad comunes (aproximadamente 1:15 a 1:17 para filtrado) y por qué este rango existe empíricamente",
          "La proporción como independiente del porcentaje de extracción — una preparación fuerte pero subextraída y una débil pero bien extraída están ambas 'mal' de formas distintas",
          "Ajustar la proporción como palanca de fuerza únicamente, manteniendo molienda/tiempo relativamente constantes, al resolver problemas"
        ],
        "refs": [
          "SCA Brewing Control Chart, op. cit.",
          "Rao (2010), op. cit., Cap. 5."
        ]
      },
      {
        "t": "Diseñar una receta alrededor de un lote específico",
        "b": "Conectando con tu trabajo en Finca Oltehua — cómo las características del lote (densidad, procesamiento, perfil de tueste) deberían informar los puntos de partida de la receta en lugar de usar una receta default para todo.",
        "content": "No puedes usar la misma receta de V60 para un Kenia lavado y un Colombia natural anaeróbico. Sus estructuras celulares y solubilidades son completamente diferentes.\\n\\n- **Denso / Tueste Claro / Lavado**: Estos cafés son difíciles de extraer. Requieren agua más caliente (95°C+), moliendas más finas y más agitación para sacar los sabores.\\n- **Suave / Tueste Oscuro / Natural / Anaeróbico**: Estos cafés son muy porosos y se extraen con mucha facilidad. Son propensos a la amargura. Debes protegerlos usando agua más fría (90°C), moliendas más gruesas o extractores más suaves (como el Kalita Wave o Mugen) para evitar la sobreextracción.\\n\\nTu Sarchimor co-fermentado de Finca Oltehua probablemente se extrajo hermosamente en el Mugen porque el extractor amortiguó la extracción, evitando que las delicadas notas de fermentación fueran opacadas por taninos duros.",
        "points": [
          "Los lotes de fermentación extendida (tu Marsellesa de 140 horas) suelen tener mayor carga de azúcares solubles, lo que puede argumentar por un tiempo de contacto algo más corto o una molienda más gruesa",
          "Los lotes co-fermentados (Sarchimor con mango) pueden beneficiarse de una extracción más suave y uniforme (apoyando tu hallazgo con el Mugen)",
          "Construir un registro de recetas estructurado igual que tu registro de perfiles de tueste"
        ],
        "refs": [
          "Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — extiende de forma similar a decisiones de extracción según características del lote."
        ]
      }
    ]
  }
};`);

updateModule(8, () => `export default {
  "en": {
    "mod": "Module 8",
    "title": "Bloom and degassing",
    "id": "m8",
    "desc": "The first 30-45 seconds of most pour-over methods are governed by CO2 release, not extraction — and getting this stage wrong undermines everything after it.",
    "topics": [
      {
        "t": "CO2 and the bloom phase",
        "b": "Freshly roasted coffee retains dissolved CO2 that off-gasses on contact with hot water, physically interfering with even saturation if not managed.",
        "content": "Coffee beans trap massive amounts of Carbon Dioxide (CO2) during the roasting process. When hot water hits the grounds, this CO2 rapidly escapes, causing the coffee bed to swell and bubble—this is called the **Bloom**.\\n\\nCO2 aggressively repels water. If you try to pour all your brew water at once, the escaping gas acts as a physical shield, preventing the water from touching the coffee. The water will just channel right past it.\\n\\nThe purpose of the bloom (usually pouring 2-3x the coffee weight in water and waiting 30-45 seconds) is strictly to evacuate this gas. Only after the gas is gone can proper, even extraction begin.",
        "points": [
          "Mechanism: CO2 escaping through the grounds creates bubbling/swelling ('bloom') and temporarily resists water penetration",
          "Bloom water amount (typically ~2x dose by weight) and time (30-45s) as practical starting parameters",
          "Degassing rate as a function of roast freshness — very fresh coffee (days post-roast) blooms more vigorously than rested coffee"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Wang, X. et al. (2016). 'Effects of degassing on the SCAA-style cupping of coffee.' <i>J. Food Sci.</i>"
        ]
      },
      {
        "t": "Resting time and its interaction with extraction",
        "b": "Why a 1-day-old roast and a 14-day-old roast of the same coffee can need different recipes even at identical grind/ratio.",
        "content": "Coffee is not ready to drink the day it is roasted. The trapped CO2 is so volatile that it will choke almost any brewing method (especially espresso, where it creates massive, unstable crema).\\n\\n**Resting** allows the coffee to passively degas.\\n- **Filter Coffee**: Usually peaks between 7 and 14 days post-roast.\\n- **Espresso**: Often requires 14 to 28 days to calm down enough for a stable extraction.\\n\\nA coffee brewed at 3 days off-roast will need a massive, aggressive bloom to force the gas out. That exact same coffee brewed at 20 days off-roast might need almost no bloom at all. Standardizing your rest time is critical for recipe consistency.",
        "points": [
          "CO2 content decreases predictably over days post-roast, affecting both bloom behavior and bed permeability during the main pour",
          "Practical implication for a small-batch operation: standardizing rest time before sale/brewing reduces a hidden recipe variable"
        ],
        "refs": [
          "Wang et al. (2016), op. cit."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 8",
    "title": "Bloom y desgasificación",
    "id": "m8",
    "desc": "Los primeros 30-45 segundos de la mayoría de los métodos pour-over están gobernados por la liberación de CO2, no por la extracción — y hacer mal esta fase compromete todo lo que sigue.",
    "topics": [
      {
        "t": "CO2 y la fase de bloom",
        "b": "El café recién tostado retiene CO2 disuelto que se libera al contacto con agua caliente, interfiriendo físicamente con una saturación uniforme si no se maneja bien.",
        "content": "Los granos de café atrapan cantidades masivas de Dióxido de Carbono (CO2) durante el tueste. Cuando el agua caliente toca los molidos, este CO2 escapa rápidamente, causando que el lecho de café se hinche y burbujee—esto se llama el **Bloom (Pre-infusión)**.\\n\\nEl CO2 repele agresivamente el agua. Si intentas verter toda tu agua de una vez, el gas que escapa actúa como un escudo físico, impidiendo que el agua toque el café. El agua simplemente se canalizará a su alrededor.\\n\\nEl propósito del bloom (usualmente verter 2-3 veces el peso del café en agua y esperar 30-45 segundos) es estrictamente evacuar este gas. Solo después de que el gas se ha ido puede comenzar una extracción adecuada y uniforme.",
        "points": [
          "Mecanismo: el CO2 escapando a través de los molidos crea burbujeo/hinchazón ('bloom') y resiste temporalmente la penetración del agua",
          "Cantidad de agua de bloom (típicamente ~2x la dosis en peso) y tiempo (30-45s) como parámetros prácticos de partida",
          "Velocidad de desgasificación en función de la frescura del tueste — café muy fresco hace bloom más vigorosamente que café reposado"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Wang, X. et al. (2016). 'Effects of degassing on the SCAA-style cupping of coffee.' <i>J. Food Sci.</i>"
        ]
      },
      {
        "t": "Tiempo de reposo y su interacción con la extracción",
        "b": "Por qué un tueste de 1 día y uno de 14 días del mismo café pueden necesitar recetas distintas aun con la misma molienda/proporción.",
        "content": "El café no está listo para beberse el día que se tuesta. El CO2 atrapado es tan volátil que ahogará casi cualquier método de preparación (especialmente el espresso).\\n\\nEl **Reposo** permite que el café se desgasifique pasivamente.\\n- **Café de Filtro**: Usualmente alcanza su pico entre 7 y 14 días después del tueste.\\n- **Espresso**: A menudo requiere de 14 a 28 días para estabilizarse.\\n\\nUn café preparado a los 3 días de tostado necesitará un bloom masivo y agresivo para forzar la salida del gas. Ese mismo café preparado a los 20 días podría no necesitar casi ningún bloom. Estandarizar tu tiempo de reposo es crítico para la consistencia de la receta.",
        "points": [
          "El contenido de CO2 disminuye predeciblemente con los días después del tueste, afectando tanto el comportamiento del bloom como la permeabilidad del lecho",
          "Implicación práctica para una operación de lote pequeño: estandarizar el tiempo de reposo antes de la venta reduce una variable oculta"
        ],
        "refs": [
          "Wang et al. (2016), op. cit."
        ]
      }
    ]
  }
};`);

updateModule(9, () => `export default {
  "en": {
    "mod": "Module 9",
    "title": "Sensory validation and troubleshooting",
    "id": "m9",
    "desc": "Closing the loop between brew parameters and cup outcome — diagnosing defects back to their mechanistic cause.",
    "topics": [
      {
        "t": "Reading common defects back to cause",
        "b": "A diagnostic table connecting symptom to mechanism, useful for fast iteration during recipe development.",
        "content": "When a cup tastes wrong, you must identify the flaw to fix the recipe.\\n\\n1. **Sour, Salty, Sharp (Under-extracted)**: You missed the sugars. The water flowed too fast or was too cold. **Fix**: Grind finer, use hotter water, or increase agitation.\\n2. **Dry, Bitter, Astringent, Hollow (Over-extracted)**: You extracted too much. The tannins are overpowering the cup. **Fix**: Grind coarser, lower the water temperature, or pour more gently.\\n3. **Muddy, Muted, Both Sour and Bitter**: This is the hallmark of **Channeling** or a terrible grinder. Some coffee is heavily over-extracted, while other parts are severely under-extracted. **Fix**: Do not change the recipe numbers. Fix your pour technique to ensure an even bed, or clean/upgrade your grinder.",
        "points": [
          "Sour/sharp, thin body → likely under-extraction: grind finer, extend time, or raise temperature",
          "Bitter, hollow, astringent → likely over-extraction: grind coarser, shorten time, or lower temperature",
          "Muddy/unclear, despite balanced EY → likely channeling or PSD inconsistency rather than a ratio/time problem — check pour technique and grinder quality before adjusting recipe numbers"
        ],
        "refs": [
          "SCA Brewing Control Chart, op. cit.",
          "Cordoba et al. (2020), op. cit. — defect-mechanism mapping."
        ]
      },
      {
        "t": "Building a brew-to-cupping feedback log",
        "b": "Same operational principle as Module 12 of the roasting syllabus — the log is the actual evidence base, not memory.",
        "content": "Just as a roaster must log their RoR curves, a barista must log their brew variables.\\n\\nA proper log tracks:\\n- Date off-roast\\n- Dose and Water Volume (Ratio)\\n- Water Temperature and GH/KH\\n- Grinder setting\\n- Total brew time\\n- Tasting notes\\n\\nBy cross-referencing your brew logs with your roast logs, you can definitively answer questions like: *'Is this coffee grassy because I under-extracted it on the V60, or is it grassy because I dropped it too early during the roasting development phase?'* This feedback loop is the core of professional coffee.",
        "points": [
          "Logging brew ratio, grind setting, time, temperature, and device alongside structured tasting notes",
          "Cross-referencing brew logs against your roast logs once both exist, to separate roast-driven from brew-driven flavor variance",
          "Using this evidence base directly in wholesale client conversations as proof of process rigor"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 9",
    "title": "Validación sensorial y resolución de problemas",
    "id": "m9",
    "desc": "Cerrar el ciclo entre los parámetros de extracción y el resultado en taza — diagnosticar defectos hasta su causa mecanística.",
    "topics": [
      {
        "t": "Leer defectos comunes hasta su causa",
        "b": "Una tabla diagnóstica que conecta el síntoma con el mecanismo, útil para iterar rápido durante el desarrollo de recetas.",
        "content": "Cuando una taza sabe mal, debes identificar el defecto para arreglar la receta.\\n\\n1. **Ácido, Salado, Punzante (Subextraído)**: Te faltaron los azúcares. El agua fluyó demasiado rápido o estaba muy fría. **Solución**: Muele más fino, usa agua más caliente o aumenta la agitación.\\n2. **Seco, Amargo, Astringente, Hueco (Sobreextraído)**: Extrajiste demasiado. Los taninos están dominando la taza. **Solución**: Muele más grueso, baja la temperatura del agua o vierte más suavemente.\\n3. **Confuso, Apagado, Ácido y Amargo a la vez**: Esta es la marca registrada de la **Canalización** o de un pésimo molino. Parte del café está muy sobreextraído, mientras que otras partes están severamente subextraídas. **Solución**: No cambies los números de la receta. Arregla tu técnica de vertido para asegurar un lecho uniforme, o limpia/mejora tu molino.",
        "points": [
          "Ácido/punzante, cuerpo delgado → probable subextracción: moler más fino, extender el tiempo, o subir la temperatura",
          "Amargo, hueco, astringente → probable sobreextracción: moler más grueso, acortar el tiempo, o bajar la temperatura",
          "Confuso/poco claro, a pesar de un EY balanceado → probablemente canalización o inconsistencia de PSD más que un problema de proporción/tiempo — revisar técnica de vertido y calidad del molino"
        ],
        "refs": [
          "SCA Brewing Control Chart, op. cit.",
          "Cordoba et al. (2020), op. cit. — mapeo de defecto-mecanismo."
        ]
      },
      {
        "t": "Construir un registro de extracción a cata",
        "b": "Mismo principio operativo que el Módulo 12 del programa de tueste — el registro es la base de evidencia real, no la memoria.",
        "content": "Al igual que un tostador debe registrar sus curvas, un barista debe registrar sus variables de extracción.\\n\\nUn registro adecuado rastrea:\\n- Días desde el tueste\\n- Dosis y Volumen de Agua (Proporción)\\n- Temperatura del agua y GH/KH\\n- Ajuste del molino\\n- Tiempo total de extracción\\n- Notas de cata\\n\\nAl cruzar tus registros de extracción con tus registros de tueste, puedes responder definitivamente a preguntas como: *'¿Este café sabe a hierba porque lo subextraje en el V60, o porque lo saqué demasiado pronto durante la fase de desarrollo del tueste?'* Este ciclo de retroalimentación es el núcleo del café profesional.",
        "points": [
          "Registrar proporción de extracción, ajuste de molienda, tiempo, temperatura y dispositivo junto con notas de cata estructuradas",
          "Cruzar los registros de extracción contra tus registros de tueste una vez que ambos existan, para separar la varianza de sabor causada por el tueste de la causada por la extracción",
          "Usar esta base de evidencia directamente en conversaciones con clientes mayoristas como prueba de rigor de proceso"
        ]
      }
    ]
  }
};`);

updateModule(10, () => `export default {
  "en": {
    "mod": "Module 10",
    "title": "Scaling brewing for wholesale and bar service",
    "id": "m10",
    "desc": "Translating personal recipe-dialing into something that holds up under café-bar volume and staff variance — relevant to your physical coffee bar exploration.",
    "topics": [
      {
        "t": "Recipe standardization for multiple staff",
        "b": "A recipe that works for one careful brewer doesn't automatically survive being run by rotating staff under time pressure.",
        "content": "A beautiful recipe that only you can execute is useless in a busy café environment.\\n\\nWhen scaling to bar service, you must build **Tolerance** into your recipes. A highly sensitive V60 recipe that turns bitter if the water is poured 10 seconds too slowly will fail during a morning rush.\\n\\nTo standardize for staff:\\n- **Switch to forgiving brewers**: Flat bottoms like the Kalita Wave or Mugen buffer against poor pouring technique.\\n- **Use visual checkpoints**: Instead of demanding a perfect pour rate, teach staff checkpoints (e.g., 'The scale should read 150g at 1:00, and the water should drain by 2:30').\\n\\nRobust operations prioritize consistency over a theoretical 1% increase in cup quality.",
        "points": [
          "Tighter tolerance recipes (favoring devices and techniques more forgiving of small staff variance) for service contexts",
          "Visual/weight-based checkpoints (bloom amount, total pour time, final weight) as staff-trainable proxies for the underlying variables",
          "Trade-off between showcase-quality single-brewer recipes and operationally robust bar recipes"
        ],
        "refs": [
          "Rao (2010), op. cit. — has explicit commercial-service chapters distinct from home-brewing guidance."
        ]
      },
      {
        "t": "Batch brewing physics",
        "b": "Different from single-cup percolation dynamics — larger bed depth and different flow geometry change the recipe math entirely.",
        "content": "Batch brewers (like a Fetco or Marco) are not just giant V60s. The physics change significantly at scale.\\n\\nThe most critical difference is **Bed Depth**. A 2-liter batch brewer has a very deep bed of coffee. Water takes much longer to percolate through this deep bed, meaning contact time increases massively.\\n\\nTo prevent catastrophic over-extraction in batch brewers:\\n- You must grind significantly coarser than a single-cup pour-over.\\n- You must rely on the machine's pulse-pouring programming to maintain a consistent water level, preventing the deep bed from channeling.\\n\\nDialed in correctly, modern batch brewers are often more consistent and even than manual pour-overs.",
        "points": [
          "Bed depth effects on contact time and channeling risk at scale",
          "Batch brewer flow rate control as the primary lever, analogous to grind/pour-rate in manual brewing",
          "Relevance to a future bar service model where consistent multi-cup batches may matter as much as single-origin showcase pour-overs"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit. — covers batch brewing within its comparative method review."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 10",
    "title": "Escalar la extracción para mayoreo y servicio en barra",
    "id": "m10",
    "desc": "Traducir el ajuste personal de recetas en algo que se sostenga bajo el volumen de una barra de café y la variación de personal — relevante para tu exploración de una barra de café física.",
    "topics": [
      {
        "t": "Estandarización de receta para múltiples baristas",
        "b": "Una receta que funciona para un barista cuidadoso no necesariamente sobrevive al ser operada por personal rotativo bajo presión de tiempo.",
        "content": "Una receta hermosa que solo tú puedes ejecutar es inútil en un entorno de cafetería concurrido.\\n\\nAl escalar al servicio de barra, debes integrar **Tolerancia** en tus recetas. Una receta de V60 altamente sensible que se vuelve amarga si el agua se vierte 10 segundos más lento fracasará durante el ajetreo matutino.\\n\\nPara estandarizar para el personal:\\n- **Cambia a extractores indulgentes**: Fondos planos como el Kalita Wave o Mugen amortiguan las malas técnicas de vertido.\\n- **Usa puntos de control visuales**: En lugar de exigir una tasa de vertido perfecta, enseña puntos de control al personal (p. ej., 'La báscula debe marcar 150g al minuto 1:00, y el agua debe drenar para el 2:30').\\n\\nLas operaciones robustas priorizan la consistencia sobre un aumento teórico del 1% en la calidad de la taza.",
        "points": [
          "Recetas con tolerancias más amplias (favoreciendo dispositivos y técnicas más tolerantes a pequeñas variaciones de personal) para contextos de servicio",
          "Puntos de control visuales/por peso (cantidad de bloom, tiempo total de vertido, peso final) como proxies entrenables para personal",
          "Compromiso entre recetas de exhibición de calidad de un solo barista y recetas de barra operacionalmente robustas"
        ],
        "refs": [
          "Rao (2010), op. cit. — tiene capítulos explícitos de servicio comercial distintos de la guía para extracción casera."
        ]
      },
      {
        "t": "Física de la extracción por lotes (batch brewing)",
        "b": "Distinta de la dinámica de percolación de una sola taza — mayor profundidad de lecho y geometría de flujo distinta cambian por completo las matemáticas de la receta.",
        "content": "Las cafeteras de filtro comerciales (batch brewers como Fetco o Marco) no son solo V60s gigantes. La física cambia significativamente a escala.\\n\\nLa diferencia más crítica es la **Profundidad del Lecho**. Una cafetera de 2 litros tiene un lecho de café muy profundo. El agua tarda mucho más en percolar a través de este lecho, lo que significa que el tiempo de contacto aumenta masivamente.\\n\\nPara prevenir una sobreextracción catastrófica en las batch brewers:\\n- Debes moler significativamente más grueso que para un pour-over individual.\\n- Debes confiar en la programación de vertido por pulsos de la máquina para mantener un nivel de agua constante, evitando que el lecho profundo se canalice.\\n\\nBien calibradas, las cafeteras de filtro comerciales modernas suelen ser más consistentes y uniformes que los pour-overs manuales.",
        "points": [
          "Efectos de la profundidad del lecho en el tiempo de contacto y el riesgo de canalización a escala",
          "El control de la velocidad de flujo del batch brewer como palanca principal, análogo a la molienda/velocidad de vertido en extracción manual",
          "Relevancia para un futuro modelo de servicio de barra donde lotes múltiples consistentes pueden importar tanto como los pour-overs de exhibición de origen único"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit. — cubre extracción por lotes dentro de su revisión comparativa de métodos."
        ]
      }
    ]
  }
};`);
console.log("Updated M7, M8, M9, M10");
