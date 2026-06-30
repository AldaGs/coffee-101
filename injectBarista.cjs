const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'barista', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(1, () => `export default {
  "en": {
    "mod": "Module 1",
    "title": "Hospitality and the Role of the Barista",
    "id": "m1",
    "desc": "Technical skills are useless if you cannot make the customer feel welcome.",
    "topics": [
      {
        "t": "The Final Link in the Chain",
        "b": "You are the steward of years of hard work.",
        "content": "Before a bag of roasted coffee reaches your bar, it has passed through the hands of dozens of people over several years: farmers, pickers, mill workers, exporters, importers, and roasters. Thousands of hours of labor have gone into creating a high-quality product.\\n\\nAs the Barista, you are the final link in that chain. You have the power to either beautifully translate that hard work into a transcendent experience for the customer, or completely ruin it in 30 seconds with a bad extraction. Your technical execution honors the supply chain.",
        "points": [
          "Understanding the massive labor pipeline behind a single bag of coffee",
          "The barista's responsibility as the translator of the supply chain",
          "Technical execution as a form of respect for the producer"
        ]
      },
      {
        "t": "Hospitality over Pretension",
        "b": "Specialty coffee has a reputation problem. You must fix it.",
        "content": "For decades, the 'Third Wave' coffee industry suffered from immense snobbery. Baristas would scoff at customers who asked for sugar, dark roasts, or extra hot milk.\\n\\nTrue hospitality means meeting the customer where they are. If someone wants a 16oz vanilla latte, your job is not to lecture them on the terroir of the washed Ethiopian espresso; your job is to make them the best vanilla latte they have ever had, with a smile.\\n\\nHospitality is defined by making people feel seen, welcomed, and un-judged in your space.",
        "points": [
          "The historical toxicity of specialty coffee snobbery",
          "Meeting customers at their palate preference without judgment",
          "The definition of hospitality: making people feel welcome"
        ]
      },
      {
        "t": "Reading the Customer",
        "b": "Knowing when to geek out, and when to just serve the drink.",
        "content": "A great barista reads the room. \\n\\n- **The Commuter**: It's 7:00 AM, they are in a rush to get to work. They just want their drip coffee quickly and a friendly 'good morning'. They do not want to hear about the anaerobic fermentation process.\\n- **The Enthusiast**: It's 2:00 PM on a Saturday. They are staring at the pour-over menu and asking questions. This is your moment to dive deep into varietals, altitude, and processing methods.\\n\\nProviding excellent service means tailoring your communication style to the specific needs of the person standing in front of you at that exact moment.",
        "points": [
          "Situational awareness behind the bar",
          "Tailoring communication to the customer's pace and interest level",
          "Efficiency vs. Education"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "Hospitalidad y el Rol del Barista",
    "id": "m1",
    "desc": "Las habilidades técnicas son inútiles si no puedes hacer que el cliente se sienta bienvenido.",
    "topics": [
      {
        "t": "El eslabón final de la cadena",
        "b": "Eres el guardián de años de arduo trabajo.",
        "content": "Antes de que una bolsa de café llegue a tu barra, ha pasado por las manos de docenas de personas a lo largo de varios años: productores, recolectores, trabajadores del beneficio, exportadores y tostadores.\\n\\nComo Barista, eres el eslabón final. Tienes el poder de traducir hermosamente ese trabajo en una experiencia trascendente, o arruinarlo por completo en 30 segundos con una mala extracción. Tu ejecución técnica honra la cadena de suministro.",
        "points": [
          "Entender la cadena de trabajo masivo detrás de una bolsa de café",
          "La responsabilidad del barista como traductor de la cadena",
          "La ejecución técnica como forma de respeto al productor"
        ]
      },
      {
        "t": "Hospitalidad sobre Pretensión",
        "b": "El café de especialidad tiene un problema de reputación. Debes arreglarlo.",
        "content": "Durante décadas, la 'Tercera Ola' sufrió de un inmenso esnobismo. Los baristas se burlaban de clientes que pedían azúcar o leche muy caliente.\\n\\nLa verdadera hospitalidad significa encontrarse con el cliente donde está. Si alguien quiere un latte de vainilla grande, tu trabajo no es darle un sermón sobre el terroir del espresso etíope; tu trabajo es hacerle el mejor latte de vainilla que haya probado, con una sonrisa.\\n\\nLa hospitalidad se define por hacer que las personas se sientan vistas, bienvenidas y no juzgadas en tu espacio.",
        "points": [
          "La toxicidad histórica del esnobismo en el café de especialidad",
          "Atender al cliente en su preferencia de paladar sin juzgar",
          "La definición de hospitalidad: hacer que las personas se sientan bienvenidas"
        ]
      },
      {
        "t": "Leyendo al Cliente",
        "b": "Saber cuándo ponerse técnico y cuándo solo servir la bebida.",
        "content": "Un gran barista lee la habitación.\\n\\n- **El Oficinista**: Son las 7:00 AM, tiene prisa por ir a trabajar. Solo quiere su café de filtro rápido y un 'buenos días'. No quiere escuchar sobre el proceso de fermentación anaeróbica.\\n- **El Entusiasta**: Son las 2:00 PM de un sábado. Está mirando el menú de filtrados y haciendo preguntas. Este es tu momento para profundizar en variedades, altitud y procesos.\\n\\nDar un excelente servicio significa adaptar tu estilo de comunicación a las necesidades específicas de la persona frente a ti en ese momento exacto.",
        "points": [
          "Conciencia situacional detrás de la barra",
          "Adaptar la comunicación al ritmo e interés del cliente",
          "Eficiencia vs. Educación"
        ]
      }
    ]
  }
};`);

