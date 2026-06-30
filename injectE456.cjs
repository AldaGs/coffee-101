const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'espresso', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(4, () => `export default {
  "en": {
    "mod": "Module 4",
    "title": "Puck preparation and distribution",
    "id": "m4",
    "desc": "How to arrange the coffee bed to ensure 9 bars of pressure extracts evenly rather than violently channeling through a weak spot.",
    "topics": [
      {
        "t": "The physics of channeling under pressure",
        "b": "Water at 9 bars is incredibly aggressive. The slightest variation in puck density will create a jet of over-extraction.",
        "content": "In a pour-over, a poorly prepared bed might cause water to drain a bit unevenly. In espresso, 9 bars of pressure will actively hunt for the path of least resistance.\\n\\nIf one side of the puck has 5% less coffee density than the other, the water will force its way through that weak spot, creating a **Channel**. \\n\\nThe coffee surrounding the channel is violently over-extracted (tasting harsh, bitter, and astringent). The rest of the puck remains dry and under-extracted (tasting sour). A channeled shot will taste simultaneously sour and bitter, and it will often spray wildly out of a bottomless portafilter.",
        "points": [
          "Channeling as the primary enemy of espresso quality",
          "Why a bottomless portafilter is an essential diagnostic tool for spotting channels",
          "The combination of sour and bitter notes as the sensory hallmark of channeling"
        ],
        "refs": [
          "Fasano & Talamucci (2013), op. cit. — mathematical modeling of uneven flow paths.",
          "Rao (2008), op. cit."
        ]
      },
      {
        "t": "WDT (Weiss Distribution Technique) vs. tapping",
        "b": "De-clumping and homogenizing the bed before tamping.",
        "content": "When coffee exits a grinder, it is often clumped together due to static electricity and oils. If you tamp clumped coffee, the clumps remain as dense boulders inside the puck, causing channeling.\\n\\n- **Tapping**: Vertical or horizontal tapping settles the grounds but does not break up clumps. It often leads to 'donut' extractions (fast on the outside, slow in the middle).\\n- **WDT (Weiss Distribution Technique)**: Using extremely thin needles (0.3mm to 0.4mm) to deeply stir the coffee bed. This breaks all clumps and creates a perfectly homogeneous, fluffy bed.\\n\\nWDT is currently the gold standard in specialty coffee for preventing channeling and increasing extraction yields.",
        "points": [
          "The mechanism of WDT: mechanical de-clumping and density homogenization",
          "Needle thickness matters: >0.4mm needles push coffee around (creating trenches) rather than slicing through it",
          "Spinning distribution tools (OCD style) only groom the top 2mm and often compress the bed unevenly"
        ],
        "refs": [
          "Various community data sets (e.g., Socratic Coffee, Barista Hustle) demonstrating WDT's superiority in extraction evenness."
        ]
      },
      {
        "t": "Tamping dynamics",
        "b": "Tamping does not control flow rate; it removes air. You cannot tamp 'too hard'.",
        "content": "The goal of tamping is to remove all the air pockets from the coffee bed, creating a solid, level puck.\\n\\nA massive misconception is that you can adjust your shot time by tamping harder or softer. This is physically false. Once you reach the maximum density of the coffee (usually around 15-20 lbs of pressure), pressing harder does absolutely nothing. The 9 bars of water pressure hitting the puck equates to hundreds of pounds of force; your tamp pressure is irrelevant in comparison.\\n\\nThe only thing that matters in tamping is **Levelness**. If your tamp is tilted, one side of the puck is thinner, and the water will channel through it.",
        "points": [
          "Tamping removes void space; it does not set final puck resistance",
          "The myth of the '30-pound tamp' vs. reaching maximum practical density",
          "Why self-leveling tampers (e.g., Normcore, Force Tamper) have become standard for consistency"
        ],
        "refs": [
          "Rao (2008), op. cit. — debunks the tamp pressure myth."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "Preparación de la pastilla y distribución",
    "id": "m4",
    "desc": "Cómo organizar el lecho de café para asegurar que 9 bares de presión extraigan uniformemente en lugar de canalizarse violentamente.",
    "topics": [
      {
        "t": "La física de la canalización bajo presión",
        "b": "El agua a 9 bares es increíblemente agresiva. La más mínima variación en la densidad de la pastilla creará un chorro de sobreextracción.",
        "content": "En un pour-over, un lecho mal preparado puede hacer que el agua drene de forma desigual. En el espresso, 9 bares de presión buscarán activamente el camino de menor resistencia.\\n\\nSi un lado de la pastilla tiene un 5% menos de densidad de café que el otro, el agua se abrirá paso por ese punto débil, creando un **Canal**.\\n\\nEl café que rodea el canal se sobreextrae violentamente (sabiendo áspero, amargo y astringente). El resto de la pastilla permanece seco y subextraído (sabiendo ácido). Un shot canalizado sabrá a la vez ácido y amargo, y a menudo salpicará descontroladamente de un portafiltro sin fondo.",
        "points": [
          "La canalización como el principal enemigo de la calidad del espresso",
          "Por qué un portafiltro sin fondo (bottomless) es una herramienta diagnóstica esencial",
          "La combinación de notas ácidas y amargas como la marca sensorial de la canalización"
        ],
        "refs": [
          "Fasano & Talamucci (2013), op. cit. — modelado matemático de rutas de flujo desiguales.",
          "Rao (2008), op. cit."
        ]
      },
      {
        "t": "WDT (Weiss Distribution Technique) vs. golpecitos",
        "b": "Deshacer grumos y homogeneizar el lecho antes del compactado.",
        "content": "Cuando el café sale de un molino, a menudo está aglomerado debido a la electricidad estática y los aceites. Si compactas café con grumos, estos permanecen como rocas densas dentro de la pastilla, causando canalización.\\n\\n- **Golpecitos (Tapping)**: Asienta los molidos pero no deshace los grumos. A menudo lleva a extracciones en forma de 'dona' (rápidas por fuera, lentas en el centro).\\n- **WDT**: Consiste en usar agujas extremadamente finas (0.3mm a 0.4mm) para revolver profundamente el lecho de café. Esto rompe todos los grumos y crea un lecho perfectamente homogéneo y esponjoso.\\n\\nEl WDT es actualmente el estándar de oro en el café de especialidad para prevenir la canalización y aumentar los rendimientos de extracción.",
        "points": [
          "El mecanismo del WDT: desaglomeración mecánica y homogeneización de densidad",
          "El grosor de la aguja importa: >0.4mm empujan el café (creando zanjas) en lugar de cortarlo",
          "Las herramientas de distribución giratorias (estilo OCD) solo arreglan los 2mm superiores y a menudo comprimen el lecho de forma desigual"
        ],
        "refs": [
          "Varios conjuntos de datos comunitarios (ej. Socratic Coffee, Barista Hustle) demostrando la superioridad del WDT."
        ]
      },
      {
        "t": "Dinámica del compactado (Tamping)",
        "b": "El compactado no controla el caudal; elimina el aire. No puedes compactar 'demasiado fuerte'.",
        "content": "El objetivo del compactado es eliminar todas las bolsas de aire del lecho de café, creando una pastilla sólida y nivelada.\\n\\nUn error masivo es creer que puedes ajustar el tiempo de tu shot compactando más fuerte o más suave. Físicamente es falso. Una vez que alcanzas la densidad máxima del café, presionar más no hace absolutamente nada. Los 9 bares de presión de agua equivalen a cientos de libras de fuerza; tu presión de compactado es irrelevante en comparación.\\n\\nLo único que importa al compactar es la **Nivelación**. Si tu tamper está inclinado, un lado de la pastilla será más delgado y el agua se canalizará por ahí.",
        "points": [
          "El compactado elimina el espacio vacío; no define la resistencia final de la pastilla",
          "El mito del 'compactado de 30 libras' vs. alcanzar la densidad máxima práctica",
          "Por qué los tampers auto-nivelantes (ej. Normcore, Force Tamper) se han vuelto el estándar para la consistencia"
        ],
        "refs": [
          "Rao (2008), op. cit. — desmiente el mito de la presión de compactado."
        ]
      }
    ]
  }
};`);

