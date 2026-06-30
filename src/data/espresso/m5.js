export default {
  "en": {
    "mod": "Module 5",
    "title": "Temperature and pressure profiling",
    "id": "m5",
    "desc": "Moving beyond flat 9-bar, 93°C shots to manipulate extraction kinetics dynamically.",
    "topics": [
      {
        "t": "Temperature surfing and stability",
        "b": "Temperature dictates which compounds extract easily. Boiler design determines if you actually get the temperature you set.",
        "content": "Just as in filter coffee, hotter water extracts more efficiently and preferentially pulls out heavier, bitter compounds. Cooler water struggles to extract and highlights acidity.\n\n- **Light Roasts (e.g., Washed Ethiopian)**: Require high heat (93-96°C) to break down dense cellular structure and extract sweetness.\n- **Dark Roasts**: Require cooler water (88-90°C) to avoid extracting harsh, ashy flavors from the heavily degraded cellulose.\n\nThe challenge in espresso is **Stability**. A cheap single-boiler machine might drop 5°C during a 30-second shot. A dual-boiler PID machine will maintain exact temperature. If your shots taste randomly sour or bitter without changing the grind, your machine's temperature instability is likely the culprit.",
        "points": [
          "Heat Exchange (HX) vs. Dual Boiler vs. Thermoblock thermal dynamics",
          "Temperature as an extraction EQ (hotter = more bitter/sweet, cooler = more acid)",
          "The necessity of pre-heating the portafilter to prevent massive thermal shock"
        ],
        "refs": [
          "Illy & Viani (2005), op. cit.",
          "Sanz-Uribe et al. (2017), op. cit."
        ]
      },
      {
        "t": "Pre-infusion",
        "b": "Saturating the puck at low pressure before applying 9 bars to prevent channeling and boost extraction.",
        "content": "**Pre-infusion** involves wetting the coffee bed at a very low pressure (usually 1-3 bars) for a few seconds before ramping up to the full 9 bars.\n\nThis serves two critical physical purposes:\n1. **Swelling**: The coffee grounds absorb water and expand. This expansion naturally seals any microscopic cracks or weak spots in the puck, drastically reducing channeling when the high pressure hits.\n2. **Solubility**: It begins breaking down the coffee early, allowing for a much higher overall Extraction Yield. \n\nPre-infusion is practically mandatory for extracting dense, light-roasted specialty coffees without sourness.",
        "points": [
          "Mechanical sealing of the puck via swelling",
          "Line pressure vs. pump pressure pre-infusion mechanisms",
          "How long pre-infusions (10-20 seconds) enable grinding finer than normally possible (Slayer-style shots)"
        ]
      },
      {
        "t": "Flow and pressure profiling",
        "b": "Why a flat 9-bar profile is actually sub-optimal, and how tapering pressure mimics the puck's natural degradation.",
        "content": "As an espresso shot progresses, the puck dissolves, losing 20% of its mass. If the machine continues to force water at a flat 9 bars, the flow rate accelerates wildly at the end of the shot, pulling harsh, watery, bitter compounds.\n\n**Pressure/Flow Profiling** (found on machines like the Decent, Slayer, or flow-control E61s) solves this.\nBy intentionally dropping the pressure in the last third of the shot (from 9 bars down to 6 or 4 bars), you maintain a steady, slow flow rate even as the puck degrades. This 'declining profile' produces a significantly sweeter, more balanced, and higher-extracted espresso.",
        "points": [
          "The physical degradation of the puck's resistance over time",
          "Spring lever machines as the historical origin of the declining pressure profile",
          "Modern flow profiling (Decent Espresso paradigm) matching water delivery to puck resistance"
        ],
        "refs": [
          "Rao, S. (2016). 'Espresso Extraction: Measurement and Mastery.'",
          "Cameron et al. (2020), op. cit. — models how flow control prevents late-shot channeling."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 5",
    "title": "Perfiles de temperatura y presión",
    "id": "m5",
    "desc": "Yendo más allá de los shots planos de 9 bares y 93°C para manipular la cinética de extracción de forma dinámica.",
    "topics": [
      {
        "t": "Navegación térmica y estabilidad",
        "b": "La temperatura dicta qué compuestos se extraen fácilmente. El diseño de la caldera determina si realmente obtienes la temperatura que ajustaste.",
        "content": "Al igual que en el café de filtro, el agua más caliente extrae de forma más eficiente y preferencialmente saca compuestos más pesados y amargos. El agua más fría batalla para extraer y resalta la acidez.\n\n- **Tuestes Claros (ej. Etíope Lavado)**: Requieren alta temperatura (93-96°C) para descomponer la densa estructura celular y extraer dulzor.\n- **Tuestes Oscuros**: Requieren agua más fría (88-90°C) para evitar extraer sabores ásperos y a ceniza de la celulosa altamente degradada.\n\nEl reto en el espresso es la **Estabilidad**. Una máquina barata de caldera simple podría caer 5°C durante un shot de 30 segundos. Si tus shots saben aleatoriamente ácidos o amargos sin cambiar la molienda, la inestabilidad térmica de tu máquina es probablemente la culpable.",
        "points": [
          "Dinámica térmica: Intercambiador de Calor (HX) vs. Doble Caldera vs. Thermoblock",
          "La temperatura como un ecualizador de extracción (más calor = más amargo/dulce, más frío = más ácido)",
          "La necesidad de precalentar el portafiltro para evitar choques térmicos masivos"
        ],
        "refs": [
          "Illy & Viani (2005), op. cit.",
          "Sanz-Uribe et al. (2017), op. cit."
        ]
      },
      {
        "t": "Pre-infusión",
        "b": "Saturar la pastilla a baja presión antes de aplicar 9 bares para prevenir la canalización y potenciar la extracción.",
        "content": "La **Pre-infusión** implica mojar el lecho de café a una presión muy baja (usualmente 1-3 bares) durante unos segundos antes de subir a los 9 bares completos.\n\nEsto sirve dos propósitos físicos críticos:\n1. **Hinchazón**: Los molidos absorben agua y se expanden. Esta expansión sella naturalmente cualquier grieta microscópica en la pastilla, reduciendo drásticamente la canalización cuando golpea la alta presión.\n2. **Solubilidad**: Comienza a descomponer el café temprano, permitiendo un Rendimiento de Extracción general mucho mayor.\n\nLa pre-infusión es prácticamente obligatoria para extraer cafés de especialidad densos y de tueste claro sin que queden ácidos.",
        "points": [
          "Sellado mecánico de la pastilla mediante la hinchazón",
          "Mecanismos de pre-infusión por presión de línea vs. presión de bomba",
          "Cómo las pre-infusiones largas (10-20 segundos) permiten moler más fino de lo normal (estilo Slayer)"
        ]
      },
      {
        "t": "Perfiles de flujo y presión",
        "b": "Por qué un perfil plano de 9 bares es subóptimo, y cómo reducir la presión simula la degradación natural de la pastilla.",
        "content": "A medida que avanza un shot de espresso, la pastilla se disuelve, perdiendo el 20% de su masa. Si la máquina sigue forzando agua a 9 bares constantes, el caudal se acelera descontroladamente al final del shot, arrastrando compuestos ásperos, acuosos y amargos.\n\nLos **Perfiles de Presión/Flujo** (en máquinas como la Decent, Slayer, o E61 con control de flujo) resuelven esto.\nAl reducir intencionalmente la presión en el último tercio del shot (de 9 bares bajando a 6 o 4 bares), mantienes un caudal lento y constante a pesar de la degradación de la pastilla. Este 'perfil decreciente' produce un espresso significativamente más dulce, equilibrado y con mayor extracción.",
        "points": [
          "La degradación física de la resistencia de la pastilla con el tiempo",
          "Las máquinas de palanca (spring lever) como el origen histórico del perfil de presión decreciente",
          "El control de flujo moderno emparejando la entrega de agua con la resistencia de la pastilla"
        ],
        "refs": [
          "Rao, S. (2016). 'Espresso Extraction: Measurement and Mastery.'",
          "Cameron et al. (2020), op. cit."
        ]
      }
    ]
  }
};