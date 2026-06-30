const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'roasting', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(5, () => `export default {
  "en": {
    "mod": "Module 5",
    "title": "Rate of Rise (RoR)",
    "id": "m5",
    "desc": "The speedometer of the roast. Understanding why how fast you heat matters just as much as how hot you get.",
    "topics": [
      {
        "t": "Calculating RoR",
        "b": "The derivative of bean temperature over time.",
        "content": "Bean Temperature (BT) tells you how hot the coffee is right now. **Rate of Rise (RoR)** tells you how fast the coffee is getting hotter.\\n\\nMathematically, it is the derivative of the BT curve, usually measured in degrees per 30 or 60 seconds. For example, an RoR of 15°C/min means that if you change nothing, the coffee will be 15 degrees hotter in exactly one minute.\\n\\nWatching BT is like looking at your car's odometer. Watching RoR is like looking at the speedometer. If you want to avoid crashing (stalling or scorching), you must drive by looking at the speedometer.",
        "points": [
          "RoR = ∆BT / ∆Time",
          "Leading indicator vs. Lagging indicator (RoR tells you what will happen before BT shows it)"
        ]
      },
      {
        "t": "The continually decreasing RoR rule",
        "b": "The controversial but highly effective 'golden rule' of modern specialty roasting.",
        "content": "Scott Rao popularized a polarizing but overwhelmingly successful rule: **The RoR should continually decrease throughout the roast.**\\n\\nWhy? Because as the bean heats up and loses moisture, it requires less and less energy to raise its temperature. If you maintain a flat RoR, or allow the RoR to 'flick' upwards late in the roast, you are effectively pumping too much energy into a fragile, dry structure. This destroys delicate acids and introduces baked or roasted notes.\\n\\nA continually decreasing RoR ensures that you aggressively push heat early when the bean can take it, and gently coast through the delicate Maillard and Development phases without burning the outside of the bean.",
        "points": [
          "The thermodynamics of decreasing moisture and structural density",
          "Why a flat RoR leads to baked coffee",
          "The 'Flick and Crash' phenomenon at First Crack"
        ],
        "refs": [
          "Rao (2014), op. cit. — the foundational text for the continuously decreasing RoR methodology."
        ]
      },
      {
        "t": "The Crash and Flick at First Crack",
        "b": "Why First Crack ruins your RoR curve, and how to prevent it.",
        "content": "As discussed in Module 4, First Crack releases a massive amount of steam. This evaporative cooling causes the bean temperature to stall. On your software, the RoR will plummet drastically (The Crash).\\n\\nBecause the RoR crashed, the roaster (or the machine) often overcompensates, or the steam clears out suddenly, causing the RoR to violently spike upward immediately after (The Flick).\\n\\nThe **Crash and Flick** is the most common roasting defect in the world. It results in coffee that tastes hollow, baked, and astringent. Preventing it requires lowering the gas 45-60 seconds *before* First Crack happens, relying on the machine's thermal momentum to carry the beans through the crack.",
        "points": [
          "Evaporative cooling causing the crash",
          "Loss of moisture mass causing the subsequent flick",
          "Anticipatory gas management as the only solution"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 5",
    "title": "Tasa de Ascenso (Rate of Rise - RoR)",
    "id": "m5",
    "desc": "El velocímetro del tueste. Entender por qué qué tan rápido calientas importa tanto como qué tan caliente llegas.",
    "topics": [
      {
        "t": "Calculando el RoR",
        "b": "La derivada de la temperatura del grano sobre el tiempo.",
        "content": "La Temperatura del Grano (BT) te dice qué tan caliente está el café ahora mismo. La **Tasa de Ascenso (RoR)** te dice qué tan rápido se está calentando el café.\\n\\nMatemáticamente, es la derivada de la curva BT, usualmente medida en grados por 30 o 60 segundos. Por ejemplo, un RoR de 15°C/min significa que si no cambias nada, el café estará 15 grados más caliente en exactamente un minuto.\\n\\nMirar el BT es como mirar el odómetro de tu auto. Mirar el RoR es como mirar el velocímetro. Si quieres evitar chocar (estancarte o quemar), debes conducir mirando el velocímetro.",
        "points": [
          "RoR = ∆BT / ∆Tiempo",
          "Indicador adelantado vs. retrasado (el RoR te dice qué pasará antes de que el BT lo muestre)"
        ]
      },
      {
        "t": "La regla del RoR continuamente decreciente",
        "b": "La 'regla de oro' controvertida pero altamente efectiva del tueste de especialidad moderno.",
        "content": "Scott Rao popularizó una regla polarizante pero abrumadoramente exitosa: **El RoR debe disminuir continuamente durante todo el tueste.**\\n\\n¿Por qué? Porque a medida que el grano se calienta y pierde humedad, requiere cada vez menos energía para elevar su temperatura. Si mantienes un RoR plano, o permites que el RoR tenga un 'flick' (pico hacia arriba) al final del tueste, estás bombeando demasiada energía en una estructura frágil y seca. Esto destruye ácidos delicados e introduce notas de horneado (baked).\\n\\nUn RoR continuamente decreciente asegura que empujes agresivamente el calor temprano cuando el grano puede soportarlo, y te deslices suavemente a través de las fases delicadas sin quemar el exterior del grano.",
        "points": [
          "La termodinámica de la disminución de humedad y densidad",
          "Por qué un RoR plano lleva a café 'horneado' (baked)",
          "El fenómeno 'Flick and Crash' en el Primer Crack"
        ],
        "refs": [
          "Rao (2014), op. cit. — el texto fundacional para la metodología de RoR continuamente decreciente."
        ]
      },
      {
        "t": "El Crash y Flick en el Primer Crack",
        "b": "Por qué el Primer Crack arruina tu curva de RoR, y cómo prevenirlo.",
        "content": "Como se discutió en el Módulo 4, el Primer Crack libera una cantidad masiva de vapor. Este enfriamiento evaporativo hace que la temperatura se estanque. En tu software, el RoR caerá en picada (El Crash).\\n\\nDebido a que el RoR colapsó, el tostador a menudo sobrecompensa, o el vapor se disipa de repente, causando que el RoR se dispare violentamente hacia arriba (El Flick).\\n\\nEl **Crash and Flick** es el defecto de tueste más común en el mundo. Resulta en café que sabe hueco, horneado y astringente. Prevenirlo requiere bajar el gas 45-60 segundos *antes* de que ocurra el Primer Crack.",
        "points": [
          "Enfriamiento evaporativo causando el crash",
          "Pérdida de masa de humedad causando el subsecuente flick",
          "Manejo anticipado del gas como la única solución"
        ]
      }
    ]
  }
};`);