updateModule(2, () => `export default {
  "en": {
    "mod": "Module 2",
    "title": "Dialing in Espresso",
    "id": "m2",
    "desc": "The foundational parameters of extraction: Dose, Yield, and Time.",
    "topics": [
      {
        "t": "Dose (The Input)",
        "b": "How much dry coffee goes into the portafilter.",
        "content": "The **Dose** is the foundation of your espresso recipe. It dictates how much espresso you can physically make. \\n\\nIn modern specialty coffee, doses usually range from 18g to 22g depending on the size of your portafilter basket. The most critical rule of dosing is **Consistency**. If your recipe calls for 19.0g, you cannot use 19.4g one time and 18.7g the next. Even a 0.5g variance will drastically alter the resistance of the puck, changing your extraction time by several seconds.\\n\\nYou must weigh your dose on a scale with 0.1g accuracy every single time.",
        "points": [
          "Dose as the fixed foundation of the recipe",
          "The critical importance of 0.1g consistency",
          "How dose variance impacts puck resistance and flow rate"
        ]
      },
      {
        "t": "Yield (The Output)",
        "b": "How much liquid espresso ends up in the cup.",
        "content": "The **Yield** is the weight of the liquid espresso in the cup, measured in grams (not volume/ounces, because crema is mostly gas and throws off volume measurements).\\n\\nThe relationship between Dose and Yield is the **Brew Ratio**.\\n- **1:1 (Ristretto)**: 18g in, 18g out. Very heavy, intense, often under-extracted and sour.\\n- **1:2 (Normale)**: 18g in, 36g out. The modern specialty standard. Balanced body and clarity.\\n- **1:3 (Lungo)**: 18g in, 54g out. Thinner body, very high extraction, often used for light roasts to tame acidity.\\n\\nChanging the yield is the most powerful tool you have to fix the flavor balance (sour vs. bitter).",
        "points": [
          "Measuring output in grams, not volume, to negate the variable of crema",
          "Standard brew ratios (Ristretto 1:1, Normale 1:2, Lungo 1:3)",
          "Yield as the primary driver of extraction yield (flavor balance)"
        ]
      },
      {
        "t": "Time (The Result)",
        "b": "Time is an output of grind size, not an input.",
        "content": "**Time** is the duration of the shot from the moment the pump turns on until the scale reaches your target Yield.\\n\\nA standard window is 25-30 seconds. However, you do not 'set' the time on the machine. You control the time by adjusting your **Grind Size**.\\n- If your shot hits 36g in 15 seconds, it ran too fast. The water found too little resistance. You must adjust your grinder **Finer**.\\n- If your shot hits 36g in 45 seconds, it ran too slow. The water choked. You must adjust your grinder **Coarser**.",
        "points": [
          "Time as a diagnostic result, not an active variable",
          "Using grind size (coarse/fine) to manipulate flow resistance",
          "The general 25-30 second baseline window"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Ajustando el Espresso (Dialing in)",
    "id": "m2",
    "desc": "Los parámetros fundamentales de la extracción: Dosis, Rendimiento y Tiempo.",
    "topics": [
      {
        "t": "Dosis (El Input)",
        "b": "Cuánto café seco entra en el portafiltro.",
        "content": "La **Dosis** es la base de tu receta de espresso. Dicta cuánto espresso puedes hacer físicamente.\\n\\nEn el café de especialidad moderno, las dosis suelen variar de 18g a 22g dependiendo del tamaño de la canasta. La regla más crítica de la dosis es la **Consistencia**. Si tu receta pide 19.0g, no puedes usar 19.4g una vez y 18.7g la siguiente. Incluso una variación de 0.5g alterará drásticamente la resistencia de la pastilla, cambiando tu tiempo de extracción por varios segundos.\\n\\nDebes pesar tu dosis en una báscula con precisión de 0.1g cada vez.",
        "points": [
          "La dosis como la base fija de la receta",
          "La importancia crítica de la consistencia de 0.1g",
          "Cómo la variación de dosis impacta la resistencia y el flujo"
        ]
      },
      {
        "t": "Rendimiento (El Output / Yield)",
        "b": "Cuánto espresso líquido termina en la taza.",
        "content": "El **Rendimiento** (Yield) es el peso del espresso líquido en la taza, medido en gramos (no volumen, porque la crema es principalmente gas y arruina la medición visual).\\n\\nLa relación entre Dosis y Rendimiento es el **Ratio de Extracción**.\\n- **1:1 (Ristretto)**: 18g entra, 18g sale. Muy pesado, intenso, a menudo subextraído y ácido.\\n- **1:2 (Normale)**: 18g entra, 36g sale. El estándar moderno. Cuerpo y claridad equilibrados.\\n- **1:3 (Lungo)**: 18g entra, 54g sale. Cuerpo más delgado, extracción muy alta, usado en tuestes claros.\\n\\nCambiar el rendimiento es tu herramienta más poderosa para arreglar el balance de sabor (ácido vs. amargo).",
        "points": [
          "Medir la salida en gramos, no volumen, para negar la variable de la crema",
          "Ratios estándar (Ristretto 1:1, Normale 1:2, Lungo 1:3)",
          "El rendimiento como el principal motor del balance de sabor"
        ]
      },
      {
        "t": "Tiempo (El Resultado)",
        "b": "El tiempo es un resultado del tamaño de molienda, no un input.",
        "content": "El **Tiempo** es la duración del shot desde que se enciende la bomba hasta que la báscula alcanza tu Rendimiento objetivo.\\n\\nUna ventana estándar es de 25-30 segundos. Sin embargo, tú no 'configuras' el tiempo. Controlas el tiempo ajustando tu **Tamaño de Molienda**.\\n- Si tu shot llega a 36g en 15 segundos, corrió muy rápido. El agua encontró poca resistencia. Debes ajustar tu molino más **Fino**.\\n- Si tu shot llega a 36g en 45 segundos, corrió muy lento. El agua se estancó. Debes ajustar tu molino más **Grueso**.",
        "points": [
          "El tiempo como un resultado diagnóstico, no una variable activa",
          "Usar el tamaño de molienda para manipular la resistencia al flujo",
          "La ventana general de referencia de 25-30 segundos"
        ]
      }
    ]
  }
};`);

