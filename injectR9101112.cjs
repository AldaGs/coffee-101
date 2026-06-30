const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'roasting', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(9, () => `export default {
  "en": {
    "mod": "Module 9",
    "title": "Batch size and heat application",
    "id": "m9",
    "desc": "You cannot roast 5kg the same way you roast 10kg. Understanding thermal mass.",
    "topics": [
      {
        "t": "Thermal mass and momentum",
        "b": "A 10kg batch fights the roaster's heat; a 3kg batch surrenders to it.",
        "content": "Every roasting machine has a maximum capacity (e.g., 12kg). However, roasting at 100% capacity is incredibly difficult because the sheer mass of the cold, wet coffee absorbs all the heat the burner can produce.\\n\\n- **Full Capacity (12kg)**: You must charge very hot and use 100% gas just to keep the roast from stalling. You have very little control; the coffee is driving the machine.\\n- **Half Capacity (6kg)**: The machine has a massive surplus of power. If you charge hot or use 100% gas, the roast will fly out of control and finish in 5 minutes. You must use drastically lower charge temperatures and lower gas settings to maintain a normal 10-12 minute profile.",
        "points": [
          "The relationship between bean mass and required burner energy",
          "Why most specialty roasters only fill their machines to 70-80% capacity",
          "Scaling a profile: Why you can't just 'use half the gas' for half the batch"
        ]
      },
      {
        "t": "Airflow constraints by batch size",
        "b": "The fan does more than heat—it physically moves the beans.",
        "content": "In a drum roaster, airflow pulls heat through the drum. But it also physically lifts the beans.\\n\\nIf you roast a very small batch (e.g., 2kg in a 12kg machine) and use your normal high airflow setting, the powerful fan will literally suck the lightweight beans into the exhaust pipes, causing fires or ruined batches.\\n\\nConversely, a massive 12kg batch physically obstructs the airflow. You have to increase the fan speed significantly just to pull enough air through the dense pile of coffee to evacuate the smoke.",
        "points": [
          "Physical obstruction of airflow by large batch sizes",
          "Risk of bean-lifting/exhaust fires with small batches and high fan speeds",
          "Adjusting damper settings based on drum volume occupancy"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 9",
    "title": "Tamaño del lote y aplicación de calor",
    "id": "m9",
    "desc": "No puedes tostar 5kg de la misma forma que tuestas 10kg. Entendiendo la masa térmica.",
    "topics": [
      {
        "t": "Masa y momento térmico",
        "b": "Un lote de 10kg pelea contra el calor del tostador; un lote de 3kg se rinde ante él.",
        "content": "Toda máquina tostadora tiene una capacidad máxima (ej. 12kg). Sin embargo, tostar al 100% de capacidad es increíblemente difícil porque la masa de café frío y húmedo absorbe todo el calor que el quemador puede producir.\\n\\n- **Capacidad Máxima (12kg)**: Debes cargar muy caliente y usar el gas al 100% solo para evitar que el tueste se estanque. Tienes muy poco control; el café conduce a la máquina.\\n- **Media Capacidad (6kg)**: La máquina tiene un excedente masivo de poder. Si cargas caliente o usas el gas al 100%, el tueste se descontrolará y terminará en 5 minutos. Debes usar temperaturas de carga drásticamente más bajas y menos gas para mantener un perfil normal de 10-12 minutos.",
        "points": [
          "La relación entre la masa de granos y la energía requerida del quemador",
          "Por qué la mayoría de los tostadores de especialidad solo llenan sus máquinas al 70-80%",
          "Escalar un perfil: Por qué no puedes simplemente 'usar la mitad del gas' para la mitad del lote"
        ]
      },
      {
        "t": "Restricciones de flujo de aire por tamaño de lote",
        "b": "El ventilador hace más que calentar—mueve físicamente los granos.",
        "content": "En un tostador de tambor, el flujo de aire empuja el calor a través del tambor. Pero también levanta físicamente los granos.\\n\\nSi tuestas un lote muy pequeño (ej. 2kg en una máquina de 12kg) y usas tu configuración normal de alto flujo de aire, el potente ventilador literalmente succionará los granos ligeros hacia los tubos de escape, causando incendios o arruinando el lote.\\n\\nPor el contrario, un lote masivo de 12kg obstruye físicamente el flujo de aire. Tienes que aumentar significativamente la velocidad del ventilador solo para empujar suficiente aire a través de la densa pila de café para evacuar el humo.",
        "points": [
          "Obstrucción física del flujo de aire por lotes grandes",
          "Riesgo de succión de granos/incendios en el escape con lotes pequeños",
          "Ajustar el damper según la ocupación de volumen del tambor"
        ]
      }
    ]
  }
};`);