updateModule(6, () => `export default {
  "en": {
    "mod": "Module 6",
    "title": "Software and datalogging",
    "id": "m6",
    "desc": "If you are not logging your roasts, you are not roasting—you are just cooking. How to read Artisan or Cropster.",
    "topics": [
      {
        "t": "The necessity of data in roasting",
        "b": "Human memory is flawed. Datalogging is objective.",
        "content": "Before the 2010s, roasting was considered a 'dark art.' Roasters relied on sight, sound, and smell, guarding their 'secrets.' The reality was that cup consistency was terrible.\\n\\nThe adoption of thermocouple probes linked to software like **Artisan** (open-source) or **Cropster** (commercial) revolutionized the industry. These programs plot Environmental Temperature (ET), Bean Temperature (BT), and RoR in real-time.\\n\\nIf a batch of your Ethiopian washed tastes incredible, you do not have to guess what you did. You open the software, load the profile as a background curve, and trace it exactly for the next batch.",
        "points": [
          "The shift from sensory-based roasting to data-driven roasting",
          "Thermocouple placement and reading delay (why probes lie to you early in the roast)",
          "Using background curves to achieve consistency across batches"
        ]
      },
      {
        "t": "Understanding the graph",
        "b": "Anatomy of a standard roast profile curve.",
        "content": "When you look at a Cropster/Artisan graph, you see three main lines:\\n\\n1. **ET (Environmental Temperature)**: A probe placed in the airflow, measuring the heat *available* to the beans. It starts high, drops slightly at charge, and stays high.\\n2. **BT (Bean Temperature)**: A probe submerged in the tumbling bean mass. It forms a 'check mark' shape—dropping to the Turning Point, then rising steadily.\\n3. **RoR (Rate of Rise)**: The derivative of the BT curve. It spikes massively after the Turning Point, then (ideally) slides down at a steady 45-degree angle until the drop.\\n\\nLearning to read the relationship between ET (the heat you provide) and BT (how the bean reacts) is the core skill of profile roasting.",
        "points": [
          "ET as a proxy for convective heat application",
          "BT as a proxy for internal bean development",
          "Noise filtering and smoothing settings for RoR curves"
        ]
      },
      {
        "t": "Gas and Airflow markers",
        "b": "Logging your physical actions to understand their delayed effects.",
        "content": "A beautiful curve is useless if you don't know how you created it.\\n\\nModern software allows you to log the exact moment you change the Gas or the Airflow. Because of thermal momentum, a gas change at minute 4 might not show its effect on the RoR curve until minute 5.\\n\\nBy rigorously logging your gas changes (e.g., Gas 80% at Charge, Gas 60% at 150°C, Gas 40% at 180°C), you create a 'recipe' of physical actions. Over time, you learn exactly how many seconds it takes for your specific machine to react to a gas cut.",
        "points": [
          "Event logging (Gas, Airflow, Color changes, Cracks)",
          "Correlating physical inputs to delayed thermal outputs",
          "Building a repeatable 'Gas Plan' for a given coffee"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 6",
    "title": "Software y registro de datos (Datalogging)",
    "id": "m6",
    "desc": "Si no estás registrando tus tuestes, no estás tostando—solo estás cocinando. Cómo leer Artisan o Cropster.",
    "topics": [
      {
        "t": "La necesidad de datos en el tueste",
        "b": "La memoria humana falla. El registro de datos es objetivo.",
        "content": "Antes de la década de 2010, el tueste se consideraba un 'arte oscuro'. Los tostadores dependían de la vista, el sonido y el olfato. La realidad era que la consistencia era terrible.\\n\\nLa adopción de termopares conectados a software como **Artisan** o **Cropster** revolucionó la industria. Estos programas grafican la Temperatura Ambiental (ET), la Temperatura del Grano (BT) y el RoR en tiempo real.\\n\\nSi un lote de tu lavado etíope sabe increíble, no tienes que adivinar qué hiciste. Abres el software, cargas el perfil como curva de fondo y lo calcas exactamente para el siguiente lote.",
        "points": [
          "El cambio de tueste sensorial a tueste basado en datos",
          "Ubicación de termopares y retraso de lectura (por qué las sondas te mienten al inicio)",
          "Uso de curvas de fondo (background curves) para lograr consistencia"
        ]
      },
      {
        "t": "Entendiendo la gráfica",
        "b": "Anatomía de una curva de perfil de tueste estándar.",
        "content": "Al mirar una gráfica de Cropster/Artisan, ves tres líneas principales:\\n\\n1. **ET (Temperatura Ambiental)**: Una sonda en el flujo de aire, midiendo el calor *disponible*. Empieza alta, baja un poco en la carga y se mantiene alta.\\n2. **BT (Temperatura del Grano)**: Una sonda sumergida en la masa de granos. Forma un 'símbolo de visto bueno' (check mark)—cayendo al Turning Point y luego subiendo constantemente.\\n3. **RoR (Tasa de Ascenso)**: La derivada de la curva BT. Se dispara masivamente después del Turning Point, luego (idealmente) se desliza hacia abajo en un ángulo constante hasta la salida.\\n\\nAprender a leer la relación entre ET (el calor que provees) y BT (cómo reacciona el grano) es la habilidad central del tueste.",
        "points": [
          "ET como proxy para la aplicación de calor convectivo",
          "BT como proxy para el desarrollo interno del grano",
          "Configuraciones de filtrado de ruido y suavizado para curvas RoR"
        ]
      },
      {
        "t": "Marcadores de Gas y Flujo de Aire",
        "b": "Registrar tus acciones físicas para entender sus efectos retardados.",
        "content": "Una curva hermosa es inútil si no sabes cómo la creaste.\\n\\nEl software moderno permite registrar el momento exacto en que cambias el Gas o el Flujo. Debido al momento térmico, un cambio de gas en el minuto 4 podría no mostrar su efecto en el RoR hasta el minuto 5.\\n\\nAl registrar rigurosamente tus cambios de gas, creas una 'receta' de acciones físicas. Con el tiempo, aprendes exactamente cuántos segundos tarda tu máquina específica en reaccionar a un corte de gas.",
        "points": [
          "Registro de eventos (Gas, Aire, Cambios de color, Cracks)",
          "Correlacionar inputs físicos con outputs térmicos retardados",
          "Construir un 'Plan de Gas' repetible para un café dado"
        ]
      }
    ]
  }
};`);

