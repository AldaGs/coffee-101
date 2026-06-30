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
          {
            "q": "What is the primary heat vector in older, thick-walled cast-iron roasters?",
            "a": "**Conduction**. Heat transfers via direct contact between the hot drum surface and the bean."
          },
          {
            "q": "How does a Loring or modern fluid-bed roaster primarily transfer heat?",
            "a": "**Convection**. Heat is transferred via moving hot air passing through the tumbling bean mass."
          }
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
          {
            "q": "¿Cuál es el vector de calor principal en tostadores antiguos de hierro fundido de pared gruesa?",
            "a": "**Conducción**. El calor se transfiere a través del contacto directo entre la superficie caliente del tambor y el grano."
          },
          {
            "q": "¿Cómo transfiere calor principalmente un Loring o un tostador de lecho fluido moderno?",
            "a": "**Convección**. El calor se transfiere a través del aire caliente en movimiento que pasa por la masa de granos."
          }
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
        ]
      }
    ]
  }
};