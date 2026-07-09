export default {
  "en": {
    "mod": "Module 1",
    "title": "Machine & Grinder Mastery",
    "id": "m1",
    "desc": "The maintenance, water, and diagnostics that separate an operator from a technician.",
    "topics": [
      {
        "t": "Understanding Your Machine's Anatomy",
        "b": "You cannot troubleshoot what you do not understand.",
        "content": "An advanced barista treats the espresso machine as a *system of managed pressure and temperature*, not a black box.\n\nKey subsystems:\n- **The boiler(s):** A single-boiler machine shares heat between steam and brew (compromise). A **heat-exchanger (HX)** pulls brew water through a coil sitting inside the steam boiler. A **dual-boiler** runs brew and steam on independent, separately-controlled boilers — the gold standard for temperature stability.\n- **The group head & PID:** The group is kept at brew temperature. A **PID controller** holds that temperature to within ±0.5°C; without it, temperature 'surfs' with the heating cycle.\n- **The pump:** A rotary pump delivers a smooth, constant 9 bar; a cheaper vibratory pump pulses.\n\nKnowing which subsystem you have tells you *why* your machine behaves the way it does — e.g. why an HX machine needs a 'cooling flush' before pulling a shot.",
        "points": [
          "Single-boiler vs. heat-exchanger vs. dual-boiler temperature strategies",
          "The PID controller's role in holding brew temperature stable",
          "Why HX machines require a cooling flush to avoid scorching the shot"
        ],
        "refs": [
          "Perger, M. — <i>Barista Hustle</i> technical guides on machine thermodynamics."
        ],
        "flashcards": [
          { "q": "What is the core difference between a heat-exchanger and a dual-boiler machine?", "a": "An HX pulls brew water through a coil *inside* the single steam boiler (one heat source); a dual-boiler has fully independent brew and steam boilers, each separately controlled — giving superior brew-temperature stability." },
          { "q": "What does a PID controller do on an espresso machine, and why does it matter?", "a": "It holds the group/brew temperature to within about ±0.5°C. Without it, temperature 'surfs' up and down with the boiler's heating cycle, making shots inconsistent." },
          { "q": "Why does a heat-exchanger machine need a 'cooling flush' before a shot?", "a": "Brew water sitting in the coil overheats against the steam boiler between shots. A short flush purges that superheated water so the actual shot isn't scorched." }
        ]
      },
      {
        "t": "Water: The Silent Killer",
        "b": "90% of a machine's problems and 98% of the cup are water.",
        "content": "Espresso is ~90% water, so water chemistry drives both flavor and machine longevity.\n\nTwo numbers matter:\n- **Hardness (calcium/magnesium):** These minerals extract flavor — but when heated, calcium precipitates as **limescale**, which coats heating elements, chokes valves, and eventually kills boilers. This is the number one cause of machine death.\n- **Alkalinity (buffer):** This resists pH change. Too high and coffee tastes flat and chalky; too low and the water becomes corrosive, eating copper and brass.\n\nThe **SCA target** is roughly 50–175 ppm hardness with alkalinity near 40 ppm. An advanced barista tests incoming water with a hardness kit and specs the correct filtration (softener, RO with remineralisation) *before* buying an expensive machine — because a warranty will not cover scale damage.",
        "points": [
          "Hardness extracts flavor but deposits scale that destroys boilers",
          "Alkalinity buffers pH — too high tastes flat, too low is corrosive",
          "SCA target ≈ 50–175 ppm hardness, ~40 ppm alkalinity; test before you install"
        ],
        "refs": [
          "Hendon, C. & Colonna-Dashwood, M. (2015). <i>Water for Coffee</i>."
        ],
        "flashcards": [
          { "q": "Why is water hardness both essential and dangerous for espresso?", "a": "The calcium and magnesium in hard water actively extract flavor — but heated calcium precipitates as **limescale** that coats heating elements and boilers, the number one cause of machine death." },
          { "q": "What happens to coffee if the water's alkalinity is too high, versus too low?", "a": "Too high: alkalinity buffers the coffee's acids so the cup tastes flat and chalky. Too low: the water loses its buffer and turns corrosive, eating copper and brass in the machine." },
          { "q": "Why should an advanced barista test water *before* buying a machine?", "a": "Because scale damage from hard water voids warranties and can destroy a boiler in months. Testing hardness/alkalinity lets you spec the right filtration up front rather than pay for repairs later." }
        ]
      },
      {
        "t": "Diagnostic Troubleshooting",
        "b": "Reading the symptom backward to the cause.",
        "content": "Advanced troubleshooting is a decision tree that reads a symptom back to its root cause instead of guessing.\n\nCommon cases:\n- **Shot gushes/tastes sour and thin, no matter the grind:** Suspect a **worn shower screen / dispersion block** or a group needing backflush — channeling from uneven water dispersion.\n- **No crema, oily/rancid taste:** The machine and grinder are dirty. Stale coffee oils have gone rancid in the group and burrs. Fix: **daily backflush with detergent**, weekly grinder deep-clean.\n- **Grind setting suddenly runs fast/loose in the afternoon:** Burrs heat up over the day and can shift dial-in; also check for a nearly-empty hopper (less bean weight = different feed).\n- **Steam wand weak/spitting:** A clogged tip (dried milk protein) — soak and clear the holes with a pin.\n\nThe discipline is: change **one variable at a time**, and always rule out cleanliness before blaming the beans.",
        "points": [
          "Map each symptom to a subsystem before touching the grind dial",
          "Rancid taste / no crema almost always means an overdue deep clean",
          "Change one variable at a time; rule out cleanliness first"
        ],
        "refs": [
          "SCA Barista Skills — Professional level troubleshooting competencies."
        ],
        "flashcards": [
          { "q": "A shot gushes and tastes thin and sour no matter how you adjust the grind. What's the likely root cause?", "a": "Channeling from uneven water dispersion — suspect a worn shower screen / dispersion block or a group overdue for a backflush, not the grind itself." },
          { "q": "The espresso suddenly has no crema and an oily, rancid taste. What does this signal?", "a": "Rancid coffee oils built up in the group head and grinder burrs. The fix is cleaning, not recipe: daily detergent backflush plus a grinder deep-clean." },
          { "q": "What is the core discipline of advanced espresso troubleshooting?", "a": "Change **one variable at a time** and always rule out cleanliness (backflush, burr cleanliness, wand clog) before blaming the beans or the recipe." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "Dominio de Máquina y Molino",
    "id": "m1",
    "desc": "El mantenimiento, el agua y el diagnóstico que separan a un operador de un técnico.",
    "topics": [
      {
        "t": "Entender la Anatomía de tu Máquina",
        "b": "No puedes diagnosticar lo que no entiendes.",
        "content": "Un barista avanzado trata la máquina de espresso como un *sistema de presión y temperatura gestionadas*, no como una caja negra.\n\nSubsistemas clave:\n- **La(s) caldera(s):** Una máquina de caldera única comparte el calor entre vapor y extracción (compromiso). Un **intercambiador de calor (HX)** hace pasar el agua de extracción por un serpentín dentro de la caldera de vapor. Una **doble caldera** maneja extracción y vapor en calderas independientes y controladas por separado — el estándar de oro en estabilidad térmica.\n- **El grupo y el PID:** El grupo se mantiene a temperatura de extracción. Un **controlador PID** la mantiene dentro de ±0.5°C; sin él, la temperatura 'surfea' con el ciclo de calentamiento.\n- **La bomba:** Una bomba rotativa entrega 9 bar constantes y suaves; una bomba vibratoria más barata pulsa.\n\nSaber qué subsistema tienes te dice *por qué* tu máquina se comporta así — p. ej. por qué una HX necesita un 'flush de enfriamiento' antes de extraer.",
        "points": [
          "Estrategias térmicas: caldera única vs. intercambiador vs. doble caldera",
          "El papel del PID en mantener estable la temperatura de extracción",
          "Por qué las máquinas HX requieren un flush de enfriamiento para no quemar el shot"
        ],
        "refs": [
          "Perger, M. — Guías técnicas de <i>Barista Hustle</i> sobre termodinámica de máquinas."
        ],
        "flashcards": [
          { "q": "¿Cuál es la diferencia central entre una máquina de intercambiador de calor y una de doble caldera?", "a": "Una HX pasa el agua de extracción por un serpentín *dentro* de la única caldera de vapor (una fuente de calor); una doble caldera tiene calderas de extracción y vapor independientes y controladas por separado — mayor estabilidad térmica." },
          { "q": "¿Qué hace un controlador PID en una máquina de espresso y por qué importa?", "a": "Mantiene la temperatura del grupo/extracción dentro de ~±0.5°C. Sin él, la temperatura 'surfea' arriba y abajo con el ciclo de la caldera, haciendo shots inconsistentes." },
          { "q": "¿Por qué una máquina de intercambiador necesita un 'flush de enfriamiento' antes del shot?", "a": "El agua de extracción en el serpentín se sobrecalienta contra la caldera de vapor entre shots. Un flush corto purga esa agua recalentada para que el shot no se queme." }
        ]
      },
      {
        "t": "El Agua: El Asesino Silencioso",
        "b": "El 90% de los problemas de una máquina y el 98% de la taza son agua.",
        "content": "El espresso es ~90% agua, así que la química del agua determina el sabor y la vida de la máquina.\n\nDos números importan:\n- **Dureza (calcio/magnesio):** Estos minerales extraen sabor — pero al calentarse el calcio precipita como **sarro (limescale)**, que recubre resistencias, atasca válvulas y termina matando calderas. Es la causa número uno de muerte de máquinas.\n- **Alcalinidad (buffer):** Resiste el cambio de pH. Demasiada y el café sabe plano y calcáreo; muy poca y el agua se vuelve corrosiva, comiendo cobre y latón.\n\nEl **objetivo SCA** es ~50–175 ppm de dureza con alcalinidad cerca de 40 ppm. Un barista avanzado prueba el agua entrante con un kit de dureza y especifica la filtración correcta (ablandador, ósmosis con remineralización) *antes* de comprar una máquina cara — porque la garantía no cubre daño por sarro.",
        "points": [
          "La dureza extrae sabor pero deposita sarro que destruye calderas",
          "La alcalinidad amortigua el pH — mucha sabe plano, poca es corrosiva",
          "Objetivo SCA ≈ 50–175 ppm dureza, ~40 ppm alcalinidad; prueba antes de instalar"
        ],
        "refs": [
          "Hendon, C. & Colonna-Dashwood, M. (2015). <i>Water for Coffee</i>."
        ],
        "flashcards": [
          { "q": "¿Por qué la dureza del agua es a la vez esencial y peligrosa para el espresso?", "a": "El calcio y magnesio del agua dura extraen sabor activamente — pero el calcio calentado precipita como **sarro** que recubre resistencias y calderas, la causa número uno de muerte de máquinas." },
          { "q": "¿Qué le pasa al café si la alcalinidad del agua es muy alta versus muy baja?", "a": "Muy alta: amortigua los ácidos del café y la taza sabe plana y calcárea. Muy baja: el agua pierde su buffer y se vuelve corrosiva, comiendo cobre y latón de la máquina." },
          { "q": "¿Por qué un barista avanzado debe probar el agua *antes* de comprar una máquina?", "a": "Porque el daño por sarro anula garantías y puede destruir una caldera en meses. Probar dureza/alcalinidad permite especificar la filtración correcta desde el inicio en vez de pagar reparaciones después." }
        ]
      },
      {
        "t": "Diagnóstico y Solución de Problemas",
        "b": "Leer el síntoma hacia atrás hasta la causa.",
        "content": "El diagnóstico avanzado es un árbol de decisión que lee un síntoma hasta su causa raíz en vez de adivinar.\n\nCasos comunes:\n- **El shot chorrea/sabe agrio y aguado, sin importar la molienda:** Sospecha una **malla de ducha / bloque de dispersión gastados** o un grupo que necesita backflush — canalización por dispersión despareja.\n- **Sin crema, sabor aceitoso/rancio:** Máquina y molino sucios. Los aceites viejos se pusieron rancios en el grupo y las muelas. Solución: **backflush diario con detergente**, limpieza profunda semanal del molino.\n- **La molienda de pronto corre rápida/floja en la tarde:** Las muelas se calientan durante el día y pueden mover el dial-in; revisa también una tolva casi vacía (menos peso de grano = distinta alimentación).\n- **Lanceta de vapor débil/escupiendo:** Punta obstruida (proteína de leche seca) — remoja y destapa los orificios con un alfiler.\n\nLa disciplina es: cambia **una variable a la vez**, y siempre descarta la limpieza antes de culpar al grano.",
        "points": [
          "Mapea cada síntoma a un subsistema antes de tocar el dial de molienda",
          "Sabor rancio / sin crema casi siempre significa limpieza profunda atrasada",
          "Cambia una variable a la vez; descarta primero la limpieza"
        ],
        "refs": [
          "SCA Barista Skills — competencias de diagnóstico nivel Profesional."
        ],
        "flashcards": [
          { "q": "Un shot chorrea y sabe aguado y agrio sin importar cómo ajustes la molienda. ¿Cuál es la causa raíz probable?", "a": "Canalización por dispersión de agua despareja — sospecha una malla de ducha / bloque de dispersión gastados o un grupo que necesita backflush, no la molienda en sí." },
          { "q": "El espresso de pronto no tiene crema y sabe aceitoso y rancio. ¿Qué señala esto?", "a": "Aceites de café rancios acumulados en el grupo y las muelas del molino. La solución es limpieza, no receta: backflush diario con detergente más limpieza profunda del molino." },
          { "q": "¿Cuál es la disciplina central del diagnóstico avanzado de espresso?", "a": "Cambiar **una variable a la vez** y siempre descartar la limpieza (backflush, muelas limpias, lanceta obstruida) antes de culpar al grano o la receta." }
        ]
      }
    ]
  }
};