updateModule(7, () => `export default {
  "en": {
    "mod": "Module 7",
    "title": "Water Activity (aw) and moisture dynamics",
    "id": "m7",
    "desc": "Not all moisture is equal. How bound water protects the bean during roasting.",
    "topics": [
      {
        "t": "Total Moisture vs. Water Activity (aw)",
        "b": "Just because a bean has water doesn't mean the water is doing anything.",
        "content": "When evaluating green coffee, roasters look at two distinct metrics:\\n\\n1. **Total Moisture Content (MC)**: The total percentage of the bean's mass that is water (ideally 10-12%).\\n2. **[Water Activity (aw)](https://en.wikipedia.org/wiki/Water_activity)**: A measurement of how tightly that water is chemically bound to the bean's cellulose matrix. It is measured on a scale from 0.0 to 1.0. Specialty coffee should be around 0.55 to 0.60 aw.\\n\\nTotal Moisture tells you how much water is there. Water Activity tells you how much of that water is 'free' to react. High aw means the water is loose—the beans will fade in flavor quickly on the shelf and are susceptible to mold. Low aw means the water is tightly bound, making the bean highly stable.",
        "points": [
          "Difference between absolute moisture content and aw",
          "Safe aw ranges for green coffee storage and shipping (below 0.60 to prevent microbial growth)",
          "How high aw leads to rapid loss of organic acids (fading) before roasting"
        ],
        "refs": [
          "López-Galilea, I. et al. (2006). 'Influence of roasting on the physical and chemical properties of coffee.' <i>J. Agric. Food Chem.</i>"
        ]
      },
      {
        "t": "Moisture as a heat conductor",
        "b": "Water conducts heat better than cellulose. Wet beans roast differently than dry beans.",
        "content": "Water is an excellent conductor of heat. The moisture inside a green coffee bean acts as the vehicle that carries the heat from the surface of the bean into the core.\\n\\n- **High Moisture Beans (12%+)**: Require a massive amount of energy to push through the drying phase (because water requires immense energy to vaporize). However, once heated, they conduct heat beautifully to the core, roasting very evenly.\\n- **Low Moisture Beans (<9%)**: Require very gentle heat. Because they lack water, the surface of the bean heats up wildly fast, while the core remains cold. These beans are highly susceptible to scorching and tipping.",
        "points": [
          "The high specific heat capacity of water acting as a thermal buffer",
          "Why older, dried-out 'past crop' coffees roast so fast and taste papery",
          "Adapting charge temp and early gas application based on moisture readings"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 7",
    "title": "Actividad de Agua (aw) y dinámica de la humedad",
    "id": "m7",
    "desc": "No toda la humedad es igual. Cómo el agua unida protege al grano durante el tueste.",
    "topics": [
      {
        "t": "Humedad Total vs. Actividad de Agua (aw)",
        "b": "Que un grano tenga agua no significa que el agua esté participando en reacciones.",
        "content": "Al evaluar el café verde, los tostadores miran dos métricas distintas:\\n\\n1. **Contenido de Humedad Total (MC)**: El porcentaje total de la masa del grano que es agua (idealmente 10-12%).\\n2. **[Actividad de Agua (aw)](https://es.wikipedia.org/wiki/Actividad_acuosa)**: Una medida de qué tan fuertemente unida químicamente está esa agua a la matriz de celulosa. Se mide en una escala de 0.0 a 1.0. El café de especialidad debe estar alrededor de 0.55 a 0.60 aw.\\n\\nLa Humedad Total te dice cuánta agua hay. La Actividad de Agua te dice cuánta de esa agua está 'libre' para reaccionar. Un aw alto significa que el agua está suelta—los granos perderán su sabor rápido en el almacén y son susceptibles al moho. Un aw bajo significa que el agua está fuertemente unida, haciendo que el grano sea muy estable.",
        "points": [
          "Diferencia entre contenido absoluto de humedad y aw",
          "Rangos seguros de aw para almacenamiento y transporte (por debajo de 0.60 para prevenir moho)",
          "Cómo un aw alto lleva a una rápida pérdida de ácidos orgánicos antes del tueste"
        ],
        "refs": [
          "López-Galilea, I. et al. (2006). 'Influence of roasting on the physical and chemical properties of coffee.' <i>J. Agric. Food Chem.</i>"
        ]
      },
      {
        "t": "La humedad como conductor de calor",
        "b": "El agua conduce el calor mejor que la celulosa. Los granos húmedos se tuestan distinto a los secos.",
        "content": "El agua es un excelente conductor térmico. La humedad dentro de un grano actúa como el vehículo que transporta el calor desde la superficie del grano hacia el núcleo.\\n\\n- **Granos de alta humedad (12%+)**: Requieren una cantidad masiva de energía para pasar la fase de secado. Sin embargo, una vez calientes, conducen el calor hermosamente hacia el núcleo, tostándose muy uniformemente.\\n- **Granos de baja humedad (<9%)**: Requieren calor muy suave. Como carecen de agua, la superficie del grano se calienta salvajemente rápido, mientras el núcleo permanece frío. Estos granos son muy susceptibles a quemaduras (scorching y tipping).",
        "points": [
          "La alta capacidad calorífica del agua actuando como amortiguador térmico",
          "Por qué los cafés de 'cosecha pasada' secos se tuestan tan rápido y saben a papel",
          "Adaptar la temperatura de carga y la aplicación inicial de gas basado en lecturas de humedad"
        ]
      }
    ]
  }
};`);