updateModule(3, () => `export default {
  "en": {
    "mod": "Module 3",
    "title": "Milk Science and Microfoam",
    "id": "m3",
    "desc": "How heat and steam transform the chemistry and texture of milk.",
    "topics": [
      {
        "t": "The Chemistry of Heating Milk",
        "b": "Why warm milk tastes sweeter than cold milk.",
        "content": "Milk contains a complex sugar called **Lactose**. At cold temperatures, the human tongue is very bad at perceiving lactose as sweet.\\n\\nAs you heat milk with the steam wand, the heat breaks down the long-chain lactose sugars into simpler sugars (glucose and galactose), which our tongues perceive much more easily. Furthermore, the heat melts the milk fats, creating a rich, creamy mouthfeel.\\n\\nHowever, if you heat milk past **150°F (65°C)**, the proteins begin to denature and the sugars burn. Scalded milk loses its sweetness, smells like boiled eggs, and cannot hold foam.",
        "points": [
          "Heat breaking down lactose to increase perceived sweetness",
          "The melting of lipids to create body and texture",
          "The critical ceiling of 150°F (65°C) to prevent protein denaturation"
        ]
      },
      {
        "t": "Aeration (Stretching)",
        "b": "Introducing air to create microfoam.",
        "content": "The first phase of steaming is **Aeration** (or 'stretching'). \\n\\nYou place the steam wand tip just at the surface of the milk and turn on the steam. The goal is to introduce tiny, microscopic air bubbles into the milk. You should hear a gentle, rhythmic 'tss-tss-tss' sound, like tearing paper.\\n\\nIf the wand is too high, you will blow massive, soapy bubbles. If the wand is too deep, you will just scream the milk without adding air. \\nAeration should only last for the first 3-5 seconds of steaming while the milk is cold. Once the milk is warm to the touch, you must stop aerating.",
        "points": [
          "Wand placement exactly at the surface level",
          "The 'tearing paper' sound indicating proper micro-bubble incorporation",
          "Aerating only while the milk is cold (first 5 seconds)"
        ]
      },
      {
        "t": "Texturing (The Whirlpool)",
        "b": "Integrating the foam into a wet-paint texture.",
        "content": "Once you have added enough air, you submerge the steam wand tip slightly deeper and tilt the pitcher to create a **Whirlpool** (a vortex).\\n\\nThis is the Texturing phase. The intense spinning motion takes the micro-bubbles you just created and smashes them down, integrating them seamlessly into the liquid milk. This process physically changes the structure of the milk, creating what baristas call **Microfoam**.\\n\\nPerfect microfoam looks like glossy wet white paint. It should have no visible bubbles on the surface. If you skip the whirlpool phase, the stiff foam will just float on top of hot, watery milk (the classic '90s cappuccino).",
        "points": [
          "Submerging the wand and finding the vortex angle",
          "The mechanical integration of foam and liquid",
          "The visual goal: glossy, reflective wet paint with zero visible bubbles"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "Ciencia de la Leche y Microespuma",
    "id": "m3",
    "desc": "Cómo el calor y el vapor transforman la química y textura de la leche.",
    "topics": [
      {
        "t": "La química de calentar la leche",
        "b": "Por qué la leche tibia sabe más dulce que la leche fría.",
        "content": "La leche contiene un azúcar complejo llamado **Lactosa**. A temperaturas frías, la lengua humana es muy mala para percibir la lactosa como dulce.\\n\\nA medida que calientas la leche con la lanceta, el calor descompone los azúcares de cadena larga en azúcares más simples (glucosa y galactosa), que nuestra lengua percibe mucho más fácilmente. Además, el calor derrite las grasas, creando una sensación en boca rica y cremosa.\\n\\nSin embargo, si calientas la leche a más de **65°C (150°F)**, las proteínas comienzan a desnaturalizarse y los azúcares se queman. La leche quemada pierde su dulzor, huele a huevo hervido y no puede sostener la espuma.",
        "points": [
          "El calor descomponiendo la lactosa para aumentar el dulzor percibido",
          "El derretimiento de lípidos para crear cuerpo y textura",
          "El límite crítico de 65°C para evitar la desnaturalización de proteínas"
        ]
      },
      {
        "t": "Aireación (Stretching)",
        "b": "Introduciendo aire para crear microespuma.",
        "content": "La primera fase de texturizar es la **Aireación**.\\n\\nColocas la punta de la lanceta justo en la superficie de la leche y enciendes el vapor. El objetivo es introducir burbujas de aire microscópicas. Deberías escuchar un sonido suave y rítmico de 'tss-tss-tss', como si rasgaras papel.\\n\\nSi la lanceta está muy alta, harás burbujas de jabón masivas. Si está muy profunda, la leche gritará sin añadir aire.\\nLa aireación solo debe durar los primeros 3-5 segundos mientras la leche está fría. Una vez que la leche está tibia al tacto, debes dejar de airear.",
        "points": [
          "Colocación de la lanceta exactamente al nivel de la superficie",
          "El sonido de 'rasgar papel' indicando la incorporación de microburbujas",
          "Airear solo mientras la leche está fría (primeros 5 segundos)"
        ]
      },
      {
        "t": "Texturización (El Remolino)",
        "b": "Integrando la espuma hasta obtener una textura de pintura fresca.",
        "content": "Una vez que has añadido suficiente aire, sumerges la punta un poco más y logras inclinar la jarra para crear un **Remolino** (vórtice).\\n\\nEsta es la fase de Texturización. El intenso giro toma las microburbujas que acabas de crear y las integra perfectamente en la leche líquida. Esto crea lo que los baristas llaman **Microespuma**.\\n\\nLa microespuma perfecta se ve como pintura blanca brillante y fresca. No debe tener burbujas visibles. Si omites esta fase, la espuma rígida simplemente flotará sobre la leche caliente (el clásico capuchino de los 90s).",
        "points": [
          "Sumergir la lanceta y encontrar el ángulo del vórtice",
          "La integración mecánica de espuma y líquido",
          "El objetivo visual: pintura fresca brillante, sin burbujas visibles"
        ]
      }
    ]
  }
};`);

