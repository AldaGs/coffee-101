export default {
  "en": {
    "mod": "Module 7",
    "title": "Degassing, packaging, and shelf life",
    "id": "m7",
    "desc": "The science of roasted coffee staling — CO₂ dynamics, oxidation pathways, packaging technology, and how to predict shelf life from roast level and storage conditions.",
    "topics": [
      {
        "t": "Staling pathways: what actually goes wrong",
        "b": "Coffee doesn't just 'get old.' Four distinct chemical reactions are responsible for staling, each requiring a different strategy to prevent.",
        "content": "Roasted coffee stales through four distinct degradation pathways:\n\n**1. [Oxidation](https://en.wikipedia.org/wiki/Oxidation)** (most damaging):\nOxygen reacts with coffee's aromatic compounds, particularly the volatile lipid oxidation products. The result is **rancidity** — the flat, cardboard, 'wet paper bag' taste of stale coffee. Rate doubles for every 10°C of temperature increase (Arrhenius relationship). Oxygen is the primary enemy of roasted coffee.\n\n**2. CO₂ Degassing** (displaces oxygen initially, then accelerates staling):\nDegassing CO₂ acts as a protective buffer initially — the gas fills the bean's pores and the package headspace, displacing oxygen. Once CO₂ is depleted, oxygen rushes into the now-empty pores and oxidation accelerates. This is why coffee 'hits a cliff' in freshness around 3–4 weeks post-roast.\n\n**3. Hydrolysis** (moisture-driven):\nWater breaks down ester bonds in aromatic compounds. Even small amounts of moisture (high relative humidity storage) accelerate staling. Hydrolysis creates flat, 'dull' flavors and destroys the bright, sparkling character of fresh coffee. Hygroscopic nature of roasted beans means they actively absorb ambient humidity.\n\n**4. [Maillard Browning Reversal](https://en.wikipedia.org/wiki/Maillard_reaction)** (advanced staling):\nThe same Maillard compounds that create coffee's complex flavors can undergo reverse reactions at room temperature over months. This produces 'stale roast' notes — muted, flat, with loss of caramel complexity. Only significant in very extended storage (>3 months).\n\n**Priority order**: Eliminate oxygen first, minimize moisture second, control temperature third.",
        "points": [
          "Oxidation is the primary staling pathway — oxygen attacks volatile lipid compounds",
          "CO₂ degassing initially protects by displacing oxygen — staling accelerates when CO₂ is depleted",
          "Hydrolysis (moisture attack) destroys ester-linked aromatic compounds",
          "Maillard reversal is a long-term staling pathway (>3 months)",
          "Priority: eliminate O₂ first, minimize moisture second, cool temperature third"
        ],
        "refs": [
          "Nicoli, M.C. et al. (2009). 'Effect of roasting on the antioxidant activity of coffee brews.' <i>J. Agric. Food Chem.</i>",
          "Clarke, R.J. & Vitzthum, O.G. (eds). (2001). <i>Coffee: Recent Developments</i>. Blackwell Science."
        ],
        "flashcards": [
          { "q": "What are the four chemical pathways responsible for roasted coffee staling, and which is most damaging?", "a": "1) **Oxidation** (most damaging — O₂ attacks volatile aromatics producing rancidity), 2) CO₂ degassing (protective initially, but accelerates oxidation once depleted), 3) hydrolysis (moisture breaks ester-linked aromas), 4) Maillard reversal (very slow, months-scale, causes muted 'stale roast' character)." },
          { "q": "Why does roasted coffee undergo a sharp freshness decline around 3–4 weeks post-roast, even in sealed packaging?", "a": "The protective CO₂ buffer that displaced oxygen from the bean's pores and package headspace becomes **depleted** around this time. Once CO₂ is gone, atmospheric oxygen fills the empty pores, and oxidation accelerates rapidly — the 'freshness cliff' that roasters observe between weeks 3 and 5." },
          { "q": "What is the Arrhenius relationship as it applies to coffee oxidation, and what is its practical implication for storage?", "a": "The Arrhenius relationship states that for many chemical reactions, the rate approximately **doubles for every 10°C increase** in temperature. For coffee oxidation: coffee stored at 30°C stales roughly twice as fast as coffee stored at 20°C. This is why cold storage (refrigerator for short-term, freezer for long-term) is legitimately effective if done without moisture exposure." }
        ]
      },
      {
        "t": "Packaging technology: barriers and gases",
        "b": "The difference between a paper bag and a nitrogen-flushed foil valve bag is measured in weeks of freshness.",
        "content": "**Packaging goals**: Exclude oxygen, prevent moisture ingress, allow CO₂ to escape post-roast.\n\n**Packaging materials ranked by oxygen barrier (OTR — Oxygen Transmission Rate):**\n1. **Aluminum foil laminate**: Near-zero OTR. The gold standard. Used by all premium roasters targeting 3+ month shelf life.\n2. **Metalized polyester (Mylar-type)**: Very low OTR. Good barrier, slightly less effective than true foil. Common in specialty.\n3. **Kraft paper with LDPE liner**: High OTR. The 'craft bag' aesthetic. Suitable only for same-week consumption (café direct-sales).\n4. **Plain paper**: Essentially no barrier. Coffee stales within days.\n\n**One-way degassing valve**: An essential component that allows CO₂ to exit while preventing O₂ from entering. Without it, freshly roasted coffee will rupture the package. The valve mechanism uses a silicone disc that opens under CO₂ pressure but seals against external air pressure.\n\n**Modified Atmosphere Packaging (MAP):**\nAfter filling, the package is flushed with **nitrogen (N₂)** or **CO₂** to displace oxygen from the headspace before sealing. A foil bag with nitrogen flush can maintain <1% O₂ in the headspace for months, extending shelf life from ~4 weeks to 6–12 months.\n\n**Vacuum sealing**: Removes the gas phase entirely. Effective but crushes the beans (undesirable for whole bean) and must be done after degassing is complete, or the beans will expand and re-inflate the bag.",
        "points": [
          "Aluminum foil laminate has near-zero OTR — the best oxygen barrier available",
          "One-way degassing valve: silicone disc allows CO₂ out, blocks O₂ in",
          "Nitrogen flush reduces headspace O₂ to <1%, extending shelf life from 4 weeks to 6–12 months",
          "Kraft paper bags are acceptable only for same-week consumption",
          "Vacuum sealing must occur after full degassing to prevent bag re-inflation"
        ],
        "refs": [
          "Clarke & Vitzthum (2001), op. cit.",
          "Smrke, S. et al. (2017). 'Effect of storage conditions on quality of roasted coffee.' <i>J. Food Sci.</i>"
        ],
        "flashcards": [
          { "q": "What is the Oxygen Transmission Rate (OTR) of a packaging material, and how does aluminum foil laminate compare to kraft paper?", "a": "OTR measures how many cubic centimeters of oxygen pass through a square meter of material per day at standard conditions. Aluminum foil laminate has **near-zero OTR** (essentially impermeable). Kraft paper has very high OTR — oxygen passes freely. The difference translates to weeks of additional freshness." },
          { "q": "How does a one-way degassing valve work, and why is it necessary for sealed coffee packaging?", "a": "A silicone disc held in place by a filter paper backing. CO₂ from the fresh beans builds pressure, pushes the disc open, and escapes. When external pressure exceeds internal pressure, the disc seals — **O₂ cannot flow backward in**. Without this valve, a sealed bag of fresh roasted coffee would rupture within 24–48 hours from CO₂ pressure." },
          { "q": "A roaster wants to extend their whole-bean shelf life from 4 weeks to 6 months for wholesale customers. What packaging upgrade is most impactful?", "a": "Switching from standard foil bags with degassing valves to **foil bags with nitrogen flush (MAP)**. After filling, the bag headspace is purged with nitrogen to <1% O₂ before sealing. This eliminates the primary staling driver (oxidation) and can extend shelf life to 6–12 months without flavor degradation when combined with quality foil laminate." }
        ]
      },
      {
        "t": "Optimal rest times by roast level and method",
        "b": "The same coffee at the same roast can require wildly different rest periods for espresso vs. filter — and the science explains why.",
        "content": "**Why does roasted coffee need to rest at all?**\nPost-roast, the beans are still aggressively off-gassing CO₂ from within their cellulose matrix. CO₂ in solution suppresses extraction by forming carbonic acid (H₂CO₃), which:  \n1. Disrupts even water penetration into the grounds\n2. Causes excessive bloom in immersion methods\n3. In espresso, forms gas channels through the puck, causing channeling\n\n**Rest time guidelines:**\n\n| Roast Level | Filter Rest | Espresso Rest | Why Difference? |\n|------------|-------------|---------------|------------------|\n| Light (205–210°C drop) | 5–10 days | 10–21 days | Light roasts have intact cell walls trapping CO₂ longer |\n| Medium (210–215°C drop) | 3–7 days | 7–14 days | Moderate CO₂ release rate |\n| Medium-Dark (215–220°C) | 2–5 days | 5–10 days | More cell wall degradation, faster release |\n| Dark (>220°C) | 1–3 days | 3–7 days | Heavily degraded cells, very fast CO₂ release |\n\n**Why espresso needs longer rest than filter:**\n1. Espresso uses **9 bar of pressure** forcing water through the puck. CO₂ creates compressible gas pockets that resist water penetration unevenly (channeling).\n2. Espresso extracts at a very high concentration — even trace CO₂ is taste-perceptible as harshness.\n3. Filter coffee uses gravity and lower brew ratios — CO₂ in the bloom simply expands out and doesn't disrupt extraction as severely.\n\n**Freezing beans**: Scientifically validated. If beans are frozen immediately after reaching room temperature post-roast (preventing condensation), they can be stored for months at -18°C with virtually no staling. Remove from freezer 30+ minutes before grinding, and **never refreeze**.",
        "points": [
          "CO₂ from roasting suppresses extraction — too much causes channeling in espresso, poor immersion blooms",
          "Light roasts: 5–10 days filter, 10–21 days espresso (slow CO₂ escape from intact cells)",
          "Dark roasts: 1–3 days filter, 3–7 days espresso (fast CO₂ escape from degraded cells)",
          "Espresso needs longer rest than filter — 9 bar pressure amplifies CO₂ disruption",
          "Freezing (immediately post-roast, -18°C, no refreeze) is scientifically valid for long-term freshness"
        ],
        "refs": [
          "Cameron, M. et al. (2020). 'Systematically improving espresso.' <i>Matter</i>, 2(3).",
          "Smrke et al. (2017), op. cit."
        ],
        "flashcards": [
          { "q": "Why does espresso require a longer post-roast rest period than filter coffee brewed at the same roast level?", "a": "Espresso forces water at **9 bar** through a puck of tightly packed coffee. CO₂ creates compressible gas channels that resist water penetration unevenly, causing channeling and inconsistent extraction. Filter coffee uses gravity — CO₂ expands out during the bloom and doesn't disrupt subsequent extraction as severely." },
          { "q": "A roaster receives complaints that their espresso has harsh, astringent edges and the puck shows signs of channeling. The coffee is 5 days post-roast. What is the most likely cause?", "a": "The coffee is under-rested — it is still **aggressively off-gassing CO₂**, which is disrupting the espresso puck. CO₂ at this level creates gas channels through the puck during extraction, producing uneven, channeled shots with harsh, sour edges. The fix is to rest the coffee for an additional 5–16 days (depending on roast level) before use." },
          { "q": "A roaster freezes freshly roasted beans to extend shelf life. What two conditions are critical for this to work without quality degradation?", "a": "1) **Freeze immediately** after the beans reach room temperature post-roast (prevents moisture condensation on warm beans). 2) **Never refreeze** — each freeze-thaw cycle ruptures cell walls and accelerates moisture absorption. Remove from freezer 30+ minutes before grinding and use the entire portion in one session." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 7",
    "title": "Desgasificación, empaque y vida útil",
    "id": "m7",
    "desc": "La ciencia del envejecimiento del café tostado — dinámica del CO₂, vías de oxidación, tecnología de empaque y cómo predecir la vida útil a partir del nivel de tueste y las condiciones de almacenamiento.",
    "topics": [
      {
        "t": "Vías de envejecimiento: qué sale realmente mal",
        "b": "El café no simplemente 'se pone viejo'. Cuatro reacciones químicas distintas son responsables del envejecimiento.",
        "content": "El café tostado envejece a través de cuatro vías de degradación distintas:\n\n**1. [Oxidación](https://es.wikipedia.org/wiki/Oxidaci%C3%B3n)** (la más dañina):\nEl oxígeno reacciona con los compuestos aromáticos del café, especialmente los productos de oxidación lipídica volátiles. El resultado es la **rancidez** — el sabor plano, a cartón y 'bolsa de papel mojada' del café añejo.\n\n**2. Desgasificación de CO₂** (desplaza el oxígeno inicialmente, luego acelera el envejecimiento):\nEl CO₂ actúa como amortiguador protector inicialmente, llenando los poros del grano. Una vez que el CO₂ se agota, el oxígeno llena los poros ahora vacíos y la oxidación se acelera.\n\n**3. Hidrólisis** (impulsada por la humedad):\nEl agua rompe los enlaces éster en los compuestos aromáticos, creando sabores planos.\n\n**4. [Reversión de Maillard](https://es.wikipedia.org/wiki/Reacci%C3%B3n_de_Maillard)** (envejecimiento avanzado):\nLos mismos compuestos de Maillard que crean los sabores complejos pueden sufrir reacciones inversas. Solo significativo en almacenamiento muy extendido (>3 meses).\n\n**Orden de prioridad**: Eliminar el oxígeno primero, minimizar la humedad segundo, controlar la temperatura tercero.",
        "points": [
          "La oxidación es la vía de envejecimiento principal — el O₂ ataca los compuestos lipídicos volátiles",
          "La desgasificación de CO₂ protege inicialmente al desplazar el oxígeno",
          "La hidrólisis (ataque de humedad) destruye los compuestos aromáticos enlazados por éster",
          "La reversión de Maillard es una vía lenta (>3 meses)",
          "Prioridad: eliminar O₂ primero, minimizar humedad segundo, temperatura fría tercero"
        ],
        "refs": [
          "Clarke, R.J. & Vitzthum, O.G. (eds). (2001). <i>Coffee: Recent Developments</i>. Blackwell Science.",
          "Nicoli, M.C. et al. (2009). 'Effect of roasting on the antioxidant activity of coffee brews.' <i>J. Agric. Food Chem.</i>"
        ],
        "flashcards": [
          { "q": "¿Cuáles son las cuatro vías químicas responsables del envejecimiento del café tostado y cuál es la más dañina?", "a": "1) **Oxidación** (la más dañina — O₂ ataca los aromáticos volátiles produciendo rancidez), 2) desgasificación de CO₂ (protectora inicialmente), 3) hidrólisis (la humedad rompe los aromas enlazados por éster), 4) reversión de Maillard (muy lenta, meses, causa carácter 'tostado añejo' apagado)." },
          { "q": "¿Por qué el café tostado sufre una disminución brusca de frescura alrededor de 3–4 semanas post-tueste, incluso en empaque sellado?", "a": "El amortiguador protector de CO₂ que desplazó el oxígeno se **agota** alrededor de este tiempo. Una vez que el CO₂ se va, el oxígeno atmosférico llena los poros vacíos y la oxidación se acelera rápidamente — el 'precipicio de frescura' que los tostadores observan entre las semanas 3 y 5." },
          { "q": "¿Qué es la relación de Arrhenius aplicada a la oxidación del café y cuál es su implicación práctica para el almacenamiento?", "a": "La relación de Arrhenius establece que la tasa de muchas reacciones químicas **se duplica aproximadamente por cada 10°C de aumento de temperatura**. Para la oxidación del café: el café almacenado a 30°C envejece aproximadamente el doble de rápido que a 20°C. Por eso el almacenamiento frío es legítimamente efectivo." }
        ]
      },
      {
        "t": "Tecnología de empaque: barreras y gases",
        "b": "La diferencia entre una bolsa de papel y una bolsa de foil con válvula y nitrógeno se mide en semanas de frescura.",
        "content": "**Materiales de empaque clasificados por barrera de oxígeno (OTR — Tasa de Transmisión de Oxígeno):**\n1. **Laminado de hoja de aluminio**: OTR casi cero. El estándar de oro. Usado por todos los tostadores premium.\n2. **Poliéster metalizado (tipo Mylar)**: OTR muy bajo. Buena barrera, ligeramente menos efectiva que el foil real.\n3. **Papel Kraft con forro de LDPE**: OTR alto. La estética de 'bolsa artesanal'. Solo adecuada para consumo en la misma semana.\n4. **Papel simple**: Esencialmente sin barrera. El café envejece en días.\n\n**Válvula de desgasificación unidireccional**: Componente esencial que permite que el CO₂ salga mientras evita que entre O₂. El mecanismo usa un disco de silicona que se abre bajo presión de CO₂ pero sella contra la presión de aire externo.\n\n**Empaque en Atmósfera Modificada (MAP):**\nDespués de llenarse, el paquete se purga con **nitrógeno (N₂)** para desplazar el oxígeno del espacio de cabeza antes de sellar. Una bolsa de foil con purga de nitrógeno puede mantener <1% O₂ durante meses, extendiendo la vida útil de ~4 semanas a 6–12 meses.\n\n**Sellado al vacío**: Elimina la fase gaseosa. Efectivo pero aplasta los granos y debe hacerse después de que la desgasificación esté completa.",
        "points": [
          "El laminado de hoja de aluminio tiene OTR casi cero — la mejor barrera de oxígeno disponible",
          "Válvula unidireccional: disco de silicona permite que salga CO₂, bloquea la entrada de O₂",
          "La purga de nitrógeno reduce el O₂ del espacio de cabeza a <1%, extendiendo la vida útil a 6–12 meses",
          "Las bolsas de papel Kraft son aceptables solo para consumo en la misma semana",
          "El sellado al vacío debe ocurrir después de la desgasificación completa"
        ],
        "refs": [
          "Clarke & Vitzthum (2001), op. cit.",
          "Smrke, S. et al. (2017). 'Effect of storage conditions on quality of roasted coffee.' <i>J. Food Sci.</i>"
        ],
        "flashcards": [
          { "q": "¿Qué es la Tasa de Transmisión de Oxígeno (OTR) de un material de empaque y cómo se compara el laminado de hoja de aluminio con el papel Kraft?", "a": "OTR mide cuántos centímetros cúbicos de oxígeno pasan a través de un metro cuadrado de material por día. El laminado de hoja de aluminio tiene **OTR casi cero** (esencialmente impermeable). El papel Kraft tiene OTR muy alto — el oxígeno pasa libremente. La diferencia se traduce en semanas de frescura adicional." },
          { "q": "¿Cómo funciona una válvula de desgasificación unidireccional y por qué es necesaria para el empaque sellado de café?", "a": "Un disco de silicona mantenido en su lugar por un respaldo de papel filtro. El CO₂ de los granos frescos acumula presión, empuja el disco y escapa. Cuando la presión externa supera la interna, el disco sella — **el O₂ no puede fluir hacia adentro**. Sin esta válvula, una bolsa sellada de café recién tostado se reventaría en 24–48 horas." },
          { "q": "Un tostador quiere extender la vida útil de sus granos enteros de 4 semanas a 6 meses para clientes mayoristas. ¿Qué mejora de empaque tiene mayor impacto?", "a": "Cambiar de bolsas de foil estándar con válvulas de desgasificación a **bolsas de foil con purga de nitrógeno (MAP)**. Después de llenarse, el espacio de cabeza se purga con nitrógeno a <1% O₂ antes de sellar. Esto elimina el principal impulsor del envejecimiento (oxidación) y puede extender la vida útil a 6–12 meses." }
        ]
      },
      {
        "t": "Tiempos de reposo óptimos por nivel de tueste y método",
        "b": "El mismo café al mismo tueste puede requerir tiempos de reposo muy diferentes para espresso vs. filtrado — y la ciencia explica por qué.",
        "content": "**¿Por qué el café tostado necesita reposar?**\nPost-tueste, los granos aún desgasifican agresivamente CO₂. El CO₂ en solución suprime la extracción al formar ácido carbónico (H₂CO₃), que: (1) interrumpe la penetración uniforme del agua, (2) causa bloom excesivo, (3) en espresso, forma canales de gas en el puck.\n\n**Guías de tiempo de reposo:**\n\n| Nivel de Tueste | Reposo Filtrado | Reposo Espresso |\n|----------------|-----------------|------------------|\n| Claro (205–210°C) | 5–10 días | 10–21 días |\n| Medio (210–215°C) | 3–7 días | 7–14 días |\n| Medio-Oscuro (215–220°C) | 2–5 días | 5–10 días |\n| Oscuro (>220°C) | 1–3 días | 3–7 días |\n\n**¿Por qué el espresso necesita más reposo que el filtrado?**\nEl espresso usa **9 bar de presión** forzando agua a través del puck. El CO₂ crea bolsas de gas comprimibles que resisten la penetración del agua de forma desigual (canalización). El café filtrado usa gravedad — el CO₂ se expande durante el bloom y no interrumpe tanto la extracción.\n\n**Congelación de granos**: Científicamente validada. Si los granos se congelan inmediatamente después de alcanzar temperatura ambiente post-tueste (evitando condensación), pueden almacenarse meses a -18°C con prácticamente ningún envejecimiento. Sacar del congelador 30+ minutos antes de moler y **nunca recongelar**.",
        "points": [
          "El CO₂ del tueste suprime la extracción — demasiado causa canalización en espresso",
          "Tuestes claros: 5–10 días filtrado, 10–21 días espresso (escape lento de CO₂ de células intactas)",
          "Tuestes oscuros: 1–3 días filtrado, 3–7 días espresso (escape rápido de células degradadas)",
          "El espresso necesita más reposo que el filtrado — 9 bar amplifica la disrupción del CO₂",
          "La congelación (inmediatamente post-tueste, -18°C, sin recongelar) es válida científicamente"
        ],
        "refs": [
          "Cameron, M. et al. (2020). 'Systematically improving espresso.' <i>Matter</i>, 2(3).",
          "Smrke et al. (2017), op. cit."
        ],
        "flashcards": [
          { "q": "¿Por qué el espresso requiere más tiempo de reposo post-tueste que el café filtrado al mismo nivel de tueste?", "a": "El espresso fuerza agua a **9 bar** a través de un puck. El CO₂ crea canales de gas comprimibles que resisten la penetración del agua de forma desigual, causando canalización. El café filtrado usa gravedad — el CO₂ se expande durante el bloom y no interrumpe tan gravemente la extracción posterior." },
          { "q": "Un tostador recibe quejas de que su espresso tiene bordes ásperos y astringentes y el puck muestra signos de canalización. El café tiene 5 días post-tueste. ¿Cuál es la causa más probable?", "a": "El café está insuficientemente reposado — todavía está **desgasificando CO₂ agresivamente**, lo que interrumpe el puck del espresso. El CO₂ crea canales de gas a través del puck durante la extracción, produciendo tiros desiguales con bordes ásperos. La solución es reposar el café 5–16 días adicionales según el nivel de tueste." },
          { "q": "Un tostador congela granos recién tostados para extender la vida útil. ¿Cuáles son las dos condiciones críticas para que esto funcione sin degradación de calidad?", "a": "1) **Congelar inmediatamente** después de que los granos alcancen temperatura ambiente post-tueste (evita condensación de humedad). 2) **Nunca recongelar** — cada ciclo de congelación-descongelación rompe paredes celulares. Sacar del congelador 30+ minutos antes de moler y usar toda la porción en una sesión." }
        ]
      }
    ]
  }
};
