export default {
  "en": {
    "mod": "Module 6",
    "title": "Software and datalogging",
    "id": "m6",
    "desc": "If you are not logging your roasts, you are not roasting—you are just cooking. How to read Artisan or Cropster.",
    "topics": [
      {
        "t": "The necessity of data in roasting",
        "b": "Human memory is flawed. Datalogging is objective.",
        "content": "Before the 2010s, roasting was considered a 'dark art.' Roasters relied on sight, sound, and smell, guarding their 'secrets.' The reality was that cup consistency was terrible.\n\nThe adoption of [thermocouple](https://en.wikipedia.org/wiki/Thermocouple) probes linked to software like **Artisan** (open-source) or **Cropster** (commercial) revolutionized the industry. These programs plot Environmental Temperature (ET), Bean Temperature (BT), and RoR in real-time.\n\nIf a batch of your Ethiopian washed tastes incredible, you do not have to guess what you did. You open the software, load the profile as a background curve, and trace it exactly for the next batch.",
        "points": [
          "The shift from sensory-based roasting to data-driven roasting",
          "Thermocouple placement and reading delay (why probes lie to you early in the roast)",
          "Using background curves to achieve consistency across batches"
        ]
      },
      {
        "t": "Understanding the graph",
        "b": "Anatomy of a standard roast profile curve.",
        "content": "When you look at a Cropster/Artisan graph, you see three main lines:\n\n1. **ET (Environmental Temperature)**: A probe placed in the airflow, measuring the heat *available* to the beans. It starts high, drops slightly at charge, and stays high.\n2. **BT (Bean Temperature)**: A probe submerged in the tumbling bean mass. It forms a 'check mark' shape—dropping to the Turning Point, then rising steadily.\n3. **RoR (Rate of Rise)**: The derivative of the BT curve. It spikes massively after the Turning Point, then (ideally) slides down at a steady 45-degree angle until the drop.\n\nLearning to read the relationship between ET (the heat you provide) and BT (how the bean reacts) is the core skill of profile roasting.",
        "points": [
          "ET as a proxy for convective heat application",
          "BT as a proxy for internal bean development",
          "Noise filtering and smoothing settings for RoR curves"
        ]
      },
      {
        "t": "Gas and Airflow markers",
        "b": "Logging your physical actions to understand their delayed effects.",
        "content": "A beautiful curve is useless if you don't know how you created it.\n\nModern software allows you to log the exact moment you change the Gas or the Airflow. Because of thermal momentum, a gas change at minute 4 might not show its effect on the RoR curve until minute 5.\n\nBy rigorously logging your gas changes (e.g., Gas 80% at Charge, Gas 60% at 150°C, Gas 40% at 180°C), you create a 'recipe' of physical actions. Over time, you learn exactly how many seconds it takes for your specific machine to react to a gas cut.",
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
        "content": "Antes de la década de 2010, el tueste se consideraba un 'arte oscuro'. Los tostadores dependían de la vista, el sonido y el olfato. La realidad era que la consistencia era terrible.\n\nLa adopción de [termopares](https://es.wikipedia.org/wiki/Termopar) conectados a software como **Artisan** o **Cropster** revolucionó la industria. Estos programas grafican la Temperatura Ambiental (ET), la Temperatura del Grano (BT) y el RoR en tiempo real.\n\nSi un lote de tu lavado etíope sabe increíble, no tienes que adivinar qué hiciste. Abres el software, cargas el perfil como curva de fondo y lo calcas exactamente para el siguiente lote.",
        "points": [
          "El cambio de tueste sensorial a tueste basado en datos",
          "Ubicación de termopares y retraso de lectura (por qué las sondas te mienten al inicio)",
          "Uso de curvas de fondo (background curves) para lograr consistencia"
        ]
      },
      {
        "t": "Entendiendo la gráfica",
        "b": "Anatomía de una curva de perfil de tueste estándar.",
        "content": "Al mirar una gráfica de Cropster/Artisan, ves tres líneas principales:\n\n1. **ET (Temperatura Ambiental)**: Una sonda en el flujo de aire, midiendo el calor *disponible*. Empieza alta, baja un poco en la carga y se mantiene alta.\n2. **BT (Temperatura del Grano)**: Una sonda sumergida en la masa de granos. Forma un 'símbolo de visto bueno' (check mark)—cayendo al Turning Point y luego subiendo constantemente.\n3. **RoR (Tasa de Ascenso)**: La derivada de la curva BT. Se dispara masivamente después del Turning Point, luego (idealmente) se desliza hacia abajo en un ángulo constante hasta la salida.\n\nAprender a leer la relación entre ET (el calor que provees) y BT (cómo reacciona el grano) es la habilidad central del tueste.",
        "points": [
          "ET como proxy para la aplicación de calor convectivo",
          "BT como proxy para el desarrollo interno del grano",
          "Configuraciones de filtrado de ruido y suavizado para curvas RoR"
        ]
      },
      {
        "t": "Marcadores de Gas y Flujo de Aire",
        "b": "Registrar tus acciones físicas para entender sus efectos retardados.",
        "content": "Una curva hermosa es inútil si no sabes cómo la creaste.\n\nEl software moderno permite registrar el momento exacto en que cambias el Gas o el Flujo. Debido al momento térmico, un cambio de gas en el minuto 4 podría no mostrar su efecto en el RoR hasta el minuto 5.\n\nAl registrar rigurosamente tus cambios de gas, creas una 'receta' de acciones físicas. Con el tiempo, aprendes exactamente cuántos segundos tarda tu máquina específica en reaccionar a un corte de gas.",
        "points": [
          "Registro de eventos (Gas, Aire, Cambios de color, Cracks)",
          "Correlacionar inputs físicos con outputs térmicos retardados",
          "Construir un 'Plan de Gas' repetible para un café dado"
        ]
      }
    ]
  }
};