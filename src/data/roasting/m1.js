export default {
  "en": {
    "mod": "Module 1",
    "title": "Thermodynamics of the roasting machine",
    "id": "m1",
    "desc": "Understanding the physical environment inside the drum before understanding the bean.",
    "topics": [
      {
        "t": "Heat transfer methods",
        "b": "Conduction, Convection, and Radiation — the three ways energy enters the bean.",
        "content": "Roasting is fundamentally a thermodynamic process of forcing heat energy into a dense seed. This happens via three mechanisms:\n\n1. **Conduction**: Direct physical contact. In a classic drum roaster, the steel drum absorbs heat from the burner. When the coffee beans physically touch the hot steel, heat is transferred directly into them.\n2. **Convection**: Heat transfer via a fluid (in this case, hot air). The burner heats the air, and the fan pulls this hot air through the tumbling bean mass. This is often the primary driver of roasting in modern machines.\n3. **Radiation**: Heat transferred via electromagnetic waves (like feeling the heat of a fire on your skin). The hot metal of the roaster radiates energy into the beans without direct contact.\n\nDifferent roasters lean heavily on different methods. A classic Probat relies heavily on conduction (heavy cast iron), while a Loring relies almost entirely on convection (hot air fluid bed). Your roasting strategy must adapt to the machine's primary heat transfer method.",
        "points": [
          "Conduction: Direct contact between bean and drum",
          "Convection: Heat transfer via hot airflow through the drum",
          "Radiation: Ambient heat from the hot machine chassis",
          "The ratio of these three determines the machine's thermal profile"
        ],
        "refs": [
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Ch 3: Heat Transfer."
        ],
        "flashcards": [
          { "q": "Name the three methods of heat transfer in a drum roaster.", "a": "**Conduction** (bean-to-drum contact), **Convection** (hot airflow through the bean mass), **Radiation** (electromagnetic heat from the hot machine chassis)." },
          { "q": "How does a Loring roaster primarily transfer heat? How does a classic Probat differ?", "a": "Loring: almost entirely **Convection** (forced hot air). Classic Probat: heavily **Conduction**-driven (dense cast iron drum that stores and radiates heat into beans)." },
          { "q": "What determines a roaster's primary thermal character?", "a": "The ratio of conduction, convection, and radiation — dictated by drum material (cast iron vs. steel), fan design, and burner placement." }
        ]
      },
      {
        "t": "Thermal momentum and inertia",
        "b": "Why your roaster doesn't respond instantly to your gas changes, and why you have to 'drive ahead of the curve'.",
        "content": "A roasting machine is a massive piece of metal. When you increase the gas, the beans do not instantly get hotter. The gas heats the metal, the metal heats the air, and the air/metal heat the bean. This delay is called **Thermal Momentum**.\n\nHeavy cast-iron roasters (like vintage Probats) have massive thermal inertia. If you cut the gas completely, the heavy drum will continue roasting the coffee for minutes. Conversely, light steel or fluid-bed roasters react almost instantly.\n\nTo roast successfully, you cannot react to what is happening *now*; you must anticipate what will happen in 60 seconds. You are steering a cargo ship, not a sports car.",
        "points": [
          "The delay between adjusting the burner and the beans absorbing the heat",
          "Drum material (cast iron vs. carbon steel) dictates responsiveness",
          "The necessity of predictive adjustments rather than reactive ones"
        ],
        "simulator": "roast-curve",
        "challenges": [
          {
            "id": "roast:m1:first-crack-8min",
            "title": "Hit First Crack at 8:00",
            "desc": "Adjust charge temperature, gas, and airflow to reach First Crack between 7:40 and 8:20.",
            "xp": 25,
            "badge": "roast_master",
            "successMsg": "Perfect momentum. Your RoR carried the beans right into First Crack on time.",
            "target": { "fcTime": [460, 500] }
          }
        ],
        "flashcards": [
          { "q": "What is thermal momentum in coffee roasting?", "a": "The delay between adjusting the gas/heat and the beans actually absorbing it — caused by the roaster's own metal mass acting as a heat reservoir." },
          { "q": "Should a roaster react to what the temperature is doing now, or anticipate what it will do in 60 seconds?", "a": "Anticipate — reactive adjustments always arrive late because of thermal inertia. Roasting is predictive driving, not reactive." },
          { "q": "Why do heavy cast-iron roasters require more skill than light steel machines?", "a": "Their massive inertia means gas changes take minutes to register at the bean. Even with gas off, a cast-iron drum will keep roasting for minutes." }
        ]
      },
      {
        "t": "Airflow (Damper) mechanics",
        "b": "Airflow isn't just about heat—it's about removing smoke, chaff, and moisture.",
        "content": "The fan (controlled by the damper) is the second most important lever on your machine after the gas dial.\n\nAirflow serves three purposes:\n1. **Convective Heat Transfer**: Pulling hot air through the bean mass.\n2. **Moisture Evaporation**: As beans release water vapor, the air carries it out. Without airflow, the beans would boil/steam in their own moisture.\n3. **Smoke and Chaff Removal**: During development, beans shed their papery skin (chaff) and emit smoke. If airflow is too low, the smoke settles on the beans, making the coffee taste like an ashtray (a defect called 'smoky' or 'baked').\n\nHowever, too much airflow will strip away the heat, stalling the roast, or dry the beans out too aggressively, destroying their delicate aromatic compounds.",
        "points": [
          "Airflow as the primary driver of convection",
          "Evacuating moisture and smoke to prevent 'baked' or 'smoky' defects",
          "The balance: enough air to clean the drum, not so much that you stall the roast"
        ],
        "refs": [
          "Hoos, R. (2015). <i>Modulating the Flavor Profile of Coffee</i>."
        ],
        "flashcards": [
          { "q": "What are the three functions of airflow (damper) in a drum roaster?", "a": "1) Convective heat transfer into the bean mass. 2) Evacuation of moisture vapor. 3) Removal of smoke and chaff to prevent off-flavors." },
          { "q": "What roasting defect results from too little airflow during development?", "a": "Smoke and chaff settle back onto the beans, creating a 'smoky' or 'baked' off-flavor in the cup." },
          { "q": "What is the risk of running too much airflow?", "a": "It strips heat from the bean mass — stalling the Rate of Rise, over-drying the beans, and destroying delicate aromatic compounds." }
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
        "content": "El tueste es fundamentalmente un proceso termodinámico de forzar energía térmica en una semilla densa. Esto ocurre mediante tres mecanismos:\n\n1. **Conducción**: Contacto físico directo. En un tostador de tambor clásico, el acero absorbe calor del quemador. Cuando los granos tocan físicamente el acero caliente, el calor se transfiere directamente a ellos.\n2. **Convección**: Transferencia de calor a través de un fluido (aire caliente). El ventilador empuja aire caliente a través de la masa de granos. Este es a menudo el principal motor del tueste en máquinas modernas.\n3. **Radiación**: Calor transferido por ondas electromagnéticas. El metal caliente del tostador irradia energía a los granos sin contacto directo.\n\nLas diferentes máquinas se apoyan en distintos métodos. Una Probat clásica depende de la conducción (hierro fundido pesado), mientras que una Loring depende casi totalmente de la convección.",
        "points": [
          "Conducción: Contacto directo entre grano y tambor",
          "Convección: Transferencia de calor por flujo de aire caliente",
          "Radiación: Calor ambiental del chasis caliente de la máquina",
          "La proporción de estos tres determina el perfil térmico de la máquina"
        ],
        "refs": [
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Cap 3: Heat Transfer."
        ],
        "flashcards": [
          { "q": "Nombra los tres métodos de transferencia de calor en un tostador de tambor.", "a": "**Conducción** (contacto grano-tambor), **Convección** (flujo de aire caliente) y **Radiación** (calor electromagnético del chasis caliente de la máquina)." },
          { "q": "¿Cómo transfiere calor una Loring? ¿Cómo difiere una Probat clásica?", "a": "Loring: casi totalmente por **Convección** (aire forzado). Probat clásica: principalmente por **Conducción** (tambor de hierro fundido denso que almacena y transfiere calor)." },
          { "q": "¿Qué determina el carácter térmico principal de un tostador?", "a": "La proporción de conducción, convección y radiación — determinada por el material del tambor, el diseño del ventilador y la ubicación del quemador." }
        ]
      },
      {
        "t": "Momento e inercia térmica",
        "b": "Por qué tu tostador no responde al instante a los cambios de gas, y por qué debes 'manejar anticipándote a la curva'.",
        "content": "Una máquina tostadora es una enorme pieza de metal. Cuando subes el gas, los granos no se calientan al instante. El gas calienta el metal, el metal el aire, y el aire/metal al grano. Este retraso se llama **Momento Térmico**.\n\nLos tostadores pesados de hierro fundido tienen una inercia térmica masiva. Si cortas el gas por completo, el tambor pesado seguirá tostando el café por minutos. Por el contrario, los tostadores de acero ligero reaccionan casi al instante.\n\nPara tostar con éxito, no puedes reaccionar a lo que está sucediendo *ahora*; debes anticipar lo que sucederá en 60 segundos. Estás conduciendo un buque de carga, no un auto deportivo.",
        "points": [
          "El retraso entre ajustar el quemador y que los granos absorban el calor",
          "El material del tambor dicta la capacidad de respuesta",
          "La necesidad de ajustes predictivos en lugar de reactivos"
        ],
        "simulator": "roast-curve",
        "challenges": [
          {
            "id": "roast:m1:first-crack-8min",
            "title": "Alcanza el Primer Crack a las 8:00",
            "desc": "Ajusta la temperatura de carga, el gas y el flujo de aire para alcanzar el Primer Crack entre 7:40 y 8:20.",
            "xp": 25,
            "badge": "roast_master",
            "successMsg": "Impulso perfecto. Tu RoR llevó los granos exactamente al Primer Crack a tiempo.",
            "target": { "fcTime": [460, 500] }
          }
        ],
        "flashcards": [
          { "q": "¿Qué es el momento térmico en el tueste de café?", "a": "El retraso entre ajustar el gas y que los granos absorban ese calor — causado por la masa metálica del tostador que actúa como reservorio térmico." },
          { "q": "¿Debe un tostador reaccionar a lo que ocurre ahora, o anticipar lo que sucederá en 60 segundos?", "a": "Anticipar — los ajustes reactivos siempre llegan tarde por la inercia térmica. Tostar es una conducción predictiva, no reactiva." },
          { "q": "¿Por qué los tostadores de hierro fundido pesado requieren más habilidad predictiva?", "a": "Su enorme inercia significa que los cambios de gas tardan minutos en afectar la temperatura del grano — el tambor sigue tostando incluso con el gas apagado." }
        ]
      },
      {
        "t": "Mecánica del flujo de aire (Damper)",
        "b": "El flujo de aire no se trata solo de calor—se trata de evacuar humo, tamo y humedad.",
        "content": "El ventilador (controlado por el damper) es la segunda palanca más importante de tu máquina después del gas.\n\nEl flujo de aire tiene tres propósitos:\n1. **Transferencia de Calor Convectiva**: Empujar aire caliente a través de los granos.\n2. **Evaporación de Humedad**: El aire saca el vapor de agua. Sin flujo de aire, los granos hervirían en su propia humedad.\n3. **Remoción de Humo y Tamo**: Durante el desarrollo, los granos sueltan su piel plateada (tamo) y emiten humo. Si el flujo es muy bajo, el humo se asienta en los granos (defecto de 'ahumado' o 'baked').\n\nSin embargo, demasiado flujo de aire eliminará el calor, estancando el tueste, o secará los granos demasiado agresivamente, destruyendo aromas delicados.",
        "points": [
          "El flujo de aire como principal motor de la convección",
          "Evacuar humedad y humo para prevenir defectos",
          "El equilibrio: suficiente aire para limpiar el tambor, no tanto como para estancar el tueste"
        ],
        "refs": [
          "Hoos, R. (2015). <i>Modulating the Flavor Profile of Coffee</i>."
        ],
        "flashcards": [
          { "q": "¿Cuáles son las tres funciones del flujo de aire (damper) en un tostador de tambor?", "a": "1) Transferencia de calor convectiva. 2) Evacuación del vapor de humedad. 3) Remoción de humo y tamo para prevenir sabores defectuosos." },
          { "q": "¿Qué defecto de tueste resulta de muy poco flujo de aire durante el desarrollo?", "a": "El humo y el tamo se asientan de vuelta en los granos, creando un sabor defectuoso 'ahumado' o 'baked' en la taza." },
          { "q": "¿Cuál es el riesgo de usar demasiado flujo de aire?", "a": "Despoja el calor de la masa de granos — estancando la Tasa de Ascenso, secando los granos en exceso y destruyendo compuestos aromáticos delicados." }
        ]
      }
    ]
  }
};