updateModule(8, () => `export default {
  "en": {
    "mod": "Module 8",
    "title": "Bean density and cellular structure",
    "id": "m8",
    "desc": "Altitude, processing, and varietal determine how a bean takes heat.",
    "topics": [
      {
        "t": "Altitude and cell density",
        "b": "Why a high-altitude Kenyan takes heat like a rock, and a low-altitude Brazilian burns like paper.",
        "content": "Coffee plants grown at high altitudes (e.g., 1800+ meters in Colombia or Kenya) experience cold nights. To survive, the plant grows very slowly, packing an immense amount of cellular material (and sugar) into a very small seed. This creates a **High-Density** bean.\\n\\nCoffee grown at lower altitudes (e.g., 800 meters in Brazil) grows quickly in warm weather, creating a larger, more porous, **Low-Density** bean.\\n\\n- **High-Density Beans**: Require aggressive heat application early in the roast to penetrate the tight cellular structure.\\n- **Low-Density Beans**: Will scorch instantly if hit with aggressive heat. They require a gentle, lower-temperature roast profile.",
        "points": [
          "The correlation between altitude, maturation speed, and cellular density",
          "Measuring density (grams per milliliter or free-settled density)",
          "Translating density readings into Charge Temperature decisions"
        ],
        "refs": [
          "Schenker (2000), op. cit. — extensively covers cellular structure variations."
        ]
      },
      {
        "t": "Processing methods and heat absorption",
        "b": "Washed vs. Naturals vs. Anaerobics in the roaster.",
        "content": "The way a farmer removes the fruit from the seed drastically changes how the seed behaves in your roaster.\\n\\n- **Washed Coffees**: The fruit is stripped off completely before drying. The bean is dense, uniform, and clean. It can take high heat and roasts very predictably.\\n- **Natural Coffees**: The coffee is dried inside the cherry. The bean absorbs immense amounts of sugar from the fruit, and the cellular structure softens. These sugars burn easily. Naturals require lower charge temperatures and gentler heat during the Maillard phase to prevent scorching.\\n- **Anaerobic/Experimental Coffees**: The heavy fermentation partially predigests the cellulose structure. These beans are extremely fragile and often look much darker in the roaster than they actually are. You must roast them gently and rely on temperature probes rather than sight.",
        "points": [
          "Washed: Structurally intact, heat-tolerant",
          "Natural: High surface sugar, prone to scorching",
          "Anaerobic/Co-fermented: Structurally degraded, fragile, visual color is deceptive"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 8",
    "title": "Densidad del grano y estructura celular",
    "id": "m8",
    "desc": "Altitud, procesamiento y varietal determinan cómo un grano recibe el calor.",
    "topics": [
      {
        "t": "Altitud y densidad celular",
        "b": "Por qué un Kenia de gran altitud recibe calor como una roca, y un Brasil de baja altitud se quema como papel.",
        "content": "Las plantas de café cultivadas a grandes altitudes (ej. 1800+ metros en Colombia o Kenia) experimentan noches frías. Para sobrevivir, la planta crece muy lentamente, empacando una inmensa cantidad de material celular (y azúcar) en una semilla muy pequeña. Esto crea un grano de **Alta Densidad**.\\n\\nEl café cultivado a menores altitudes (ej. 800 metros en Brasil) crece rápidamente en clima cálido, creando un grano más grande, poroso y de **Baja Densidad**.\\n\\n- **Granos de Alta Densidad**: Requieren una aplicación de calor agresiva al principio del tueste para penetrar la apretada estructura celular.\\n- **Granos de Baja Densidad**: Se quemarán al instante si se les aplica calor agresivo. Requieren un perfil de tueste suave y de menor temperatura.",
        "points": [
          "La correlación entre altitud, velocidad de maduración y densidad celular",
          "Medir la densidad (gramos por mililitro)",
          "Traducir lecturas de densidad en decisiones de Temperatura de Carga"
        ],
        "refs": [
          "Schenker (2000), op. cit."
        ]
      },
      {
        "t": "Métodos de procesamiento y absorción de calor",
        "b": "Lavados vs. Naturales vs. Anaeróbicos en el tostador.",
        "content": "La forma en que el productor remueve la fruta de la semilla cambia drásticamente cómo se comporta la semilla en tu tostador.\\n\\n- **Cafés Lavados**: La fruta se quita por completo antes del secado. El grano es denso, uniforme y limpio. Tolera calor alto y se tuesta predeciblemente.\\n- **Cafés Naturales**: El café se seca dentro de la cereza. El grano absorbe inmensas cantidades de azúcar de la fruta, y la estructura celular se ablanda. Estos azúcares se queman fácilmente. Los naturales requieren temperaturas de carga más bajas y calor más suave en Maillard para prevenir quemaduras.\\n- **Cafés Anaeróbicos/Experimentales**: La fermentación pesada pre-digiere parcialmente la estructura de celulosa. Son extremadamente frágiles y a menudo se ven mucho más oscuros de lo que realmente están. Debes tostarlos suavemente y confiar en las sondas de temperatura más que en la vista.",
        "points": [
          "Lavado: Estructuralmente intacto, tolerante al calor",
          "Natural: Alto azúcar superficial, propenso a quemarse",
          "Anaeróbico/Co-fermentado: Estructuralmente degradado, frágil, el color visual engaña"
        ]
      }
    ]
  }
};`);
console.log("Updated R5, R6, R7, R8");
