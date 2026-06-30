const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'roasting', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(1, () => `export default {
  "en": {
    "mod": "Module 1",
    "title": "Thermodynamics of the roasting machine",
    "id": "m1",
    "desc": "Understanding the physical environment inside the drum before understanding the bean.",
    "topics": [
      {
        "t": "Heat transfer methods",
        "b": "Conduction, Convection, and Radiation — the three ways energy enters the bean.",
        "content": "Roasting is fundamentally a thermodynamic process of forcing heat energy into a dense seed. This happens via three mechanisms:\\n\\n1. **Conduction**: Direct physical contact. In a classic drum roaster, the steel drum absorbs heat from the burner. When the coffee beans physically touch the hot steel, heat is transferred directly into them.\\n2. **Convection**: Heat transfer via a fluid (in this case, hot air). The burner heats the air, and the fan pulls this hot air through the tumbling bean mass. This is often the primary driver of roasting in modern machines.\\n3. **Radiation**: Heat transferred via electromagnetic waves (like feeling the heat of a fire on your skin). The hot metal of the roaster radiates energy into the beans without direct contact.\\n\\nDifferent roasters lean heavily on different methods. A classic Probat relies heavily on conduction (heavy cast iron), while a Loring relies almost entirely on convection (hot air fluid bed). Your roasting strategy must adapt to the machine's primary heat transfer method.",
        "points": [
          "Conduction: Direct contact between bean and drum",
          "Convection: Heat transfer via hot airflow through the drum",
          "Radiation: Ambient heat from the hot machine chassis",
          "The ratio of these three determines the machine's thermal profile"
        ],
        "refs": [
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Ch 3: Heat Transfer."
        ]
      },
      {
        "t": "Thermal momentum and inertia",
        "b": "Why your roaster doesn't respond instantly to your gas changes, and why you have to 'drive ahead of the curve'.",
        "content": "A roasting machine is a massive piece of metal. When you increase the gas, the beans do not instantly get hotter. The gas heats the metal, the metal heats the air, and the air/metal heat the bean. This delay is called **Thermal Momentum**.\\n\\nHeavy cast-iron roasters (like vintage Probats) have massive thermal inertia. If you cut the gas completely, the heavy drum will continue roasting the coffee for minutes. Conversely, light steel or fluid-bed roasters react almost instantly.\\n\\nTo roast successfully, you cannot react to what is happening *now*; you must anticipate what will happen in 60 seconds. You are steering a cargo ship, not a sports car.",
        "points": [
          "The delay between adjusting the burner and the beans absorbing the heat",
          "Drum material (cast iron vs. carbon steel) dictates responsiveness",
          "The necessity of predictive adjustments rather than reactive ones"
        ]
      },
      {
        "t": "Airflow (Damper) mechanics",
        "b": "Airflow isn't just about heat—it's about removing smoke, chaff, and moisture.",
        "content": "The fan (controlled by the damper) is the second most important lever on your machine after the gas dial.\\n\\nAirflow serves three purposes:\\n1. **Convective Heat Transfer**: Pulling hot air through the bean mass.\\n2. **Moisture Evaporation**: As beans release water vapor, the air carries it out. Without airflow, the beans would boil/steam in their own moisture.\\n3. **Smoke and Chaff Removal**: During development, beans shed their papery skin (chaff) and emit smoke. If airflow is too low, the smoke settles on the beans, making the coffee taste like an ashtray (a defect called 'smoky' or 'baked').\\n\\nHowever, too much airflow will strip away the heat, stalling the roast, or dry the beans out too aggressively, destroying their delicate aromatic compounds.",
        "points": [
          "Airflow as the primary driver of convection",
          "Evacuating moisture and smoke to prevent 'baked' or 'smoky' defects",
          "The balance: enough air to clean the drum, not so much that you stall the roast"
        ],
        "refs": [
          "Hoos, R. (2015). <i>Modulating the Flavor Profile of Coffee</i>."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "Termodinámica de la máquina tostadora",
    "id": "m1",
    "desc": "Comprender el entorno físico dentro del tambor antes de comprender el grano.",
    "topics": [
      {
        "t": "Métodos de transferencia de calor",
        "b": "Conducción, Convección y Radiación — las tres formas en que la energía entra al grano.",
        "content": "El tueste es fundamentalmente un proceso termodinámico de forzar energía térmica en una semilla densa. Esto ocurre mediante tres mecanismos:\\n\\n1. **Conducción**: Contacto físico directo. En un tostador de tambor clásico, el acero absorbe calor del quemador. Cuando los granos tocan físicamente el acero caliente, el calor se transfiere directamente a ellos.\\n2. **Convección**: Transferencia de calor a través de un fluido (aire caliente). El ventilador empuja aire caliente a través de la masa de granos. Este es a menudo el principal motor del tueste en máquinas modernas.\\n3. **Radiación**: Calor transferido por ondas electromagnéticas. El metal caliente del tostador irradia energía a los granos sin contacto directo.\\n\\nLas diferentes máquinas se apoyan en distintos métodos. Una Probat clásica depende de la conducción (hierro fundido pesado), mientras que una Loring depende casi totalmente de la convección.",
        "points": [
          "Conducción: Contacto directo entre grano y tambor",
          "Convección: Transferencia de calor por flujo de aire caliente",
          "Radiación: Calor ambiental del chasis caliente de la máquina",
          "La proporción de estos tres determina el perfil térmico de la máquina"
        ],
        "refs": [
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Cap 3: Heat Transfer."
        ]
      },
      {
        "t": "Momento e inercia térmica",
        "b": "Por qué tu tostador no responde al instante a los cambios de gas, y por qué debes 'manejar anticipándote a la curva'.",
        "content": "Una máquina tostadora es una enorme pieza de metal. Cuando subes el gas, los granos no se calientan al instante. El gas calienta el metal, el metal el aire, y el aire/metal al grano. Este retraso se llama **Momento Térmico**.\\n\\nLos tostadores pesados de hierro fundido tienen una inercia térmica masiva. Si cortas el gas por completo, el tambor pesado seguirá tostando el café por minutos. Por el contrario, los tostadores de acero ligero reaccionan casi al instante.\\n\\nPara tostar con éxito, no puedes reaccionar a lo que está sucediendo *ahora*; debes anticipar lo que sucederá en 60 segundos. Estás conduciendo un buque de carga, no un auto deportivo.",
        "points": [
          "El retraso entre ajustar el quemador y que los granos absorban el calor",
          "El material del tambor dicta la capacidad de respuesta",
          "La necesidad de ajustes predictivos en lugar de reactivos"
        ]
      },
      {
        "t": "Mecánica del flujo de aire (Damper)",
        "b": "El flujo de aire no se trata solo de calor—se trata de evacuar humo, tamo y humedad.",
        "content": "El ventilador (controlado por el damper) es la segunda palanca más importante de tu máquina después del gas.\\n\\nEl flujo de aire tiene tres propósitos:\\n1. **Transferencia de Calor Convectiva**: Empujar aire caliente a través de los granos.\\n2. **Evaporación de Humedad**: El aire saca el vapor de agua. Sin flujo de aire, los granos hervirían en su propia humedad.\\n3. **Remoción de Humo y Tamo**: Durante el desarrollo, los granos sueltan su piel plateada (tamo) y emiten humo. Si el flujo es muy bajo, el humo se asienta en los granos (defecto de 'ahumado' o 'baked').\\n\\nSin embargo, demasiado flujo de aire eliminará el calor, estancando el tueste, o secará los granos demasiado agresivamente, destruyendo aromas delicados.",
        "points": [
          "El flujo de aire como principal motor de la convección",
          "Evacuar humedad y humo para prevenir defectos",
          "El equilibrio: suficiente aire para limpiar el tambor, no tanto como para estancar el tueste"
        ],
        "refs": [
          "Hoos, R. (2015). <i>Modulating the Flavor Profile of Coffee</i>."
        ]
      }
    ]
  }
};`);