updateModule(4, () => `export default {
  "en": {
    "mod": "Module 4",
    "title": "Bar Workflow and Efficiency",
    "id": "m4",
    "desc": "How to handle a massive rush without losing your mind.",
    "topics": [
      {
        "t": "Clean As You Go",
        "b": "A messy bar is a slow bar.",
        "content": "During a massive morning rush, it is tempting to just make drinks and let the mess accumulate. This is a fatal error. \\n\\n**Clean As You Go** (Mise en place) is the cardinal rule of any professional kitchen or cafe. If you let milk encrust on your steam wand, or let old espresso grounds build up on the drip tray, you are eventually going to have to stop making drinks to clean it up. \\n\\nYou must integrate cleaning into the physical movement of making the drink. Purge and wipe the steam wand immediately after every single use. Rinse pitchers immediately. It takes 3 seconds in the moment, but saves minutes later.",
        "points": [
          "The kitchen philosophy of 'Mise en place'",
          "Integrating the purge-and-wipe into muscle memory",
          "Preventing the compounding friction of a messy workspace"
        ]
      },
      {
        "t": "Pacing and Multitasking",
        "b": "Don't stare at the shot pouring.",
        "content": "A standard espresso shot takes ~30 seconds to pour. A bad barista will start the shot and stand there watching it pour for 30 seconds. This wastes massive amounts of time.\\n\\nEfficiency is built on **overlapping actions**:\\n1. Dose and tamp the portafilter.\\n2. Lock it in, place the cup, and start the shot.\\n3. **Immediately turn around and pour milk into the pitcher.**\\n4. Start steaming the milk while the shot is pouring.\\n5. Finish steaming just as the shot finishes.\\n6. Pour the latte art and serve.\\n\\nBy overlapping the extraction time with the milk steaming time, you literally double your drink output.",
        "points": [
          "Identifying 'dead time' in the workflow (like watching a shot pour)",
          "Overlapping actions: Steaming milk while the espresso extracts",
          "Developing a fluid, uninterrupted sequence of movements"
        ]
      },
      {
        "t": "Ticket Management",
        "b": "Batching similar drinks intelligently.",
        "content": "When a printer spits out 10 tickets at once, you cannot make them strictly one at a time. You must learn to read ahead and batch intelligently.\\n\\nIf Ticket 1 is a Cortado, Ticket 2 is an Americano, and Ticket 3 is a Cappuccino... you can pull the shots for Ticket 1 and 3 simultaneously (if using a two-group machine), and steam the milk for both the Cortado and the Cappuccino in one large pitcher.\\n\\nHowever, never batch milks that require vastly different temperatures or textures (e.g., do not steam milk for an extra-hot flat white in the same pitcher as a kid's hot chocolate).",
        "points": [
          "Reading ahead on the ticket rail to anticipate bottlenecks",
          "Steaming milk for multiple similar drinks in one large pitcher",
          "Knowing the limits of batching to maintain quality standards"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "Flujo de Trabajo en Barra y Eficiencia",
    "id": "m4",
    "desc": "Cómo manejar horas pico masivas sin perder la cabeza.",
    "topics": [
      {
        "t": "Limpia mientras avanzas (Clean As You Go)",
        "b": "Una barra sucia es una barra lenta.",
        "content": "Durante una gran hora pico, es tentador solo hacer bebidas y dejar que el desorden se acumule. Esto es un error fatal.\\n\\n**Limpiar mientras avanzas** (Mise en place) es la regla cardinal de cualquier cocina profesional. Si dejas que la leche se incruste en tu lanceta, eventualmente tendrás que detener la producción para limpiarlo.\\n\\nDebes integrar la limpieza en el movimiento físico de hacer la bebida. Purga y limpia la lanceta inmediatamente después de cada uso. Enjuaga las jarras de inmediato. Toma 3 segundos en el momento, pero ahorra minutos después.",
        "points": [
          "La filosofía de cocina de 'Mise en place'",
          "Integrar limpiar-y-purgar en la memoria muscular",
          "Evitar la fricción compuesta de un espacio de trabajo sucio"
        ]
      },
      {
        "t": "Ritmo y Multitarea",
        "b": "No te quedes mirando cómo sale el espresso.",
        "content": "Un shot estándar toma ~30 segundos. Un mal barista iniciará la extracción y se quedará viéndolo por 30 segundos. Esto desperdicia una cantidad masiva de tiempo.\\n\\nLa eficiencia se construye sobre **acciones superpuestas**:\\n1. Dosifica y tampea.\\n2. Inserta el portafiltro y arranca la extracción.\\n3. **Voltéate inmediatamente y vierte leche en la jarra.**\\n4. Comienza a texturizar mientras el shot sale.\\n5. Termina la leche justo cuando el shot termina.\\n6. Vierte el latte art y sirve.\\n\\nAl superponer el tiempo de extracción con el de la leche, literalmente duplicas tu producción.",
        "points": [
          "Identificar 'tiempos muertos' en el flujo (como ver el shot salir)",
          "Acciones superpuestas: Texturizar mientras se extrae el espresso",
          "Desarrollar una secuencia de movimientos fluida e ininterrumpida"
        ]
      },
      {
        "t": "Manejo de Comandas (Tickets)",
        "b": "Agrupando bebidas similares inteligentemente.",
        "content": "Cuando la impresora saca 10 comandas a la vez, no puedes hacerlas estrictamente una por una. Debes aprender a leer por adelantado y agrupar inteligentemente.\\n\\nSi la Comanda 1 es un Cortado, la 2 un Americano y la 3 un Capuchino... puedes extraer los shots para la 1 y 3 simultáneamente (si usas máquina de 2 grupos), y texturizar la leche para ambos en una jarra grande.\\n\\nSin embargo, nunca agrupes leches que requieran temperaturas o texturas muy distintas (ej. un flat white extra caliente con un chocolate para niños).",
        "points": [
          "Leer por adelantado en el riel para anticipar cuellos de botella",
          "Texturizar leche para múltiples bebidas similares en una jarra grande",
          "Conocer los límites de agrupar para mantener estándares de calidad"
        ]
      }
    ]
  }
};`);
console.log("Barista index generated.");
