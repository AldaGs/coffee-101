const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'espresso', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(1, () => `export default {
  "en": {
    "mod": "Module 1",
    "title": "Defining espresso physically",
    "id": "m1",
    "desc": "Espresso is not a roast degree or a bean type; it is a specific thermodynamic state of extraction under pressure.",
    "topics": [
      {
        "t": "The biphasic/triphasic nature of espresso",
        "b": "Filter coffee is a simple solution. Espresso is a solution, a suspension, and an emulsion all at once.",
        "content": "Espresso is not just strong coffee; its physics are entirely different. While filter coffee is a simple solution of dissolved solids in water, espresso is a **[Triphasic system](https://en.wikipedia.org/wiki/Colloid)**.\\n\\n1. **Solution**: Water-soluble compounds (acids, sugars) dissolved into the liquid.\\n2. **Emulsion**: Microscopic droplets of coffee oil (lipids) forced into the water by high pressure. This emulsion is primarily responsible for espresso's heavy, syrupy body.\\n3. **Suspension**: Solid micro-fines (tiny coffee dust) suspended in the liquid, adding texture.\\n\\nAdditionally, the CO2 trapped in the beans is forced into solution by pressure, then immediately expands when it hits atmospheric pressure in the cup, creating the **Crema** (a foam phase). Because it is an emulsion, espresso coats the palate and lingers far longer than filter coffee.",
        "points": [
          "Solution (dissolved solids), Emulsion (dispersed oils), Suspension (suspended fines), and Foam (crema/CO2)",
          "Why espresso coats the palate differently than filter (oil emulsion mechanics)",
          "Defining espresso by its pressure (typically 7-9 bar) rather than strength alone"
        ],
        "refs": [
          "Illy, A. & Viani, R. (2005). <i>Espresso Coffee: The Science of Quality</i>, 2nd Ed. Academic Press — the definitive text on espresso physics.",
          "Navarini, L. et al. (2009). 'Espresso coffee foam: mineral composition and its physical properties.' <i>Food Biophysics</i>."
        ]
      },
      {
        "t": "Concentration vs. Extraction in a pressurized environment",
        "b": "Why espresso yields are typically lower than filter, even though concentration (TDS) is vastly higher.",
        "content": "In filter brewing, you might extract 20% of the coffee bean (Extraction Yield or EY) to create a beverage that is 1.3% coffee and 98.7% water (TDS).\\n\\nIn espresso, you use a tiny amount of water. You might create a beverage that is **8% to 12% TDS** (extremely strong). However, because you use so little water, it becomes saturated with solubles very quickly. This makes it difficult to extract as much from the coffee bean itself. A traditional espresso might only achieve a **17% to 19% EY**.\\n\\nThis is the central paradox of espresso: it is the strongest form of coffee, but it is often the least thoroughly extracted. Pushing past 20% EY in espresso usually requires ultra-precise flat-burr grinders and longer ratios.",
        "points": [
          "Typical espresso TDS (8-12%+) vs. typical EY (often struggling to hit 18-20% compared to filter's easy 20-22%)",
          "The limit of solubility when water volume is severely restricted",
          "Why the 'ristretto' (1:1 ratio) is intensely concentrated but almost always technically under-extracted"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit. — extensively models the physical limits of espresso extraction.",
          "Rao, S. (2008). <i>The Professional Barista's Handbook</i>."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "Definición física del espresso",
    "id": "m1",
    "desc": "El espresso no es un nivel de tueste ni un tipo de grano; es un estado termodinámico específico de extracción bajo presión.",
    "topics": [
      {
        "t": "La naturaleza bifásica/trifásica del espresso",
        "b": "El café de filtro es una solución simple. El espresso es una solución, una suspensión y una emulsión al mismo tiempo.",
        "content": "El espresso no es solo café fuerte; su física es completamente diferente. Mientras que el café de filtro es una solución simple de sólidos en agua, el espresso es un **[Sistema trifásico](https://es.wikipedia.org/wiki/Coloide)**.\\n\\n1. **Solución**: Compuestos solubles en agua (ácidos, azúcares).\\n2. **Emulsión**: Gotas microscópicas de aceite de café forzadas en el agua por alta presión. Esta emulsión es la principal responsable del cuerpo pesado del espresso.\\n3. **Suspensión**: Micro-finos sólidos suspendidos en el líquido, añadiendo textura.\\n\\nAdemás, el CO2 es forzado a disolverse por la presión y luego se expande al llegar a la presión atmosférica en la taza, creando la **Crema**. Al ser una emulsión, el espresso recubre el paladar y perdura mucho más que el café de filtro.",
        "points": [
          "Solución (sólidos disueltos), Emulsión (aceites dispersos), Suspensión (finos suspendidos) y Espuma (crema/CO2)",
          "Por qué el espresso recubre el paladar diferente al filtrado (mecánica de la emulsión de aceites)",
          "Definir el espresso por su presión (típicamente 7-9 bar) en lugar de solo por su fuerza"
        ],
        "refs": [
          "Illy, A. y Viani, R. (2005). <i>Espresso Coffee: The Science of Quality</i>, 2da Ed.",
          "Navarini, L. et al. (2009). 'Espresso coffee foam: mineral composition and its physical properties.' <i>Food Biophysics</i>."
        ]
      },
      {
        "t": "Concentración vs. Extracción en un entorno presurizado",
        "b": "Por qué los rendimientos del espresso suelen ser menores que los de filtro, aunque la concentración (TDS) sea mucho mayor.",
        "content": "En un café filtrado, puedes extraer el 20% del grano de café (Rendimiento de Extracción o EY) para crear una bebida que es 1.3% café y 98.7% agua (TDS).\\n\\nEn el espresso, usas una cantidad ínfima de agua. Puedes crear una bebida con **8% a 12% TDS** (extremadamente fuerte). Sin embargo, al usar tan poca agua, ésta se satura de solubles rápidamente, haciendo difícil extraer el interior del grano. Un espresso tradicional a menudo solo alcanza un **17% a 19% EY**.\\n\\nEsta es la paradoja central del espresso: es la forma más fuerte de café, pero a menudo es la menos extraída. Pasar del 20% EY en espresso generalmente requiere molinos de muelas planas ultra-precisos y proporciones más largas.",
        "points": [
          "TDS típico de espresso (8-12%+) vs. EY típico (a menudo luchando por llegar al 18-20% en comparación con el 20-22% fácil del filtro)",
          "El límite de solubilidad cuando el volumen de agua está severamente restringido",
          "Por qué el 'ristretto' (ratio 1:1) está intensamente concentrado pero casi siempre técnicamente subextraído"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit. — modela extensivamente los límites físicos de la extracción del espresso.",
          "Rao, S. (2008). <i>The Professional Barista's Handbook</i>."
        ]
      }
    ]
  }
};`);