updateModule(2, () => `export default {
  "en": {
    "mod": "Module 2",
    "title": "Bean physiology and the drying phase",
    "id": "m2",
    "desc": "What physically happens to the seed from the moment it drops into the drum until it turns yellow.",
    "topics": [
      {
        "t": "Cellular structure of green coffee",
        "b": "A coffee bean is a dense matrix of cellulose, water, and potential flavor precursors.",
        "content": "Before roasting, a green coffee bean is an incredibly dense, hard seed. Its cellular structure is made of rigid cellulose walls.\\n\\nInside this cellulose matrix are the building blocks of flavor:\\n- **Water**: Usually 10-12% of the bean's weight.\\n- **Sugars**: Primarily sucrose, which will caramelize later.\\n- **Acids**: Chlorogenic, citric, and malic acids.\\n- **Amino acids & Proteins**: Essential for the Maillard reaction.\\n\\nThe roaster's job is to use heat to evaporate the water, soften the cellulose, and force these precursors to react with each other without burning them to carbon.",
        "points": [
          "Cellulose as the rigid structural framework",
          "Moisture content (10-12%) and its role in heat transfer",
          "Flavor precursors (sucrose, amino acids, chlorogenic acids) waiting for thermal activation"
        ],
        "refs": [
          "Schenker, S. (2000). <i>Investigations on the Hot Air Roasting of Coffee Beans</i>. ETH Zurich."
        ]
      },
      {
        "t": "Charge Temperature and the Turning Point",
        "b": "Setting the initial thermal momentum of the roast.",
        "content": "The **Charge Temperature** is how hot the empty roaster is when you drop the green coffee in. This is your most critical early decision.\\n\\nWhen room-temperature beans hit the hot steel drum, the temperature probes plummet rapidly. Eventually, the beans begin to warm up, and the probe temperature bottoms out and starts rising. This is the **Turning Point (TP)**.\\n\\nIf you charge too hot, you risk scorching the outside of the bean before the inside can absorb heat. If you charge too cool, the roast will lack the momentum needed to push through the crucial chemical reactions later, resulting in a baked, lifeless coffee.",
        "points": [
          "Charge Temp: The baseline heat energy of the system",
          "Turning Point (TP): The moment the thermocouple equalizes with the bean surface temperature",
          "Matching charge temp to bean density (dense beans need more initial heat)"
        ]
      },
      {
        "t": "The Drying Phase (Endothermic)",
        "b": "Evaporating the free moisture to prepare the bean for chemical reactions.",
        "content": "From the Turning Point until the beans turn pale yellow (around 150°C / 300°F), the roast is in the **Drying Phase**.\\n\\nDuring this phase, the beans are **Endothermic**—they are aggressively absorbing heat from the roaster. The primary physical action here is the evaporation of 'free water' near the surface of the bean.\\n\\nChemically, very little flavor development is happening here. However, this phase sets up the rest of the roast. If you push through the drying phase too fast, the outside of the bean will dry while the core remains raw and wet, leading to grassy, astringent flavors in the cup.",
        "points": [
          "Endothermic heat absorption",
          "Evaporation of free water vs. bound water",
          "The visual transition from green to pale yellow and the smell of wet hay/bread dough"
        ],
        "refs": [
          "Rao (2014), op. cit."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Fisiología del grano y la fase de secado",
    "id": "m2",
    "desc": "Qué le sucede físicamente a la semilla desde que cae al tambor hasta que se vuelve amarilla.",
    "topics": [
      {
        "t": "Estructura celular del café verde",
        "b": "Un grano de café es una matriz densa de celulosa, agua y precursores potenciales de sabor.",
        "content": "Antes de tostarse, un grano de café verde es una semilla increíblemente densa y dura. Su estructura celular está hecha de paredes de celulosa rígida.\\n\\nDentro de esta matriz están los bloques de construcción del sabor:\\n- **Agua**: Usualmente 10-12% del peso.\\n- **Azúcares**: Principalmente sacarosa.\\n- **Ácidos**: Clorogénicos, cítricos y málicos.\\n- **Aminoácidos y Proteínas**: Esenciales para la reacción de Maillard.\\n\\nEl trabajo del tostador es usar calor para evaporar el agua, ablandar la celulosa y forzar a estos precursores a reaccionar sin quemarlos hasta convertirlos en carbón.",
        "points": [
          "La celulosa como el marco estructural rígido",
          "El contenido de humedad (10-12%) y su papel en la transferencia de calor",
          "Precursores de sabor esperando la activación térmica"
        ],
        "refs": [
          "Schenker, S. (2000). <i>Investigations on the Hot Air Roasting of Coffee Beans</i>. ETH Zurich."
        ]
      },
      {
        "t": "Temperatura de Carga y el Punto de Inflexión (Turning Point)",
        "b": "Estableciendo el momento térmico inicial del tueste.",
        "content": "La **Temperatura de Carga (Charge Temp)** es qué tan caliente está el tostador vacío cuando dejas caer el café. Esta es tu decisión temprana más crítica.\\n\\nCuando los granos a temperatura ambiente tocan el tambor caliente, las sondas de temperatura caen en picada. Eventualmente, los granos se calientan y la temperatura de la sonda toca fondo y comienza a subir. Este es el **Punto de Inflexión (Turning Point o TP)**.\\n\\nSi cargas demasiado caliente, corres el riesgo de quemar (scorch) el exterior del grano. Si cargas muy frío, el tueste carecerá del impulso para las reacciones químicas posteriores, resultando en un café 'horneado' (baked) y sin vida.",
        "points": [
          "Temp. de Carga: La energía térmica base del sistema",
          "Turning Point (TP): El momento en que el termopar se iguala con la temperatura de la superficie del grano",
          "Ajustar la carga a la densidad del grano (granos densos necesitan más calor)"
        ]
      },
      {
        "t": "La Fase de Secado (Endotérmica)",
        "b": "Evaporando la humedad libre para preparar el grano para reacciones químicas.",
        "content": "Desde el Turning Point hasta que los granos se vuelven de color amarillo pálido (alrededor de 150°C), el tueste está en la **Fase de Secado**.\\n\\nDurante esta fase, los granos son **Endotérmicos**—están absorbiendo agresivamente el calor. La acción física principal aquí es la evaporación del 'agua libre' cerca de la superficie del grano.\\n\\nQuímicamente, ocurre muy poco desarrollo de sabor aquí. Sin embargo, si pasas por la fase de secado demasiado rápido, el exterior se secará mientras el núcleo permanece crudo y húmedo, lo que lleva a sabores herbáceos y astringentes en la taza.",
        "points": [
          "Absorción de calor endotérmica",
          "Evaporación de agua libre vs. agua unida",
          "La transición visual de verde a amarillo pálido y el olor a heno mojado/masa de pan"
        ],
        "refs": [
          "Rao (2014), op. cit."
        ]
      }
    ]
  }
};`);

