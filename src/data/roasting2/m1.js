export default {
  "en": {
    "mod": "Module 1",
    "title": "Volatile organic compound formation",
    "id": "m1",
    "desc": "The molecular architecture of coffee aroma — which compound classes form at which temperatures, and how roasting decisions shape the aromatic outcome.",
    "topics": [
      {
        "t": "The five aroma compound classes",
        "b": "Coffee contains over 1,000 volatile compounds. Five families dominate the cup experience.",
        "content": "Coffee's aroma is one of the most chemically complex in the food world. The five compound families most relevant to specialty roasting are:\n\n1. **[Pyrazines](https://en.wikipedia.org/wiki/Pyrazine)** (formed 150–200°C via Maillard): Nutty, roasted, earthy notes (think: chocolate, peanut, toasted grain). They are the primary structural aroma of medium-dark roasts.\n2. **[Furans](https://en.wikipedia.org/wiki/Furan)** (formed 120–180°C via caramelization): Sweet, caramel, butter, and fruity notes. Light to medium roasts are dominated by furanic compounds.\n3. **[Aldehydes](https://en.wikipedia.org/wiki/Aldehyde)** (formed throughout, 100–200°C): Fruity and floral notes at low concentrations; 'green' and harsh at high concentrations. Controlled by roast rate — fast roasts preserve more floral aldehydes.\n4. **[Thiophenes / Thiols](https://en.wikipedia.org/wiki/Thiophene)** (sulfur-containing, formed >180°C): Incredibly potent at trace levels — responsible for the 'roasty,' almost meat-like depth of dark roasts. One ppb can be detectable.\n5. **[Phenols](https://en.wikipedia.org/wiki/Phenols_in_wine)** (formed from chlorogenic acids >200°C): Smoky, medicinal, spicy. Heavily degraded CGA produces guaiacol, responsible for 'smoky' defects at high concentrations.\n\nA roast profile is, fundamentally, a decision about which of these families to amplify and which to suppress.",
        "points": [
          "Pyrazines dominate roasted/nutty notes (Maillard-driven, medium-dark roasts)",
          "Furans drive caramel/sweet notes (caramelization-driven, light-medium roasts)",
          "Aldehydes deliver floral/fruity notes but turn harsh if over-developed",
          "Thiols/thiophenes provide roasty depth in trace amounts — overpowering at high levels",
          "Phenols signal chlorogenic acid over-degradation (smoky, medicinal off-notes)"
        ],
        "refs": [
          "Flament, I. (2002). <i>Coffee Flavor Chemistry</i>. Wiley. — the definitive reference on coffee volatile compounds.",
          "Buffo, R.A. & Cardelli-Freire, C. (2004). 'Coffee flavour: an overview.' <i>Flavour and Fragrance Journal</i>, 19(2)."
        ],
        "flashcards": [
          { "q": "Which aroma compound class is primarily responsible for the nutty, roasted, chocolatey notes of a medium-dark coffee?", "a": "**Pyrazines** — formed via the Maillard reaction between 150–200°C. They are nitrogen-heterocyclic compounds that build in concentration through the roast's browning phase." },
          { "q": "At what temperature range and by what reaction are furans primarily produced in coffee?", "a": "**120–180°C** via caramelization (sugar pyrolysis). Furans provide the sweet, caramel, and buttery notes that characterize light to medium roast profiles." },
          { "q": "Why are thiophenes (sulfur compounds) disproportionately important to coffee aroma despite their tiny concentration?", "a": "Their **odor activity value (OAV)** — the ratio of concentration to perception threshold — is extremely high. Even a few parts per billion are detectable, contributing the characteristic roasty, meaty depth of darker roasts." }
        ]
      },
      {
        "t": "Temperature windows of formation and destruction",
        "b": "Every aroma compound has a birth temperature and a death temperature.",
        "content": "Aroma compounds are not stable end-products — they are intermediates in an ongoing series of chemical reactions. This means every compound has a **formation window** (temperatures at which it accumulates) and a **degradation point** (temperature at which it is destroyed faster than it's created).\n\n**Practical implications for roast profiling:**\n- **Floral aldehydes**: Peak at 160–175°C. If your drying phase overshoots 175°C too quickly, you skip the window where these compounds accumulate. Result: flat, non-floral cup even from a Yirgacheffe.\n- **Furanic compounds**: Peak at 170–185°C. A slow, energetic Maillard phase maximizes these. Rushing past this window with high gas starves the sugar pyrolysis.\n- **Pyrazines**: Require temperatures >165°C and accumulate all the way to 210°C. Extending development time after First Crack increases pyrazine concentration — the 'roasty' character of medium-dark espresso.\n- **Guaiacol (phenol)**: Begins forming aggressively after 200°C. Every second beyond Second Crack pushes guaiacol concentration, which eventually dominates all other aromatics.\n\nThe practical takeaway: **Roast rate controls which compounds get their full formation window.** A 10-minute roast profile and a 14-minute profile on the same coffee will produce fundamentally different aroma fingerprints, even if they reach the exact same drop temperature.",
        "points": [
          "Floral aldehydes peak 160–175°C — a fast drying phase skips this window",
          "Furans peak 170–185°C — rushed Maillard undershoots furanic caramel development",
          "Pyrazines accumulate all the way to 210°C — longer development = more roasty depth",
          "Guaiacol accelerates >200°C — dark roasting shifts the aroma from complex to phenolic/smoky",
          "Total roast time at a given drop temp fundamentally changes the aroma profile"
        ],
        "refs": [
          "Schenker, S. et al. (2002). 'Pore structure of coffee beans affected by roasting conditions.' <i>J. Food Sci.</i>",
          "Mayer, F. et al. (2000). 'Studies on the aroma of roasted coffee by headspace GC/MS.' <i>Eur. Food Res. Technol.</i>"
        ],
        "flashcards": [
          { "q": "A roaster wants to maximize floral, jasmine-like notes in an Ethiopian natural. What specific roasting decision protects the relevant aroma compounds?", "a": "Ensure the bean temperature **lingers between 160–175°C** during the drying-to-Maillard transition. Floral aldehydes peak in this window — rushing through it with high gas eliminates them before they fully accumulate." },
          { "q": "What happens to guaiacol (a phenolic compound) as roasting temperature crosses 200°C?", "a": "It forms rapidly from the degradation of chlorogenic acids. At moderate levels it adds spicy warmth, but at high concentrations (dark roasts) it becomes the dominant aromatic, producing the **smoky, medicinal** character associated with over-roasted coffee." },
          { "q": "Two roasters drop the same coffee at 210°C. One takes 9 minutes, the other 13 minutes. Will their cups taste the same?", "a": "No. Same drop temperature ≠ same flavor. The **slower roast** had more time in each formation window, accumulating more furans, pyrazines, and structured Maillard compounds. The faster roast will taste thinner, possibly more acidic, with less caramel complexity." }
        ]
      },
      {
        "t": "CO₂ as a carrier and degassing dynamics",
        "b": "The gas that brews your espresso also tells you about the freshness of your roast.",
        "content": "During the Maillard reaction and caramelization, the bean produces massive quantities of **[CO₂](https://en.wikipedia.org/wiki/Carbon_dioxide)** gas. Some of it escapes during the roast (audibly during First Crack), but a large amount becomes **physically trapped inside the newly porous cellulose matrix**.\n\nThe darker the roast, the more CO₂ is produced — but also the more the cell walls degrade, allowing faster escape. Paradoxically:\n- **Light Roasts**: Produce less CO₂ but trap it more efficiently in intact cell walls. Degassing is slow and can take 5–10+ days.\n- **Dark Roasts**: Produce more CO₂ but release it faster from degraded cells. Fully degassed in 1–3 days.\n\n**Why does this matter practically?**\n1. **Espresso**: Fresh espresso (<5 days off-roast) will 'bloom' excessively on the puck, disrupting even extraction. The standard rest is 7–14 days.\n2. **Filter**: CO₂ interferes less with extraction, but high CO₂ can create channeling in immersion methods. A 3–5 day rest is typical.\n3. **Packaging**: If you seal beans in a bag without a **one-way degassing valve**, the CO₂ will burst the bag. The valve allows CO₂ out while preventing oxygen in.\n4. **Freshness indicator**: CO₂ release rate (measurable with specific equipment) is used commercially as a proxy for roast date when the roast date isn't printed.",
        "points": [
          "CO₂ is produced by Maillard and caramelization reactions and trapped in cell walls",
          "Light roasts trap CO₂ longer (intact cells); dark roasts release it faster (degraded cells)",
          "Espresso requires 7–14 days rest; filter coffee 3–5 days",
          "One-way degassing valves are essential for sealed packaging",
          "CO₂ release rate correlates inversely with time since roast"
        ],
        "refs": [
          "Schenker (2000), op. cit.",
          "Anderson, B.A. et al. (2003). 'The effect of roasting conditions on CO2 retention in roasted coffee beans.' <i>J. Agric. Food Chem.</i>"
        ],
        "flashcards": [
          { "q": "Why does a lightly roasted coffee typically need a longer post-roast rest than a dark roast?", "a": "Light roasts produce **less CO₂ total** but trap it more effectively inside intact, dense cell walls. The CO₂ escapes slowly over 5–10+ days. Dark roasts have degraded cell walls that let CO₂ escape rapidly (1–3 days)." },
          { "q": "What is the functional purpose of a one-way degassing valve on a coffee bag?", "a": "It allows **CO₂ to escape** (preventing bag rupture from post-roast off-gassing) while blocking **oxygen from entering**, which would accelerate staling. Without it, sealed bags either burst or must wait until degassing is complete before sealing." },
          { "q": "An espresso is pulling fast, with large bubbles disrupting the puck on a 3-day-old light roast. What is the most likely cause?", "a": "Excessive CO₂ off-gassing from under-rested beans. The CO₂ escaping from the fresh beans creates **channels through the puck**, resulting in uneven extraction and channeling-driven sourness. The fix is to rest 7–14 days before espresso use." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "Formación de compuestos orgánicos volátiles",
    "id": "m1",
    "desc": "La arquitectura molecular del aroma del café — qué clases de compuestos se forman a qué temperaturas, y cómo las decisiones de tueste moldean el resultado aromático.",
    "topics": [
      {
        "t": "Las cinco clases de compuestos aromáticos",
        "b": "El café contiene más de 1,000 compuestos volátiles. Cinco familias dominan la experiencia en taza.",
        "content": "El aroma del café es uno de los más complejos químicamente en el mundo alimentario. Las cinco familias de compuestos más relevantes para el tueste de especialidad son:\n\n1. **[Pirazinas](https://es.wikipedia.org/wiki/Pirazina)** (formadas 150–200°C via Maillard): Notas a nuez, tostado, terroso (chocolate, maní, grano tostado). Son el aroma estructural primario de los tuestes medio-oscuros.\n2. **[Furanos](https://es.wikipedia.org/wiki/Furano)** (formados 120–180°C via caramelización): Notas dulces, de caramelo, mantequilla y fruta. Los tuestes claros a medios son dominados por compuestos furánicos.\n3. **[Aldehídos](https://es.wikipedia.org/wiki/Aldeh%C3%ADdo)** (formados a lo largo, 100–200°C): Notas frutales y florales a bajas concentraciones; 'verdes' y ásperos a concentraciones altas. Controlados por la tasa de tueste — tuestes rápidos preservan más aldehídos florales.\n4. **[Tiofenos / Tioles](https://es.wikipedia.org/wiki/Tiofeno)** (sulfurados, formados >180°C): Increíblemente potentes en trazas — responsables de la profundidad 'tostada' casi cárnica de los tuestes oscuros. Un ppb puede ser detectable.\n5. **[Fenoles](https://es.wikipedia.org/wiki/Fenol)** (formados de ácidos clorogénicos >200°C): Ahumado, medicinal, especiado. El CGA muy degradado produce guaiacol, responsable de defectos 'ahumados' a altas concentraciones.",
        "points": [
          "Las pirazinas dominan las notas tostadas/a nuez (Maillard, tuestes medio-oscuros)",
          "Los furanos impulsan las notas de caramelo/dulzor (caramelización, tuestes claros-medios)",
          "Los aldehídos aportan notas florales/frutales pero se vuelven ásperos si se sobre-desarrollan",
          "Tioles/tiofenos aportan profundidad tostada en trazas — abrumadores en altos niveles",
          "Los fenoles señalan sobre-degradación del CGA (notas defectuosas ahumadas, medicinales)"
        ],
        "refs": [
          "Flament, I. (2002). <i>Coffee Flavor Chemistry</i>. Wiley.",
          "Buffo, R.A. & Cardelli-Freire, C. (2004). 'Coffee flavour: an overview.' <i>Flavour and Fragrance Journal</i>, 19(2)."
        ],
        "flashcards": [
          { "q": "¿Qué clase de compuesto aromático es principalmente responsable de las notas a nuez, tostado y chocolate de un café medio-oscuro?", "a": "Las **pirazinas** — formadas via reacción de Maillard entre 150–200°C. Son compuestos heterocíclicos nitrogenados que se acumulan durante la fase de tostado marrón del grano." },
          { "q": "¿A qué rango de temperatura y por qué reacción se producen principalmente los furanos en el café?", "a": "**120–180°C** via caramelización (pirólisis de azúcares). Los furanos aportan las notas dulces, de caramelo y mantequilla que caracterizan los perfiles de tueste claros a medios." },
          { "q": "¿Por qué los tiofenos (compuestos de azufre) son desproporcionadamente importantes para el aroma del café a pesar de su mínima concentración?", "a": "Su **valor de actividad odorífera (OAV)** — la proporción entre concentración y umbral de percepción — es extremadamente alto. Incluso unos pocos partes por billón son detectables, aportando la característica profundidad tostada casi cárnica de tuestes más oscuros." }
        ]
      },
      {
        "t": "Ventanas de temperatura de formación y destrucción",
        "b": "Todo compuesto aromático tiene una temperatura de nacimiento y una de muerte.",
        "content": "Los compuestos aromáticos no son productos finales estables — son intermediarios en una serie continua de reacciones químicas. Esto significa que cada compuesto tiene una **ventana de formación** (temperaturas en las que se acumula) y un **punto de degradación** (temperatura en la que se destruye más rápido de lo que se crea).\n\n**Implicaciones prácticas para el perfilado de tueste:**\n- **Aldehídos florales**: Pico a 160–175°C. Si tu fase de secado sobrepasa 175°C muy rápido, pierdes la ventana en que estos compuestos se acumulan.\n- **Furanos**: Pico a 170–185°C. Una fase de Maillard lenta y energética los maximiza.\n- **Pirazinas**: Requieren >165°C y se acumulan hasta 210°C. Extender el tiempo de desarrollo después del Primer Crack aumenta la concentración de pirazinas.\n- **Guaiacol (fenol)**: Comienza a formarse agresivamente después de 200°C. Cada segundo más allá del Segundo Crack empuja su concentración.\n\nLa conclusión práctica: **La tasa de tueste controla qué compuestos obtienen su ventana de formación completa.**",
        "points": [
          "Aldehídos florales pico 160–175°C — una fase de secado rápida omite esta ventana",
          "Los furanos pico 170–185°C — un Maillard apresurado sub-desarrolla el caramelo",
          "Las pirazinas se acumulan hasta 210°C — más desarrollo = más profundidad tostada",
          "El guaiacol se acelera >200°C — el tueste oscuro cambia el aroma hacia lo fenólico/ahumado",
          "El tiempo total de tueste a una misma temperatura de salida cambia fundamentalmente el perfil aromático"
        ],
        "refs": [
          "Schenker, S. et al. (2002). 'Pore structure of coffee beans affected by roasting conditions.' <i>J. Food Sci.</i>",
          "Mayer, F. et al. (2000). 'Studies on the aroma of roasted coffee by headspace GC/MS.' <i>Eur. Food Res. Technol.</i>"
        ],
        "flashcards": [
          { "q": "Un tostador quiere maximizar notas florales de jazmín en un natural etíope. ¿Qué decisión de tueste protege los compuestos aromáticos relevantes?", "a": "Asegurarse de que la temperatura del grano **se mantenga entre 160–175°C** durante la transición de secado a Maillard. Los aldehídos florales alcanzan su pico en esta ventana — acelerar con mucho gas las elimina antes de que se acumulen completamente." },
          { "q": "¿Qué le sucede al guaiacol (un compuesto fenólico) a medida que la temperatura de tueste supera los 200°C?", "a": "Se forma rápidamente a partir de la degradación de los ácidos clorogénicos. En niveles moderados añade calidez especiada, pero a altas concentraciones (tuestes oscuros) se convierte en el aromático dominante, produciendo el carácter **ahumado, medicinal** asociado con el café sobre-tostado." },
          { "q": "Dos tostadores sacan el mismo café a 210°C. Uno tarda 9 minutos, el otro 13 minutos. ¿Sabrán igual?", "a": "No. Misma temperatura de salida ≠ mismo sabor. El **tueste más lento** tuvo más tiempo en cada ventana de formación, acumulando más furanos, pirazinas y compuestos de Maillard estructurados. El tueste rápido sabrá más delgado, posiblemente más ácido, con menos complejidad de caramelo." }
        ]
      },
      {
        "t": "CO₂ como portador y dinámica de desgasificación",
        "b": "El gas que extrae tu espresso también te dice qué tan fresco está tu tueste.",
        "content": "Durante la reacción de Maillard y la caramelización, el grano produce cantidades masivas de **CO₂**. Parte escapa durante el tueste (audiblemente durante el Primer Crack), pero una gran cantidad queda **físicamente atrapada dentro de la nueva matriz porosa de celulosa**.\n\nCuanto más oscuro el tueste, más CO₂ se produce — pero también más se degradan las paredes celulares, permitiendo una escapada más rápida:\n- **Tuestes claros**: Producen menos CO₂ pero lo atrapan más eficientemente. La desgasificación es lenta (5–10+ días).\n- **Tuestes oscuros**: Producen más CO₂ pero lo liberan más rápido desde células degradadas (1–3 días).\n\n**¿Por qué importa esto en la práctica?**\n1. **Espresso**: Los granos frescos (<5 días del tueste) producirán un 'bloom' excesivo en el puck. El reposo estándar es 7–14 días.\n2. **Filtrado**: El CO₂ interfiere menos, pero puede crear canalización. Un reposo de 3–5 días es típico.\n3. **Empaque**: Sin una válvula de desgasificación unidireccional, el CO₂ reventará la bolsa.\n4. **Indicador de frescura**: La tasa de liberación de CO₂ se usa como indicador de la fecha de tueste.",
        "points": [
          "El CO₂ se produce por reacciones de Maillard y caramelización y queda atrapado en las paredes celulares",
          "Los tuestes claros atrapan CO₂ más tiempo (células intactas); los oscuros lo liberan más rápido",
          "El espresso requiere 7–14 días de reposo; el filtrado 3–5 días",
          "Las válvulas de desgasificación unidireccionales son esenciales para el empaque sellado",
          "La tasa de liberación de CO₂ se correlaciona inversamente con el tiempo desde el tueste"
        ],
        "refs": [
          "Schenker (2000), op. cit.",
          "Anderson, B.A. et al. (2003). 'The effect of roasting conditions on CO2 retention.' <i>J. Agric. Food Chem.</i>"
        ],
        "flashcards": [
          { "q": "¿Por qué un café de tueste claro típicamente necesita más tiempo de reposo post-tueste que un tueste oscuro?", "a": "Los tuestes claros producen **menos CO₂ total** pero lo atrapan más efectivamente dentro de paredes celulares intactas y densas. El CO₂ escapa lentamente durante 5–10+ días. Los tuestes oscuros tienen paredes celulares degradadas que liberan CO₂ rápidamente (1–3 días)." },
          { "q": "¿Cuál es el propósito funcional de una válvula de desgasificación unidireccional en una bolsa de café?", "a": "Permite que el **CO₂ escape** (evitando que la bolsa reviente por la desgasificación post-tueste) mientras bloquea que el **oxígeno entre**, lo que aceleraría el envejecimiento. Sin ella, las bolsas selladas o se revientan o hay que esperar a que la desgasificación termine." },
          { "q": "Un espresso extrae muy rápido, con grandes burbujas que disruptan el puck en un tueste claro de 3 días. ¿Cuál es la causa más probable?", "a": "Excesiva desgasificación de CO₂ en granos insuficientemente reposados. El CO₂ que escapa de los granos frescos crea **canales en el puck**, resultando en una extracción desigual. La solución es reposar 7–14 días antes de usar para espresso." }
        ]
      }
    ]
  }
};
