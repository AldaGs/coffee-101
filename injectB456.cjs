const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'brewing', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(4, () => `export default {
  "en": {
    "mod": "Module 4",
    "title": "Temperature effects",
    "id": "m4",
    "desc": "Brew temperature changes both extraction rate and which compounds are preferentially extracted — not a single uniform multiplier.",
    "topics": [
      {
        "t": "Temperature and extraction kinetics",
        "b": "Higher temperature speeds diffusion and increases solubility of most compounds — but the relationship isn't linear across the full flavor compound range.",
        "content": "Temperature acts as the energy engine for extraction. As water gets hotter, the kinetic energy of its molecules increases, which speeds up the **[Diffusion](https://en.wikipedia.org/wiki/Diffusion)** of solubles from the coffee particle into the water.\\n\\nThe specialty standard range is **90°C to 96°C (194°F to 205°F)**. \\n- If you brew with water that is too hot (e.g., directly off the boil for a dark roast), you provide so much energy that you rapidly extract the heavy, bitter tannins and phenolics.\\n- If you brew with water that is too cool, you lack the energy to break down the complex sugars, resulting in a sour, sharp, and severely under-extracted cup.\\n\\nAlways remember that temperature drops rapidly the moment water hits the coffee and the brewer. Pre-heating your equipment is essential to maintain thermal stability.",
        "points": [
          "Arrhenius-type relationship between temperature and reaction/diffusion rate",
          "Typical specialty brewing range (~90-96°C) and why going meaningfully outside it changes more than just speed",
          "Temperature drop over the course of a brew (especially long pour-overs) as an underappreciated variable"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Sanz-Uribe, J.R. et al. (2017). 'The effect of brewing parameters on coffee quality.' In <i>The Craft and Science of Coffee</i>, Elsevier."
        ]
      },
      {
        "t": "Temperature's effect on selective extraction",
        "b": "Lower temperatures don't just extract less — they shift which compound classes come out preferentially, with real flavor consequences.",
        "content": "Temperature doesn't just act as a volume knob; it acts as an equalizer (EQ).\\n\\nDifferent flavor compounds have different solubility thresholds. Fruit acids and floral aromatics are highly soluble even at lower temperatures (which is why cold brew still tastes acidic). However, the complex sugars and heavier bitter compounds require high heat to dissolve efficiently.\\n\\nThis means if you drop your brew temperature from 96°C to 88°C, you aren't just making the coffee 'weaker.' You are intentionally shifting the flavor profile to highlight acidity and mute bitterness. Conversely, raising the temperature can push a stubbornly bright coffee into a sweeter, more balanced profile.",
        "points": [
          "Lower brew temps can favor relatively more acid/aromatic extraction relative to bitter compounds",
          "Higher temps risk pulling more bitter/harsh compounds proportionally, especially at longer contact times",
          "Why temperature and grind/time are often adjusted together, not independently, to hit a target flavor profile"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Severini, C. et al. (2017). 'How the artisanal roasting process could influence the sensory quality of espresso coffee.' <i>Foods</i>."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "Efectos de la temperatura",
    "id": "m4",
    "desc": "La temperatura de extracción cambia tanto la velocidad de extracción como qué compuestos se extraen preferencialmente — no es un multiplicador uniforme único.",
    "topics": [
      {
        "t": "Temperatura y cinética de extracción",
        "b": "Mayor temperatura acelera la difusión y aumenta la solubilidad de la mayoría de los compuestos — pero la relación no es lineal en todo el rango de compuestos de sabor.",
        "content": "La temperatura actúa como el motor de energía para la extracción. A medida que el agua se calienta, la energía cinética de sus moléculas aumenta, lo que acelera la **[Difusión](https://es.wikipedia.org/wiki/Difusi%C3%B3n_(f%C3%ADsica))** de solubles desde la partícula de café hacia el agua.\\n\\nEl rango estándar de especialidad es de **90°C a 96°C (194°F a 205°F)**. \\n- Si filtras con agua demasiado caliente (p. ej., directamente de la ebullición para un tueste oscuro), proporcionas tanta energía que extraes rápidamente los taninos pesados y amargos.\\n- Si filtras con agua demasiado fría, te falta la energía para descomponer los azúcares complejos, resultando en una taza agria, punzante y severamente subextraída.\\n\\nSiempre recuerda que la temperatura cae rápidamente en el momento en que el agua toca el café y el extractor. Precalentar tu equipo es esencial para mantener la estabilidad térmica.",
        "points": [
          "Relación de tipo Arrhenius entre temperatura y velocidad de reacción/difusión",
          "Rango típico de extracción especialidad (~90-96°C) y por qué salirse significativamente de él cambia más que solo la velocidad",
          "La caída de temperatura durante la preparación (especialmente en pour-overs largos) como variable poco apreciada"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Sanz-Uribe, J.R. et al. (2017). 'The effect of brewing parameters on coffee quality.' En <i>The Craft and Science of Coffee</i>, Elsevier."
        ]
      },
      {
        "t": "Efecto de la temperatura en la extracción selectiva",
        "b": "Temperaturas más bajas no solo extraen menos — cambian qué clases de compuestos salen preferencialmente, con consecuencias reales en el sabor.",
        "content": "La temperatura no solo actúa como un control de volumen; actúa como un ecualizador (EQ).\\n\\nDiferentes compuestos de sabor tienen diferentes umbrales de solubilidad. Los ácidos frutales y los aromáticos florales son altamente solubles incluso a bajas temperaturas (por lo que el cold brew sigue sabiendo ácido). Sin embargo, los azúcares complejos y los compuestos amargos pesados requieren mucho calor para disolverse eficientemente.\\n\\nEsto significa que si bajas la temperatura de extracción de 96°C a 88°C, no solo estás haciendo el café 'más débil'. Estás cambiando intencionalmente el perfil de sabor para resaltar la acidez y silenciar la amargura. Por el contrario, subir la temperatura puede empujar un café obstinadamente brillante hacia un perfil más dulce y equilibrado.",
        "points": [
          "Temperaturas de extracción más bajas pueden favorecer relativamente más extracción de ácidos/aromáticos respecto a compuestos amargos",
          "Temperaturas más altas arriesgan extraer proporcionalmente más compuestos amargos/ásperos, especialmente con tiempos de contacto largos",
          "Por qué la temperatura y la molienda/tiempo suelen ajustarse juntos, no de forma independiente, para lograr un perfil de sabor objetivo"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Severini, C. et al. (2017). 'How the artisanal roasting process could influence the sensory quality of espresso coffee.' <i>Foods</i>."
        ]
      }
    ]
  }
};`);