updateModule(3, () => `export default {
  "en": {
    "mod": "Module 3",
    "title": "The Maillard reaction and caramelization",
    "id": "m3",
    "desc": "The chemical engine of flavor creation, turning a grassy seed into something that tastes like chocolate and fruit.",
    "topics": [
      {
        "t": "The Maillard Reaction",
        "b": "The same reaction that browns a steak creates the structural complexity of coffee flavor.",
        "content": "As the beans turn from yellow to tan to light brown (around 150°C to 200°C), they enter the **Maillard Phase**.\\n\\nThe **[Maillard Reaction](https://en.wikipedia.org/wiki/Maillard_reaction)** is a complex chemical reaction between amino acids and reducing sugars. In coffee, this reaction creates hundreds of new aromatic compounds (melanoidins), responsible for the roasted, malty, toasted, and savory notes in the cup.\\n\\nThis phase is critical for building the coffee's body (mouthfeel) and complexity. If this phase is too short, the coffee will taste thin and purely acidic. If it is too long, the coffee will taste flat, muted, and 'baked,' as the delicate acids are destroyed by prolonged heat exposure.",
        "points": [
          "Chemical interaction between amino acids and reducing sugars",
          "Creation of melanoidins (contributing to brown color and body/mouthfeel)",
          "The delicate balance of time: too fast = thin/sour, too slow = flat/baked"
        ],
        "refs": [
          "Farah, A. (2012). <i>Coffee: Emerging Health Effects and Disease Prevention</i> (contains detailed chapters on Maillard chemistry in coffee)."
        ]
      },
      {
        "t": "Caramelization",
        "b": "Breaking down complex sugars into sweet, bitter, and aromatic compounds.",
        "content": "As the temperature approaches 170°C (338°F), **[Caramelization](https://en.wikipedia.org/wiki/Caramelization)** begins running concurrently with the Maillard reaction.\\n\\nCaramelization specifically targets the sucrose (sugar) in the bean. Heat breaks the sucrose molecules apart, transforming them into entirely new compounds. \\n- Early caramelization yields intensely sweet, caramel and fruity notes.\\n- Late caramelization breaks these sweet compounds down further into dark, bitter, and astringent compounds.\\n\\nThe roaster's dilemma is that as you roast darker, you increase perceived sweetness *up to a point*, after which caramelization destroys the sugar, replacing sweetness with bitterness.",
        "points": [
          "Pyrolysis of sucrose under high heat",
          "The bell curve of sweetness: increasing early on, then plummeting as sugars turn to carbon/bitter compounds",
          "How caramelization differs chemically from Maillard (sugars only, no proteins required)"
        ]
      },
      {
        "t": "Acid degradation",
        "b": "Managing the bright, fruity notes by controlling how much acid survives the heat.",
        "content": "Green coffee contains high levels of **[Chlorogenic Acid (CGA)](https://en.wikipedia.org/wiki/Chlorogenic_acid)**, which tastes fiercely bitter and sour in its raw form. \\n\\nDuring the Maillard phase, heat breaks down CGA into quinic and caffeic acids. Simultaneously, delicate organic acids (like Citric and Malic acid, which provide fruit flavors) begin to degrade.\\n\\nIf you roast very light and fast, you preserve these fruit acids, resulting in a bright, juicy cup (the modern 'Nordic' style). If you roast slower or darker, these acids are destroyed, resulting in a smooth, low-acid, chocolaty cup. Roasting is the act of deciding exactly how much acid you want to survive.",
        "points": [
          "Chlorogenic acid breakdown (reduces raw sourness/bitterness)",
          "Citric and malic acid preservation vs. degradation",
          "The trade-off between bright acidity (light roast) and rich sweetness/body (medium roast)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "La reacción de Maillard y caramelización",
    "id": "m3",
    "desc": "El motor químico de la creación de sabor, convirtiendo una semilla herbácea en algo que sabe a chocolate y fruta.",
    "topics": [
      {
        "t": "La Reacción de Maillard",
        "b": "La misma reacción que dora un filete crea la complejidad estructural del sabor del café.",
        "content": "A medida que los granos pasan de amarillo a bronceado a marrón claro (150°C a 200°C), entran en la **Fase de Maillard**.\\n\\nLa **[Reacción de Maillard](https://es.wikipedia.org/wiki/Reacci%C3%B3n_de_Maillard)** es una reacción química compleja entre aminoácidos y azúcares reductores. En el café, crea cientos de nuevos compuestos aromáticos (melanoidinas), responsables de las notas tostadas, maltosas y saladas.\\n\\nEsta fase es crítica para construir el cuerpo y la complejidad del café. Si esta fase es muy corta, el café sabrá delgado y puramente ácido. Si es muy larga, sabrá plano y 'horneado', ya que los ácidos delicados son destruidos por la exposición prolongada al calor.",
        "points": [
          "Interacción química entre aminoácidos y azúcares reductores",
          "Creación de melanoidinas (contribuyen al color marrón y al cuerpo)",
          "El delicado equilibrio del tiempo: muy rápido = delgado/ácido, muy lento = plano/baked"
        ],
        "refs": [
          "Farah, A. (2012). <i>Coffee: Emerging Health Effects and Disease Prevention</i>."
        ]
      },
      {
        "t": "Caramelización",
        "b": "Descomposición de azúcares complejos en compuestos dulces, amargos y aromáticos.",
        "content": "A medida que la temperatura se acerca a los 170°C (338°F), la **[Caramelización](https://es.wikipedia.org/wiki/Caramelizaci%C3%B3n)** comienza a ejecutarse simultáneamente con la reacción de Maillard.\\n\\nLa caramelización ataca específicamente a la sacarosa (azúcar) en el grano. El calor rompe las moléculas de sacarosa, transformándolas en compuestos nuevos.\\n- La caramelización temprana produce notas intensamente dulces a caramelo y frutas.\\n- La caramelización tardía descompone estos compuestos en notas oscuras y amargas.\\n\\nEl dilema del tostador es que a medida que tuestas más oscuro, aumentas el dulzor percibido *hasta cierto punto*, después del cual la caramelización destruye el azúcar, reemplazando el dulzor por amargor.",
        "points": [
          "Pirólisis de sacarosa bajo alto calor",
          "La curva de campana del dulzor: aumenta al principio, luego cae en picada",
          "Cómo la caramelización difiere de Maillard (solo azúcares, no requiere proteínas)"
        ]
      },
      {
        "t": "Degradación de ácidos",
        "b": "Manejar las notas brillantes y frutales controlando cuánto ácido sobrevive al calor.",
        "content": "El café verde contiene altos niveles de **[Ácido Clorogénico (CGA)](https://es.wikipedia.org/wiki/%C3%81cido_clorog%C3%A9nico)**, que sabe ferozmente amargo y agrio en su forma cruda.\\n\\nDurante la fase de Maillard, el calor descompone el CGA en ácidos quínico y cafeico. Simultáneamente, los ácidos orgánicos delicados (como el ácido cítrico y málico, que dan sabores a frutas) comienzan a degradarse.\\n\\nSi tuestas muy claro y rápido, preservas estos ácidos frutales, resultando en una taza brillante y jugosa (el estilo 'Nórdico'). Si tuestas más lento u oscuro, estos ácidos se destruyen, resultando en una taza suave y achocolatada. Tostar es el acto de decidir exactamente cuánto ácido quieres que sobreviva.",
        "points": [
          "Descomposición del ácido clorogénico (reduce la acidez cruda/amargor)",
          "Preservación vs. degradación del ácido cítrico y málico",
          "El compromiso entre acidez brillante (tueste claro) y rico dulzor/cuerpo (tueste medio)"
        ]
      }
    ]
  }
};`);

