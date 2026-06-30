export default {
  "en": {
    "mod": "Module 3",
    "title": "The core variables: Dose, Yield, Time",
    "id": "m3",
    "desc": "The three legs of the espresso recipe stool, and why fixing one locks the others.",
    "topics": [
      {
        "t": "Dose (In)",
        "b": "The amount of dry coffee you put in the basket. It sets your baseline resistance and your absolute flavor potential.",
        "content": "**Dose** is the weight of dry coffee placed in the portafilter basket (e.g., 18 grams). \n\nDose is not a flexible variable. It should be determined by the physical size of your basket. If you use a 20g basket, you should use roughly 20g of coffee. \n- **Over-dosing** crushes the coffee against the shower screen, causing immediate channeling.\n- **Under-dosing** creates too much headspace, leading to a soupy puck and weak pressure buildup.\n\nOnce you pick a dose that fits your basket, lock it in. Do not change the dose to fix flavor issues; change the yield or grind.",
        "points": [
          "Basket sizing and headspace (the gap between puck and shower screen)",
          "Why locking dose first drastically simplifies dialing in",
          "Dose's effect on flow resistance (thicker puck = more resistance at the same grind)"
        ],
        "refs": [
          "Rao (2008), op. cit., Ch. on Dose and Basket size.",
          "SCA guidelines on espresso parameters."
        ],
        "flashcards": [
          { "q": "Why is dose described as the 'fixed foundation' of the espresso recipe?", "a": "Dose is constrained by the physical size of your basket. It determines baseline puck resistance and headspace — both non-negotiable. All flavor adjustments come from changing grind or yield around a locked dose." },
          { "q": "What happens if you over-dose an espresso basket?", "a": "The coffee is crushed against the shower screen, causing immediate channeling, uneven extraction, and a shot that tastes harsh and inconsistent." },
          { "q": "What scale precision is required for espresso dosing, and why?", "a": "**0.1g accuracy** — even a 0.5g variance changes puck resistance enough to shift shot time by several seconds, meaningfully altering extraction." }
        ]
      },
      {
        "t": "Yield (Out) / Brew Ratio",
        "b": "The weight of the liquid espresso in the cup. This is your primary lever for balancing sourness vs. bitterness.",
        "content": "**Yield** is the weight of the liquid espresso (e.g., 36 grams). The relationship between Dose and Yield is the **Brew Ratio** (e.g., 18g in, 36g out is a 1:2 ratio).\n\nYield is your primary flavor control:\n- **Short Yield (1:1.5 - Ristretto)**: Highly concentrated, heavy body, but often sour/under-extracted because the water didn't have enough time to pull out the sugars.\n- **Standard (1:2 - Normale)**: The modern specialty baseline. Balances body and extraction.\n- **Long Yield (1:2.5+ - Lungo)**: Weaker body, but much higher extraction. Excellent for pulling sweetness out of dense, lightly-roasted coffees that would otherwise taste sour.",
        "points": [
          "Ratio as a multiplier for Extraction Yield (more water pushed through = more extraction of the same bed)",
          "Modern specialty ratios (often 1:2 to 1:2.5) vs. traditional Italian ratios (often closer to 1:1.5-1:2 volume/mass approximations)",
          "Why light roasts almost always require longer ratios to extract properly without sourness"
        ],
        "flashcards": [
          { "q": "What brew ratio defines a modern specialty espresso normale?", "a": "**1:2** — e.g., 18g dry coffee in, 36g liquid espresso out. This balances body, sweetness, and extraction clarity." },
          { "q": "Why do light roasts typically require a longer yield ratio (1:2.5+) than dark roasts?", "a": "Light roasts are denser and less soluble. A longer ratio pushes more water through the puck, increasing extraction yield and pulling out sweetness that would otherwise remain locked in the bean." },
          { "q": "If your espresso tastes sour, what yield adjustment should you try first?", "a": "Increase the yield (run more liquid out) — more water = more extraction = more sugars dissolved = less perceived sourness." }
        ]
      },
      {
        "t": "Time as a symptom, not a target",
        "b": "The biggest misconception in espresso: trying to hit exactly 25 seconds instead of tasting the coffee.",
        "content": "For decades, the golden rule of espresso was '25 to 30 seconds.' This is deeply misleading.\n\n**Time is a symptom of your Dose, Yield, and Grind.** If you have 18g in, 36g out, and it takes 20 seconds, it will likely taste sour. You grind finer to increase resistance, which *causes* the time to extend to 28 seconds, which tastes balanced. \n\nYou did not fix the shot because it hit 28 seconds; you fixed it because grinding finer increased the extraction. A 15-second shot on a 'Turbo' profile might taste incredible, and a 40-second shot of a light roast might be perfect. **Taste the coffee, do not chase the clock.**",
        "points": [
          "Time as a dependent output variable, not an independent input control",
          "The 'Turbo Shot' paradigm (fast, coarse, low pressure, high extraction) breaking the 25-second rule",
          "Using time purely as a consistency check (if yesterday was 28s and today is 18s at the same grind, something physically broke like channeling)"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit. — the paper that formalized the fast/coarse 'Turbo Shot' logic."
        ],
        "flashcards": [
          { "q": "Why is the '25-30 second' espresso rule misleading?", "a": "Time is not an input you control — it's a symptom of dose, yield, and grind. A perfectly calibrated shot could run in 15 or 40 seconds depending on the recipe. What matters is flavor, not the clock." },
          { "q": "What is the Turbo Shot paradigm?", "a": "A fast, coarse-ground, low-pressure shot (often ~15 seconds) that achieves high extraction yield by bypassing traditional resistance rules — proving that time is irrelevant and flavor is the only target." },
          { "q": "If your shot was 28 seconds yesterday and 18 seconds today with identical settings, what does that indicate?", "a": "Something physically changed — likely **channeling**, a puck defect, or inconsistent dose. Time as a consistency check signals when something broke, even if you don't use it to set a target." }
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
        "content": "La **Dosis** es el peso del café seco colocado en la canastilla del portafiltro (p. ej., 18 gramos).\n\nLa dosis no es una variable flexible. Debe estar determinada por el tamaño físico de tu canastilla. Si usas una de 20g, debes usar aproximadamente 20g de café.\n- **Sobredosificar** aplasta el café contra la ducha, causando canalización inmediata.\n- **Subdosificar** crea demasiado espacio vacío (headspace), resultando en una pastilla aguada y una mala acumulación de presión.\n\nUna vez que elijas una dosis que se ajuste a tu canastilla, fíjala. No cambies la dosis para arreglar problemas de sabor; cambia el rendimiento o la molienda.",
        "points": [
          "Tamaño de la canastilla y headspace (el espacio entre la pastilla y la ducha)",
          "Por qué fijar la dosis primero simplifica drásticamente el calibrado",
          "Efecto de la dosis en la resistencia al flujo (pastilla más gruesa = más resistencia con la misma molienda)"
        ],
        "refs": [
          "Rao (2008), op. cit., Cap. sobre Dosis y Tamaño de canastilla.",
          "Pautas de la SCA sobre parámetros de espresso."
        ],
        "flashcards": [
          { "q": "¿Por qué la dosis se describe como la 'base fija' de la receta de espresso?", "a": "La dosis está limitada por el tamaño físico de tu canastilla. Determina la resistencia base de la pastilla y el headspace — ambos no negociables. Todo ajuste de sabor viene de cambiar molienda o rendimiento alrededor de una dosis fija." },
          { "q": "¿Qué ocurre si sobredosificas una canastilla de espresso?", "a": "El café se aplasta contra la ducha, causando canalización inmediata, extracción desigual y un shot que sabe áspero e inconsistente." },
          { "q": "¿Qué precisión de báscula requiere la dosis de espresso y por qué?", "a": "**Precisión de 0.1g** — incluso una variación de 0.5g cambia la resistencia de la pastilla lo suficiente para desplazar el tiempo del shot varios segundos, alterando la extracción de forma significativa." }
        ]
      },
      {
        "t": "Rendimiento (Salida) / Ratio de Extracción",
        "b": "El peso del espresso líquido en la taza. Esta es tu palanca principal para equilibrar acidez vs. amargor.",
        "content": "El **Rendimiento (Yield)** es el peso del espresso líquido (p. ej., 36 gramos). La relación entre Dosis y Rendimiento es el **Ratio** (p. ej., 18g de entrada y 36g de salida es un ratio de 1:2).\n\nEl rendimiento es tu control principal de sabor:\n- **Corto (1:1.5 - Ristretto)**: Altamente concentrado, cuerpo pesado, pero a menudo ácido/subextraído porque el agua no tuvo tiempo de sacar los azúcares.\n- **Estándar (1:2 - Normale)**: La línea base moderna de especialidad. Equilibra cuerpo y extracción.\n- **Largo (1:2.5+ - Lungo)**: Cuerpo más débil, pero extracción mucho mayor. Excelente para sacar dulzor de cafés densos y de tueste claro que de otra forma sabrían ácidos.",
        "points": [
          "El ratio como multiplicador del Rendimiento de Extracción (más agua = más extracción del mismo lecho)",
          "Ratios modernos de especialidad (a menudo 1:2 a 1:2.5) vs. tradicionales italianos (cerca de 1:1.5)",
          "Por qué los tuestes claros casi siempre requieren ratios más largos para extraerse bien sin acidez extrema"
        ],
        "flashcards": [
          { "q": "¿Qué ratio define un espresso normale moderno de especialidad?", "a": "**1:2** — p. ej., 18g de café seco y 36g de espresso líquido. Equilibra cuerpo, dulzor y claridad de extracción." },
          { "q": "¿Por qué los tuestes claros requieren ratios más largos (1:2.5+) que los oscuros?", "a": "Los tuestes claros son más densos y menos solubles. Un ratio más largo empuja más agua a través de la pastilla, aumentando el rendimiento de extracción y sacando el dulzor que de otro modo quedaría en el grano." },
          { "q": "Si tu espresso sabe ácido, ¿qué ajuste de rendimiento debes probar primero?", "a": "Aumentar el rendimiento (dejar salir más líquido) — más agua = más extracción = más azúcares disueltos = menos acidez percibida." }
        ]
      },
      {
        "t": "El tiempo como síntoma, no como objetivo",
        "b": "El mayor error en espresso: tratar de alcanzar exactamente 25 segundos en lugar de probar el café.",
        "content": "Durante décadas, la regla de oro del espresso fue '25 a 30 segundos'. Esto es profundamente engañoso.\n\n**El tiempo es un síntoma de tu Dosis, Rendimiento y Molienda.** Si tienes 18g in, 36g out, y toma 20 segundos, probablemente sabrá ácido. Mueles más fino para aumentar la resistencia, lo que *causa* que el tiempo se extienda a 28 segundos, lo que sabe equilibrado.\n\nNo arreglaste el shot porque llegó a 28 segundos; lo arreglaste porque moler más fino aumentó la extracción. Un shot de 15 segundos en un perfil 'Turbo' puede saber increíble, y un shot de 40 segundos de un tueste claro puede ser perfecto. **Prueba el café, no persigas el reloj.**",
        "points": [
          "El tiempo como variable de salida dependiente, no como control de entrada independiente",
          "El paradigma 'Turbo Shot' (rápido, grueso, baja presión, alta extracción) rompiendo la regla de los 25 segundos",
          "Usar el tiempo puramente como verificación de consistencia (si ayer fue 28s y hoy 18s con la misma molienda, algo físico falló, como canalización)"
        ],
        "refs": [
          "Cameron et al. (2020), op. cit. — el paper que formalizó la lógica del 'Turbo Shot'."
        ],
        "flashcards": [
          { "q": "¿Por qué la regla de '25-30 segundos' del espresso es engañosa?", "a": "El tiempo no es un input que controlas — es un síntoma de la dosis, rendimiento y molienda. Un shot perfectamente calibrado puede correr en 15 o 40 segundos según la receta. Lo que importa es el sabor, no el reloj." },
          { "q": "¿Qué es el paradigma del Turbo Shot?", "a": "Un shot rápido, con molienda gruesa y baja presión (típicamente ~15 segundos) que logra alto rendimiento de extracción sin reglas tradicionales de tiempo — demostrando que el tiempo es irrelevante y el sabor es el único objetivo." },
          { "q": "Si tu shot fue 28 segundos ayer y hoy 18 con los mismos ajustes, ¿qué indica?", "a": "Algo físico cambió — probablemente **canalización**, un defecto de pastilla o una dosis inconsistente. El tiempo como verificación de consistencia señala cuándo algo rompió, aunque no se use como objetivo." }
        ]
      }
    ]
  }
};