updateModule(5, () => `export default {
  "en": {
    "mod": "Module 5",
    "title": "Temperature and pressure profiling",
    "id": "m5",
    "desc": "Moving beyond flat 9-bar, 93°C shots to manipulate extraction kinetics dynamically.",
    "topics": [
      {
        "t": "Temperature surfing and stability",
        "b": "Temperature dictates which compounds extract easily. Boiler design determines if you actually get the temperature you set.",
        "content": "Just as in filter coffee, hotter water extracts more efficiently and preferentially pulls out heavier, bitter compounds. Cooler water struggles to extract and highlights acidity.\\n\\n- **Light Roasts (e.g., Washed Ethiopian)**: Require high heat (93-96°C) to break down dense cellular structure and extract sweetness.\\n- **Dark Roasts**: Require cooler water (88-90°C) to avoid extracting harsh, ashy flavors from the heavily degraded cellulose.\\n\\nThe challenge in espresso is **Stability**. A cheap single-boiler machine might drop 5°C during a 30-second shot. A dual-boiler PID machine will maintain exact temperature. If your shots taste randomly sour or bitter without changing the grind, your machine's temperature instability is likely the culprit.",
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
        "content": "**Pre-infusion** involves wetting the coffee bed at a very low pressure (usually 1-3 bars) for a few seconds before ramping up to the full 9 bars.\\n\\nThis serves two critical physical purposes:\\n1. **Swelling**: The coffee grounds absorb water and expand. This expansion naturally seals any microscopic cracks or weak spots in the puck, drastically reducing channeling when the high pressure hits.\\n2. **Solubility**: It begins breaking down the coffee early, allowing for a much higher overall Extraction Yield. \\n\\nPre-infusion is practically mandatory for extracting dense, light-roasted specialty coffees without sourness.",
        "points": [
          "Mechanical sealing of the puck via swelling",
          "Line pressure vs. pump pressure pre-infusion mechanisms",
          "How long pre-infusions (10-20 seconds) enable grinding finer than normally possible (Slayer-style shots)"
        ]
      },
      {
        "t": "Flow and pressure profiling",
        "b": "Why a flat 9-bar profile is actually sub-optimal, and how tapering pressure mimics the puck's natural degradation.",
        "content": "As an espresso shot progresses, the puck dissolves, losing 20% of its mass. If the machine continues to force water at a flat 9 bars, the flow rate accelerates wildly at the end of the shot, pulling harsh, watery, bitter compounds.\\n\\n**Pressure/Flow Profiling** (found on machines like the Decent, Slayer, or flow-control E61s) solves this.\\nBy intentionally dropping the pressure in the last third of the shot (from 9 bars down to 6 or 4 bars), you maintain a steady, slow flow rate even as the puck degrades. This 'declining profile' produces a significantly sweeter, more balanced, and higher-extracted espresso.",
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
        "content": "Al igual que en el café de filtro, el agua más caliente extrae de forma más eficiente y preferencialmente saca compuestos más pesados y amargos. El agua más fría batalla para extraer y resalta la acidez.\\n\\n- **Tuestes Claros (ej. Etíope Lavado)**: Requieren alta temperatura (93-96°C) para descomponer la densa estructura celular y extraer dulzor.\\n- **Tuestes Oscuros**: Requieren agua más fría (88-90°C) para evitar extraer sabores ásperos y a ceniza de la celulosa altamente degradada.\\n\\nEl reto en el espresso es la **Estabilidad**. Una máquina barata de caldera simple podría caer 5°C durante un shot de 30 segundos. Si tus shots saben aleatoriamente ácidos o amargos sin cambiar la molienda, la inestabilidad térmica de tu máquina es probablemente la culpable.",
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
        "content": "La **Pre-infusión** implica mojar el lecho de café a una presión muy baja (usualmente 1-3 bares) durante unos segundos antes de subir a los 9 bares completos.\\n\\nEsto sirve dos propósitos físicos críticos:\\n1. **Hinchazón**: Los molidos absorben agua y se expanden. Esta expansión sella naturalmente cualquier grieta microscópica en la pastilla, reduciendo drásticamente la canalización cuando golpea la alta presión.\\n2. **Solubilidad**: Comienza a descomponer el café temprano, permitiendo un Rendimiento de Extracción general mucho mayor.\\n\\nLa pre-infusión es prácticamente obligatoria para extraer cafés de especialidad densos y de tueste claro sin que queden ácidos.",
        "points": [
          "Sellado mecánico de la pastilla mediante la hinchazón",
          "Mecanismos de pre-infusión por presión de línea vs. presión de bomba",
          "Cómo las pre-infusiones largas (10-20 segundos) permiten moler más fino de lo normal (estilo Slayer)"
        ]
      },
      {
        "t": "Perfiles de flujo y presión",
        "b": "Por qué un perfil plano de 9 bares es subóptimo, y cómo reducir la presión simula la degradación natural de la pastilla.",
        "content": "A medida que avanza un shot de espresso, la pastilla se disuelve, perdiendo el 20% de su masa. Si la máquina sigue forzando agua a 9 bares constantes, el caudal se acelera descontroladamente al final del shot, arrastrando compuestos ásperos, acuosos y amargos.\\n\\nLos **Perfiles de Presión/Flujo** (en máquinas como la Decent, Slayer, o E61 con control de flujo) resuelven esto.\\nAl reducir intencionalmente la presión en el último tercio del shot (de 9 bares bajando a 6 o 4 bares), mantienes un caudal lento y constante a pesar de la degradación de la pastilla. Este 'perfil decreciente' produce un espresso significativamente más dulce, equilibrado y con mayor extracción.",
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
};`);