updateModule(5, () => `export default {
  "en": {
    "mod": "Module 5",
    "title": "Time and agitation",
    "id": "m5",
    "desc": "Contact time and turbulence both modulate extraction — and they interact with grind size rather than acting independently.",
    "topics": [
      {
        "t": "Contact time as an extraction lever",
        "b": "Longer time generally means more extraction, but the relationship saturates and the marginal extraction late in a brew is disproportionately bitter/late-extracting compounds.",
        "content": "Contact time is how long water and coffee sit together.\\n\\nIn the first 30 seconds of a brew, extraction is incredibly fast. Most of the acids and vibrant aromatics are pulled out. However, as time passes, the rate of extraction slows down significantly (a law of diminishing returns). \\n\\nIf you let a French Press steep for 15 minutes instead of 4, it doesn't become three times stronger. It merely extracts a tiny bit more of the heaviest, most stubborn bitter compounds. Time is a powerful lever, but it is heavily dependent on your **Grind Size**. A coarse grind needs a long time (e.g., 4 minutes in immersion) to extract properly, whereas a fine grind needs a very short time (e.g., 30 seconds in espresso).",
        "points": [
          "Diminishing returns curve: early contact time extracts efficiently, later time extracts progressively less desirable compounds",
          "Why most balanced filter recipes target a fairly narrow total brew time window for a given grind/dose",
          "Time and grind as substitutable to a point — coarser+longer can approximate finer+shorter, but not perfectly (different PSD-driven extraction evenness)"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Rao (2010), op. cit., Ch. 4."
        ]
      },
      {
        "t": "Agitation and turbulence",
        "b": "Stirring, swirling, or pour technique that disrupts the bed increases local extraction rate by thinning the boundary layer around each particle.",
        "content": "When a coffee particle sits still in water, it becomes surrounded by a highly concentrated halo of dissolved coffee. This is called the **Boundary Layer**. This layer slows down further extraction because the water immediately touching the bean is already full of solubles.\\n\\n**Agitation** (stirring, swirling, or pouring aggressively) disrupts this boundary layer, replacing it with fresh, hungry water. This drastically increases the extraction rate.\\n\\nWhile agitation is a powerful tool to boost extraction, it is also dangerous. Aggressive swirling can cause fines to migrate to the bottom of the filter, physically clogging the pores and stalling the brew (the infamous 'choked' V60).",
        "points": [
          "Boundary layer theory: a thin, relatively static water layer around each particle slows diffusion until disrupted",
          "Agitation's double-edged nature: improves extraction efficiency but also increases channeling/fines migration risk if excessive",
          "Practical agitation techniques across brewers — stirring in immersion methods, pour height/rate in pour-over"
        ],
        "refs": [
          "Melrose et al. (2021), op. cit.",
          "Cameron et al. (2020), op. cit. — boundary layer framework, espresso-context but physically general."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 5",
    "title": "Tiempo y agitación",
    "id": "m5",
    "desc": "El tiempo de contacto y la turbulencia modulan ambos la extracción — e interactúan con el tamaño de molienda en lugar de actuar de forma independiente.",
    "topics": [
      {
        "t": "Tiempo de contacto como palanca de extracción",
        "b": "Más tiempo generalmente implica más extracción, pero la relación se satura y la extracción marginal tardía en una preparación corresponde desproporcionadamente a compuestos amargos/de extracción tardía.",
        "content": "El tiempo de contacto es cuánto tiempo el agua y el café permanecen juntos.\\n\\nEn los primeros 30 segundos de una preparación, la extracción es increíblemente rápida. La mayoría de los ácidos y aromáticos vibrantes son arrastrados. Sin embargo, a medida que pasa el tiempo, la velocidad de extracción se ralentiza significativamente (una ley de rendimientos decrecientes).\\n\\nSi dejas que una Prensa Francesa repose durante 15 minutos en lugar de 4, no se vuelve tres veces más fuerte. Simplemente extrae un poco más de los compuestos amargos más pesados y obstinados. El tiempo es una palanca poderosa, pero depende en gran medida del **Tamaño de Molienda**. Una molienda gruesa necesita mucho tiempo (p. ej., 4 minutos en inmersión) para extraerse adecuadamente, mientras que una molienda fina necesita muy poco tiempo (p. ej., 30 segundos en espresso).",
        "points": [
          "Curva de rendimientos decrecientes: el tiempo de contacto temprano extrae eficientemente, el tiempo tardío extrae progresivamente compuestos menos deseables",
          "Por qué la mayoría de las recetas filtradas balanceadas apuntan a una ventana de tiempo total relativamente estrecha para una molienda/dosis dada",
          "Tiempo y molienda como sustituibles hasta cierto punto — más grueso+más tiempo puede aproximar más fino+menos tiempo, pero no perfectamente"
        ],
        "refs": [
          "Moroney et al. (2015), op. cit.",
          "Rao (2010), op. cit., Cap. 4."
        ]
      },
      {
        "t": "Agitación y turbulencia",
        "b": "Revolver, remolinear o una técnica de vertido que perturba el lecho aumenta la velocidad de extracción local al adelgazar la capa límite alrededor de cada partícula.",
        "content": "Cuando una partícula de café se asienta en el agua, queda rodeada por un halo altamente concentrado de café disuelto. Esto se llama la **Capa Límite**. Esta capa ralentiza la extracción porque el agua que toca inmediatamente el grano ya está llena de solubles.\\n\\nLa **Agitación** (revolver, remolinear o verter agresivamente) rompe esta capa límite, reemplazándola con agua fresca y 'hambrienta'. Esto aumenta drásticamente la velocidad de extracción.\\n\\nAunque la agitación es una herramienta poderosa para potenciar la extracción, también es peligrosa. Los remolinos agresivos pueden causar que los finos migren al fondo del filtro, obstruyendo físicamente los poros y atascando la extracción (el infame V60 'ahogado').",
        "points": [
          "Teoría de capa límite: una capa de agua delgada y relativamente estática alrededor de cada partícula ralentiza la difusión hasta que se perturba",
          "Naturaleza de doble filo de la agitación: mejora la eficiencia de extracción pero también aumenta el riesgo de canalización/migración de finos si es excesiva",
          "Técnicas de agitación prácticas según el método — revolver en métodos de inmersión, altura/velocidad de vertido en pour-over"
        ],
        "refs": [
          "Melrose et al. (2021), op. cit.",
          "Cameron et al. (2020), op. cit. — marco de capa límite, contexto de espresso pero físicamente general."
        ]
      }
    ]
  }
};`);

