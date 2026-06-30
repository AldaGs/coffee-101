export default {
  "en": {
    "mod": "Module 6",
    "title": "Green coffee evaluation and grading",
    "id": "m6",
    "desc": "Screen sizing, defect counting, density measurement, moisture analysis, and how to read a green sample evaluation — the roaster's pre-production quality gate.",
    "topics": [
      {
        "t": "SCAA defect grading and screen sizing",
        "b": "A roaster who doesn't evaluate green coffee is outsourcing their quality control to someone else.",
        "content": "The **[Specialty Coffee Association of America (SCAA) Green Coffee Classification System](https://sca.coffee)** is the industry standard for evaluating raw coffee before roasting. It divides defects into two categories:\n\n**Category 1 (Primary) Defects — automatic disqualification for specialty:**\n- Full black beans (putrefied)\n- Full sour beans (over-fermented)\n- Pods (undried cherries)\n- Large stones or sticks (physical contamination)\n- Fungal damage\n\n**Category 2 (Secondary) Defects — allowed in limited quantities:**\n- Partial blacks, partial sours, broken/chipped, floaters, shells, husks, insect damage\n\n**Classification:**\n- **SCA Specialty Grade**: Max 0 Category 1 defects, max 5 Category 2 defects per 350g sample\n- **Premium Grade**: Max 0 Cat. 1, max 8 Cat. 2 per 350g\n- Commercial grades allow progressively more defects\n\n**Screen sizing:**\nCoffee beans are sorted by size using metal sieves with circular holes. Screen size is measured in 1/64-inch increments. Screen 18 (18/64\" = 7.1mm diameter) is considered 'large' for Arabica. Screen sizing matters for roasting because beans of wildly different sizes in the same batch will roast unevenly — small beans reach First Crack while larger beans are still in the Maillard phase.",
        "points": [
          "Category 1 defects disqualify a lot from specialty classification — 0 allowed",
          "Specialty Grade: 0 Cat.1 defects, max 5 Cat.2 per 350g sample",
          "Screen sizing measures bean diameter in 1/64-inch increments",
          "Beans of mixed screen sizes roast unevenly — smaller beans advance faster",
          "Most importers screen-sort specialty lots to within 2 screen sizes for consistency"
        ],
        "refs": [
          "SCA Green Coffee Classification System. https://sca.coffee",
          "Specialty Coffee Association. (2015). <i>Water for Coffee</i> — also includes green QC annexes."
        ],
        "flashcards": [
          { "q": "What are Category 1 defects in the SCA green coffee classification, and how many are allowed in a specialty-grade lot?", "a": "Category 1 defects include: full black, full sour, pods, large stones, sticks, and fungal damage — all signs of severe damage or contamination. Specialty Grade allows **zero Category 1 defects** per 350g sample." },
          { "q": "Why does screen size uniformity matter for roasting quality?", "a": "Beans of different sizes absorb heat at different rates — smaller beans have less mass and heat up faster than larger beans. A mixed-screen batch will have **small beans entering First Crack while large beans are still in Maillard**, resulting in simultaneous under- and over-development in the same drum." },
          { "q": "A coffee scores 88 points on the SCA cupping form but has 2 full sour beans in the 350g sample. Can it be classified as specialty grade?", "a": "No. Full sour beans are a **Category 1 defect**, and specialty grade allows zero Category 1 defects regardless of cupping score. The coffee's sensory merit is irrelevant to the green grade classification — it would need to be re-sorted to pass." }
        ]
      },
      {
        "t": "Density measurement and its roasting implications",
        "b": "A gram-per-milliliter number you can measure in 60 seconds tells you more about how to roast a coffee than the origin label.",
        "content": "**[Bean Density](https://en.wikipedia.org/wiki/Bulk_density)** is measured as the mass of a given volume of beans — usually reported as grams per milliliter (g/mL) or grams per liter (g/L).\n\n**Two measurement methods:**\n1. **Bulk Density (Poured)**: Fill a known-volume container (e.g., a 1L vessel) with coffee poured from a height, level it off, and weigh. Typical range: 625–700 g/L for Arabica specialty.\n2. **Free-Settled Density**: Fill the container, then tap or vibrate it to allow beans to settle tightly, then weigh. ~10–15% higher than poured density. More reproducible for comparisons.\n\n**Roasting implications:**\n\n| Density | Origin Archetype | Roasting Approach |\n|---------|-----------------|--------------------|\n| <620 g/L | Low-altitude Brazil/Vietnam | Low charge temp (175–185°C), gentle gas, risk of scorching |\n| 620–670 g/L | Mid-altitude Colombia, Guatemala | Standard charge (185–195°C), moderate gas |\n| >670 g/L | High-altitude Kenya, Ethiopia | High charge temp (195–210°C), aggressive early gas |\n\n**Why?** Denser beans have more tightly packed cellular structure. They are harder (physically resemble a small rock) and resist heat penetration. They require more initial energy to warm their core. Low-density beans are porous and fragile — they over-heat at the surface before the core warms.\n\nDensity is more reliable than altitude or country of origin as a roasting guide, because it is an **objective, directly measured property** of the specific lot in your hands — not an abstraction from the farm.",
        "points": [
          "Bulk density = mass per volume, measured as g/L (poured) or free-settled",
          "Specialty Arabica range: 625–700 g/L poured density",
          "Higher density → more aggressive charge temp and early gas needed",
          "Lower density → lower charge temp, gentler heat, higher scorching risk",
          "Density is more reliable than altitude or country as a roast guide"
        ],
        "refs": [
          "Schenker (2000), op. cit. — the primary academic reference on green bean physical properties.",
          "Specialty Coffee Association. (2015). <i>Green Coffee Standards</i>."
        ],
        "flashcards": [
          { "q": "What does a high bulk density (e.g., >670 g/L) tell a roaster about how to approach charging the machine?", "a": "High-density beans have tightly packed cellular structure and resist heat penetration. They require a **higher charge temperature** (195–210°C) and more aggressive initial gas to push heat into the core at the same rate as lower-density beans. Under-charging a dense bean risks a raw interior." },
          { "q": "What is the difference between 'poured bulk density' and 'free-settled density,' and which is more useful for inter-lot comparison?", "a": "Poured density: beans filled into a vessel from a height, leveled off. Free-settled: the vessel is tapped or vibrated until beans pack tightly. Free-settled density is **more reproducible** for comparison because it removes the variable of pour technique — the tapped result is closer to true packing density." },
          { "q": "A roaster receives a Yirgacheffe with a poured density of 710 g/L and a Brazil with 610 g/L. How should charge temperature differ, and why?", "a": "The Yirgacheffe (710 g/L, high-density) should be charged significantly hotter (195–210°C) to drive heat into its tightly packed cells. The Brazil (610 g/L, low-density, porous structure) should be charged cooler (175–185°C) — its looser structure conducts heat readily and is **highly susceptible to surface scorching** if charged too hot." }
        ]
      },
      {
        "t": "Moisture measurement methods and their limitations",
        "b": "The number on your moisture meter and the number on your NIR analyzer will never match — and here's why that's acceptable.",
        "content": "Green coffee moisture is typically reported as a percentage of the bean's wet mass. The target for specialty storage is **10–12% MC** (moisture content).\n\n**Measurement methods:**\n\n1. **Capacitance Meters (e.g., Farmex, Pfeuffer)**: The most common field tool. The meter measures the electrical capacitance of the bean mass, which correlates with moisture content. They are fast (30 seconds), cheap, and portable. However, they are calibrated for specific commodities — a meter calibrated for wheat will give inaccurate results for coffee.\n   - Accuracy: ±0.5–1.0% MC\n   - Limitation: Temperature-sensitive. Beans that have been in cold storage read artificially low until they equilibrate to room temperature.\n\n2. **Karl Fischer Titration**: The gold standard for moisture measurement. The beans are dissolved in reagent, and the water content is titrated directly. Extremely accurate (±0.1% MC) but destructive, slow, and requires a laboratory.\n\n3. **NIR (Near-Infrared) Spectroscopy**: Shines NIR light through the bean. Molecules absorb specific wavelengths proportional to their concentration. Can simultaneously measure moisture, density, and screen size in seconds with ±0.2% MC accuracy. Used in large import operations and by green coffee graders (Q-Graders use NIR instruments).\n\n**Critical point**: **Different methods give systematically different numbers** for the same sample. Capacitance meters typically read 0.5–1.0% lower than oven-drying (the true reference method). This is expected and not a problem — as long as you always use the same method and meter within your operation, comparisons are valid.",
        "points": [
          "Target specialty MC: 10–12% (wet basis)",
          "Capacitance meters: fast and cheap, ±0.5–1.0% accuracy, temperature-sensitive",
          "Karl Fischer Titration: lab-grade accuracy (±0.1%) but destructive and slow",
          "NIR spectroscopy: fast, accurate (±0.2%), can measure multiple parameters simultaneously",
          "Different methods give systematically different readings — internal consistency is what matters"
        ],
        "refs": [
          "International Coffee Organization. (2016). <i>ICO Moisture Measurement Standards for Green Coffee</i>.",
          "SCA Green Coffee Standards (2015), op. cit."
        ],
        "flashcards": [
          { "q": "Why do capacitance moisture meters give artificially low readings on beans that have just come out of cold storage?", "a": "Capacitance meters measure electrical capacitance, which correlates with moisture. However, **cold temperatures reduce the capacitance** of the same moisture content — the meter 'sees' the signal as a drier bean. Beans must equilibrate to room temperature (typically 30–60 minutes) before an accurate reading is possible." },
          { "q": "A green coffee lot reads 10.5% MC on a capacitance meter and 11.2% on a Karl Fischer titration. Which is 'correct,' and does the discrepancy matter?", "a": "Karl Fischer is closer to the true value (**it is the reference method**). The capacitance meter's systematic offset of ~0.7% is normal and acceptable. The discrepancy only matters if you're comparing readings across different measurement methods — within the same method, the relative readings are valid for lot-to-lot comparisons." },
          { "q": "What advantage does NIR spectroscopy have over capacitance meters for large-scale green coffee quality control operations?", "a": "NIR can simultaneously measure **moisture content, density, and particle size characteristics** in seconds, non-destructively. It requires no sample preparation and can scan hundreds of bags quickly. Capacitance meters measure only moisture, require careful probe insertion, and are highly sensitive to sample temperature." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 6",
    "title": "Evaluación y clasificación del café verde",
    "id": "m6",
    "desc": "Tamaño de malla, conteo de defectos, medición de densidad, análisis de humedad y cómo leer una evaluación de muestra de café verde — la puerta de control de calidad pre-producción del tostador.",
    "topics": [
      {
        "t": "Clasificación de defectos SCA y tamaño de malla",
        "b": "Un tostador que no evalúa el café verde está subcontratando su control de calidad a alguien más.",
        "content": "El **Sistema de Clasificación de Café Verde de la SCA** es el estándar de la industria para evaluar el café crudo antes de tostar. Divide los defectos en dos categorías:\n\n**Categoría 1 (Defectos Primarios) — descalificación automática para especialidad:**\n- Granos completamente negros (putrefactos)\n- Granos completamente agrios (sobre-fermentados)\n- Vaina (cerezas sin secar)\n- Piedras grandes o palos (contaminación física)\n- Daño por hongos\n\n**Categoría 2 (Defectos Secundarios) — permitidos en cantidades limitadas:**\n- Negros parciales, agrios parciales, rotos/astillados, flotadores, cáscaras, daño por insectos\n\n**Clasificación:**\n- **Grado Especialidad SCA**: Máx 0 defectos Cat. 1, máx 5 Cat. 2 por muestra de 350g\n- **Grado Premium**: Máx 0 Cat. 1, máx 8 Cat. 2 por 350g\n\n**Tamaño de malla:**\nLos granos se clasifican por tamaño usando tamices metálicos. El tamaño se mide en incrementos de 1/64 de pulgada. La Malla 18 (7.1mm) se considera 'grande' para Arábica. El tamaño de malla importa para el tueste porque los granos de tamaños muy diferentes tostarán de forma desigual.",
        "points": [
          "Los defectos de Categoría 1 descalifican un lote de la clasificación de especialidad — 0 permitidos",
          "Grado Especialidad: 0 defectos Cat.1, máx 5 Cat.2 por muestra de 350g",
          "El tamaño de malla mide el diámetro del grano en incrementos de 1/64 de pulgada",
          "Los granos de tamaños de malla mixtos tuestan de forma desigual",
          "La mayoría de los importadores clasifican los lotes de especialidad dentro de 2 tamaños de malla"
        ],
        "refs": [
          "SCA Green Coffee Classification System. https://sca.coffee",
          "Specialty Coffee Association. (2015). <i>Green Coffee Standards</i>."
        ],
        "flashcards": [
          { "q": "¿Qué son los defectos de Categoría 1 en la clasificación de café verde SCA y cuántos se permiten en un lote de grado especialidad?", "a": "Los defectos de Categoría 1 incluyen: negro completo, agrio completo, vainas, piedras grandes, palos y daño por hongos. El Grado Especialidad permite **cero defectos de Categoría 1** por muestra de 350g." },
          { "q": "¿Por qué importa la uniformidad del tamaño de malla para la calidad del tueste?", "a": "Los granos de diferentes tamaños absorben calor a tasas distintas — los granos más pequeños tienen menos masa y se calientan más rápido. Un lote de malla mixta tendrá **granos pequeños en el Primer Crack mientras los grandes aún están en Maillard**, resultando en sub- y sobre-desarrollo simultáneos en el mismo tambor." },
          { "q": "Un café obtiene 88 puntos en el formulario de catación SCA pero tiene 2 granos completamente agrios en la muestra de 350g. ¿Puede clasificarse como grado especialidad?", "a": "No. Los granos completamente agrios son un **defecto de Categoría 1**, y el grado especialidad permite cero defectos Cat. 1 independientemente del puntaje de catación. El mérito sensorial del café es irrelevante para la clasificación del grado verde." }
        ]
      },
      {
        "t": "Medición de densidad y sus implicaciones para el tueste",
        "b": "Un número en gramos por mililitro que puedes medir en 60 segundos te dice más sobre cómo tostar un café que la etiqueta de origen.",
        "content": "La **Densidad del Grano** se mide como la masa de un volumen dado de granos — normalmente reportada como gramos por litro (g/L).\n\n**Dos métodos de medición:**\n1. **Densidad a Granel (vertida)**: Llena un recipiente de volumen conocido (ej. 1L) con café vertido desde altura, nívela y pesa. Rango típico: 625–700 g/L para Arábica de especialidad.\n2. **Densidad Libre-Asentada**: Llena el recipiente, luego golpéalo para que los granos se asienten apretadamente, luego pesa. ~10–15% más alta que la vertida.\n\n**Implicaciones para el tueste:**\n\n| Densidad | Arquetipo de Origen | Enfoque de Tueste |\n|---------|---------------------|-------------------|\n| <620 g/L | Brasil/Vietnam de baja altitud | Carga baja (175–185°C), gas suave |\n| 620–670 g/L | Colombia, Guatemala de altitud media | Carga estándar (185–195°C) |\n| >670 g/L | Kenia, Etiopía de gran altitud | Carga alta (195–210°C), gas agresivo inicial |\n\nLa densidad es más confiable que la altitud o el país de origen como guía de tueste, porque es una **propiedad objetiva directamente medida** del lote específico en tus manos.",
        "points": [
          "Densidad a granel = masa por volumen, medida en g/L (vertida) o libre-asentada",
          "Rango Arábica de especialidad: 625–700 g/L densidad vertida",
          "Mayor densidad → carga más agresiva y gas inicial más alto necesarios",
          "Menor densidad → temperatura de carga más baja, calor más suave, mayor riesgo de quemado",
          "La densidad es más confiable que la altitud o el país como guía de tueste"
        ],
        "refs": [
          "Schenker (2000), op. cit.",
          "Specialty Coffee Association. (2015). <i>Green Coffee Standards</i>."
        ],
        "flashcards": [
          { "q": "¿Qué dice una alta densidad a granel (ej. >670 g/L) sobre cómo abordar la carga de la máquina?", "a": "Los granos de alta densidad tienen estructura celular apretada y resisten la penetración del calor. Requieren una **temperatura de carga más alta** (195–210°C) y más gas inicial agresivo para empujar calor al núcleo a la misma tasa que los granos de menor densidad." },
          { "q": "¿Cuál es la diferencia entre 'densidad a granel vertida' y 'densidad libre-asentada', y cuál es más útil para comparación entre lotes?", "a": "Densidad vertida: granos vaciados en un recipiente desde altura. Libre-asentada: el recipiente se golpea hasta que los granos se aprietan. La densidad libre-asentada es **más reproducible** para comparación porque elimina la variable de la técnica de vertido." },
          { "q": "Un tostador recibe un Yirgacheffe con densidad vertida de 710 g/L y un Brasil con 610 g/L. ¿Cómo debe diferir la temperatura de carga, y por qué?", "a": "El Yirgacheffe (710 g/L, alta densidad) debe cargarse significativamente más caliente (195–210°C). El Brasil (610 g/L, baja densidad, estructura porosa) debe cargarse más frío (175–185°C) — su estructura más suelta conduce el calor fácilmente y es **muy susceptible al quemado superficial** si se carga demasiado caliente." }
        ]
      },
      {
        "t": "Métodos de medición de humedad y sus limitaciones",
        "b": "El número en tu medidor de humedad y el número en tu analizador NIR nunca coincidirán — y aquí está por qué eso es aceptable.",
        "content": "La humedad del café verde se reporta típicamente como porcentaje de la masa húmeda del grano. El objetivo para almacenamiento de especialidad es **10–12% MC**.\n\n**Métodos de medición:**\n\n1. **Medidores de Capacitancia** (ej. Farmex, Pfeuffer): La herramienta de campo más común. Mide la capacitancia eléctrica de la masa de granos, que se correlaciona con la humedad. Rápidos, económicos y portátiles. Sin embargo, son sensibles a la temperatura — los granos de almacenamiento frío leen artificialmente bajo hasta que se equilibran a temperatura ambiente.\n   - Precisión: ±0.5–1.0% MC\n\n2. **Titulación Karl Fischer**: El estándar de oro. Los granos se disuelven en reactivo y el contenido de agua se titula directamente. Extremadamente precisa (±0.1% MC) pero destructiva, lenta y requiere laboratorio.\n\n3. **Espectroscopía NIR (Infrarrojo Cercano)**: Emite luz NIR a través del grano. Puede medir simultáneamente humedad, densidad y tamaño de malla en segundos con precisión de ±0.2% MC.\n\n**Punto crítico**: **Diferentes métodos dan números sistemáticamente diferentes** para la misma muestra. Los medidores de capacitancia típicamente leen 0.5–1.0% por debajo del secado en horno. Esto es esperado y no problemático — siempre que uses el mismo método y medidor dentro de tu operación.",
        "points": [
          "MC objetivo especialidad: 10–12% (base húmeda)",
          "Medidores de capacitancia: rápidos y baratos, ±0.5–1.0% precisión, sensibles a temperatura",
          "Titulación Karl Fischer: precisión de laboratorio (±0.1%) pero destructiva y lenta",
          "Espectroscopía NIR: rápida, precisa (±0.2%), puede medir múltiples parámetros simultáneamente",
          "Diferentes métodos dan lecturas sistemáticamente diferentes — la consistencia interna es lo que importa"
        ],
        "refs": [
          "International Coffee Organization. (2016). <i>ICO Moisture Measurement Standards for Green Coffee</i>.",
          "SCA Green Coffee Standards (2015), op. cit."
        ],
        "flashcards": [
          { "q": "¿Por qué los medidores de humedad de capacitancia dan lecturas artificialmente bajas en granos que acaban de salir de almacenamiento frío?", "a": "Los medidores de capacitancia miden la capacitancia eléctrica, que se correlaciona con la humedad. Sin embargo, **las temperaturas frías reducen la capacitancia** del mismo contenido de humedad — el medidor 've' la señal como un grano más seco. Los granos deben equilibrarse a temperatura ambiente (típicamente 30–60 minutos) antes de una lectura precisa." },
          { "q": "Un lote de café verde lee 10.5% MC en un medidor de capacitancia y 11.2% en una titulación Karl Fischer. ¿Cuál es 'correcto'?", "a": "Karl Fischer es más cercano al valor real (**es el método de referencia**). El offset sistemático de ~0.7% del medidor de capacitancia es normal y aceptable. La discrepancia solo importa si estás comparando lecturas entre diferentes métodos de medición." },
          { "q": "¿Qué ventaja tiene la espectroscopía NIR sobre los medidores de capacitancia para operaciones de control de calidad de café verde a gran escala?", "a": "NIR puede medir simultáneamente **contenido de humedad, densidad y características de tamaño** en segundos, de forma no destructiva. No requiere preparación de muestra y puede escanear cientos de bolsas rápidamente. Los medidores de capacitancia solo miden humedad y son altamente sensibles a la temperatura de la muestra." }
        ]
      }
    ]
  }
};
