export const brewing3Data = {
  en: [
    {
      "mod": "Module 1",
      "title": "Advanced Fluid Dynamics",
      "id": "m1",
      "desc": "Darcy's Law, permeability, and the physics of the coffee bed.",
      "topics": [
        {
          "t": "Darcy's Law in Coffee",
          "b": "Flow rate = (Permeability × Pressure Drop) / (Viscosity × Bed Depth)",
          "content": "Darcy's Law describes the flow of a fluid through a porous medium. In pour-over coffee, the bed of grounds is that porous medium.\n\nKey variables in coffee:\n- **Permeability:** How easily water passes through. This is dictated by grind size (coarser = more permeable) and the amount of fines (fines clog the pores, drastically reducing permeability).\n- **Pressure Drop (Hydrostatic Head):** The weight of the water pushing down. A higher column of water (pouring the V60 to the brim) increases flow rate.\n- **Viscosity:** Water gets thicker as it cools and as it dissolves coffee solids. As the brew progresses, the liquid becomes more viscous, slowing the flow.\n- **Bed Depth:** A deeper coffee bed (e.g., using a Chemex vs a flat Kalita) creates more resistance, slowing the flow.\n\nUnderstanding Darcy's Law allows you to manipulate flow rate without just changing the grind. Want it faster? Pour higher. Want it slower? Pour in small pulses.",
          "points": [
            "Fines are the primary destroyer of permeability (clogging)",
            "A higher water column (hydrostatic head) pushes water through faster",
            "Viscosity increases during the brew, naturally slowing down the drawdown"
          ],
          "flashcards": [
            { "q": "According to Darcy's Law, what happens to flow rate if you maintain a very high water level in the brewer?", "a": "Flow rate increases due to a higher hydrostatic head (more weight pushing the water through the bed)." },
            { "q": "Why does the flow rate naturally slow down at the end of a pour-over brew?", "a": "Fines migrate to the bottom and clog the pores (reducing permeability), and the water has dissolved solids making it thicker (higher viscosity)." }
          ]
        },
        {
          "t": "Fines Migration",
          "b": "The enemy of consistent flow.",
          "content": "Coffee grounds are not uniform. Even the best grinders produce 'fines'—microscopic dust particles that extract almost instantly. \n\nDuring a pour-over, the physical agitation of the water stream causes **Fines Migration**. The larger boulders stay near the top, while the tiny fines are pushed downward by the water flow until they hit the paper filter. Once there, they lock together and \"blind\" the filter, severely restricting flow.\n\n**Managing Migration:**\n- Less agitation (gentle pouring) reduces migration.\n- Too much swirling of the brewer forces fines to the bottom rapidly, often causing a stalled drawdown.\n- Sifting out fines is generally not recommended, as they provide essential body and extraction efficiency. Managing *where* they sit in the bed is better.",
          "points": [
            "Fines naturally migrate downward with gravity and water flow",
            "Blinding the filter causes stalled drawdowns",
            "Aggressive swirling exacerbates fines migration"
          ],
          "flashcards": [
            { "q": "What is 'blinding the filter'?", "a": "When microscopic coffee fines migrate to the bottom of the bed and clog the pores of the paper filter, severely restricting or stalling the flow." },
            { "q": "Why is aggressive swirling of a V60 sometimes detrimental?", "a": "It forces heavy fines migration to the bottom of the filter, which can cause a stalled drawdown and over-extraction." }
          ]
        }
      ]
    },
    {
      "mod": "Module 2",
      "title": "Particle Size Distribution (PSD)",
      "id": "m2",
      "desc": "Understanding unimodal vs bimodal grinding and how it shapes the cup.",
      "topics": [
        {
          "t": "Unimodal vs. Bimodal",
          "b": "Are you tasting one extraction, or two?",
          "content": "When we analyze grinder output with a laser diffraction particle analyzer, we look at the **Particle Size Distribution (PSD)** graph.\n\n**Bimodal Grinders:** Produce a graph with two peaks—a large peak of target-sized grounds, and a smaller peak of micro-fines. Traditional espresso grinders are highly bimodal. The fines provide resistance for pressure, and the boulders provide flavor. However, for filter coffee, bimodal grinding means you are drinking a blend of highly extracted fines and under-extracted boulders. This creates a complex, heavy, but often muddy cup.\n\n**Unimodal Grinders:** Designed to eliminate fines and boulders, producing one massive, tight peak of identical particles (e.g., SSP SSP flat burrs). Unimodal grinding allows you to extract the coffee uniformly and push the extraction yield much higher without hitting bitterness. The resulting cup is incredibly clear, tea-like, and acidic, but often lacks body.",
          "points": [
            "Bimodal PSD = Two peaks (fines and boulders). Good for espresso, creates muddy/complex filter coffee.",
            "Unimodal PSD = One peak (uniform). Allows very high, even extraction. Creates clear, tea-like filter coffee.",
            "Grinder burr geometry dictates the PSD shape."
          ],
          "flashcards": [
            { "q": "What does a Bimodal Particle Size Distribution mean?", "a": "The grinder produces two distinct sizes of particles: a main peak of target grounds, and a secondary peak of micro-fines." },
            { "q": "Why do Unimodal grinders allow for higher extraction yields without bitterness?", "a": "Because all particles are the same size, they extract at the same rate. You don't have micro-fines over-extracting while you wait for the boulders to finish." }
          ]
        }
      ]
    }
  ],
  es: [
    {
      "mod": "Módulo 1",
      "title": "Dinámica de Fluidos Avanzada",
      "id": "m1",
      "desc": "La Ley de Darcy, permeabilidad y la física de la cama de café.",
      "topics": [
        {
          "t": "La Ley de Darcy en el Café",
          "b": "Flujo = (Permeabilidad × Caída de Presión) / (Viscosidad × Profundidad de Cama)",
          "content": "La Ley de Darcy describe el flujo de un fluido a través de un medio poroso. En el café filtrado, la cama de café es ese medio.\n\nVariables clave en el café:\n- **Permeabilidad:** Qué tan fácil pasa el agua. Dictado por la molienda (grueso = más permeable) y los finos (los finos tapan los poros).\n- **Caída de Presión (Cabeza Hidrostática):** El peso del agua empujando hacia abajo. Una columna alta (llenar el V60 hasta arriba) aumenta el flujo.\n- **Viscosidad:** El agua se vuelve más espesa al enfriarse y al disolver sólidos. A medida que avanza la extracción, el líquido se vuelve más viscoso, ralentizando el flujo.\n- **Profundidad de Cama:** Una cama más profunda (ej. Chemex vs Kalita plana) crea más resistencia.\n\nEntender la Ley de Darcy te permite manipular el flujo sin cambiar la molienda. ¿Lo quieres más rápido? Vierte más alto. ¿Más lento? Pulsos pequeños.",
          "points": [
            "Los finos son los principales destructores de la permeabilidad",
            "Una columna de agua más alta empuja el agua más rápido",
            "La viscosidad aumenta durante el método, ralentizando el drenaje"
          ],
          "flashcards": [
            { "q": "Según la Ley de Darcy, ¿qué le pasa al flujo si mantienes un nivel de agua muy alto en el método?", "a": "El flujo aumenta debido a una mayor cabeza hidrostática (más peso empujando el agua a través de la cama)." },
            { "q": "¿Por qué el flujo se ralentiza naturalmente al final de un método de goteo?", "a": "Los finos migran al fondo y tapan los poros (reduciendo permeabilidad), y el agua ha disuelto sólidos haciéndose más espesa (mayor viscosidad)." }
          ]
        },
        {
          "t": "Migración de Finos",
          "b": "El enemigo del flujo consistente.",
          "content": "El café molido no es uniforme. Incluso los mejores molinos producen 'finos'—polvo microscópico que se extrae casi al instante.\n\nDurante un vertido, la agitación física del agua causa la **Migración de Finos**. Las partículas grandes se quedan arriba, mientras que los finos son empujados hacia abajo por el agua hasta golpear el papel. Una vez allí, se bloquean entre sí y \"ciegan\" el filtro, restringiendo severamente el flujo.\n\n**Manejando la Migración:**\n- Menos agitación (vertido suave) reduce la migración.\n- Demasiado giro (swirling) del método fuerza los finos al fondo rápidamente, causando a menudo un estancamiento.\n- Tamizar (quitar) los finos generalmente no se recomienda, ya que proveen cuerpo y eficiencia de extracción. Es mejor manejar *dónde* se asientan.",
          "points": [
            "Los finos naturalmente migran hacia abajo con la gravedad y el flujo",
            "Cegar el filtro causa que se estanque la extracción",
            "Girar agresivamente (swirl) exacerba la migración de finos"
          ],
          "flashcards": [
            { "q": "¿Qué significa 'cegar el filtro'?", "a": "Cuando finos microscópicos migran al fondo de la cama y tapan los poros del papel filtro, restringiendo o estancando el flujo." },
            { "q": "¿Por qué girar agresivamente un V60 a veces es perjudicial?", "a": "Fuerza una migración pesada de finos al fondo del filtro, lo que puede causar un drenaje estancado y sobre-extracción." }
          ]
        }
      ]
    },
    {
      "mod": "Módulo 2",
      "title": "Distribución del Tamaño de Partícula (PSD)",
      "id": "m2",
      "desc": "Entendiendo molienda unimodal vs bimodal y cómo forma la taza.",
      "topics": [
        {
          "t": "Unimodal vs. Bimodal",
          "b": "¿Estás probando una extracción, o dos?",
          "content": "Cuando analizamos un molino con un láser de difracción, miramos el gráfico de **Distribución del Tamaño de Partícula (PSD)**.\n\n**Molinos Bimodales:** Producen un gráfico con dos picos—un pico grande del tamaño objetivo, y un pico más pequeño de micro-finos. Para filtro, significa que bebes una mezcla de finos muy extraídos y rocas sub-extraídas. Crea una taza compleja, pesada, pero a menudo turbia.\n\n**Molinos Unimodales:** Diseñados para eliminar finos y rocas, produciendo un solo pico masivo de partículas idénticas (ej. muelas planas SSP). La molienda unimodal te permite extraer uniformemente y empujar el rendimiento (EY) mucho más alto sin llegar al amargor. La taza resultante es increíblemente clara, tipo té y ácida, pero a menudo carece de cuerpo.",
          "points": [
            "PSD Bimodal = Dos picos. Bueno para espresso, crea filtro turbio/complejo.",
            "PSD Unimodal = Un pico. Permite extracción alta y pareja. Crea filtro claro tipo té.",
            "La geometría de las muelas dicta la forma del PSD."
          ],
          "flashcards": [
            { "q": "¿Qué significa una Distribución Bimodal?", "a": "El molino produce dos tamaños distintos: un pico principal de molienda objetivo, y un pico secundario de micro-finos." },
            { "q": "¿Por qué los molinos unimodales permiten mayores rendimientos de extracción sin amargor?", "a": "Como todas las partículas son del mismo tamaño, se extraen al mismo ritmo. No tienes micro-finos sobre-extrayéndose mientras esperas que terminen los trozos grandes." }
          ]
        }
      ]
    }
  ]
};
