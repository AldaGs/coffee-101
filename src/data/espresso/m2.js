export default {
  "en": {
    "mod": "Module 2",
    "title": "Grinder dynamics and puck resistance",
    "id": "m2",
    "desc": "In espresso, the coffee bed IS the valve. Your grinder determines not just surface area, but flow rate and pressure.",
    "topics": [
      {
        "t": "The puck as a hydraulic resistor",
        "b": "Unlike filter coffee where gravity sets the limit, an espresso machine throws 9 bars of pressure at the bed. The puck must resist it.",
        "content": "In a pour-over, if your grind is slightly wrong, the brew finishes 15 seconds late. In espresso, if your grind is slightly wrong, the shot chokes completely or gushes out in 10 seconds.\n\nBecause an espresso pump forces water at 9 bars (130 psi) into the basket, the coffee bed (the **Puck**) is the only thing providing resistance. The flow rate of the shot is dictated almost entirely by how tightly the coffee particles pack together. Grinding finer increases this resistance; grinding coarser decreases it.\n\nThis means your grind size does not just control surface area for extraction; **it physically acts as a valve** controlling the flow of water.",
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
        "content": "When 9 bars of pressure hit a coffee puck, the physical structure collapses and compresses downwards. \n\nSimultaneously, the microscopic coffee dust (**Fines**) is washed downward by the water, migrating toward the bottom of the metal basket. These fines clog the holes of the basket, creating immense resistance early in the shot.\n\nHowever, as the shot progresses, the water extracts solubles from the coffee. The puck physically loses about 20% of its solid mass. As it loses mass, its resistance drops. This is why espresso shots start with slow, dark drips and finish with a fast, blond, gushing stream.",
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
        "content": "En un pour-over, si tu molienda está ligeramente mal, la extracción termina 15 segundos tarde. En el espresso, si está ligeramente mal, el shot se ahoga por completo o sale a borbotones en 10 segundos.\n\nDebido a que una bomba de espresso fuerza el agua a 9 bares (130 psi), el lecho de café (la **Pastilla** o Puck) es lo único que proporciona resistencia. El caudal (flow rate) del shot está dictado casi enteramente por qué tan apretadas están las partículas. Moler más fino aumenta esta resistencia; moler más grueso la disminuye.\n\nEsto significa que el tamaño de molienda no solo controla el área superficial; **actúa físicamente como una válvula** controlando el flujo de agua.",
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
        "content": "Cuando 9 bares de presión golpean una pastilla de café, la estructura física colapsa y se comprime hacia abajo.\n\nSimultáneamente, el polvo microscópico de café (**Finos**) es arrastrado por el agua, migrando hacia el fondo de la canastilla de metal. Estos finos obstruyen los orificios, creando una inmensa resistencia al inicio del shot.\n\nSin embargo, a medida que avanza la extracción, el agua disuelve solubles del café. La pastilla pierde físicamente alrededor del 20% de su masa sólida. Al perder masa, su resistencia cae. Es por esto que los shots de espresso comienzan con gotas lentas y oscuras y terminan con un flujo rápido, rubio y acuoso.",
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
};