updateModule(6, () => `export default {
  "en": {
    "mod": "Module 6",
    "title": "Brew device physics",
    "id": "m6",
    "desc": "Geometry, flow rate, and filter material define the 'recipe' a device imposes before you even touch a variable — directly relevant to your V60/Mugen/Origami/Kalita/Aeropress comparisons.",
    "topics": [
      {
        "t": "Percolation (drip) vs. immersion vs. hybrid",
        "b": "The three fundamental brew-method categories and the different extraction dynamics each implies.",
        "content": "Brewing devices fall into three physical categories:\\n\\n1. **Immersion (e.g., French Press, Cupping)**: Coffee and water sit together in a static environment. As the water fills with solubles, the extraction rate naturally slows down. This creates a highly forgiving, even extraction that highlights body and sweetness, but often mutes delicate acidity.\\n2. **Percolation (e.g., V60, Kalita, Chemex)**: Clean, fresh water constantly washes over the coffee bed. Because the water is always 'hungry' (low TDS), percolation is highly efficient at pulling out vibrant acids and top notes, but it is highly susceptible to **channeling**.\\n3. **Hybrid (e.g., Aeropress, Clever Dripper)**: Combines a steeping phase with a final percolation draw-down, offering the body of immersion with the clarity of a filtered percolation.",
        "points": [
          "Percolation (V60, Kalita, Origami): water flows through the bed once, contact time set by flow rate and bed resistance",
          "Full immersion (French press, some Clever-style devices): grounds steep in static or near-static water for a set time, then separated",
          "Hybrid (Aeropress, some pour-over techniques with a bloom+steep+drain phase): combines steeping with eventual percolation/pressure-assisted drainage"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit. — comparative review across brew methods.",
          "Rao (2010), op. cit."
        ]
      },
      {
        "t": "Cone geometry and flow rate (V60 vs. Kalita Wave vs. Origami vs. Mugen)",
        "b": "Cone angle, rib design, and hole size/count determine how fast water can move through the bed independent of grind — this directly explains why the same bean/grind behaves differently across your tested brewers.",
        "content": "Before you even pour, the geometry of your dripper imposes a baseline flow rate.\\n\\n- **Hario V60**: Features a steep 60° angle and a massive exit hole. It provides very little physical restriction. The flow rate is entirely determined by your grind size and your pour technique. It is highly expressive but demands perfection.\\n- **Kalita Wave / Flat Bottoms**: Features a flat bed and three tiny restrictive holes. The brewer artificially limits the flow rate, creating a pool of water that gently steeps the coffee. This buffers against bad pouring technique and produces a consistently sweet, rounded cup.\\n- **Hario Mugen**: A star-shaped flat-sided brewer designed to restrict bypass (water sneaking around the filter). It promotes a slow, highly saturated extraction, which is why it often performs exceptionally well with delicate co-fermented coffees like your Sarchimor.",
        "points": [
          "V60: steep conical angle with spiral ribs, single large hole — fast flow, very pour-technique-dependent extraction evenness",
          "Kalita Wave: flat-bottom with three small holes — slower, more buffered flow that's more forgiving of pour inconsistency",
          "Origami: similar cone angle to V60 but often paired with a separate (sometimes fabric or different paper) filter",
          "Mugen: a relatively newer flat-bottom/multi-hole design intended to balance V60 responsiveness with Kalita-style evenness"
        ],
        "refs": [
          "Manufacturer technical documentation (Hario, Kalita, ORIGAMI, MUGEN)",
          "Cameron et al. (2020), op. cit. — general flow/geometry modeling framework applicable across drippers."
        ]
      },
      {
        "t": "Filter material and its extraction effect",
        "b": "Paper, cloth, and metal filters don't just separate grounds from liquid — they selectively retain different compound classes, especially oils and fine sediment.",
        "content": "The barrier you use to separate the liquid from the grounds fundamentally alters the cup profile.\\n\\n- **Metal Filters (French Press, metal Aeropress disks)**: Allow all micro-fines and coffee oils (lipids) to pass through into the cup. This creates a heavy, syrupy body, but the suspended fines can obscure delicate flavor notes and lead to continued bitter extraction in the cup.\\n- **Paper Filters (V60, Chemex)**: Paper is incredibly dense. It traps almost all micro-fines and aggressively absorbs coffee oils. This results in a highly 'clean' cup where acidity and floral notes are vividly separated. Thicker paper (like Chemex) removes even more oil, creating a tea-like body.\\n- **Cloth Filters (Nel Drip)**: Sits directly in the middle, allowing oils to pass while retaining fines. However, cloth requires intense maintenance to prevent rancid off-flavors from old trapped oils.",
        "points": [
          "Paper: retains most oils and fine sediment, producing a 'cleaner,' lighter-body cup",
          "Cloth: retains less oil than paper, more body, requires more maintenance",
          "Metal: retains almost no oil or fine sediment, heaviest body, more sediment in cup",
          "Why filter choice interacts with your stated design value of restraint"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Angeloni, G. et al. (2019). 'What kind of coffee do you drink? An investigation on effects of eight different extraction methods.' <i>Food Research International</i>, 116."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 6",
    "title": "Física del dispositivo de extracción",
    "id": "m6",
    "desc": "La geometría, el flujo y el material del filtro definen la 'receta' que el dispositivo impone antes de que toques cualquier variable — directamente relevante para tus comparaciones V60/Mugen/Origami/Kalita/Aeropress.",
    "topics": [
      {
        "t": "Percolación (goteo) vs. inmersión vs. híbrido",
        "b": "Las tres categorías fundamentales de método de extracción y la dinámica de extracción distinta que cada una implica.",
        "content": "Los dispositivos de extracción se dividen en tres categorías físicas:\\n\\n1. **Inmersión (p. ej., Prensa Francesa, Cata)**: El café y el agua reposan juntos en un entorno estático. A medida que el agua se llena de solubles, la velocidad de extracción disminuye naturalmente. Esto crea una extracción muy indulgente y uniforme que resalta el cuerpo y el dulzor, pero a menudo silencia la acidez delicada.\\n2. **Percolación (p. ej., V60, Kalita, Chemex)**: Agua limpia y fresca lava constantemente el lecho de café. Debido a que el agua siempre está 'hambrienta' (bajo TDS), la percolación es altamente eficiente para extraer ácidos vibrantes, pero es muy susceptible a la **canalización**.\\n3. **Híbrido (p. ej., Aeropress, Clever Dripper)**: Combina una fase de remojo con un drenaje final por percolación, ofreciendo el cuerpo de la inmersión con la claridad de la percolación filtrada.",
        "points": [
          "Percolación (V60, Kalita, Origami): el agua fluye una vez a través del lecho, el tiempo de contacto lo define la velocidad de flujo y la resistencia del lecho",
          "Inmersión total (prensa francesa, algunos dispositivos tipo Clever): los molidos reposan en agua estática o casi estática durante un tiempo fijo, y luego se separan",
          "Híbrido (Aeropress, algunas técnicas de pour-over con fase de bloom+reposo+drenaje): combina reposo con drenaje eventual por percolación/presión"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit. — revisión comparativa entre métodos de extracción.",
          "Rao (2010), op. cit."
        ]
      },
      {
        "t": "Geometría del cono y velocidad de flujo (V60 vs. Kalita Wave vs. Origami vs. Mugen)",
        "b": "El ángulo del cono, el diseño de las nervaduras y el tamaño/número de orificios determinan qué tan rápido puede moverse el agua a través del lecho independientemente de la molienda — esto explica directamente por qué el mismo grano/molienda se comporta distinto entre tus extractores probados.",
        "content": "Incluso antes de verter, la geometría de tu dripper impone una velocidad de flujo base.\\n\\n- **Hario V60**: Presenta un ángulo pronunciado de 60° y un gran orificio de salida. Proporciona muy poca restricción física. La velocidad de flujo está determinada por el tamaño de la molienda y tu técnica de vertido. Es muy expresivo pero exige perfección.\\n- **Kalita Wave / Fondos Planos**: Presenta un lecho plano y tres orificios restrictivos pequeños. El extractor limita artificialmente el flujo, creando una piscina de agua que remoja suavemente el café. Esto amortigua las malas técnicas de vertido y produce una taza consistentemente dulce y redonda.\\n- **Hario Mugen**: Un extractor en forma de estrella diseñado para restringir el bypass (agua que se cuela alrededor del filtro). Promueve una extracción lenta y altamente saturada, por lo que a menudo funciona excepcionalmente bien con cafés co-fermentados delicados como tu Sarchimor.",
        "points": [
          "V60: ángulo cónico pronunciado con nervaduras en espiral, un orificio grande único — flujo rápido, uniformidad de extracción muy dependiente de la técnica de vertido",
          "Kalita Wave: fondo plano con tres orificios pequeños — flujo más lento y amortiguado, más tolerante a inconsistencias de vertido",
          "Origami: ángulo de cono similar al V60 pero a menudo combinado con un filtro distinto",
          "Mugen: un diseño relativamente más nuevo de fondo plano/múltiples orificios pensado para balancear la sensibilidad del V60 con la uniformidad estilo Kalita"
        ],
        "refs": [
          "Documentación técnica del fabricante (Hario, Kalita, ORIGAMI, MUGEN)",
          "Cameron et al. (2020), op. cit. — marco general de modelado de flujo/geometría aplicable a distintos drippers."
        ]
      },
      {
        "t": "Material del filtro y su efecto en la extracción",
        "b": "Los filtros de papel, tela y metal no solo separan los molidos del líquido — retienen selectivamente distintas clases de compuestos, especialmente aceites y sedimento fino.",
        "content": "La barrera que utilizas para separar el líquido de los molidos altera fundamentalmente el perfil de la taza.\\n\\n- **Filtros de Metal (Prensa Francesa, discos de Aeropress)**: Permiten que todos los micro-finos y aceites del café (lípidos) pasen a la taza. Esto crea un cuerpo pesado y almibarado, pero los finos suspendidos pueden oscurecer las notas delicadas y llevar a una extracción amarga continua en la taza.\\n- **Filtros de Papel (V60, Chemex)**: El papel es increíblemente denso. Atrapa casi todos los micro-finos y absorbe agresivamente los aceites. Esto resulta en una taza altamente 'limpia' donde la acidez y las notas florales están vívidamente separadas. El papel grueso (Chemex) elimina aún más aceite, creando un cuerpo similar al té.\\n- **Filtros de Tela (Nel Drip)**: Se sitúa en el medio, permitiendo el paso de aceites mientras retiene los finos. Sin embargo, la tela requiere un mantenimiento intenso para evitar sabores rancios.",
        "points": [
          "Papel: retiene la mayoría de los aceites y sedimento fino, produciendo una taza 'más limpia' y de cuerpo más ligero",
          "Tela: retiene menos aceite que el papel, más cuerpo, requiere más mantenimiento",
          "Metal: retiene casi nada de aceite o sedimento fino, el cuerpo más pesado, más sedimento en la taza",
          "Por qué la elección del filtro interactúa con tu valor de diseño declarado de restricción"
        ],
        "refs": [
          "Cordoba et al. (2020), op. cit.",
          "Angeloni, G. et al. (2019). 'What kind of coffee do you drink? An investigation on effects of eight different extraction methods.' <i>Food Research International</i>, 116."
        ]
      }
    ]
  }
};`);
console.log("Updated M4, M5, M6");
