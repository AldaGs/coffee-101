export default {
  "en": {
    "mod": "Module 3",
    "title": "Drum engineering and airflow dynamics",
    "id": "m3",
    "desc": "The mechanical physics of the drum roaster — how drum geometry, RPM, and fill ratio determine roast uniformity, and why hybrid machines blur the line.",
    "topics": [
      {
        "t": "Drum RPM, centrifugal force, and bean tumbling",
        "b": "Too slow and beans roll. Too fast and they stick to the wall. The sweet spot is a physics problem.",
        "content": "In a drum roaster, the drum rotation is responsible for keeping the beans in constant motion. This motion ensures even exposure to the drum wall (conductive heat) and the airstream (convective heat).\n\nThe key variable is the **[critical speed](https://en.wikipedia.org/wiki/Critical_speed)** — the RPM at which centrifugal force equals gravity, causing beans to 'stick' to the drum wall and stop tumbling:\n\n**Critical RPM ≈ 42.3 / √(drum diameter in meters)**\n\nFor a 30cm diameter drum: Critical RPM ≈ 42.3 / √0.3 ≈ **77 RPM**.\nIf you run the drum above ~70% of this critical speed, beans start to centrifuge rather than tumble freely.\n\n**Practical drum speeds:**\n- **Slow drums (30–45 RPM)**: Beans spend more time in contact with the hot drum wall. Higher conduction component, more Maillard development, better for dense beans that need aggressive early heat.\n- **Fast drums (50–65 RPM)**: Beans become 'airborne' in the tumbling mass more frequently. More convective exposure, more even temperature gradient through the bean, better for light roasts where surface scorching is a risk.\n\nVariable-speed drum motors (uncommon but available on premium machines) allow the roaster to change the tumbling dynamics mid-roast.",
        "points": [
          "Critical RPM formula: 42.3 / √(drum diameter in meters)",
          "Running above ~70% of critical speed causes beans to centrifuge instead of tumble",
          "Slow drums favor conduction; fast drums favor convection",
          "Variable-speed drum motors are a premium feature allowing mid-roast dynamics adjustment"
        ],
        "refs": [
          "Illy, A. & Viani, R. (eds). (2005). <i>Espresso Coffee: The Science of Quality</i>. Elsevier. — Ch 6: Roasting.",
          "Schwartzberg, H.G. (2002). 'Batch Coffee Roasting.' <i>Drying Technology</i>."
        ],
        "flashcards": [
          { "q": "What is the 'critical speed' of a roasting drum, and what happens if you exceed it?", "a": "The RPM at which **centrifugal force equals gravity** — above it, beans are pinned against the drum wall by centripetal acceleration and stop tumbling. This causes extreme, uneven conductive heating (scorching) and eliminates the convective exposure from tumbling." },
          { "q": "How does drum RPM influence the conduction vs. convection balance in a drum roaster?", "a": "Lower RPMs → beans spend more time in contact with the drum wall → **more conduction**. Higher RPMs → beans become airborne in the tumbling mass more often → **more convection**. This is why roasters increasing RPM typically need to compensate with higher gas to maintain the same heat input." },
          { "q": "A roaster has a 40cm diameter drum. What is the approximate critical RPM, and what speed should they avoid approaching?", "a": "Critical RPM ≈ 42.3 / √0.4 ≈ **67 RPM**. They should avoid running above ~70% of this, or about **47 RPM**, where beans begin to centrifuge against the drum wall rather than tumble freely." }
        ]
      },
      {
        "t": "Drum fill ratio and chaff dynamics",
        "b": "How much coffee you load determines not just the thermal load — it determines whether your machine can breathe.",
        "content": "The **fill ratio** (batch weight as a percentage of machine's stated capacity) affects three physical systems simultaneously:\n\n1. **Thermal load**: Covered extensively in Module 9 of Roasting 1. The heat energy required scales roughly with bean mass, but not linearly due to the insulating effect of a dense bean pile.\n\n2. **Airflow restriction**: A full drum acts as a filter, restricting airflow. More beans = more airflow resistance = lower actual air velocity through the drum at the same fan speed. This means increasing fan speed with large batches isn't just about removing smoke — it's about maintaining adequate convective heat transfer.\n\n3. **Chaff separation**: Coffee beans shed their silver skin (chaff) during the Maillard phase. In a properly configured drum, the airstream carries chaff through the drum and into a chaff collector. If the fill ratio is too high, the dense bean mass traps chaff against the drum wall. Chaff that stays in contact with the bean re-deposits tannins and smoky compounds onto the coffee surface. The fix: increase airflow once chaff begins separating (~150–160°C).\n\n**Specialty roasters typically cap fill at 60–70% of stated capacity** to maintain full control over all three systems.",
        "points": [
          "Fill ratio affects thermal load, airflow restriction, and chaff separation simultaneously",
          "Dense bean mass at high fill ratios resists airflow — fan speed must be increased to compensate",
          "Trapped chaff re-deposits tannins on beans — requires timely airflow increase",
          "60–70% of stated capacity is the specialty standard for maintaining full roast control"
        ],
        "refs": [
          "Schwartzberg (2002), op. cit.",
          "Hoos (2015), op. cit."
        ],
        "flashcards": [
          { "q": "Why do specialty roasters typically limit batch size to 60–70% of a machine's stated capacity?", "a": "At higher fill ratios, three systems simultaneously degrade: (1) **thermal control** becomes erratic (too much mass for precise heat management), (2) **airflow restriction** increases (reducing convective heat transfer), and (3) **chaff separation** is impaired (increasing smoky off-flavors)." },
          { "q": "At what point in the roast should a roaster increase airflow to manage chaff, and why?", "a": "At ~150–160°C, when the beans begin entering the Maillard phase and chaff starts separating from the bean surface. Increasing airflow at this point carries chaff out of the drum before it can re-deposit on the beans, preventing the **tannin and smoky compound transfer** that causes off-flavors." },
          { "q": "A roaster runs a 10kg batch in a 12kg machine and notices the fan setting that usually works feels insufficient — more smoke is staying in the drum. What is the physical cause?", "a": "The dense 10kg bean mass is **physically obstructing airflow** through the drum. At the same fan speed, the actual air velocity through the bean mass is lower than with a smaller batch. The fan must be turned up significantly to restore adequate airflow and smoke evacuation." }
        ]
      },
      {
        "t": "Hybrid roaster design: drum-fluid bed combinations",
        "b": "Why the industry's most innovative roasters don't have to choose between conduction and convection.",
        "content": "Traditional drum roasters (Probat, Diedrich, Has Garanti) rely primarily on conduction from the drum wall and secondarily on convection from airflow. Traditional fluid-bed roasters (Sivetz, Jabez Burns) roast beans suspended in a column of hot air — zero conduction.\n\n**Hybrid designs** combine both mechanisms in one machine, allowing the roaster to dial in a precise conduction/convection ratio:\n\n- **[Loring Smart Roast](https://loring.com/)**: A drum roaster where the air is recirculated through a catalytic oxidizer (afterburner built in). Convection is the dominant mechanism because the air is extremely hot and high-velocity. Essentially 90% convection, 10% conduction. Requires a completely different profile strategy — no drum thermal momentum to rely on.\n- **Bullet R1 / Aillio**: A 1kg capacity drum roaster with a powerful radiant heat element (infrared emitter below the drum) *plus* a variable-speed fan. The roaster can run IR-dominant (conduction-like), air-dominant (convection-like), or any combination in real time.\n- **Stronghold S7**: Uses separate gas burner, electric infrared, and fan controls — three independent heat inputs, each logged separately in Cropster.\n\nHybrid machines demand a fundamentally different approach to profile design, because the **thermal momentum rules that govern drum-only roasters do not apply** when convection is the primary mechanism.",
        "points": [
          "Pure drum: conduction-primary (Probat, Diedrich); Pure fluid-bed: convection-only (Sivetz)",
          "Loring: recirculating hot air (~90% convection) — profiles must assume near-zero thermal inertia",
          "Bullet R1: independently variable IR + fan allows dynamic conduction/convection ratio changes mid-roast",
          "Stronghold S7: three independent heat inputs logged separately — maximum control, maximum complexity",
          "Hybrid profiles cannot be directly transferred from drum roasters without recalibration"
        ],
        "refs": [
          "Loring Smart Roast technical documentation.",
          "Rao, S. (2020). 'Roasting on Hybrid Machines.' <i>Roast Magazine</i>."
        ],
        "flashcards": [
          { "q": "Why does roasting on a Loring Smart Roast require a fundamentally different profile strategy than on a classic Probat drum roaster?", "a": "The Loring is ~90% convection-driven with recirculated high-velocity hot air. The **thermal momentum** rules of classic drum roasting (which rely on the drum's metal mass as a heat reservoir) do not apply — the Loring reacts almost instantly to gas changes, requiring far more precision and smaller interventions." },
          { "q": "What is the practical advantage of independently controlling IR heat and fan speed on a machine like the Bullet R1?", "a": "It allows real-time adjustment of the **conduction/convection ratio** during the roast. For example: high IR + low fan in the drying phase (conduction-heavy, dense bean heat penetration), then low IR + high fan in development (convection-heavy, even heat, smoke evacuation). This is impossible on a fixed-design drum roaster." },
          { "q": "What is the primary criticism of 100% fluid-bed (Sivetz-style) roasters from a specialty coffee perspective?", "a": "Without any conductive heat from drum contact, the Maillard reaction is driven almost entirely by convection. This tends to produce **even, consistent, but less complex** roasted notes — the characteristic 'depth' of drum-roasted coffee (Maillard compound accumulation from conductive surface heating) is difficult to replicate." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "Ingeniería del tambor y dinámica de flujo de aire",
    "id": "m3",
    "desc": "La física mecánica del tostador de tambor — cómo la geometría, las RPM y la proporción de llenado determinan la uniformidad de tueste, y por qué los tostadores híbridos difuminan la línea.",
    "topics": [
      {
        "t": "RPM del tambor, fuerza centrífuga y volteo de granos",
        "b": "Muy lento y los granos ruedan. Muy rápido y se pegan a la pared. El punto óptimo es un problema de física.",
        "content": "En un tostador de tambor, la rotación mantiene los granos en constante movimiento. Esto asegura exposición uniforme a la pared del tambor (calor conductivo) y al flujo de aire (calor convectivo).\n\nLa variable clave es la **velocidad crítica** — las RPM en las que la fuerza centrífuga iguala la gravedad, causando que los granos se 'peguen' a la pared:\n\n**RPM Críticas ≈ 42.3 / √(diámetro del tambor en metros)**\n\nPara un tambor de 30cm: RPM Críticas ≈ 42.3 / √0.3 ≈ **77 RPM**.\n\n**Velocidades prácticas del tambor:**\n- **Tambores lentos (30–45 RPM)**: Los granos pasan más tiempo en contacto con la pared caliente. Mayor componente de conducción, mejor para granos densos que necesitan calor agresivo inicial.\n- **Tambores rápidos (50–65 RPM)**: Los granos se 'airean' con más frecuencia. Más exposición convectiva, mejor gradiente de temperatura, mejor para tuestes claros donde el riesgo de quemado es mayor.",
        "points": [
          "Fórmula RPM crítica: 42.3 / √(diámetro en metros)",
          "Superar ~70% de la velocidad crítica hace que los granos centrifuguen en vez de voltear",
          "Tambores lentos favorecen conducción; tambores rápidos favorecen convección",
          "Motores de velocidad variable son una función premium que permite ajustes durante el tueste"
        ],
        "refs": [
          "Illy, A. & Viani, R. (eds). (2005). <i>Espresso Coffee: The Science of Quality</i>. Elsevier.",
          "Schwartzberg, H.G. (2002). 'Batch Coffee Roasting.' <i>Drying Technology</i>."
        ],
        "flashcards": [
          { "q": "¿Qué es la 'velocidad crítica' de un tambor tostador y qué pasa si la superas?", "a": "Las RPM a las que la **fuerza centrífuga iguala a la gravedad** — por encima de ellas, los granos son presionados contra la pared del tambor y dejan de voltear. Esto causa un calentamiento conductivo extremo y desigual (quemado) y elimina la exposición convectiva del volteo." },
          { "q": "¿Cómo influyen las RPM del tambor en el balance conducción-convección?", "a": "Menos RPM → los granos pasan más tiempo en contacto con la pared → **más conducción**. Más RPM → los granos se airean con más frecuencia → **más convección**. Por eso los tostadores que aumentan las RPM normalmente necesitan compensar con más gas." },
          { "q": "Un tostador tiene un tambor de 40cm de diámetro. ¿Cuáles son las RPM críticas aproximadas y qué velocidad debe evitar?", "a": "RPM críticas ≈ 42.3 / √0.4 ≈ **67 RPM**. Debe evitar superar ~70% de esto, o aproximadamente **47 RPM**, donde los granos comienzan a centrifugarse contra la pared en vez de voltear libremente." }
        ]
      },
      {
        "t": "Proporción de llenado y dinámica del tamo",
        "b": "Cuánto café cargas determina no solo la carga térmica — determina si tu máquina puede respirar.",
        "content": "La **proporción de llenado** (peso del lote como porcentaje de la capacidad declarada) afecta tres sistemas físicos simultáneamente:\n\n1. **Carga térmica**: La energía calorífica requerida escala aproximadamente con la masa, pero no linealmente.\n\n2. **Restricción del flujo de aire**: Un tambor lleno actúa como filtro. Más granos = más resistencia al flujo de aire = menor velocidad real de aire a la misma velocidad del ventilador.\n\n3. **Separación del tamo**: Los granos sueltan su piel plateada (tamo) durante la fase de Maillard. Si la proporción de llenado es muy alta, la masa densa atrapa el tamo contra la pared. El tamo que permanece en contacto con el grano re-deposita taninos y compuestos ahumados. La solución: aumentar el flujo de aire cuando el tamo empieza a separarse (~150–160°C).\n\n**Los tostadores de especialidad típicamente limitan el llenado al 60–70% de la capacidad declarada.**",
        "points": [
          "La proporción de llenado afecta la carga térmica, la restricción del flujo de aire y la separación del tamo",
          "La masa densa a altas proporciones resiste el flujo de aire — hay que aumentar la velocidad del ventilador",
          "El tamo atrapado re-deposita taninos en los granos — requiere aumento oportuno del flujo de aire",
          "60–70% de la capacidad declarada es el estándar de especialidad"
        ],
        "refs": [
          "Schwartzberg (2002), op. cit.",
          "Hoos (2015), op. cit."
        ],
        "flashcards": [
          { "q": "¿Por qué los tostadores de especialidad típicamente limitan el tamaño del lote al 60–70% de la capacidad declarada?", "a": "A proporciones de llenado más altas, tres sistemas se degradan simultáneamente: (1) el **control térmico** se vuelve errático, (2) la **restricción del flujo de aire** aumenta (reduciendo la transferencia de calor convectivo), y (3) la **separación del tamo** se deteriora (aumentando los sabores defectuosos ahumados)." },
          { "q": "¿En qué punto del tueste debe un tostador aumentar el flujo de aire para manejar el tamo, y por qué?", "a": "A ~150–160°C, cuando los granos comienzan a entrar en la fase de Maillard y el tamo empieza a separarse. Aumentar el flujo en este punto lleva el tamo fuera del tambor antes de que pueda re-depositarse, previniendo la **transferencia de taninos y compuestos ahumados**." },
          { "q": "Un tostador usa un lote de 10kg en una máquina de 12kg y nota que la configuración de ventilador que normalmente funciona parece insuficiente. ¿Cuál es la causa física?", "a": "La densa masa de 10kg está **obstruyendo físicamente el flujo de aire** a través del tambor. A la misma velocidad del ventilador, la velocidad real del aire a través de la masa de granos es menor que con un lote más pequeño. Hay que aumentar el ventilador para restaurar el flujo adecuado." }
        ]
      },
      {
        "t": "Diseño de tostadores híbridos: combinaciones tambor-lecho fluido",
        "b": "Por qué los tostadores más innovadores de la industria no tienen que elegir entre conducción y convección.",
        "content": "Los tostadores de tambor tradicionales (Probat, Diedrich) dependen principalmente de la conducción. Los tostadores de lecho fluido tradicionales (Sivetz) tuestan granos suspendidos en una columna de aire caliente — cero conducción.\n\n**Los diseños híbridos** combinan ambos mecanismos, permitiendo al tostador calibrar una proporción exacta:\n\n- **Loring Smart Roast**: Un tostador de tambor donde el aire se recircula a través de un oxidador catalítico. La convección es el mecanismo dominante (~90%). Requiere una estrategia de perfil completamente distinta — sin inercia térmica del tambor en la que confiar.\n- **Bullet R1 / Aillio**: 1kg con un elemento de calor radiante infrarrojo + ventilador de velocidad variable. El tostador puede ejecutar con IR dominante, con aire dominante, o cualquier combinación en tiempo real.\n- **Stronghold S7**: Tres entradas de calor independientes (gas, IR eléctrico, ventilador), cada una registrada por separado.\n\nLas máquinas híbridas exigen un enfoque fundamentalmente diferente al diseño de perfiles, porque las **reglas de momento térmico que gobiernan los tostadores de solo tambor no aplican** cuando la convección es el mecanismo primario.",
        "points": [
          "Tambor puro: conducción primaria (Probat); Lecho fluido puro: solo convección (Sivetz)",
          "Loring: aire recirculante caliente (~90% convección) — los perfiles deben asumir inercia casi cero",
          "Bullet R1: IR + ventilador independientemente variables permiten cambios dinámicos mid-roast",
          "Stronghold S7: tres entradas de calor independientes — máximo control, máxima complejidad",
          "Los perfiles híbridos no se pueden transferir directamente de tostadores de tambor sin recalibración"
        ],
        "refs": [
          "Documentación técnica de Loring Smart Roast.",
          "Rao, S. (2020). 'Roasting on Hybrid Machines.' <i>Roast Magazine</i>."
        ],
        "flashcards": [
          { "q": "¿Por qué tostar en un Loring Smart Roast requiere una estrategia de perfil fundamentalmente diferente a un Probat de tambor clásico?", "a": "El Loring es ~90% impulsado por convección con aire caliente recirculante de alta velocidad. Las **reglas de momento térmico** del tueste clásico de tambor no aplican — el Loring reacciona casi instantáneamente a los cambios de gas, requiriendo mucha más precisión e intervenciones más pequeñas." },
          { "q": "¿Cuál es la ventaja práctica de controlar independientemente el IR y la velocidad del ventilador en una máquina como el Bullet R1?", "a": "Permite ajuste en tiempo real de la **proporción conducción/convección** durante el tueste. Por ejemplo: IR alto + ventilador bajo en la fase de secado (conducción pesada), luego IR bajo + ventilador alto en el desarrollo (convección pesada, evacuación de humo). Esto es imposible en un tostador de tambor de diseño fijo." },
          { "q": "¿Cuál es la crítica principal de los tostadores de lecho fluido 100% (estilo Sivetz) desde la perspectiva del café de especialidad?", "a": "Sin calor conductivo del contacto con el tambor, la reacción de Maillard es impulsada casi enteramente por convección. Esto tiende a producir notas tostadas **uniformes y consistentes pero menos complejas** — la 'profundidad' característica del café tostado en tambor es difícil de replicar." }
        ]
      }
    ]
  }
};
