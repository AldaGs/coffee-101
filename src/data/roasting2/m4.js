export default {
  "en": {
    "mod": "Module 4",
    "title": "Gas burner physics and energy calculation",
    "id": "m4",
    "desc": "BTU/kJ requirements, burner turndown ratios, combustion chemistry, and how to calculate the thermal energy delivered per kilogram of coffee.",
    "topics": [
      {
        "t": "Combustion chemistry: Natural gas vs. propane",
        "b": "Not all gas is the same. The fuel type changes your BTU output, combustion byproducts, and how you interpret your gas percentage dial.",
        "content": "Roasting burners use either **Natural Gas (NG)** or **Liquefied Petroleum Gas (LPG/Propane)**. While both burn to produce heat, CO₂, and water vapor, their energy density and combustion stoichiometry differ significantly:\n\n**Natural Gas (Methane, CH₄):**\n- Energy density: ~37 MJ/m³ (megajoules per cubic meter at standard conditions)\n- Combustion: CH₄ + 2O₂ → CO₂ + 2H₂O\n- Delivered at low pressure (~1.7 kPa in commercial lines)\n- Cooler, softer flame. More forgiving.\n\n**Propane (C₃H₈):**\n- Energy density: ~93 MJ/m³ — roughly 2.5× the energy density of natural gas by volume\n- Combustion: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O\n- Stored as compressed liquid, delivered at higher pressure\n- Hotter, more aggressive flame at the same orifice size\n\n**Critical implication**: A roasting machine calibrated for natural gas will **significantly overfire** on propane if the gas orifice jet size is not changed. The machine's '50% gas' position delivers nearly twice the BTU output on propane. This is why roaster manufacturers specify jet diameter by fuel type.",
        "points": [
          "Propane has ~2.5× the energy density of natural gas by volume",
          "Machines calibrated for NG will dramatically overfire on propane (wrong jet size)",
          "Combustion produces CO₂ and water vapor — both enter the drum and affect roasting environment",
          "Lower-pressure natural gas produces a softer flame; propane burns hotter at the same orifice"
        ],
        "refs": [
          "NFPA 86: Standard for Ovens and Furnaces — covers burner specifications and combustion safety.",
          "Rao (2014), op. cit. — appendix on burner types."
        ],
        "flashcards": [
          { "q": "Why must a roaster's gas jet (orifice) be changed when switching from natural gas to propane?", "a": "Propane has **~2.5× the energy density** of natural gas by volume. The same orifice size delivers ~2.5× the BTU output, causing the machine to dramatically overfire at normal gas settings. Propane jets have smaller orifice diameters to compensate." },
          { "q": "Both natural gas and propane combust to produce the same byproducts. What are they, and do they enter the roasting drum?", "a": "Both produce **CO₂ and water vapor** (H₂O). In direct-flame drum roasters, these combustion byproducts enter the drum with the heated air — contributing both to the heat load and the environmental humidity within the drum during the roast." },
          { "q": "A roaster on natural gas finds their profiles require 80% gas for most of the roast. If they switch to propane without changing the jet, what will likely happen?", "a": "At 80% gas on propane, the burner will deliver nearly **twice the BTU** it did on NG. The roast will run dangerously fast — potentially scorching the beans within the first 3 minutes, or flashing through First Crack in an uncontrolled rush." }
        ]
      },
      {
        "t": "BTU requirements and roast energy calculation",
        "b": "Coffee roasting consumes measurable energy. Knowing the kJ/kg number lets you benchmark machines and diagnose inefficiencies.",
        "content": "Roasting requires energy to accomplish three tasks:\n1. **Evaporate water** from the green bean (~10–12% moisture): Water requires 2,260 kJ/kg to vaporize (latent heat of vaporization).\n2. **Drive the chemical reactions** (Maillard, caramelization): These are endothermic until First Crack.\n3. **Raise the bean temperature** from ~25°C to ~200°C: Using specific heat capacity of green coffee (~1.37 kJ/kg·°C).\n\n**Simplified energy calculation:**\nFor a 10kg batch going from 25°C to 200°C:\n- Sensible heat: 10 kg × 1.37 kJ/kg·°C × 175°C ≈ **2,400 kJ**\n- Water evaporation: 10 kg × 0.11 (11% moisture) × 2,260 kJ/kg ≈ **2,486 kJ**\n- Chemical reactions: ~400 kJ (estimated)\n- **Total ≈ 5,300 kJ** (plus losses from drum radiation and exhaust)\n\nTypical commercial roasters run at 30,000–100,000 BTU/hr (8.8–29 kW). A 10kg roast in 10 minutes at 50% gas on a 60,000 BTU/hr machine delivers: 60,000 BTU/hr × 0.5 × (10/60 hr) ≈ **5,000 BTU ≈ 5,270 kJ** — remarkably close to the theoretical requirement.\n\nThis number allows roasters to **compare efficiency across machines** and understand why roasting a 3kg batch in a 15kg machine wastes 70% of the burner's energy heating the drum rather than the coffee.",
        "points": [
          "Three energy consumers: water evaporation (largest), chemical reactions, and sensible heating",
          "Water evaporation requires 2,260 kJ/kg — the latent heat of vaporization",
          "A 10kg batch requires approximately 5,300 kJ of net energy",
          "Undersized batches waste burner energy heating the drum rather than the coffee",
          "BTU/hr × gas% × time = delivered energy — directly comparable across machines"
        ],
        "refs": [
          "Schwartzberg, H.G. (2002). 'Batch Coffee Roasting; Roaster Design.' <i>Drying Technology</i>, 20(6).",
          "Baggenstoss, J. et al. (2008). 'Coffee roasting and aroma formation.' <i>J. Agric. Food Chem.</i>"
        ],
        "flashcards": [
          { "q": "What are the three energy 'consumers' during coffee roasting, and which one requires the most energy?", "a": "1) **Water evaporation** (largest — ~2,260 kJ per kg of water vaporized), 2) chemical reactions (Maillard, caramelization — endothermic), 3) sensible heating (raising bean temperature). Water evaporation dominates the early roast energy demand." },
          { "q": "Why does roasting a 3kg batch in a 15kg-capacity machine waste a disproportionate amount of gas?", "a": "The burner must heat the entire **drum mass** to roasting temperatures regardless of how much coffee is inside. A 15kg machine's drum holds far more metal than a 3kg batch needs — the burner is primarily heating drum walls that then radiate heat into empty space rather than into beans." },
          { "q": "A roaster knows their machine is rated at 80,000 BTU/hr. They run 60% gas for 12 minutes. Approximately how many BTU of energy were delivered to the roast?", "a": "80,000 BTU/hr × 0.60 × (12/60 hr) = **9,600 BTU** delivered. (Note: This is the total heat released by combustion — actual heat absorbed by beans is less due to drum and exhaust losses, typically 40–60% thermal efficiency.)" }
        ]
      },
      {
        "t": "Burner turndown ratio and modulation control",
        "b": "The gap between your burner's maximum and minimum heat is the real measure of your roasting flexibility.",
        "content": "A **burner turndown ratio** is the ratio of maximum to minimum stable flame output. A burner with a 10:1 turndown ratio can run at 10% of its maximum output without the flame going unstable (fluttering, lifting, or extinguishing).\n\n**Why does this matter?**\nA roaster's '1% gas' and '100% gas' are only meaningful if the burner can actually fire stably across that range. A cheap burner with a 4:1 turndown ratio physically cannot produce a stable flame below 25% of its rated output. When you 'dial down' below that threshold, the flame becomes intermittent and the roast curve becomes jagged.\n\n**Types of burner modulation:**\n- **On/Off (relay burners)**: The burner is either 100% on or 100% off. Thermal momentum smooths the output, but this system cannot produce precise gas percentages.\n- **Modulating (proportional valve)**: A proportional gas valve opens to any position, delivering any flow rate. This is the standard on all premium roasters (Loring, Mill City, Bullet R1).\n- **Step modulating**: The valve cycles between a small number of preset positions (e.g., 25%, 50%, 75%, 100%). More precise than on/off but less flexible than proportional.\n\nFor specialty coffee, a **proportional modulating burner with at least 10:1 turndown** is the minimum needed for the fine gas control required to prevent the Crash and Flick at First Crack.",
        "points": [
          "Turndown ratio = max output / min stable output (10:1 means can run stably at 10% power)",
          "On/Off burners cannot produce precise intermediate gas settings — thermal momentum masks this",
          "Proportional modulating valves deliver any flow rate — the standard for premium roasters",
          "A turndown ratio below 4:1 makes fine gas control near First Crack very difficult",
          "Step modulating burners are a compromise between on/off and proportional"
        ],
        "refs": [
          "NFPA 86, op. cit.",
          "Maxon Corporation. <i>Combustion Handbook</i>. — the primary reference for industrial burner design and turndown ratios."
        ],
        "flashcards": [
          { "q": "What is a burner's 'turndown ratio,' and why does a higher ratio matter for specialty coffee roasting?", "a": "The ratio of **maximum to minimum stable flame output**. A higher ratio (e.g., 10:1) allows the roaster to dial the burner down to 10% power while maintaining a stable flame. Critical for specialty roasting because the fine gas reductions required around First Crack demand precise low-end control." },
          { "q": "Why do on/off relay burners produce a 'jagged' RoR curve, and what masks this in practice?", "a": "On/Off burners alternate between full power and no power — they cannot deliver intermediate values. The **thermal momentum of the drum mass** smooths the heat output over time, making the RoR appear more stable than it is. But at lower batch sizes with less thermal mass, the oscillation becomes visible on the curve." },
          { "q": "A premium roaster advertises a 'proportional modulating burner.' What does this mean operationally?", "a": "The gas is delivered through a **continuously variable proportional valve** that can open to any position from 0% to 100%, delivering any intermediate flow rate precisely. Unlike step or on/off burners, it allows smooth, analog gas control — essential for avoiding abrupt RoR changes around First Crack." }
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "Física de quemadores de gas y cálculo de energía",
    "id": "m4",
    "desc": "Requerimientos de BTU/kJ, relaciones de modulación del quemador, química de combustión y cómo calcular la energía térmica entregada por kilogramo de café.",
    "topics": [
      {
        "t": "Química de combustión: Gas natural vs. propano",
        "b": "No todo el gas es igual. El tipo de combustible cambia tu producción de BTU, los subproductos de combustión y cómo interpretas el dial de porcentaje de gas.",
        "content": "Los quemadores de tueste usan **Gas Natural (GN)** o **Gas Licuado de Petróleo (GLP/Propano)**. Aunque ambos se queman para producir calor, CO₂ y vapor de agua, su densidad energética y estequiometría de combustión difieren significativamente:\n\n**Gas Natural (Metano, CH₄):**\n- Densidad energética: ~37 MJ/m³\n- Combustión: CH₄ + 2O₂ → CO₂ + 2H₂O\n- Entregado a baja presión (~1.7 kPa)\n- Llama más suave y fría\n\n**Propano (C₃H₈):**\n- Densidad energética: ~93 MJ/m³ — aproximadamente 2.5× la del gas natural por volumen\n- Combustión: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O\n- Llama más caliente y agresiva al mismo tamaño de orificio\n\n**Implicación crítica**: Una máquina calibrada para gas natural **sobre-quemará significativamente** con propano si no se cambia el tamaño del orificio de gas. La posición '50% gas' entrega casi el doble de BTU con propano.",
        "points": [
          "El propano tiene ~2.5× la densidad energética del gas natural por volumen",
          "Las máquinas calibradas para GN sobreencenderán dramáticamente con propano (orificio incorrecto)",
          "La combustión produce CO₂ y vapor de agua — ambos entran al tambor",
          "El gas natural a menor presión produce una llama más suave; el propano quema más caliente"
        ],
        "refs": [
          "NFPA 86: Standard for Ovens and Furnaces.",
          "Rao (2014), op. cit."
        ],
        "flashcards": [
          { "q": "¿Por qué debe cambiarse el jet de gas (orificio) de un tostador al cambiar de gas natural a propano?", "a": "El propano tiene **~2.5× la densidad energética** del gas natural por volumen. El mismo tamaño de orificio entrega ~2.5× la salida de BTU, causando que la máquina sobardea dramáticamente a los ajustes normales de gas. Los jets de propano tienen orificios de menor diámetro para compensar." },
          { "q": "Tanto el gas natural como el propano producen los mismos subproductos de combustión. ¿Cuáles son y entran al tambor de tueste?", "a": "Ambos producen **CO₂ y vapor de agua** (H₂O). En tostadores de llama directa, estos subproductos entran al tambor con el aire calentado, contribuyendo tanto a la carga de calor como a la humedad ambiental durante el tueste." },
          { "q": "Un tostador en gas natural usa 80% de gas para la mayor parte del tueste. Si cambia a propano sin cambiar el jet, ¿qué ocurrirá probablemente?", "a": "Al 80% de gas con propano, el quemador entregará casi el **doble de BTU** que con GN. El tueste correrá peligrosamente rápido — potencialmente quemando los granos en los primeros 3 minutos." }
        ]
      },
      {
        "t": "Requerimientos de BTU y cálculo de energía de tueste",
        "b": "El tueste de café consume energía medible. Conocer el número de kJ/kg te permite comparar máquinas y diagnosticar ineficiencias.",
        "content": "El tueste requiere energía para tres tareas:\n1. **Evaporar el agua** del grano verde (~10–12%): El agua requiere 2,260 kJ/kg para vaporizarse.\n2. **Impulsar las reacciones químicas** (Maillard, caramelización): Son endotérmicas hasta el Primer Crack.\n3. **Elevar la temperatura del grano** de ~25°C a ~200°C.\n\n**Cálculo simplificado para un lote de 10kg:**\n- Calor sensible: 10 kg × 1.37 kJ/kg·°C × 175°C ≈ **2,400 kJ**\n- Evaporación de agua: 10 kg × 0.11 × 2,260 kJ/kg ≈ **2,486 kJ**\n- Reacciones químicas: ~400 kJ\n- **Total ≈ 5,300 kJ**\n\nLos tostadores comerciales típicos operan a 30,000–100,000 BTU/hr. Este número permite a los tostadores **comparar eficiencia entre máquinas** y entender por qué tostar un lote de 3kg en una máquina de 15kg desperdicia el 70% de la energía del quemador calentando el tambor en lugar del café.",
        "points": [
          "Tres consumidores de energía: evaporación del agua (mayor), reacciones químicas, calentamiento sensible",
          "La evaporación del agua requiere 2,260 kJ/kg",
          "Un lote de 10kg requiere aproximadamente 5,300 kJ de energía neta",
          "Los lotes infradimensionados desperdician energía del quemador calentando el tambor",
          "BTU/hr × %gas × tiempo = energía entregada — directamente comparable entre máquinas"
        ],
        "refs": [
          "Schwartzberg, H.G. (2002). 'Batch Coffee Roasting.' <i>Drying Technology</i>, 20(6).",
          "Baggenstoss, J. et al. (2008). 'Coffee roasting and aroma formation.' <i>J. Agric. Food Chem.</i>"
        ],
        "flashcards": [
          { "q": "¿Cuáles son los tres 'consumidores' de energía durante el tueste de café, y cuál requiere más?", "a": "1) **Evaporación del agua** (mayor — ~2,260 kJ por kg de agua vaporizada), 2) reacciones químicas (Maillard, caramelización — endotérmicas), 3) calentamiento sensible (elevar la temperatura). La evaporación del agua domina la demanda de energía del tueste temprano." },
          { "q": "¿Por qué tostar un lote de 3kg en una máquina de 15kg desperdicia una cantidad desproporcionada de gas?", "a": "El quemador debe calentar toda la **masa del tambor** a temperaturas de tueste independientemente de cuánto café haya dentro. El tambor de una máquina de 15kg tiene mucho más metal del que un lote de 3kg necesita — el quemador calienta principalmente paredes de tambor que luego irradian calor al espacio vacío." },
          { "q": "Un tostador sabe que su máquina tiene una capacidad de 80,000 BTU/hr. Usa 60% de gas durante 12 minutos. ¿Aproximadamente cuántos BTU de energía se entregaron?", "a": "80,000 BTU/hr × 0.60 × (12/60 hr) = **9,600 BTU** entregados. (Nota: Esta es la energía total liberada por combustión — el calor real absorbido por los granos es menor por las pérdidas del tambor y el escape.)" }
        ]
      },
      {
        "t": "Relación de modulación del quemador y control de modulación",
        "b": "La brecha entre el calor máximo y mínimo de tu quemador es la medida real de tu flexibilidad de tueste.",
        "content": "Una **relación de modulación del quemador** es la proporción de salida máxima a mínima estable. Un quemador con relación 10:1 puede funcionar al 10% de su salida máxima sin que la llama se vuelva inestable.\n\n**Tipos de modulación del quemador:**\n- **Encendido/Apagado (relay)**: El quemador está al 100% encendido o 100% apagado. El momento térmico suaviza la salida.\n- **Modulante (válvula proporcional)**: Una válvula proporcional de gas se abre a cualquier posición, entregando cualquier caudal. Estándar en todos los tostadores premium.\n- **Modulación por pasos**: La válvula cicla entre posiciones preestablecidas (ej. 25%, 50%, 75%, 100%). Más preciso que encendido/apagado pero menos flexible que el proporcional.\n\nPara café de especialidad, un **quemador modulante proporcional con al menos 10:1 de modulación** es el mínimo para el control de gas fino requerido para prevenir el Crash y Flick en el Primer Crack.",
        "points": [
          "Relación de modulación = salida máx / salida mínima estable",
          "Los quemadores de Encendido/Apagado no pueden producir ajustes intermedios precisos",
          "Las válvulas modulantes proporcionales entregan cualquier caudal — el estándar para tostadores premium",
          "Una relación menor a 4:1 hace que el control fino del gas cerca del Primer Crack sea muy difícil",
          "Los quemadores de modulación por pasos son un compromiso entre encendido/apagado y proporcional"
        ],
        "refs": [
          "NFPA 86, op. cit.",
          "Maxon Corporation. <i>Combustion Handbook</i>."
        ],
        "flashcards": [
          { "q": "¿Qué es la 'relación de modulación' de un quemador y por qué importa una relación más alta para el tueste de especialidad?", "a": "La proporción de **salida máxima a mínima estable**. Una relación más alta (ej. 10:1) permite al tostador reducir el quemador al 10% de potencia manteniendo una llama estable. Crítico para el tueste de especialidad porque las reducciones finas de gas requeridas alrededor del Primer Crack demandan control preciso en el extremo bajo." },
          { "q": "¿Por qué los quemadores de relay encendido/apagado producen una curva de RoR 'dentada', y qué enmascara esto en la práctica?", "a": "Los quemadores Enc/Apag alternan entre potencia total y ninguna potencia — no pueden entregar valores intermedios. El **momento térmico de la masa del tambor** suaviza la salida de calor con el tiempo. Pero con lotes más pequeños con menos masa térmica, la oscilación se vuelve visible en la curva." },
          { "q": "Un tostador premium anuncia un 'quemador modulante proporcional'. ¿Qué significa esto operacionalmente?", "a": "El gas se entrega a través de una **válvula proporcional continuamente variable** que puede abrirse a cualquier posición de 0% a 100%, entregando cualquier caudal intermedio con precisión. A diferencia de los quemadores de pasos o enc/apag, permite un control de gas suave y analógico — esencial para evitar cambios abruptos de RoR alrededor del Primer Crack." }
        ]
      }
    ]
  }
};