updateModule(10, () => `export default {
  "en": {
    "mod": "Module 10",
    "title": "Cooling and stopping the roast",
    "id": "m10",
    "desc": "The roast isn't over when it leaves the drum. Managing the cooling tray.",
    "topics": [
      {
        "t": "Stopping the thermal momentum",
        "b": "Coffee continues to roast itself in the cooling tray if not aggressively managed.",
        "content": "When you open the drum door and drop the coffee, it is 200°C+ and fiercely exothermic. If you just leave it in a pile, the beans in the center will continue to roast, bake, and eventually catch fire.\\n\\nThe **Cooling Tray** is equipped with a massive suction fan. Its job is to halt the chemical reactions instantly. A specialty standard is that the coffee must return to room temperature within **3 to 4 minutes**.\\n\\nIf your cooling tray is clogged with chaff or the fan is broken, and the coffee takes 8 minutes to cool, you will lose all the delicate acidity you worked so hard to preserve, and the coffee will taste baked.",
        "points": [
          "Exothermic momentum post-drop",
          "The 4-minute cooling rule to preserve acidity and halt Maillard/Caramelization",
          "The danger of 'baked' flavors from slow cooling"
        ]
      },
      {
        "t": "Quenching (Water injection)",
        "b": "A controversial commercial technique for stopping roasts instantly.",
        "content": "In massive commercial operations (like Folgers or Starbucks), they cannot wait 4 minutes for coffee to cool. They use a technique called **Quenching**.\\n\\nSeconds before dropping the coffee, water is sprayed directly into the hot roasting drum. The water flashes to steam, instantly halting the roast and cooling the beans. \\n\\nWhile efficient, this introduces moisture back into the roasted coffee, drastically reducing shelf life and dulling the flavor. It also makes the coffee weigh more (water weight), which increases profits. Specialty coffee strictly forbids quenching, relying entirely on air cooling.",
        "points": [
          "The physics of evaporative cooling via quenching",
          "The negative impact on shelf life, flavor clarity, and staling rates",
          "Economic vs. Quality trade-offs in commercial roasting"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 10",
    "title": "Enfriamiento y detención del tueste",
    "id": "m10",
    "desc": "El tueste no termina cuando sale del tambor. Manejo de la bandeja de enfriamiento.",
    "topics": [
      {
        "t": "Detener el momento térmico",
        "b": "El café continúa tostándose a sí mismo en la bandeja de enfriamiento si no se maneja agresivamente.",
        "content": "Cuando abres la puerta del tambor y sacas el café, está a más de 200°C y es ferozmente exotérmico. Si solo lo dejas en una pila, los granos en el centro continuarán tostándose, horneándose y eventualmente se incendiarán.\\n\\nLa **Bandeja de Enfriamiento (Cooling Tray)** está equipada con un ventilador de succión masivo. Su trabajo es detener las reacciones químicas al instante. Un estándar de especialidad es que el café debe volver a temperatura ambiente en **3 a 4 minutos**.\\n\\nSi tu bandeja está obstruida con tamo o el ventilador está roto, y el café tarda 8 minutos en enfriarse, perderás toda la acidez delicada que tanto te costó preservar, y el café sabrá 'horneado' (baked).",
        "points": [
          "Momento exotérmico post-salida",
          "La regla de los 4 minutos de enfriamiento para preservar acidez y detener Maillard",
          "El peligro de sabores 'baked' por enfriamiento lento"
        ]
      },
      {
        "t": "Quenching (Inyección de agua)",
        "b": "Una técnica comercial controvertida para detener tuestes al instante.",
        "content": "En operaciones comerciales masivas, no pueden esperar 4 minutos a que el café se enfríe. Usan una técnica llamada **Quenching**.\\n\\nSegundos antes de sacar el café, se rocía agua directamente dentro del tambor caliente. El agua se convierte instantáneamente en vapor, deteniendo el tueste y enfriando los granos.\\n\\nAunque es eficiente, esto reintroduce humedad en el café tostado, reduciendo drásticamente su vida útil y apagando el sabor. También hace que el café pese más (peso de agua), lo que aumenta las ganancias. El café de especialidad prohíbe estrictamente el quenching, dependiendo enteramente del enfriamiento por aire.",
        "points": [
          "La física del enfriamiento evaporativo vía quenching",
          "El impacto negativo en la vida útil, claridad de sabor y tasas de envejecimiento",
          "Compromisos económicos vs. de calidad en el tueste comercial"
        ]
      }
    ]
  }
};`);

