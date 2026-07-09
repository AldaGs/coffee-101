export const espresso2Data = {
  en: [
    {
      "mod": "Module 1",
      "title": "Puck Resistance and Saturation",
      "id": "m1",
      "desc": "How water enters the puck and why it channels.",
      "topics": [
        {
          "t": "Pre-infusion Physics",
          "b": "Wetting the puck before hitting it with 9 bars of pressure.",
          "content": "A dry puck of finely ground coffee is incredibly brittle and hydrophobic. If you instantly hit it with 9 bars (~130 PSI) of pressure, the water will violently fracture the bed, creating channels. \n\n**Pre-infusion** solves this by gently introducing water at low pressure (e.g., line pressure at 2-3 bars) until the puck is fully saturated. As coffee absorbs water, it swells. This swelling fills in micro-fissures and creates a uniform, monolithic puck that can gracefully withstand the incoming high pressure.\n\nWithout pre-infusion, you must grind coarser to prevent channeling. With pre-infusion, you can grind significantly finer, pushing your extraction yield higher.",
          "points": [
            "Dry coffee is brittle; wet coffee is pliable",
            "Pre-infusion swells the grounds, sealing micro-fissures",
            "Allows for finer grinding and higher extraction yields"
          ],
          "flashcards": [
            { "q": "What happens physically to coffee grounds during pre-infusion?", "a": "They absorb water and swell, which seals micro-fissures in the puck and makes it pliable enough to withstand high pressure without fracturing." },
            { "q": "How does pre-infusion affect your grind size setting?", "a": "It allows you to grind significantly finer without causing channeling, thereby pushing extraction yields higher." }
          ]
        },
        {
          "t": "Puck Resistance Dynamics",
          "b": "The puck is not a static object; it degrades over time.",
          "content": "During an espresso shot, the puck acts as a resistor to the water flow. However, its resistance is not constant.\n\n**The Three Phases of Resistance:**\n1. **Increasing Resistance:** As water fills the void space during pre-infusion, the coffee swells and restricts flow.\n2. **Peak Resistance:** When the pump engages full pressure, the puck is compressed to its maximum density. Flow rate is slow.\n3. **Decreasing Resistance (Degradation):** As the shot progresses, up to 20-25% of the puck's mass is dissolved into the cup. The puck literally loses physical mass, becoming more porous. Water flow speeds up drastically towards the end of the shot.\n\nThis is why the end of a shot flows fast and blonde. The puck is eroding.",
          "points": [
            "Puck resistance peaks at the start of full pressure",
            "Resistance decreases as the shot progresses because mass is dissolving",
            "The flow rate naturally accelerates towards the end"
          ],
          "flashcards": [
            { "q": "Why does the flow rate of an espresso shot naturally accelerate towards the end of the extraction?", "a": "Because up to 25% of the coffee's mass dissolves into the liquid. As the puck loses physical mass, it becomes more porous and offers less resistance." },
            { "q": "When does the coffee puck offer the highest resistance to water flow?", "a": "Right after it is fully saturated and the pump engages full pressure, compressing the swollen grounds to their maximum density." }
          ]
        }
      ]
    },
    {
      "mod": "Module 2",
      "title": "Machine Mechanics: Pumps",
      "id": "m2",
      "desc": "How your machine generates pressure.",
      "topics": [
        {
          "t": "Vibratory vs. Rotary vs. Gear Pumps",
          "b": "Not all 9 bars are created equal.",
          "content": "The way pressure is delivered affects puck integrity.\n\n**Vibratory Pumps (Ulka):** Common in home machines. They use an oscillating piston. They ramp up to full pressure slowly (which acts as a pseudo pre-infusion) but are noisy and have shorter lifespans.\n\n**Rotary Vane Pumps:** Standard in commercial machines. They use a spinning impeller. They are silent, durable, and hit 9 bars almost instantly. Because the pressure delivery is so sudden and violent, commercial machines *must* have built-in pre-infusion or flow restrictors (gicleurs) to prevent destroying the puck.\n\n**Gear Pumps:** Found in high-end profiling machines (like the La Marzocco Strada). A computer controls the speed of magnetic gears, allowing the barista to smoothly modulate pressure up and down throughout the shot.",
          "points": [
            "Vibratory: Slow ramp up, common in home gear",
            "Rotary: Instant pressure, commercial standard, requires restrictors",
            "Gear: Variable speed, allows for pressure profiling"
          ],
          "flashcards": [
            { "q": "Why do commercial machines with rotary pumps require flow restrictors or pre-infusion?", "a": "Because rotary pumps hit 9 bars almost instantly. This sudden, violent pressure would fracture the dry puck without a restrictor softening the impact." },
            { "q": "What is the defining feature of a gear pump in an espresso machine?", "a": "Its speed can be modulated electronically mid-shot, allowing the barista to create custom pressure profiles." }
          ]
        }
      ]
    }
  ],
  es: [
    {
      "mod": "Módulo 1",
      "title": "Resistencia y Saturación de la Pastilla",
      "id": "m1",
      "desc": "Cómo el agua entra a la pastilla de café y por qué se canaliza.",
      "topics": [
        {
          "t": "Física de la Pre-infusión",
          "b": "Mojar la pastilla antes de golpearla con 9 bares de presión.",
          "content": "Una pastilla seca de café finamente molido es increíblemente frágil e hidrofóbica. Si la golpeas instantáneamente con 9 bares (~130 PSI) de presión, el agua fracturará violentamente la cama, creando canales.\n\n**La Pre-infusión** resuelve esto introduciendo agua suavemente a baja presión (ej. presión de línea a 2-3 bares) hasta que la pastilla esté totalmente saturada. A medida que el café absorbe agua, se hincha. Este hinchazón sella micro-fisuras y crea una pastilla uniforme y monolítica que puede soportar con gracia la alta presión entrante.\n\nSin pre-infusión, debes moler más grueso para evitar canalización. Con pre-infusión, puedes moler significativamente más fino, empujando tu rendimiento de extracción más alto.",
          "points": [
            "El café seco es frágil; el café húmedo es maleable",
            "La pre-infusión hincha el café, sellando micro-fisuras",
            "Permite moliendas más finas y mayores rendimientos"
          ],
          "flashcards": [
            { "q": "¿Qué le sucede físicamente al café molido durante la pre-infusión?", "a": "Absorbe agua y se hincha, lo que sella micro-fisuras en la pastilla y la hace lo suficientemente maleable para soportar alta presión sin fracturarse." },
            { "q": "¿Cómo afecta la pre-infusión a tu ajuste de molienda?", "a": "Te permite moler significativamente más fino sin causar canalización, elevando así los rendimientos de extracción." }
          ]
        },
        {
          "t": "Dinámica de la Resistencia",
          "b": "La pastilla no es estática; se degrada con el tiempo.",
          "content": "Durante un shot de espresso, la pastilla actúa como un resistor al flujo de agua. Sin embargo, su resistencia no es constante.\n\n**Las Tres Fases:**\n1. **Resistencia Creciente:** A medida que el agua llena los vacíos en la pre-infusión, el café se hincha y restringe el flujo.\n2. **Resistencia Máxima:** Cuando la bomba aplica presión total, la pastilla se comprime a su máxima densidad. El flujo es lento.\n3. **Resistencia Decreciente (Degradación):** A medida que avanza el shot, hasta el 25% de la masa de la pastilla se disuelve en la taza. La pastilla literalmente pierde masa física, volviéndose más porosa. El flujo se acelera drásticamente al final del shot.\n\nEs por esto que el final de un shot fluye rápido y rubio. La pastilla se está erosionando.",
          "points": [
            "La resistencia de la pastilla llega a su pico al inicio de la presión total",
            "La resistencia disminuye porque la masa se está disolviendo",
            "El flujo se acelera naturalmente hacia el final"
          ],
          "flashcards": [
            { "q": "¿Por qué el flujo de un shot de espresso se acelera naturalmente hacia el final de la extracción?", "a": "Porque hasta el 25% de la masa del café se disuelve en el líquido. Al perder masa física, se vuelve más porosa y ofrece menos resistencia." },
            { "q": "¿Cuándo ofrece la pastilla la mayor resistencia al flujo de agua?", "a": "Justo después de estar totalmente saturada y la bomba aplica presión total, comprimiendo el café hinchado a su máxima densidad." }
          ]
        }
      ]
    },
    {
      "mod": "Módulo 2",
      "title": "Mecánica: Bombas",
      "id": "m2",
      "desc": "Cómo tu máquina genera presión.",
      "topics": [
        {
          "t": "Bombas Vibratorias vs. Rotativas vs. Engranajes",
          "b": "No todos los 9 bares se crean igual.",
          "content": "La forma en que se entrega la presión afecta la integridad de la pastilla.\n\n**Bombas Vibratorias (Ulka):** Comunes en casa. Usan un pistón oscilante. Aumentan a presión total lentamente (actuando como pseudo pre-infusión) pero son ruidosas y de menor vida útil.\n\n**Bombas Rotativas (Paletas):** Estándar comercial. Usan un impulsor giratorio. Son silenciosas y alcanzan 9 bares casi al instante. Debido a que la presión es repentina y violenta, las comerciales *deben* tener pre-infusión o restrictores de flujo (gicleurs) para evitar destruir la pastilla.\n\n**Bombas de Engranajes:** En máquinas de perfilado de alta gama (como La Marzocco Strada). Una computadora controla la velocidad, permitiendo modular la presión arriba y abajo durante el shot.",
          "points": [
            "Vibratoria: Rampa lenta, común en casa",
            "Rotativa: Presión instantánea, estándar comercial, requiere restrictores",
            "Engranajes: Velocidad variable, permite perfilado de presión"
          ],
          "flashcards": [
            { "q": "¿Por qué las máquinas comerciales con bombas rotativas requieren restrictores de flujo o pre-infusión?", "a": "Porque las bombas rotativas alcanzan 9 bares casi al instante. Esta presión violenta fracturaría la pastilla seca sin un restrictor que suavice el impacto." },
            { "q": "¿Cuál es la característica definitoria de una bomba de engranajes en una máquina de espresso?", "a": "Su velocidad puede ser modulada electrónicamente en medio del shot, permitiendo crear perfiles de presión personalizados." }
          ]
        }
      ]
    }
  ]
};