updateModule(2, () => `export default {
  "en": {
    "mod": "Module 2",
    "title": "Grinder dynamics and puck resistance",
    "id": "m2",
    "desc": "In espresso, the coffee bed IS the valve. Your grinder determines not just surface area, but flow rate and pressure.",
    "topics": [
      {
        "t": "The puck as a hydraulic resistor",
        "b": "Unlike filter coffee where gravity sets the limit, an espresso machine throws 9 bars of pressure at the bed. The puck must resist it.",
        "content": "In a pour-over, if your grind is slightly wrong, the brew finishes 15 seconds late. In espresso, if your grind is slightly wrong, the shot chokes completely or gushes out in 10 seconds.\\n\\nBecause an espresso pump forces water at 9 bars (130 psi) into the basket, the coffee bed (the **Puck**) is the only thing providing resistance. The flow rate of the shot is dictated almost entirely by how tightly the coffee particles pack together. Grinding finer increases this resistance; grinding coarser decreases it.\\n\\nThis means your grind size does not just control surface area for extraction; **it physically acts as a valve** controlling the flow of water.",
        "points": [
          "Flow rate is directly proportional to pressure and inversely proportional to puck resistance (Darcy's Law proxy)",
          "Why micro-adjustments in espresso grinders matter far more than in filter grinders",
          "The non-linear relationship between grind size and shot time (a tiny shift can choke a shot)"
        ],
        "refs": [
          "Fasano, A. & Talamucci, F. (2013). 'Modelling the espresso coffee brewing process.' <i>Applied Mathematical Modelling</i>.",
          "Cameron et al. (2020), op. cit."
        ]
      },
      {
        "t": "Fines migration and bed compaction",
        "b": "Why a shot starts slow and speeds up — the physical shifting of particles under 9 bars of pressure.",
        "content": "When 9 bars of pressure hit a coffee puck, the physical structure collapses and compresses downwards. \\n\\nSimultaneously, the microscopic coffee dust (**Fines**) is washed downward by the water, migrating toward the bottom of the metal basket. These fines clog the holes of the basket, creating immense resistance early in the shot.\\n\\nHowever, as the shot progresses, the water extracts solubles from the coffee. The puck physically loses about 20% of its solid mass. As it loses mass, its resistance drops. This is why espresso shots start with slow, dark drips and finish with a fast, blond, gushing stream.",
        "points": [
          "How fines migrate downward and partially blind the basket holes",
          "Puck mass loss during extraction (~20%) and resulting loss of structural integrity/resistance",
          "Why profiling machines drop pressure late in the shot (to counteract the puck's degrading resistance)"
        ],
        "refs": [
          "Navarini, L. et al. (2009), op. cit.",
          "Rao (2008), op. cit."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Dinámica de molienda y resistencia de la pastilla",
    "id": "m2",
    "desc": "En el espresso, el lecho de café ES la válvula. Tu molino no solo determina el área superficial, sino el caudal y la presión.",
    "topics": [
      {
        "t": "La pastilla como resistencia hidráulica",
        "b": "A diferencia del café filtrado donde la gravedad marca el límite, una máquina de espresso arroja 9 bares de presión. La pastilla debe resistirla.",
        "content": "En un pour-over, si tu molienda está ligeramente mal, la extracción termina 15 segundos tarde. En el espresso, si está ligeramente mal, el shot se ahoga por completo o sale a borbotones en 10 segundos.\\n\\nDebido a que una bomba de espresso fuerza el agua a 9 bares (130 psi), el lecho de café (la **Pastilla** o Puck) es lo único que proporciona resistencia. El caudal (flow rate) del shot está dictado casi enteramente por qué tan apretadas están las partículas. Moler más fino aumenta esta resistencia; moler más grueso la disminuye.\\n\\nEsto significa que el tamaño de molienda no solo controla el área superficial; **actúa físicamente como una válvula** controlando el flujo de agua.",
        "points": [
          "El caudal es directamente proporcional a la presión e inversamente proporcional a la resistencia de la pastilla (proxy de la Ley de Darcy)",
          "Por qué los micro-ajustes en molinos de espresso importan mucho más que en filtrado",
          "La relación no lineal entre tamaño de molienda y tiempo del shot"
        ],
        "refs": [
          "Fasano, A. & Talamucci, F. (2013). 'Modelling the espresso coffee brewing process.' <i>Applied Mathematical Modelling</i>.",
          "Cameron et al. (2020), op. cit."
        ]
      },
      {
        "t": "Migración de finos y compactación del lecho",
        "b": "Por qué un shot comienza lento y se acelera — el desplazamiento físico de partículas bajo 9 bares de presión.",
        "content": "Cuando 9 bares de presión golpean una pastilla de café, la estructura física colapsa y se comprime hacia abajo.\\n\\nSimultáneamente, el polvo microscópico de café (**Finos**) es arrastrado por el agua, migrando hacia el fondo de la canastilla de metal. Estos finos obstruyen los orificios, creando una inmensa resistencia al inicio del shot.\\n\\nSin embargo, a medida que avanza la extracción, el agua disuelve solubles del café. La pastilla pierde físicamente alrededor del 20% de su masa sólida. Al perder masa, su resistencia cae. Es por esto que los shots de espresso comienzan con gotas lentas y oscuras y terminan con un flujo rápido, rubio y acuoso.",
        "points": [
          "Cómo los finos migran hacia abajo y ciegan parcialmente los orificios de la canastilla",
          "Pérdida de masa de la pastilla durante la extracción (~20%) y la resultante pérdida de resistencia",
          "Por qué las máquinas con perfiles de presión bajan la presión al final del shot (para contrarrestar la pérdida de resistencia de la pastilla)"
        ],
        "refs": [
          "Navarini, L. et al. (2009), op. cit.",
          "Rao (2008), op. cit."
        ]
      }
    ]
  }
};`);