updateModule(11, () => `export default {
  "en": {
    "mod": "Module 11",
    "title": "Common roast defects",
    "id": "m11",
    "desc": "How to identify mistakes in the cup and trace them back to the exact minute in the roasting curve.",
    "topics": [
      {
        "t": "Baked (Flat RoR / Stalled)",
        "b": "The most insidious defect in specialty coffee.",
        "content": "A **Baked** coffee doesn't taste 'bad' in the way burnt coffee does; it just tastes empty. The acidity is gone, the sweetness is flat, and it tastes like cardboard or dull oatmeal.\\n\\n**Cause**: The Rate of Rise (RoR) stalled or went flat during the Maillard or Development phase. You failed to keep the momentum moving forward. The heat destroyed the delicate acids without driving the caramelization forward to create sweetness.\\n**Fix**: Ensure a continually decreasing RoR that never crashes to zero before the drop.",
        "points": [
          "Sensory: Flat, oatmeal, cardboard, lacking acidity and sweetness",
          "Cause: Flat or crashed RoR late in the roast",
          "Fix: Better gas management around First Crack"
        ]
      },
      {
        "t": "Underdeveloped (Grassy / Green)",
        "b": "When the outside looks brown, but the inside is still raw.",
        "content": "An **Underdeveloped** coffee tastes aggressively sour, astringent (drying out the mouth), and often tastes like hay, green peas, or grass.\\n\\n**Cause**: The core of the bean did not receive enough heat to complete the Maillard reaction. This happens if you drop the coffee too soon after First Crack (DTR too low), or if you rush through the drying phase so fast that the outside burns before the inside cooks.\\n**Fix**: Extend the Development Time Ratio (DTR) to at least 15%, or slow down the initial drying phase to allow heat to penetrate the core.",
        "points": [
          "Sensory: Sour, grassy, astringent, green peas",
          "Cause: Inadequate heat penetration to the core (low DTR or rushed drying phase)",
          "Fix: Extend development time or slow down the early phases"
        ]
      },
      {
        "t": "Scorched / Tipping",
        "b": "Physical burn marks on the beans.",
        "content": "**Scorching** appears as dark, burnt patches on the flat side of the bean. **Tipping** appears as burnt, black marks specifically on the 'tips' (the germ ends) of the bean. The cup will taste smoky, ashy, and acrid.\\n\\n**Cause**: The drum was too hot when the coffee was dropped in (Charge Temp too high), or the initial gas application was too aggressive for the bean's density/moisture.\\n**Fix**: Lower the charge temperature, reduce early gas application, and increase drum speed (if variable) to prevent the beans from resting against the hot metal for too long.",
        "points": [
          "Sensory: Ashy, smoky, acrid bitterness",
          "Visual: Black burn marks on flat sides (scorching) or ends (tipping)",
          "Cause: Excessive conduction heat early in the roast (Charge temp too high)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 11",
    "title": "Defectos comunes de tueste",
    "id": "m11",
    "desc": "Cómo identificar errores en la taza y rastrearlos hasta el minuto exacto en la curva de tueste.",
    "topics": [
      {
        "t": "Baked (Horneado / RoR Estancado)",
        "b": "El defecto más insidioso en el café de especialidad.",
        "content": "Un café **Baked (Horneado)** no sabe 'mal' de la forma en que lo hace el café quemado; simplemente sabe vacío. La acidez se ha ido, el dulzor es plano, y sabe a cartón o avena sosa.\\n\\n**Causa**: La Tasa de Ascenso (RoR) se estancó o se aplanó durante la fase de Maillard o de Desarrollo. Fallaste en mantener el momento avanzando. El calor destruyó los ácidos delicados sin impulsar la caramelización para crear dulzor.\\n**Solución**: Asegura un RoR continuamente decreciente que nunca colapse a cero antes de sacar el café.",
        "points": [
          "Sensorial: Plano, avena, cartón, falta de acidez y dulzor",
          "Causa: RoR plano o colapsado (crashed) al final del tueste",
          "Solución: Mejor manejo del gas alrededor del Primer Crack"
        ]
      },
      {
        "t": "Subdesarrollado (Grassy / Verde)",
        "b": "Cuando el exterior se ve marrón, pero el interior sigue crudo.",
        "content": "Un café **Subdesarrollado** sabe agresivamente ácido, astringente (seca la boca), y a menudo sabe a heno, chícharos (guisantes) verdes o pasto.\\n\\n**Causa**: El núcleo del grano no recibió suficiente calor para completar la reacción de Maillard. Esto ocurre si sacas el café demasiado pronto después del Primer Crack (DTR muy bajo), o si te apresuras por la fase de secado tan rápido que el exterior se quema antes de que el interior se cocine.\\n**Solución**: Extiende el Ratio de Tiempo de Desarrollo (DTR) a al menos 15%, o ralentiza la fase de secado inicial para permitir que el calor penetre al núcleo.",
        "points": [
          "Sensorial: Ácido, a hierba, astringente, chícharos verdes",
          "Causa: Penetración inadecuada de calor al núcleo (DTR bajo o secado apresurado)",
          "Solución: Extender tiempo de desarrollo o ralentizar fases tempranas"
        ]
      },
      {
        "t": "Scorched (Quemado) / Tipping (Puntas quemadas)",
        "b": "Marcas físicas de quemaduras en los granos.",
        "content": "El **Scorching** aparece como parches oscuros y quemados en el lado plano del grano. El **Tipping** aparece como marcas negras y quemadas específicamente en las 'puntas' del grano. La taza sabrá ahumada, a ceniza y acre.\\n\\n**Causa**: El tambor estaba demasiado caliente al cargar el café (Temp. de Carga muy alta), o la aplicación inicial de gas fue demasiado agresiva para la densidad/humedad del grano.\\n**Solución**: Baja la temperatura de carga, reduce la aplicación temprana de gas y aumenta la velocidad del tambor (si es variable) para evitar que los granos descansen contra el metal caliente demasiado tiempo.",
        "points": [
          "Sensorial: Amargor a ceniza, ahumado, acre",
          "Visual: Marcas negras en lados planos (scorching) o puntas (tipping)",
          "Causa: Excesivo calor de conducción al inicio (Temp. de carga muy alta)"
        ]
      }
    ]
  }
};`);

