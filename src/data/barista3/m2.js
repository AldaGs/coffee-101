export default {
  "en": {
    "mod": "Module 2",
    "title": "Advanced Extraction and Refractometry",
    "id": "m2",
    "desc": "Measuring what you taste — TDS, extraction yield, and pressure profiling.",
    "topics": [
      {
        "t": "TDS, Extraction Yield, and the Control Chart",
        "b": "Turning 'it tastes good' into two numbers you can reproduce.",
        "content": "Advanced baristas stop guessing and start measuring extraction with a **refractometer**, which reads **TDS (Total Dissolved Solids)** — the percentage of the drink that is dissolved coffee.\n\nTwo numbers define any brew:\n- **Strength (TDS):** how concentrated the drink is (espresso ~8–12%, filter ~1.2–1.5%). Controlled mainly by the brew *ratio*.\n- **Extraction Yield (EY):** what percentage of the coffee grounds' mass actually dissolved into the cup. Calculated as `EY = (beverage mass × TDS) / dry coffee dose`. Controlled by grind, time, temperature, and agitation.\n\nPlotted together on the **SCA Brewing Control Chart**, they let you locate a brew: under-extracted (sour, EY too low), over-extracted (bitter, EY too high), or in the 'Golden Cup' box (~18–22% EY). Espresso targets are typically ~18–22% EY too, but with far higher TDS. The point: you can now *reproduce* a great shot instead of chasing it by feel.",
        "points": [
          "TDS = strength (set by ratio); Extraction Yield = efficiency (set by grind/time/temp)",
          "EY = (beverage mass × TDS) / dry dose",
          "The Brewing Control Chart maps sour/bitter/ideal so brews become reproducible"
        ],
        "refs": [
          "SCA Brewing Control Chart; Lockhart, E.E. (MIT, 1950s) — original coffee-brewing research."
        ],
        "flashcards": [
          { "q": "What is the difference between TDS and Extraction Yield?", "a": "TDS (strength) is the percentage of the drink that is dissolved coffee, set mainly by the brew ratio. Extraction Yield is the percentage of the grounds' mass that dissolved into the cup, set by grind, time, temperature, and agitation." },
          { "q": "How is Extraction Yield calculated from a refractometer reading?", "a": "EY = (beverage mass × TDS%) / dry coffee dose. It converts a strength reading and the drink weight into how efficiently the grounds were extracted." },
          { "q": "What is the 'Golden Cup' extraction range, and what falls outside it?", "a": "Roughly 18–22% extraction yield. Below it the coffee is under-extracted (sour, weak); above it it's over-extracted (bitter, astringent)." }
        ]
      },
      {
        "t": "Pressure Profiling and Pre-infusion",
        "b": "Why modern machines let you change the 9-bar rule.",
        "content": "Classic espresso is defined as 9 bar of constant pressure — but that number is a 1960s-era mechanical compromise, not a law. Advanced machines (spring levers, and electronic profilers like Slayer, Decent, La Marzocco Strada) let the barista **shape pressure over time**.\n\nKey moves:\n- **Pre-infusion:** starting at low pressure (~2–4 bar) gently saturates the puck *before* full pressure. This lets the coffee swell evenly and **prevents channeling**, because water isn't blasted through a dry, unevenly-packed bed.\n- **Declining profile:** many baristas ramp up to peak pressure then let it *decline* through the shot. High pressure early drives extraction; tapering off avoids dragging out the harsh, astringent late compounds.\n- **Flow control:** newer machines control *flow rate* directly rather than pressure, which is arguably the more fundamental variable.\n\nThe advanced insight: pressure is a *curve, not a setpoint*, and pre-infusion is often the single highest-leverage upgrade for extraction evenness.",
        "points": [
          "9 bar is a historical convention, not a physical law",
          "Pre-infusion at low pressure prevents channeling by saturating the puck evenly",
          "Declining pressure profiles extract early then avoid harsh late compounds"
        ],
        "refs": [
          "Barista Hustle — <i>Advanced Espresso</i>; Decent Espresso profiling documentation."
        ],
        "flashcards": [
          { "q": "What does pre-infusion do, and why does it reduce channeling?", "a": "It saturates the puck at low pressure (~2–4 bar) before full pressure, letting the coffee swell evenly. Water isn't blasted through a dry, unevenly-packed bed, so it's less likely to carve fast channels." },
          { "q": "Why do many advanced baristas use a declining pressure profile?", "a": "High pressure early drives extraction, then tapering the pressure down avoids dragging out the harsh, astringent compounds that extract late in the shot." },
          { "q": "Is the '9 bar' espresso standard a physical law?", "a": "No — it's a mechanical convention from mid-20th-century pump design. Modern profiling machines deliberately shape pressure as a curve over time rather than holding a single setpoint." }
        ]
      },
      {
        "t": "Grind Distribution and Puck Prep",
        "b": "The frontier of espresso quality is particle uniformity.",
        "content": "At the advanced level, the biggest remaining variable is not the recipe but the **evenness of the coffee bed** — because water always flows through the path of least resistance.\n\nGrind science:\n- **Particle distribution:** all grinders produce a *range* of particle sizes. Flat burrs tend toward a tighter, more unimodal distribution (favored for clarity); conical burrs produce more 'fines'. Fines both boost extraction and clog flow.\n- **RDT (Ross Droplet Technique):** a spritz of water on the beans before grinding reduces static, so grounds don't clump or scatter — improving dose consistency.\n- **Distribution & tamping:** the goal is a level, uniformly dense puck. Tools like WDT (Weiss Distribution Technique — stirring the grounds with fine needles) break up clumps so water can't channel. A level tamp matters more than tamp *force*.\n- **Puck screens & baskets:** precision baskets with even hole patterns further smooth flow.\n\nThe advanced mantra: **you cannot out-recipe a bad puck.** Distribution and grind uniformity gate everything else.",
        "points": [
          "Water follows least resistance, so bed evenness dominates advanced quality",
          "WDT and RDT attack clumping and static to make the puck uniform",
          "A level tamp beats a hard tamp; precision baskets smooth flow further"
        ],
        "refs": [
          "Gagné, J. (2020). <i>The Physics of Filter Coffee</i>."
        ],
        "flashcards": [
          { "q": "Why is bed evenness the dominant variable in advanced espresso?", "a": "Water always flows through the path of least resistance. If the puck is unevenly dense, water channels through the loose spots, over-extracting some grounds and under-extracting others — no recipe can fix that." },
          { "q": "What do the WDT and RDT techniques each address?", "a": "WDT (stirring grounds with fine needles) breaks up clumps for an even puck; RDT (spritzing beans with water before grinding) reduces static so grounds don't clump or scatter, improving dose consistency." },
          { "q": "What matters more in tamping — force or levelness?", "a": "Levelness. An even, level tamp produces uniform flow resistance; excessive force adds little once the bed is compacted. A tilted tamp causes channeling regardless of how hard you press." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Extracción Avanzada y Refractometría",
    "id": "m2",
    "desc": "Medir lo que saboreas — TDS, rendimiento de extracción y perfilado de presión.",
    "topics": [
      {
        "t": "TDS, Rendimiento de Extracción y la Carta de Control",
        "b": "Convertir 'sabe bien' en dos números que puedes reproducir.",
        "content": "Los baristas avanzados dejan de adivinar y miden la extracción con un **refractómetro**, que lee el **TDS (Sólidos Disueltos Totales)** — el porcentaje de la bebida que es café disuelto.\n\nDos números definen cualquier brebaje:\n- **Fuerza (TDS):** qué tan concentrada está la bebida (espresso ~8–12%, filtrado ~1.2–1.5%). Controlada principalmente por la *proporción* de preparación.\n- **Rendimiento de Extracción (EY):** qué porcentaje de la masa del café molido realmente se disolvió en la taza. Se calcula como `EY = (masa de la bebida × TDS) / dosis de café seco`. Controlado por molienda, tiempo, temperatura y agitación.\n\nGraficados juntos en la **Carta de Control de Preparación de la SCA**, permiten ubicar un brebaje: sub-extraído (agrio, EY muy bajo), sobre-extraído (amargo, EY muy alto), o en la caja 'Golden Cup' (~18–22% EY). El espresso también apunta a ~18–22% EY, pero con TDS mucho mayor. El punto: ahora puedes *reproducir* un gran shot en vez de perseguirlo por instinto.",
        "points": [
          "TDS = fuerza (por proporción); Rendimiento de Extracción = eficiencia (por molienda/tiempo/temp)",
          "EY = (masa de la bebida × TDS) / dosis seca",
          "La Carta de Control mapea agrio/amargo/ideal para hacer reproducibles los brebajes"
        ],
        "refs": [
          "Carta de Control de Preparación SCA; Lockhart, E.E. (MIT, años 50) — investigación original."
        ],
        "flashcards": [
          { "q": "¿Cuál es la diferencia entre TDS y Rendimiento de Extracción?", "a": "El TDS (fuerza) es el porcentaje de la bebida que es café disuelto, fijado principalmente por la proporción. El Rendimiento de Extracción es el porcentaje de la masa del molido que se disolvió en la taza, fijado por molienda, tiempo, temperatura y agitación." },
          { "q": "¿Cómo se calcula el Rendimiento de Extracción a partir de una lectura del refractómetro?", "a": "EY = (masa de la bebida × TDS%) / dosis de café seco. Convierte una lectura de fuerza y el peso de la bebida en qué tan eficientemente se extrajo el molido." },
          { "q": "¿Cuál es el rango de extracción 'Golden Cup' y qué queda fuera de él?", "a": "Aproximadamente 18–22% de rendimiento. Por debajo el café está sub-extraído (agrio, débil); por encima está sobre-extraído (amargo, astringente)." }
        ]
      },
      {
        "t": "Perfilado de Presión y Pre-infusión",
        "b": "Por qué las máquinas modernas permiten cambiar la regla de los 9 bar.",
        "content": "El espresso clásico se define como 9 bar de presión constante — pero ese número es un compromiso mecánico de los años 60, no una ley. Las máquinas avanzadas (palancas de resorte, y perfiladores electrónicos como Slayer, Decent, La Marzocco Strada) permiten al barista **moldear la presión en el tiempo**.\n\nMovimientos clave:\n- **Pre-infusión:** comenzar a baja presión (~2–4 bar) satura suavemente la pastilla *antes* de la presión completa. Deja que el café se expanda parejo y **previene la canalización**, porque el agua no se dispara por un lecho seco y mal compactado.\n- **Perfil descendente:** muchos baristas suben al pico de presión y luego la dejan *descender* durante el shot. La presión alta temprano impulsa la extracción; bajarla evita arrastrar los compuestos ásperos y astringentes tardíos.\n- **Control de flujo:** las máquinas más nuevas controlan el *caudal* directamente en vez de la presión, que es discutiblemente la variable más fundamental.\n\nLa idea avanzada: la presión es una *curva, no un valor fijo*, y la pre-infusión suele ser la mejora de mayor impacto para la uniformidad de extracción.",
        "points": [
          "9 bar es una convención histórica, no una ley física",
          "La pre-infusión a baja presión previene la canalización saturando la pastilla parejo",
          "Los perfiles de presión descendente extraen temprano y evitan compuestos ásperos tardíos"
        ],
        "refs": [
          "Barista Hustle — <i>Advanced Espresso</i>; documentación de perfilado de Decent Espresso."
        ],
        "flashcards": [
          { "q": "¿Qué hace la pre-infusión y por qué reduce la canalización?", "a": "Satura la pastilla a baja presión (~2–4 bar) antes de la presión completa, dejando que el café se expanda parejo. El agua no se dispara por un lecho seco y mal compactado, así que es menos probable que abra canales rápidos." },
          { "q": "¿Por qué muchos baristas avanzados usan un perfil de presión descendente?", "a": "La presión alta temprano impulsa la extracción, y luego bajarla evita arrastrar los compuestos ásperos y astringentes que se extraen al final del shot." },
          { "q": "¿El estándar de espresso de '9 bar' es una ley física?", "a": "No — es una convención mecánica del diseño de bombas de mediados del siglo XX. Las máquinas de perfilado modernas moldean deliberadamente la presión como una curva en el tiempo en vez de mantener un valor fijo." }
        ]
      },
      {
        "t": "Distribución de Molienda y Preparación de la Pastilla",
        "b": "La frontera de la calidad del espresso es la uniformidad de partícula.",
        "content": "A nivel avanzado, la mayor variable restante no es la receta sino la **uniformidad del lecho de café** — porque el agua siempre fluye por el camino de menor resistencia.\n\nCiencia de la molienda:\n- **Distribución de partícula:** todo molino produce un *rango* de tamaños. Las muelas planas tienden a una distribución más estrecha y unimodal (preferida por la claridad); las cónicas producen más 'finos'. Los finos aumentan la extracción y atascan el flujo.\n- **RDT (Técnica de la Gota de Ross):** un rocío de agua sobre los granos antes de moler reduce la estática, para que el molido no se apelmace ni se disperse — mejorando la consistencia de dosis.\n- **Distribución y tampeo:** la meta es una pastilla nivelada y de densidad uniforme. Herramientas como WDT (remover el molido con agujas finas) rompen grumos para que el agua no canalice. Un tamp nivelado importa más que la *fuerza* del tamp.\n- **Mallas y canastillas:** canastillas de precisión con patrones de orificios parejos suavizan aún más el flujo.\n\nEl mantra avanzado: **no puedes superar con receta una mala pastilla.** La distribución y uniformidad de molienda condicionan todo lo demás.",
        "points": [
          "El agua sigue la menor resistencia, así que la uniformidad del lecho domina la calidad avanzada",
          "WDT y RDT atacan el apelmazamiento y la estática para uniformar la pastilla",
          "Un tamp nivelado gana a un tamp fuerte; las canastillas de precisión suavizan el flujo"
        ],
        "refs": [
          "Gagné, J. (2020). <i>The Physics of Filter Coffee</i>."
        ],
        "flashcards": [
          { "q": "¿Por qué la uniformidad del lecho es la variable dominante en el espresso avanzado?", "a": "El agua siempre fluye por el camino de menor resistencia. Si la pastilla tiene densidad despareja, el agua canaliza por los puntos flojos, sobre-extrayendo unos granos y sub-extrayendo otros — ninguna receta arregla eso." },
          { "q": "¿Qué atacan las técnicas WDT y RDT respectivamente?", "a": "WDT (remover el molido con agujas finas) rompe grumos para una pastilla pareja; RDT (rociar los granos con agua antes de moler) reduce la estática para que el molido no se apelmace ni disperse, mejorando la consistencia de dosis." },
          { "q": "¿Qué importa más al tampear — la fuerza o la nivelación?", "a": "La nivelación. Un tamp parejo y nivelado produce resistencia de flujo uniforme; la fuerza excesiva aporta poco una vez compactado el lecho. Un tamp inclinado causa canalización sin importar cuán fuerte presiones." }
        ]
      }
    ]
  }
};