updateModule(3, () => `export default {
  "en": {
    "mod": "Module 3",
    "title": "The core variables: Dose, Yield, Time",
    "id": "m3",
    "desc": "The three legs of the espresso recipe stool, and why fixing one locks the others.",
    "topics": [
      {
        "t": "Dose (In)",
        "b": "The amount of dry coffee you put in the basket. It sets your baseline resistance and your absolute flavor potential.",
        "content": "**Dose** is the weight of dry coffee placed in the portafilter basket (e.g., 18 grams). \\n\\nDose is not a flexible variable. It should be determined by the physical size of your basket. If you use a 20g basket, you should use roughly 20g of coffee. \\n- **Over-dosing** crushes the coffee against the shower screen, causing immediate channeling.\\n- **Under-dosing** creates too much headspace, leading to a soupy puck and weak pressure buildup.\\n\\nOnce you pick a dose that fits your basket, lock it in. Do not change the dose to fix flavor issues; change the yield or grind.",
        "points": [
          "Basket sizing and headspace (the gap between puck and shower screen)",
          "Why locking dose first drastically simplifies dialing in",
          "Dose's effect on flow resistance (thicker puck = more resistance at the same grind)"
        ],
        "refs": [
          "Rao (2008), op. cit., Ch. on Dose and Basket size.",
          "SCA guidelines on espresso parameters."
        ]
      },
      {
        "t": "Yield (Out) / Brew Ratio",
        "b": "The weight of the liquid espresso in the cup. This is your primary lever for balancing sourness vs. bitterness.",
        "content": "**Yield** is the weight of the liquid espresso (e.g., 36 grams). The relationship between Dose and Yield is the **Brew Ratio** (e.g., 18g in, 36g out is a 1:2 ratio).\\n\\nYield is your primary flavor control:\\n- **Short Yield (1:1.5 - Ristretto)**: Highly concentrated, heavy body, but often sour/under-extracted because the water didn't have enough time to pull out the sugars.\\n- **Standard (1:2 - Normale)**: The modern specialty baseline. Balances body and extraction.\\n- **Long Yield (1:2.5+ - Lungo)**: Weaker body, but much higher extraction. Excellent for pulling sweetness out of dense, lightly-roasted coffees that would otherwise taste sour.",
        "points": [
          "Ratio as a multiplier for Extraction Yield (more water pushed through = more extraction of the same bed)",
          "Modern specialty ratios (often 1:2 to 1:2.5) vs. traditional Italian ratios (often closer to 1:1.5-1:2 volume/mass approximations)",
          "Why light roasts almost always require longer ratios to extract properly without sourness"
        ]
      },
      {
        "t": "Time as a symptom, not a target",
        "b": "The biggest misconception in espresso: trying to hit exactly 25 seconds instead of tasting the coffee.",
        "content": "For decades, the golden rule of espresso was '25 to 30 seconds.' This is deeply misleading.\\n\\n**Time is a symptom of your Dose, Yield, and Grind.** If you have 18g in, 36g out, and it takes 20 seconds, it will likely taste sour. You grind finer to increase resistance, which *causes* the time to extend to 28 seconds, which tastes balanced. \\n\\nYou did not fix the shot because it hit 28 seconds; you fixed it because grinding finer increased the extraction. A 15-second shot on a 'Turbo' profile might taste incredible, and a 40-second shot of a light roast might be perfect. **Taste the coffee, do not chase the clock.**",
        "points": [
          "Time as a dependent output variable, not an independent input control",
          "The 'Turbo Shot' paradigm (fast, coarse, low pressure, high extraction) breaking the 25-second rule",
          "Using time purely as a consistency check (if yesterday was 28s and today is 18s at the same grind, something physically broke like channeling)"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit. — the paper that formalized the fast/coarse 'Turbo Shot' logic."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "Las variables centrales: Dosis, Rendimiento, Tiempo",
    "id": "m3",
    "desc": "Las tres patas del banco de la receta de espresso, y por qué fijar una bloquea las demás.",
    "topics": [
      {
        "t": "Dosis (Entrada)",
        "b": "La cantidad de café seco en la canastilla. Define tu resistencia base y tu potencial de sabor absoluto.",
        "content": "La **Dosis** es el peso del café seco colocado en la canastilla del portafiltro (p. ej., 18 gramos).\\n\\nLa dosis no es una variable flexible. Debe estar determinada por el tamaño físico de tu canastilla. Si usas una de 20g, debes usar aproximadamente 20g de café.\\n- **Sobredosificar** aplasta el café contra la ducha, causando canalización inmediata.\\n- **Subdosificar** crea demasiado espacio vacío (headspace), resultando en una pastilla aguada y una mala acumulación de presión.\\n\\nUna vez que elijas una dosis que se ajuste a tu canastilla, fíjala. No cambies la dosis para arreglar problemas de sabor; cambia el rendimiento o la molienda.",
        "points": [
          "Tamaño de la canastilla y headspace (el espacio entre la pastilla y la ducha)",
          "Por qué fijar la dosis primero simplifica drásticamente el calibrado",
          "Efecto de la dosis en la resistencia al flujo (pastilla más gruesa = más resistencia con la misma molienda)"
        ],
        "refs": [
          "Rao (2008), op. cit., Cap. sobre Dosis y Tamaño de canastilla.",
          "Pautas de la SCA sobre parámetros de espresso."
        ]
      },
      {
        "t": "Rendimiento (Salida) / Ratio de Extracción",
        "b": "El peso del espresso líquido en la taza. Esta es tu palanca principal para equilibrar acidez vs. amargor.",
        "content": "El **Rendimiento (Yield)** es el peso del espresso líquido (p. ej., 36 gramos). La relación entre Dosis y Rendimiento es el **Ratio** (p. ej., 18g de entrada y 36g de salida es un ratio de 1:2).\\n\\nEl rendimiento es tu control principal de sabor:\\n- **Corto (1:1.5 - Ristretto)**: Altamente concentrado, cuerpo pesado, pero a menudo ácido/subextraído porque el agua no tuvo tiempo de sacar los azúcares.\\n- **Estándar (1:2 - Normale)**: La línea base moderna de especialidad. Equilibra cuerpo y extracción.\\n- **Largo (1:2.5+ - Lungo)**: Cuerpo más débil, pero extracción mucho mayor. Excelente para sacar dulzor de cafés densos y de tueste claro que de otra forma sabrían ácidos.",
        "points": [
          "El ratio como multiplicador del Rendimiento de Extracción (más agua = más extracción del mismo lecho)",
          "Ratios modernos de especialidad (a menudo 1:2 a 1:2.5) vs. tradicionales italianos (cerca de 1:1.5)",
          "Por qué los tuestes claros casi siempre requieren ratios más largos para extraerse bien sin acidez extrema"
        ]
      },
      {
        "t": "El tiempo como síntoma, no como objetivo",
        "b": "El mayor error en espresso: tratar de alcanzar exactamente 25 segundos en lugar de probar el café.",
        "content": "Durante décadas, la regla de oro del espresso fue '25 a 30 segundos'. Esto es profundamente engañoso.\\n\\n**El tiempo es un síntoma de tu Dosis, Rendimiento y Molienda.** Si tienes 18g in, 36g out, y toma 20 segundos, probablemente sabrá ácido. Mueles más fino para aumentar la resistencia, lo que *causa* que el tiempo se extienda a 28 segundos, lo que sabe equilibrado.\\n\\nNo arreglaste el shot porque llegó a 28 segundos; lo arreglaste porque moler más fino aumentó la extracción. Un shot de 15 segundos en un perfil 'Turbo' puede saber increíble, y un shot de 40 segundos de un tueste claro puede ser perfecto. **Prueba el café, no persigas el reloj.**",
        "points": [
          "El tiempo como variable de salida dependiente, no como control de entrada independiente",
          "El paradigma 'Turbo Shot' (rápido, grueso, baja presión, alta extracción) rompiendo la regla de los 25 segundos",
          "Usar el tiempo puramente como verificación de consistencia (si ayer fue 28s y hoy 18s con la misma molienda, algo físico falló, como canalización)"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit. — el paper que formalizó la lógica del 'Turbo Shot'."
        ]
      }
    ]
  }
};`);
console.log("Updated E1, E2, E3");