updateModule(4, () => `export default {
  "en": {
    "mod": "Module 4",
    "title": "First Crack and development",
    "id": "m4",
    "desc": "The critical threshold where internal pressure breaches the bean's structure, signaling the start of the final flavor development.",
    "topics": [
      {
        "t": "The physics of First Crack",
        "b": "Steam pressure physically fracturing the cellulose structure.",
        "content": "Throughout the roast, water inside the bean turns to steam. Because the bean's cellular walls are incredibly dense, this steam gets trapped, building immense internal pressure.\\n\\nAround 195°C to 205°C (385°F to 400°F), the pressure exceeds the structural integrity of the cellulose. The bean physically fractures, releasing a loud, popcorn-like popping sound. This is **First Crack**.\\n\\nThis is a violent, exothermic event. The sudden release of steam rapidly cools the immediate environment around the beans (the 'First Crack crash'), forcing the roaster to carefully manage the gas application to keep the roast from stalling.",
        "points": [
          "Steam pressure exceeding cellulose tensile strength",
          "The 'First Crack crash' (sudden evaporative cooling effect)",
          "Why anticipating First Crack and managing gas energy prior to it is the hallmark of a skilled roaster"
        ]
      },
      {
        "t": "Development Time Ratio (DTR)",
        "b": "The percentage of the total roast time spent after First Crack.",
        "content": "The time from the start of First Crack until you drop the coffee into the cooling tray is called the **Development Phase**.\\n\\nThe **Development Time Ratio (DTR)** is a metric popularized by Scott Rao. It is the development time divided by the total roast time. For example, if a roast takes 10 minutes, and 2 minutes are spent after First Crack, the DTR is 20%.\\n\\nRao and others argue that for filter coffee, a DTR between 15% and 20% ensures that the core of the bean is fully cooked (eliminating grassy, raw flavors) without roasting so dark that you destroy the origin character. Espresso roasts often push into the 20% to 25% DTR range to maximize solubility and reduce acidity.",
        "points": [
          "Defining Development Phase (Start of FC to Drop)",
          "Calculating DTR (Development Time / Total Time)",
          "Using DTR as a benchmark for interior bean doneness vs. exterior color"
        ],
        "refs": [
          "Rao (2014), op. cit. — primary popularizer of the DTR metric."
        ]
      },
      {
        "t": "Second Crack and dark roasts",
        "b": "When cellular structure completely degrades and oils migrate to the surface.",
        "content": "If you leave the beans in the roaster past development, they will eventually undergo a **Second Crack** (around 225°C / 435°F).\\n\\nUnlike First Crack (which is driven by steam), Second Crack is driven by the combustion of the bean's woody matrix and the rapid release of CO2. The beans become extremely brittle, and the internal coffee oils (lipids) migrate to the surface, giving dark roasts their shiny, greasy appearance.\\n\\nAt this stage, almost all origin character (fruit, floral notes) is completely burned away. The coffee will taste solely of the roasting process itself—smoky, ashy, and intensely bitter (classic 'French Roast' or 'Italian Roast'). Specialty coffee almost never ventures into Second Crack.",
        "points": [
          "Second crack as CO2/matrix combustion, not steam release",
          "Lipid migration to the bean surface",
          "The complete destruction of origin character in favor of 'roast character'"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "El Primer Crack y el desarrollo",
    "id": "m4",
    "desc": "El umbral crítico donde la presión interna rompe la estructura del grano, marcando el inicio del desarrollo final del sabor.",
    "topics": [
      {
        "t": "La física del Primer Crack",
        "b": "Presión de vapor fracturando físicamente la estructura de celulosa.",
        "content": "A lo largo del tueste, el agua dentro del grano se convierte en vapor. Debido a que las paredes celulares son increíblemente densas, este vapor queda atrapado, construyendo una inmensa presión interna.\\n\\nAlrededor de 195°C a 205°C (385°F a 400°F), la presión supera la integridad estructural de la celulosa. El grano se fractura físicamente, emitiendo un sonido fuerte similar al de las palomitas de maíz. Este es el **Primer Crack (First Crack)**.\\n\\nEste es un evento violento y exotérmico. La repentina liberación de vapor enfría rápidamente el entorno inmediato alrededor de los granos (el 'crash del Primer Crack'), obligando al tostador a manejar cuidadosamente el gas para evitar que el tueste se estanque.",
        "points": [
          "Presión de vapor superando la resistencia a la tracción de la celulosa",
          "El 'crash' del Primer Crack (efecto repentino de enfriamiento evaporativo)",
          "Por qué anticipar el Primer Crack y manejar la energía es la marca de un tostador hábil"
        ]
      },
      {
        "t": "Ratio de Tiempo de Desarrollo (DTR)",
        "b": "El porcentaje del tiempo total de tueste transcurrido después del Primer Crack.",
        "content": "El tiempo desde el inicio del Primer Crack hasta que sacas el café se llama la **Fase de Desarrollo**.\\n\\nEl **Ratio de Tiempo de Desarrollo (DTR)** es una métrica popularizada por Scott Rao. Es el tiempo de desarrollo dividido por el tiempo total de tueste. Por ejemplo, si un tueste dura 10 minutos y 2 minutos transcurren tras el Primer Crack, el DTR es del 20%.\\n\\nRao y otros argumentan que para café filtrado, un DTR entre 15% y 20% asegura que el núcleo del grano esté completamente cocido (eliminando sabores crudos y a hierba) sin tostar tan oscuro que destruyas el carácter de origen. Los tuestes para espresso a menudo entran en el rango de 20% a 25% para maximizar la solubilidad.",
        "points": [
          "Definición de Fase de Desarrollo (Inicio de FC a Salida)",
          "Cálculo de DTR (Tiempo de Desarrollo / Tiempo Total)",
          "Uso del DTR como punto de referencia para la cocción interior del grano vs. color exterior"
        ],
        "refs": [
          "Rao (2014), op. cit. — principal popularizador de la métrica DTR."
        ]
      },
      {
        "t": "Segundo Crack y tuestes oscuros",
        "b": "Cuando la estructura celular se degrada por completo y los aceites migran a la superficie.",
        "content": "Si dejas los granos en el tostador más allá del desarrollo, eventualmente sufrirán un **Segundo Crack** (alrededor de 225°C).\\n\\nA diferencia del Primer Crack (impulsado por vapor), el Segundo Crack es impulsado por la combustión de la matriz leñosa del grano y la rápida liberación de CO2. Los granos se vuelven extremadamente quebradizos y los aceites internos (lípidos) migran a la superficie, dando a los tuestes oscuros su apariencia brillante y grasosa.\\n\\nEn esta etapa, casi todo el carácter de origen (fruta, notas florales) se quema por completo. El café sabrá únicamente al proceso de tueste en sí—ahumado, a ceniza e intensamente amargo. El café de especialidad casi nunca llega al Segundo Crack.",
        "points": [
          "El segundo crack como combustión de matriz/CO2, no liberación de vapor",
          "Migración de lípidos a la superficie del grano",
          "La destrucción completa del carácter de origen a favor del 'carácter de tueste'"
        ]
      }
    ]
  }
};`);
console.log("Updated R1, R2, R3, R4");