updateModule(12, () => `export default {
  "en": {
    "mod": "Module 12",
    "title": "Cupping and quality control",
    "id": "m12",
    "desc": "How to blind-taste your roasts objectively to close the feedback loop.",
    "topics": [
      {
        "t": "The SCA Cupping Protocol",
        "b": "Why we cup instead of brewing V60s to evaluate roasts.",
        "content": "If you evaluate your roasts by brewing a V60, you are introducing dozens of variables (pour technique, grind size, channeling). If the coffee tastes bad, you don't know if the roast was bad or the barista was bad.\\n\\n**Cupping** is full-immersion brewing (coffee steeping in bowls). It removes barista technique from the equation, providing an objective, standardized baseline.\\n\\nThe protocol requires a specific ratio (8.25g of coffee per 150ml of water), water poured directly off the boil, and a crust 'break' at exactly 4 minutes. This standardization allows you to isolate the roast profile as the only variable.",
        "points": [
          "Isolation of variables: Removing brewing technique from evaluation",
          "Standardized ratio and timeline (4-minute break)",
          "Evaluating fragrance (dry), aroma (wet), flavor, acidity, and body systematically"
        ],
        "refs": [
          "Specialty Coffee Association. <i>Cupping Protocols</i>. https://sca.coffee"
        ]
      },
      {
        "t": "Triangulation and blind tasting",
        "b": "Defeating your own cognitive bias.",
        "content": "If you know you are tasting the 'expensive Geisha,' your brain will convince you it tastes better. If you know you are tasting the batch where you messed up the RoR curve, your brain will convince you it tastes baked.\\n\\nQuality control must be **Blind**. You must assign numbers to cups and hide the roast profiles.\\n\\n**Triangulation** is a specific test: You place three cups on the table. Two are the exact same roast, and one is a slightly different roast. Your job is simply to identify the odd cup out. This proves whether a minor change you made to the roasting curve actually made a perceivable difference in the cup, or if you are just chasing ghosts on a graph.",
        "points": [
          "Cognitive bias in sensory evaluation",
          "The Triangulation method (2 identical, 1 different)",
          "Using blind tasting to validate profile adjustments"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 12",
    "title": "Catación y control de calidad",
    "id": "m12",
    "desc": "Cómo catar a ciegas tus tuestes objetivamente para cerrar el ciclo de retroalimentación.",
    "topics": [
      {
        "t": "El Protocolo de Catación de la SCA",
        "b": "Por qué catamos en lugar de preparar V60s para evaluar tuestes.",
        "content": "Si evalúas tus tuestes preparando un V60, introduces docenas de variables (técnica de vertido, molienda, canalización). Si el café sabe mal, no sabes si el tueste fue malo o el barista fue malo.\\n\\nLa **Catación (Cupping)** es una infusión de inmersión total (café reposando en tazones). Elimina la técnica del barista de la ecuación, proporcionando una línea base objetiva y estandarizada.\\n\\nEl protocolo exige una proporción específica (8.25g de café por 150ml de agua), agua vertida directamente tras hervir, y romper la costra ('break') a los 4 minutos exactos. Esta estandarización permite aislar el perfil de tueste como la única variable.",
        "points": [
          "Aislamiento de variables: Eliminar la técnica de extracción de la evaluación",
          "Proporción y línea de tiempo estandarizadas (romper costra a los 4 min)",
          "Evaluar fragancia (seco), aroma (húmedo), sabor, acidez y cuerpo sistemáticamente"
        ],
        "refs": [
          "Specialty Coffee Association. <i>Cupping Protocols</i>. https://sca.coffee"
        ]
      },
      {
        "t": "Triangulación y cata a ciegas",
        "b": "Derrotando tu propio sesgo cognitivo.",
        "content": "Si sabes que estás probando el 'Geisha caro', tu cerebro te convencerá de que sabe mejor. Si sabes que estás probando el lote donde arruinaste la curva de RoR, tu cerebro te convencerá de que sabe horneado (baked).\\n\\nEl control de calidad debe ser **A Ciegas**. Debes asignar números a las tazas y ocultar los perfiles de tueste.\\n\\nLa **Triangulación** es una prueba específica: Colocas tres tazas en la mesa. Dos son el mismo tueste exacto, y una es un tueste ligeramente distinto. Tu trabajo es simplemente identificar la taza diferente. Esto prueba si un cambio menor que hiciste en la curva de tueste realmente hizo una diferencia perceptible, o si solo estás persiguiendo fantasmas en una gráfica.",
        "points": [
          "Sesgo cognitivo en la evaluación sensorial",
          "El método de Triangulación (2 idénticos, 1 diferente)",
          "Usar catas a ciegas para validar ajustes de perfiles"
        ]
      }
    ]
  }
};`);
console.log("Updated R9, R10, R11, R12");