updateModule(6, () => `export default {
  "en": {
    "mod": "Module 6",
    "title": "Milk chemistry and microfoam",
    "id": "m6",
    "desc": "Steaming milk is not just heating it; it is denaturing proteins to trap air while preserving sugars.",
    "topics": [
      {
        "t": "Protein denaturation and foam structure",
        "b": "Air doesn't stay in milk by accident. Proteins act as the structural walls of the microfoam bubbles.",
        "content": "When you steam milk, you are injecting high-velocity steam (heat and air) into the liquid. \\n\\nMilk contains whey proteins. As the milk heats up, these proteins **[Denature](https://en.wikipedia.org/wiki/Denaturation_(biochemistry))** (uncoil). One end of the protein loves water (hydrophilic), and the other end hates water and loves air (hydrophobic). \\n\\nThese uncoiled proteins wrap around the tiny air bubbles you inject, creating a stable, glossy structure called **Microfoam**. If you heat the milk past 70°C (158°F), you completely destroy these proteins, the foam collapses, and the milk tastes scorched.",
        "points": [
          "The role of whey proteins in stabilizing the air-liquid interface",
          "The critical thermal threshold (~65-70°C) beyond which protein structure irreversibly breaks down",
          "Fat content's role: whole milk provides mouthfeel and masks bitterness, while skim foam is stiffer but drier"
        ],
        "refs": [
          "Kamath, S. et al. (2008). 'The effect of heat treatment on the foaming properties of milk.' <i>International Dairy Journal</i>."
        ]
      },
      {
        "t": "Lactose and perceived sweetness",
        "b": "Why properly steamed milk tastes like you added sugar to it.",
        "content": "Milk contains **Lactose**, a complex sugar. At refrigerator temperatures, human taste buds are very bad at perceiving lactose as sweet.\\n\\nAs you heat the milk, the heat breaks down some of the complex lactose structures and increases the volatility of the aromatic compounds. At the sweet spot of **55°C to 65°C (130°F to 150°F)**, the milk will taste incredibly sweet, naturally complementing the espresso without needing added sugar.\\n\\nIf you boil the milk, the sugars undergo extreme browning reactions, destroying the natural sweetness and introducing sulfurous, burnt flavors.",
        "points": [
          "Temperature dependence of human sweetness perception regarding lactose",
          "The Maillard reaction in milk (begins at higher temps, destroying delicate sweetness)",
          "Why 'extra hot' milk requests fundamentally degrade the beverage quality"
        ],
        "refs": [
          "Kamath et al. (2008), op. cit."
        ]
      },
      {
        "t": "The mechanics of steaming: Aeration vs. Texture",
        "b": "The two distinct physical phases of steaming milk.",
        "content": "Proper milk steaming is separated into two phases:\\n\\n1. **Aeration (Stretching)**: You keep the steam wand tip right at the surface of the milk. You hear a 'paper tearing' sound as you inject air into the cold milk. You must do this *only* while the milk is cold, when the proteins can easily stretch.\\n2. **Texturing (Spinning)**: Once the milk reaches body temperature, you submerge the wand tip slightly and tilt the pitcher to create a whirlpool. This vortex breaks the large air bubbles down into microscopic bubbles (microfoam) and evenly distributes the heat.\\n\\nFailing to separate these phases results in stiff, soapy foam resting on top of hot milk, rather than a cohesive, velvety texture.",
        "points": [
          "Aeration phase: injecting air while the milk is cold and proteins are pliable",
          "Vortex phase: shearing large bubbles into microscopic ones via fluid dynamics",
          "Why aerating hot milk fails (proteins already denatured, foam becomes rigid and separates)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 6",
    "title": "Química de la leche y microespuma",
    "id": "m6",
    "desc": "Espumar leche no es solo calentarla; es desnaturalizar proteínas para atrapar aire preservando los azúcares.",
    "topics": [
      {
        "t": "Desnaturalización de proteínas y estructura de la espuma",
        "b": "El aire no se queda en la leche por accidente. Las proteínas actúan como los muros estructurales de las burbujas de microespuma.",
        "content": "Cuando espumas leche, estás inyectando vapor a alta velocidad (calor y aire) en el líquido.\\n\\nLa leche contiene proteínas de suero. A medida que la leche se calienta, estas proteínas se **[Desnaturalizan](https://es.wikipedia.org/wiki/Desnaturalizaci%C3%B3n_(bioqu%C3%ADmica))** (se desenrollan). Un extremo de la proteína ama el agua (hidrofílico) y el otro la odia y ama el aire (hidrofóbico).\\n\\nEstas proteínas desenrolladas envuelven las diminutas burbujas de aire que inyectas, creando una estructura estable y brillante llamada **Microespuma**. Si calientas la leche a más de 70°C (158°F), destruyes por completo estas proteínas, la espuma colapsa y la leche sabe quemada.",
        "points": [
          "El rol de las proteínas del suero para estabilizar la interfaz aire-líquido",
          "El umbral térmico crítico (~65-70°C) más allá del cual la estructura se rompe irreversiblemente",
          "El papel de la grasa: la leche entera da textura y enmascara el amargor; la desnatada hace espuma más rígida pero seca"
        ],
        "refs": [
          "Kamath, S. et al. (2008). 'The effect of heat treatment on the foaming properties of milk.' <i>International Dairy Journal</i>."
        ]
      },
      {
        "t": "Lactosa y dulzor percibido",
        "b": "Por qué la leche bien espumada sabe como si le hubieras añadido azúcar.",
        "content": "La leche contiene **Lactosa**, un azúcar complejo. A temperatura de refrigerador, nuestras papilas gustativas son muy malas para percibir la lactosa como dulce.\\n\\nA medida que calientas la leche, el calor descompone algunas estructuras complejas y aumenta la volatilidad de los compuestos aromáticos. En el punto ideal de **55°C a 65°C (130°F a 150°F)**, la leche sabrá increíblemente dulce, complementando el espresso sin necesidad de azúcar.\\n\\nSi hierves la leche, los azúcares sufren reacciones de pardeamiento extremas, destruyendo el dulzor natural e introduciendo sabores sulfurosos y quemados.",
        "points": [
          "Dependencia de la temperatura para la percepción humana del dulzor de la lactosa",
          "La reacción de Maillard en la leche (comienza a altas temperaturas, destruyendo el dulzor delicado)",
          "Por qué los pedidos de leche 'extra caliente' degradan fundamentalmente la calidad de la bebida"
        ],
        "refs": [
          "Kamath et al. (2008), op. cit."
        ]
      },
      {
        "t": "Mecánica de espumado: Aireación vs. Texturizado",
        "b": "Las dos fases físicas distintas al espumar leche.",
        "content": "Un buen espumado de leche se separa en dos fases:\\n\\n1. **Aireación (Stretching)**: Mantienes la punta de la lanceta justo en la superficie. Escuchas un sonido de 'rasgar papel' mientras inyectas aire en la leche fría. Debes hacer esto *solo* mientras la leche está fría.\\n2. **Texturizado (Spinning)**: Una vez que la leche alcanza temperatura corporal, sumerges ligeramente la punta e inclinas la jarra para crear un remolino. Este vórtice rompe las burbujas grandes en microscópicas (microespuma) y distribuye el calor.\\n\\nNo separar estas fases resulta en una espuma rígida y jabonosa descansando sobre leche caliente, en lugar de una textura cohesiva y aterciopelada.",
        "points": [
          "Fase de aireación: inyectar aire mientras la leche está fría y las proteínas son maleables",
          "Fase de vórtice: cizallar las burbujas grandes en microscópicas mediante dinámica de fluidos",
          "Por qué airear leche caliente falla (proteínas ya desnaturalizadas, espuma rígida que se separa)"
        ]
      }
    ]
  }
};`);
console.log("Updated E4, E5, E6");
