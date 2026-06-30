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
        ],
        "flashcards": [
          { "q": "How does espresso grind size function differently from pour-over grind size?", "a": "In espresso, grind size doesn't just control surface area — it **physically acts as a valve**, setting the flow resistance the 9-bar pump must overcome. A tiny grind change can choke or gush a shot entirely." },
          { "q": "What is Darcy's Law's role in understanding espresso flow rate?", "a": "Flow rate is directly proportional to pressure and inversely proportional to puck resistance. The grinder sets resistance; the pump sets pressure — these two determine the shot's flow rate." },
          { "q": "Why do micro-adjustments matter far more on an espresso grinder than a filter grinder?", "a": "9-bar pressure amplifies small resistance changes enormously. A grind shift that causes a 5-second timing difference in pour-over can fully choke or blow out an espresso shot." }
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
        ],
        "flashcards": [
          { "q": "Why do espresso shots start as slow dark drips and finish as a faster blond stream?", "a": "Early on, fines migrate down and partially blind the basket holes, creating high resistance. As the shot extracts, the puck loses ~20% mass, resistance drops, and flow accelerates." },
          { "q": "What physical phenomenon occurs inside the espresso puck under 9 bars?", "a": "The structure compresses and collapses downward. Microscopic fines are washed toward the basket floor, clogging its holes — creating maximum resistance in the early seconds of the shot." },
          { "q": "Why do pressure-profiling machines reduce pressure toward the end of a shot?", "a": "To counteract the puck's degrading resistance — as it loses mass and opens up, maintaining constant high pressure would cause the shot to race and over-dilute in the final seconds." }
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
        ],
        "flashcards": [
          { "q": "¿Cómo funciona el tamaño de molienda en espresso diferente al del filtrado?", "a": "En espresso, la molienda no solo controla el área superficial — **actúa físicamente como una válvula**, fijando la resistencia que la bomba de 9 bares debe vencer. Un micro-ajuste puede ahogar o disparar el shot." },
          { "q": "¿Qué papel juega la Ley de Darcy en el caudal del espresso?", "a": "El caudal es proporcional a la presión e inversamente proporcional a la resistencia de la pastilla. El molino fija la resistencia; la bomba fija la presión — estos dos determinan el caudal del shot." },
          { "q": "¿Por qué los micro-ajustes importan mucho más en un molino de espresso que en uno de filtrado?", "a": "Los 9 bares de presión amplifican enormemente los pequeños cambios de resistencia. Un ajuste que en filtrado cambia 5 segundos puede ahogar completamente un shot de espresso." }
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
        ],
        "flashcards": [
          { "q": "¿Por qué los shots de espresso comienzan como gotas lentas y oscuras y terminan como un flujo rápido y rubio?", "a": "Al inicio, los finos migran y ciegan los orificios de la canastilla, creando alta resistencia. A medida que el shot extrae, la pastilla pierde ~20% de masa, la resistencia baja y el flujo se acelera." },
          { "q": "¿Qué fenómeno físico ocurre dentro de la pastilla de espresso bajo 9 bares?", "a": "La estructura se comprime y colapsa hacia abajo. Los finos microscópicos son arrastrados hacia el fondo de la canastilla, obstruyendo sus orificios — creando la máxima resistencia en los primeros segundos." },
          { "q": "¿Por qué las máquinas de perfil de presión reducen la presión al final del shot?", "a": "Para contrarrestar la resistencia decreciente de la pastilla — al perder masa y abrirse, mantener alta presión constante haría que el shot se disparara y sobreextrajera en los últimos segundos." }
        ]
      }
    ]
  }
};
