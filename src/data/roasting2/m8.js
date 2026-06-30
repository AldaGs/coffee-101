export default {
  "en": {
    "mod": "Module 8",
    "title": "Blending theory and commercial consistency",
    "id": "m8",
    "desc": "The logic of pre- vs. post-roast blending, origin complementarity frameworks, harvest-year management, and the production QC metrics that make a blend replicable at scale.",
    "topics": [
      {
        "t": "Pre-roast vs. post-roast blending",
        "b": "The choice of when to blend is a fundamental production decision with major quality and logistical consequences.",
        "content": "Coffee blends can be assembled in two fundamentally different ways:\n\n**Pre-roast blending (blend first, roast together):**\n- All component coffees are mixed in the green state and roasted as a single batch.\n- **Advantage**: One roast, one profile, lower labor and scheduling complexity.\n- **Disadvantage**: Every origin in the blend must roast at the same pace. A dense Ethiopian and a porous Brazilian will not develop evenly in the same drum in the same time — the Brazilian will be overdeveloped and the Ethiopian underdeveloped. This requires using origins with similar density, moisture, and screen size for the blend to work.\n\n**Post-roast blending (roast separately, blend after):**\n- Each origin is roasted on a profile optimized for its specific physical properties.\n- **Advantage**: Every origin can be developed to its full potential before blending. A Kenyan can be given an aggressive high-heat profile; a natural Brazilian can be given a gentle, slow-drying profile.\n- **Disadvantage**: Requires multiple roast batches, separate storage, and assembly of the blend post-roast. Significantly more labor and scheduling complexity.\n\n**Specialty industry consensus**: Post-roast blending produces superior quality because it allows each origin to be roasted to its ideal development — but it requires sophisticated production planning. Most high-volume specialty operations blend pre-roast using carefully curated origins with matched physical properties.",
        "points": [
          "Pre-roast: simpler logistics but requires matched density/moisture between origins",
          "Post-roast: superior quality (each origin optimally roasted) but higher operational complexity",
          "A dense Ethiopian and porous Brazilian cannot reach optimal development simultaneously in one drum",
          "Most high-volume specialty operations use pre-roast blending with matched origins"
        ],
        "refs": [
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Ch 8: Blending.",
          "Specialty Coffee Association. <i>Coffee Roaster Guild Curriculum</i>."
        ],
        "flashcards": [
          { "q": "What is the primary quality disadvantage of pre-roast blending when combining a high-density Ethiopian with a low-density Brazilian?", "a": "The two origins have different density and heat absorption rates. In the same drum at the same profile, the **low-density Brazilian will over-roast** (porous, heats quickly) while the **high-density Ethiopian will under-develop** (dense, slow to heat). The resulting blend contains simultaneously scorched and underdeveloped beans." },
          { "q": "Why is post-roast blending considered superior in quality but impractical for high-volume operations?", "a": "Post-roast blending allows each origin to be roasted on a **profile optimized for its physical properties**, achieving full potential development. However, it requires: separate roasting batches for each origin, separate storage of each roasted component, post-production assembly, and significantly more scheduling complexity — costs that scale poorly with volume." },
          { "q": "What properties must be matched between origins in a pre-roast blend to achieve even development in the drum?", "a": "**Bean density** (g/L), **moisture content** (%), and **screen size** (average bean diameter). Origins within these parameters will absorb heat at similar rates, allowing a single roast profile to develop all components to a similar degree." }
        ]
      },
      {
        "t": "Origin complementarity and blend architecture",
        "b": "Great blends are designed, not discovered. The logic of base, brightness, and sweetness components.",
        "content": "A well-designed coffee blend typically addresses three sensory roles:\n\n**1. The Base** (structural foundation, 50–70% of blend):\nThis is the coffee that provides body, smoothness, and drinking volume. It should be low-risk, consistent, and economical. Typical base origins: **washed South American** (Brazil, Peru, Colombia) — reliable, low acid, good body, mild sweetness.\n\n**2. The Brightness Component** (flavor elevation, 15–30%):\nAdds acidity, complexity, and vibrancy. Specialty blenders use high-altitude East African coffees for this role: **Ethiopian, Kenyan, Rwandan**. Even at 20% blend ratio, a high-scoring Ethiopian can lift the entire cup's perceived complexity. The cost is higher, which is why it's a minority component.\n\n**3. The Sweetness or Complexity Component** (optional differentiator, 10–20%):\nA coffee with a very specific flavor signature that makes the blend memorable. This can be a **natural process** coffee (adding fruit-forward sweetness), a **washed Central American** with nut/chocolate character, or an **anaerobic** for exotic complexity.\n\n**Complementarity principle**: Each component should bring something the others lack. Adding two high-citric-acid Ethiopian lots doesn't 'double the brightness' — you need contrast (an acid component vs. a body component) for the blend to taste more complex than its parts.\n\n**The 'killer ratio' exercise**: Start with 80% base + 20% brightness. Cup it. Adjust to 70/30. Cup again. The ratio where the blend is most balanced while retaining complexity is usually the final formula.",
        "points": [
          "Base (50–70%): structural body and smoothness — washed South American, consistent, economical",
          "Brightness (15–30%): acidity and complexity lift — high-altitude East African",
          "Sweetness/complexity (10–20%): differentiating note — natural process, anaerobic, or specific origin",
          "Components should contrast: acid + body, not acid + more acid",
          "Dial in ratio by cupping 80/20, 70/30, 60/40 variants to find optimal balance"
        ],
        "refs": [
          "Rao (2014), op. cit.",
          "Lingle (2011), op. cit."
        ],
        "flashcards": [
          { "q": "What are the three sensory 'roles' in a classic blend architecture, and what origin type typically fills each?", "a": "1) **Base** (body, smoothness, volume) → washed South American (Brazil, Colombia, Peru). 2) **Brightness** (acidity, complexity lift) → high-altitude East African (Ethiopia, Kenya, Rwanda). 3) **Sweetness/complexity differentiator** → natural or anaerobic process coffee. Each role needs contrast, not duplication." },
          { "q": "Why doesn't doubling the proportion of the brightness component (e.g., Ethiopian) necessarily double the perceived complexity?", "a": "Complexity emerges from **contrast between components** — the interplay of acid vs. body, brightness vs. sweetness. If both components are high-acid Ethiopian lots, there is no body to contrast against the brightness. The cup becomes one-dimensionally sour. Complexity requires opposition, not amplification." },
          { "q": "What is the 'killer ratio exercise' and how does it help a roaster find the optimal blend proportions?", "a": "Start with one base ratio (e.g., 80% base + 20% brightness), cup it, then incrementally shift the ratio (70/30, 60/40) and cup each variant blind. The ratio at which **the blend tastes most balanced while retaining the brightness component's complexity** is identified as the target formula — it's an empirical, palate-driven optimization." }
        ]
      },
      {
        "t": "Harvest-year management and commercial consistency",
        "b": "The hardest thing in blending is that last year's 'perfect formula' doesn't exist anymore. Managing year-over-year crop variation.",
        "content": "**The fundamental problem of commercial consistency:**\nCoffee is an agricultural product — the same farm, the same variety, the same processing, in two consecutive years will produce **measurably different green coffee**. The moisture content, density, screen size, and flavor profile shift with altitude, rainfall, and temperature during the growing season.\n\nFor a commercial roaster with a flagship blend that must taste the same in July 2024 as it did in July 2023, this is an existential challenge.\n\n**Strategies for managing harvest-year variation:**\n\n1. **Carry-over inventory**: Maintain 3–6 months of the previous crop in cold storage while the new crop arrives. Cup both lots side-by-side, and gradually transition the blend ratio from old-crop to new-crop over several weeks. Customers don't notice a gradual 10% shift; they would notice an abrupt 100% switch.\n\n2. **Blend ratio adjustment**: If the new Kenya lot is more acidic than last year's, reduce its percentage in the blend and compensate with more base or a lower-acid brightness coffee.\n\n3. **Multi-origin redundancy**: Design blends with 4–5 component origins so that losing or adjusting one origin doesn't require a total formula rewrite.\n\n4. **Agtron/color target**: Use an Agtron spectrophotometer (which measures roasted coffee color as a proxy for roast degree) to define the blend's target as a number (e.g., 'Agtron 55 on whole bean'). Adjust roast profiles annually to hit the same Agtron number regardless of crop variation — if the new crop roasts lighter, push the profile darker to compensate.\n\n5. **TDS target with refractometer**: If the blend's target extraction is '1.4% TDS on a 60g/L recipe,' any farm-level change in soluble content will require a recipe or profile adjustment to maintain that TDS.",
        "points": [
          "Same farm, same varietal, two consecutive years will produce measurably different green coffee",
          "Carry-over inventory bridges crop transitions — gradual ratio shifts prevent customer-perceptible changes",
          "Blend ratio adjustment compensates for new-crop flavor differences",
          "Multi-origin blends (4–5 components) are more resilient to individual origin variation",
          "Agtron color targets and TDS benchmarks provide objective consistency anchors"
        ],
        "refs": [
          "Rao (2014), op. cit. — Ch 9: Commercial Consistency.",
          "Specialty Coffee Association. (2015). <i>Green Coffee Purchasing Guidelines</i>."
        ],
        "flashcards": [
          { "q": "Why does the same blend formula not guarantee the same cup from year to year, and what is the most common industry strategy to manage this?", "a": "Coffee is agricultural — the same origin from two consecutive harvests will differ in **density, moisture, and flavor profile** due to growing season variability. The most common strategy is **carry-over inventory**: maintaining the previous crop in storage while the new crop arrives, then gradually transitioning the ratio over weeks to avoid a perceptible abrupt change." },
          { "q": "What is the role of an Agtron spectrophotometer in maintaining blend consistency across harvest years?", "a": "Agtron measures **roasted coffee color** (a proxy for roast degree) as an objective number (e.g., Agtron 55 = medium roast color). By targeting the same Agtron number annually, a roaster can adjust their roast profile to compensate for new-crop differences in moisture or density — if the new crop roasts lighter at the same gas settings, the profile is pushed until the target Agtron number is hit." },
          { "q": "Why is a blend with 4–5 component origins more resilient to crop variation than a 2-origin blend?", "a": "With a 2-origin blend, losing or significantly adjusting one origin requires a dramatic formula change that customers may notice. With 4–5 origins, each component is a smaller percentage of the total — adjusting one origin's ratio by 5% makes a much smaller sensory impact, allowing **smooth year-over-year transitions without perceptible shifts** in the cup." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 8",
    "title": "Teoría de mezclas y consistencia comercial",
    "id": "m8",
    "desc": "La lógica del mezclado pre- vs. post-tueste, marcos de complementariedad de orígenes, gestión de cosechas y las métricas de QC de producción que hacen replicable una mezcla a escala.",
    "topics": [
      {
        "t": "Mezclado pre-tueste vs. post-tueste",
        "b": "La elección de cuándo mezclar es una decisión fundamental de producción con grandes consecuencias de calidad y logística.",
        "content": "Los blends de café pueden ensamblarse de dos formas fundamentalmente distintas:\n\n**Mezclado pre-tueste (mezclar primero, tostar juntos):**\n- Todos los cafés componentes se mezclan en verde y se tuestan como un solo lote.\n- **Ventaja**: Un solo tueste, un solo perfil, menor complejidad laboral.\n- **Desventaja**: Cada origen en el blend debe tostarse al mismo ritmo. Un etíope denso y un brasileño poroso no se desarrollarán uniformemente en el mismo tambor — el brasileño estará sobre-desarrollado y el etíope sub-desarrollado.\n\n**Mezclado post-tueste (tostar por separado, mezclar después):**\n- Cada origen se tuesta con un perfil optimizado para sus propiedades físicas específicas.\n- **Ventaja**: Cada origen puede desarrollarse a su máximo potencial antes de mezclar.\n- **Desventaja**: Requiere múltiples lotes de tueste, almacenamiento separado y ensamblaje post-tueste.\n\n**Consenso de la industria**: El mezclado post-tueste produce calidad superior, pero requiere planificación de producción sofisticada. La mayoría de las operaciones de alto volumen mezclan pre-tueste usando orígenes con propiedades físicas compatibles.",
        "points": [
          "Pre-tueste: logística más simple pero requiere densidad/humedad compatibles entre orígenes",
          "Post-tueste: calidad superior (cada origen óptimamente tostado) pero mayor complejidad operacional",
          "Un etíope denso y un brasileño poroso no pueden alcanzar el desarrollo óptimo simultáneamente",
          "La mayoría de las operaciones de alto volumen usan mezclado pre-tueste con orígenes compatibles"
        ],
        "refs": [
          "Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Cap 8: Blending.",
          "Specialty Coffee Association. <i>Coffee Roaster Guild Curriculum</i>."
        ],
        "flashcards": [
          { "q": "¿Cuál es la principal desventaja de calidad del mezclado pre-tueste al combinar un etíope de alta densidad con un brasileño de baja densidad?", "a": "Los dos orígenes tienen tasas de absorción de calor distintas. En el mismo tambor con el mismo perfil, el **brasileño de baja densidad se sobre-tostará** (poroso, se calienta rápido) mientras que el **etíope de alta densidad se sub-desarrollará** (denso, lento para calentarse)." },
          { "q": "¿Por qué el mezclado post-tueste se considera superior en calidad pero impracticable para operaciones de alto volumen?", "a": "El mezclado post-tueste permite que cada origen se tueste con un **perfil optimizado para sus propiedades físicas**, logrando el desarrollo potencial completo. Sin embargo, requiere: lotes de tueste separados para cada origen, almacenamiento separado y ensamblaje post-producción — costos que escalan mal con el volumen." },
          { "q": "¿Qué propiedades deben compatibilizarse entre orígenes en un blend pre-tueste para lograr desarrollo uniforme?", "a": "**Densidad del grano** (g/L), **contenido de humedad** (%) y **tamaño de malla** (diámetro promedio del grano). Los orígenes dentro de estos parámetros absorberán el calor a tasas similares, permitiendo que un solo perfil de tueste desarrolle todos los componentes a un grado similar." }
        ]
      },
      {
        "t": "Complementariedad de orígenes y arquitectura del blend",
        "b": "Los grandes blends se diseñan, no se descubren. La lógica de los componentes de base, brillantez y dulzor.",
        "content": "Un blend de café bien diseñado típicamente aborda tres roles sensoriales:\n\n**1. La Base** (fundamento estructural, 50–70%):\nAporta cuerpo, suavidad y volumen de consumo. Debe ser de bajo riesgo, consistente y económica. Orígenes base típicos: **sudamericanos lavados** (Brasil, Perú, Colombia).\n\n**2. El Componente de Brillantez** (elevación de sabor, 15–30%):\nAgrega acidez, complejidad y vibración. Los mezcladores de especialidad usan cafés africanos de gran altitud: **Etíope, Keniano, Ruandés**.\n\n**3. El Componente de Dulzor o Complejidad** (diferenciador opcional, 10–20%):\nUn café con una firma de sabor muy específica. Puede ser un café **proceso natural** (agregando dulzor afrutado), un **centroamericano lavado** con carácter a nuez/chocolate, o un **anaeróbico** para complejidad exótica.\n\n**Principio de complementariedad**: Cada componente debe aportar algo que los demás carezcan. Agregar dos lotes etíopes de alto ácido cítrico no 'duplica la brillantez' — necesitas contraste (componente ácido vs. componente corpulento).\n\n**El ejercicio del 'ratio óptimo'**: Comenzar con 80% base + 20% brillantez. Catar. Ajustar a 70/30. Catar de nuevo.",
        "points": [
          "Base (50–70%): cuerpo y suavidad estructural — sudamericano lavado, consistente, económico",
          "Brillantez (15–30%): elevación de acidez y complejidad — africano de gran altitud",
          "Dulzor/complejidad (10–20%): nota diferenciadora — proceso natural, anaeróbico u origen específico",
          "Los componentes deben contrastar: ácido + cuerpo, no ácido + más ácido",
          "Calibrar ratio catando variantes 80/20, 70/30, 60/40 para encontrar el balance óptimo"
        ],
        "refs": [
          "Rao (2014), op. cit.",
          "Lingle (2011), op. cit."
        ],
        "flashcards": [
          { "q": "¿Cuáles son los tres 'roles' sensoriales en la arquitectura clásica de un blend y qué tipo de origen llena cada uno?", "a": "1) **Base** (cuerpo, suavidad, volumen) → sudamericano lavado (Brasil, Colombia, Perú). 2) **Brillantez** (acidez, elevación de complejidad) → africano de gran altitud (Etiopía, Kenia, Ruanda). 3) **Diferenciador de dulzor/complejidad** → café de proceso natural o anaeróbico." },
          { "q": "¿Por qué duplicar la proporción del componente de brillantez (ej. etíope) no necesariamente duplica la complejidad percibida?", "a": "La complejidad surge del **contraste entre componentes** — la interacción de ácido vs. cuerpo, brillantez vs. dulzor. Si ambos componentes son lotes etíopes de alto ácido, no hay cuerpo con qué contrastar. La taza se vuelve unidimensionalmente ácida. La complejidad requiere oposición, no amplificación." },
          { "q": "¿Qué es el 'ejercicio del ratio óptimo' y cómo ayuda a un tostador a encontrar las proporciones óptimas del blend?", "a": "Comenzar con un ratio base (ej. 80% base + 20% brillantez), catarlo, luego desplazar el ratio incrementalmente (70/30, 60/40) y catar cada variante a ciegas. El ratio en el que el **blend sabe más equilibrado mientras retiene la complejidad** del componente de brillantez es el candidato a fórmula final." }
        ]
      },
      {
        "t": "Gestión de cosechas y consistencia comercial",
        "b": "Lo más difícil en el mezclado es que la 'fórmula perfecta' del año pasado ya no existe. Gestionando la variación de cosecha a cosecha.",
        "content": "**El problema fundamental de la consistencia comercial:**\nEl café es un producto agrícola — la misma finca, la misma variedad, el mismo procesamiento, en dos años consecutivos producirá **café verde mensurablemente diferente**.\n\n**Estrategias para gestionar la variación de cosecha:**\n\n1. **Inventario de transición**: Mantener 3–6 meses de la cosecha anterior en almacenamiento frío mientras llega la nueva. Catar ambos lotes lado a lado, y gradualmente transicionar el ratio del blend de vieja cosecha a nueva durante varias semanas.\n\n2. **Ajuste del ratio del blend**: Si el nuevo lote keniano es más ácido que el del año pasado, reducir su porcentaje y compensar con más base.\n\n3. **Redundancia multi-origen**: Diseñar blends con 4–5 orígenes componentes para que perder o ajustar uno no requiera una reescritura total de la fórmula.\n\n4. **Objetivo Agtron/color**: Usar un espectrofotómetro Agtron para definir el objetivo del blend como un número (ej. 'Agtron 55 en grano entero'). Ajustar perfiles de tueste anualmente para alcanzar el mismo número independientemente de la variación de cosecha.\n\n5. **Objetivo TDS con refractómetro**: Si la extracción objetivo del blend es '1.4% TDS en receta de 60g/L', cualquier cambio en el contenido soluble requerirá ajuste.",
        "points": [
          "Misma finca, misma variedad, dos años consecutivos producirán café verde mensurablemente diferente",
          "El inventario de transición permite transiciones graduales — los cambios abruptos son perceptibles",
          "El ajuste del ratio del blend compensa las diferencias de sabor de la nueva cosecha",
          "Los blends multi-origen (4–5 componentes) son más resistentes a la variación individual",
          "Los objetivos de color Agtron y TDS proporcionan anclas objetivas de consistencia"
        ],
        "refs": [
          "Rao (2014), op. cit.",
          "SCA. (2015). <i>Green Coffee Purchasing Guidelines</i>."
        ],
        "flashcards": [
          { "q": "¿Por qué la misma fórmula de blend no garantiza la misma taza de año a año, y cuál es la estrategia más común para gestionarlo?", "a": "El café es agrícola — el mismo origen de dos cosechas consecutivas diferirá en **densidad, humedad y perfil de sabor**. La estrategia más común es el **inventario de transición**: mantener la cosecha anterior en almacenamiento mientras llega la nueva, luego gradualmente transicionar el ratio durante semanas para evitar un cambio abrupto perceptible." },
          { "q": "¿Cuál es el papel del espectrofotómetro Agtron en el mantenimiento de la consistencia del blend entre cosechas?", "a": "El Agtron mide el **color del café tostado** (un proxy del grado de tueste) como un número objetivo (ej. Agtron 55 = color de tueste medio). Al apuntar al mismo número anualmente, el tostador puede ajustar el perfil para compensar diferencias de la nueva cosecha — si la nueva cosecha tuesta más claro a los mismos ajustes, el perfil se empuja hasta alcanzar el Agtron objetivo." },
          { "q": "¿Por qué un blend con 4–5 orígenes componentes es más resistente a la variación de cosecha que un blend de 2 orígenes?", "a": "Con un blend de 2 orígenes, perder o ajustar significativamente uno requiere un cambio dramático de fórmula que los clientes pueden notar. Con 4–5 orígenes, cada componente es un porcentaje menor del total — ajustar el ratio de un origen en 5% tiene un impacto sensorial mucho menor, permitiendo **transiciones suaves año a año**." }
        ]
      }
    ]
  }
};
