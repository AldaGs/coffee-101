export default {
  "en": {
    "mod": "Module 2",
    "title": "Thermocouple science and probe calibration",
    "id": "m2",
    "desc": "Your roasting software is only as accurate as the sensors feeding it. Understanding probe physics, drift, and the ET–BT delta as a diagnostic tool.",
    "topics": [
      {
        "t": "Thermocouple types and response time",
        "b": "A K-type and a J-type probe in the same machine will give you different numbers. Neither is 'wrong.'",
        "content": "A **[thermocouple](https://en.wikipedia.org/wiki/Thermocouple)** works by the Seebeck effect: two different metals joined at a tip produce a voltage proportional to temperature. The voltage is measured and converted to a temperature reading by your software.\n\n**Types commonly used in roasters:**\n- **K-type** (Chromel/Alumel): The industry standard. Accurate from -200°C to 1,260°C, cheap, widely available. Artisan and Cropster assume K-type by default.\n- **J-type** (Iron/Constantan): Slightly different voltage curve, accurate from -40°C to 750°C. If someone accidentally configures Artisan as K-type while using a J-type probe, their 200°C reading will actually be ~215°C.\n\n**Response time (time constant, τ):**\nA thermocouple does not read temperature instantly. It has a **time constant (τ)** — the time it takes to reach 63.2% of a step change in temperature. A probe with τ = 5 seconds in a turbulent airstream will 'lag' behind the actual bean temperature, making your BT readings approximately 5 seconds behind reality.\n\nThis lag is why your Artisan software applies a **smoothing algorithm** to the RoR curve — the raw signal is too noisy and too delayed to act on without filtering.",
        "points": [
          "K-type probes are the standard; using a J-type while software expects K-type introduces a systematic offset",
          "Time constant (τ) describes probe response lag — probes with small bead diameters respond faster",
          "All BT readings are slightly delayed — your 'bean temperature' is actually 5–15 seconds in the past",
          "Probe diameter affects both response time and durability (thin probes are fast but fragile)"
        ],
        "refs": [
          "Omega Engineering. <i>The Thermocouple Reference Guide</i>. — the definitive technical resource on thermocouple types.",
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Ch 2: Instrumentation."
        ],
        "flashcards": [
          { "q": "What physical phenomenon do thermocouples exploit to measure temperature?", "a": "The **Seebeck effect** — when two dissimilar metals are joined at a tip and there is a temperature difference between the junction and the reference end, they generate a small voltage proportional to the temperature. The voltage is converted to a temperature reading." },
          { "q": "A roaster switches from a K-type to a J-type probe without changing the Artisan configuration. What happens to their temperature readings?", "a": "K-type and J-type have different voltage-temperature curves. If Artisan is still set to K-type but reading a J-type probe, the software will **misinterpret the voltage**, producing systematically incorrect temperature readings (typically ~15°C higher than actual at roasting temperatures)." },
          { "q": "What is the 'time constant' (τ) of a thermocouple, and why does it matter in roasting?", "a": "τ is the time for the probe to reach **63.2% of a step temperature change** — a measure of response lag. In roasting, it means your BT reading is always slightly behind reality. Probes with large bead mass have high τ (slow), thin-bead probes have low τ (fast). All RoR software must account for this lag." }
        ]
      },
      {
        "t": "Probe placement and calibration drift",
        "b": "Where you put the probe in the drum changes everything you read.",
        "content": "In a drum roaster, you typically have two probes:\n1. **BT (Bean Temperature) probe**: Submerged in the tumbling bean mass. In most machines, this is positioned in the 'lower third' of the drum, in the path the beans tumble through.\n2. **ET (Environmental Temperature) probe**: In the airstream, measuring the temperature of the air *entering* the drum. In some machines, it measures the air *exiting* the drum (measuring exhaust temperature).\n\n**Placement problems:**\n- If the BT probe is too shallow (barely in the bean mass), it reads closer to ET and overestimates bean temperature.\n- If the BT probe is too deep (touching the drum wall on one side), it will read conductive heat from the drum itself during the early roast.\n- The **exact same physical probe position** produces **different numbers** depending on bean mass. A 3kg batch barely covers the probe; a 10kg batch deeply buries it.\n\n**Calibration drift:**\nThermocouples change their voltage-temperature relationship over time, especially after thousands of hours of high-temperature exposure. This is called **drift**. An un-calibrated probe used for a year may read 8°C lower than it should. \n\nCalibrate quarterly using boiling water (100°C at sea level — adjust for altitude), or use a certified NIST-traceable calibration bath.",
        "points": [
          "BT probe depth in the bean mass changes the reading — shallow = closer to ET, deep = more accurate bean mass temp",
          "ET probe location (inlet vs exhaust) fundamentally changes what the ET number means",
          "Probe readings change with batch size — the same probe position 'sees' different things at different fill levels",
          "Thermocouple drift (signal decay over time) requires quarterly calibration",
          "Boiling water calibration is a simple field check (100°C at sea level, ~99°C per 300m altitude gain)"
        ],
        "refs": [
          "Artisan Roasting Software Documentation. — covers probe setup, calibration offsets, and TC type configuration.",
          "Rao (2014), op. cit."
        ],
        "flashcards": [
          { "q": "A roaster notices their BT is reading 10°C higher on a 3kg batch than a 10kg batch, even with the same gas setting. Why might this happen?", "a": "With a 3kg batch, the probe is barely submerged in the bean mass and is reading significant **convective heat from the airstream** (closer to ET). The 10kg batch buries the probe deep in the bean mass, which is cooler and more accurately represents the bean temperature." },
          { "q": "What is thermocouple 'drift' and how should roasters address it?", "a": "Drift is the gradual change in a thermocouple's voltage-temperature curve from **oxidation and grain boundary changes** at high temperatures over thousands of hours. It causes systematic reading offsets. Roasters should calibrate quarterly by checking against a known reference (e.g., boiling water at a known altitude)." },
          { "q": "Two roasters both use Artisan, but one has the ET probe at the drum air inlet and the other at the exhaust outlet. Do their ET readings mean the same thing?", "a": "No. **Inlet ET** measures the heat available to the beans (how much energy the burner is providing). **Exhaust ET** measures what's left after the beans have absorbed heat — it tracks heat extraction efficiency. They tell fundamentally different stories and cannot be directly compared." }
        ]
      },
      {
        "t": "The ET–BT delta as a roast diagnostic",
        "b": "The gap between environmental and bean temperature is one of the most powerful and underused numbers in roasting.",
        "content": "The **ET–BT Delta (ΔT)** is simply the difference between the Environmental Temperature probe and the Bean Temperature probe at any moment.\n\n**What it tells you:**\n- A **large ΔT** (ET much hotter than BT) means the machine has a large surplus of heat energy available. The beans are absorbing energy rapidly. This typically occurs early in the roast (high gas, cold beans).\n- A **small ΔT** (ET close to BT) means the machine and beans are thermally equilibrated — the machine is barely providing more energy than the beans are absorbing. A shrinking ΔT signals the roast is approaching completion or is stalling.\n- A **negative ΔT** (BT > ET) is physically meaningful: it signals an **exothermic event** — the beans are generating their own heat (First Crack is exothermic). ET will be lower than BT because the beans are momentarily producing more heat than the drum is receiving.\n\n**Practical use:**\n1. **Tracking gas reduction**: After cutting the gas, ET will drop faster than BT (due to thermal momentum in the bean mass). Watching the ΔT narrow tells you when the 'cut' has fully propagated through the system.\n2. **First Crack detection**: When ΔT crosses zero (BT surpasses ET), First Crack is either occurring or imminent.\n3. **Diagnosing probe problems**: An ET that is implausibly low or high at a known gas setting is a sign of probe drift or misplacement.",
        "points": [
          "ΔT = ET minus BT at any point in the roast",
          "Large positive ΔT: machine has heat surplus, beans absorbing aggressively (early roast)",
          "Small ΔT: system is equilibrating — a sign of approaching drop or stall",
          "Negative ΔT: beans are generating heat (exothermic First Crack signature)",
          "ΔT is a leading indicator of gas cut propagation and First Crack onset"
        ],
        "refs": [
          "Hoos, R. (2015). <i>Modulating the Flavor Profile of Coffee</i>. — covers ET/BT relationships extensively.",
          "Rao (2014), op. cit."
        ],
        "flashcards": [
          { "q": "What does a large ET–BT delta (e.g., ET = 250°C, BT = 150°C) indicate about the state of the roast?", "a": "The machine has a **large heat surplus** — it is providing significantly more energy than the beans currently hold. This is typical of the early drying phase with high gas. The beans are absorbing energy aggressively but haven't had time to heat up yet." },
          { "q": "What is physically happening when the ET–BT delta goes negative (BT exceeds ET)?", "a": "An **exothermic event** is occurring — the beans are generating more heat than the environment is providing. In roasting, this is the signature of **First Crack**: the exothermic fracture of the cellulose matrix releases energy, briefly making the bean mass hotter than the surrounding air." },
          { "q": "A roaster cuts the gas at minute 7, but the RoR continues rising for 45 seconds before falling. How does ET–BT delta explain this delay?", "a": "The gas cut causes ET to drop almost immediately, but the **bean mass has thermal momentum** — it continues absorbing stored heat from the drum walls and surrounding air for 30–60 seconds before the BT response catches up. The narrowing ΔT reflects this propagation delay." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Ciencia de termopares y calibración de sondas",
    "id": "m2",
    "desc": "Tu software de tueste es tan preciso como los sensores que lo alimentan. Física de las sondas, deriva y el delta ET–BT como herramienta de diagnóstico.",
    "topics": [
      {
        "t": "Tipos de termopares y tiempo de respuesta",
        "b": "Una sonda tipo K y una tipo J en la misma máquina te darán números distintos. Ninguna está 'equivocada'.",
        "content": "Un **[termopar](https://es.wikipedia.org/wiki/Termopar)** funciona por el efecto Seebeck: dos metales distintos unidos en una punta producen un voltaje proporcional a la temperatura. El software lo convierte en una lectura de temperatura.\n\n**Tipos comunes en tostadores:**\n- **Tipo K** (Chromel/Alumel): El estándar de la industria. Preciso de -200°C a 1,260°C. Artisan y Cropster asumen tipo K por defecto.\n- **Tipo J** (Hierro/Constantan): Curva voltaje-temperatura ligeramente diferente. Si alguien configura Artisan como tipo K usando una sonda tipo J, su lectura de 200°C en realidad será ~215°C.\n\n**Tiempo de respuesta (constante de tiempo, τ):**\nUn termopar no lee temperatura al instante. Tiene una **constante de tiempo (τ)** — el tiempo para alcanzar el 63.2% de un cambio de temperatura. Una sonda con τ = 5 segundos 'rezagará' la temperatura real del grano unos 5 segundos.\n\nEste rezago es por qué Artisan aplica un **algoritmo de suavizado** a la curva RoR — la señal cruda es demasiado ruidosa y rezagada para actuar sin filtrado.",
        "points": [
          "Las sondas tipo K son el estándar; usar tipo J cuando el software espera tipo K introduce un offset sistemático",
          "La constante de tiempo (τ) describe el rezago de respuesta — sondas con perlas pequeñas responden más rápido",
          "Todas las lecturas de BT están ligeramente rezagadas — tu 'temperatura del grano' es de 5–15 segundos atrás",
          "El diámetro de la sonda afecta tanto el tiempo de respuesta como la durabilidad"
        ],
        "refs": [
          "Omega Engineering. <i>The Thermocouple Reference Guide</i>.",
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Cap 2: Instrumentación."
        ],
        "flashcards": [
          { "q": "¿Qué fenómeno físico explotan los termopares para medir temperatura?", "a": "El **efecto Seebeck** — cuando dos metales distintos se unen en una punta y hay una diferencia de temperatura entre la unión y el extremo de referencia, generan un pequeño voltaje proporcional a la temperatura." },
          { "q": "Un tostador cambia de una sonda tipo K a tipo J sin cambiar la configuración de Artisan. ¿Qué pasa con sus lecturas?", "a": "Si Artisan sigue configurado para tipo K pero lee una sonda tipo J, el software **interpretará erróneamente el voltaje**, produciendo lecturas sistemáticamente incorrectas (típicamente ~15°C más altas de lo real a temperaturas de tueste)." },
          { "q": "¿Qué es la 'constante de tiempo' (τ) de un termopar y por qué importa en el tueste?", "a": "τ es el tiempo para que la sonda alcance el **63.2% de un cambio de temperatura instantáneo** — una medida del rezago de respuesta. En el tueste, significa que tu lectura de BT siempre está ligeramente por detrás de la realidad. Las sondas de bead grande tienen τ alto (lentas), las de bead fino τ bajo (rápidas)." }
        ]
      },
      {
        "t": "Posicionamiento de sonda y deriva de calibración",
        "b": "Dónde colocas la sonda en el tambor cambia todo lo que lees.",
        "content": "En un tostador de tambor, típicamente tienes dos sondas:\n1. **Sonda BT (Temperatura del Grano)**: Sumergida en la masa de granos. En la mayoría de máquinas se posiciona en el 'tercio inferior' del tambor.\n2. **Sonda ET (Temperatura Ambiental)**: En el flujo de aire, midiendo la temperatura del aire que *entra* al tambor. En algunas máquinas mide el aire que *sale* (temperatura de escape).\n\n**Problemas de posicionamiento:**\n- Si la sonda BT está muy superficial, lee más cercano a ET y sobreestima la temperatura del grano.\n- Si la sonda BT está demasiado profunda (tocando la pared del tambor), leerá el calor de conducción del tambor.\n- La **misma posición física** produce **números diferentes** según la masa del lote.\n\n**Deriva de calibración:**\nLos termopares cambian su relación voltaje-temperatura con el tiempo, especialmente tras miles de horas a alta temperatura. Esto se llama **deriva**. Calibrar trimestralmente usando agua hirviendo (100°C a nivel del mar).",
        "points": [
          "La profundidad de la sonda BT en la masa de granos cambia la lectura",
          "La ubicación de la sonda ET (entrada vs. salida) cambia fundamentalmente lo que significa el número",
          "Las lecturas cambian con el tamaño del lote — la misma posición 've' cosas distintas",
          "La deriva del termopar requiere calibración trimestral",
          "La calibración con agua hirviendo es una verificación de campo simple"
        ],
        "refs": [
          "Documentación de Artisan Roasting Software.",
          "Rao (2014), op. cit."
        ],
        "flashcards": [
          { "q": "Un tostador nota que su BT lee 10°C más en un lote de 3kg que en uno de 10kg, con el mismo ajuste de gas. ¿Por qué?", "a": "Con un lote de 3kg, la sonda apenas está sumergida en la masa de granos y lee calor **convectivo del flujo de aire** (más cercano a ET). El lote de 10kg entierra la sonda profundamente en la masa, que es más fría y representa con más precisión la temperatura del grano." },
          { "q": "¿Qué es la 'deriva' del termopar y cómo deben abordarla los tostadores?", "a": "La deriva es el cambio gradual en la curva voltaje-temperatura por **oxidación y cambios en los bordes de grano** a altas temperaturas. Causa offsets sistemáticos en las lecturas. Los tostadores deben calibrar trimestralmente verificando contra una referencia conocida (ej. agua hirviendo a una altitud conocida)." },
          { "q": "Dos tostadores usan Artisan, pero uno tiene la sonda ET en la entrada de aire del tambor y el otro en la salida. ¿Sus lecturas de ET significan lo mismo?", "a": "No. La **ET de entrada** mide el calor disponible para los granos. La **ET de salida** mide lo que queda después de que los granos han absorbido calor — rastrea la eficiencia de extracción de calor. Cuentan historias fundamentalmente distintas y no son comparables directamente." }
        ]
      },
      {
        "t": "El delta ET–BT como diagnóstico de tueste",
        "b": "La brecha entre temperatura ambiental y del grano es uno de los números más poderosos y subutilizados en el tueste.",
        "content": "El **Delta ET–BT (ΔT)** es simplemente la diferencia entre la sonda de Temperatura Ambiental y la Temperatura del Grano en cualquier momento.\n\n**Qué te dice:**\n- Un **ΔT grande** (ET mucho más caliente que BT) significa que la máquina tiene un gran excedente de energía. El grano absorbe energía rápidamente. Típico del inicio del tueste.\n- Un **ΔT pequeño** (ET cercana a BT) significa que la máquina y los granos están en equilibrio térmico. Un ΔT que se achica señala que el tueste está cerca de completarse o se está estancando.\n- Un **ΔT negativo** (BT > ET) es físicamente significativo: señala un **evento exotérmico** — los granos están generando su propio calor (el Primer Crack es exotérmico).\n\n**Uso práctico:**\n1. **Rastrear reducción de gas**: Después de cortar el gas, ET cae más rápido que BT. Observar cómo el ΔT se achica te dice cuándo el 'corte' ha propagado completamente.\n2. **Detección del Primer Crack**: Cuando ΔT cruza cero (BT supera ET), el Primer Crack está ocurriendo o es inminente.\n3. **Diagnóstico de problemas de sonda**: Una ET implausiblemente baja o alta es signo de deriva o mala colocación.",
        "points": [
          "ΔT = ET menos BT en cualquier punto del tueste",
          "ΔT positivo grande: la máquina tiene excedente de calor, los granos absorben agresivamente",
          "ΔT pequeño: el sistema está en equilibrio — señal de acercarse al drop o estancamiento",
          "ΔT negativo: los granos generan calor (firma exotérmica del Primer Crack)",
          "ΔT es un indicador adelantado de la propagación del corte de gas y del inicio del Primer Crack"
        ],
        "refs": [
          "Hoos, R. (2015). <i>Modulating the Flavor Profile of Coffee</i>.",
          "Rao (2014), op. cit."
        ],
        "flashcards": [
          { "q": "¿Qué indica un delta ET–BT grande (ej. ET=250°C, BT=150°C) sobre el estado del tueste?", "a": "La máquina tiene un **gran excedente de calor** — está proporcionando significativamente más energía de la que los granos actualmente tienen. Esto es típico de la fase de secado temprana con gas alto. Los granos absorben energía agresivamente pero no han tenido tiempo de calentarse aún." },
          { "q": "¿Qué está sucediendo físicamente cuando el delta ET–BT se vuelve negativo (BT supera ET)?", "a": "Ocurre un **evento exotérmico** — los granos generan más calor del que el ambiente está proporcionando. En el tueste, esta es la firma del **Primer Crack**: la fractura exotérmica de la matriz de celulosa libera energía, haciendo que la masa de granos sea brevemente más caliente que el aire circundante." },
          { "q": "Un tostador corta el gas en el minuto 7, pero el RoR continúa subiendo 45 segundos antes de caer. ¿Cómo explica el delta ET–BT este retraso?", "a": "El corte de gas hace que ET caiga casi inmediatamente, pero la **masa de granos tiene momento térmico** — continúa absorbiendo el calor almacenado de las paredes del tambor durante 30–60 segundos antes de que la respuesta del BT se ponga al día. El ΔT que se achica refleja este retraso de propagación." }
        ]
      }
    ]
  }
};
