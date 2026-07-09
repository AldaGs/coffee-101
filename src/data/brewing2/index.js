export const brewing2Data = {
  en: [
    {
      "mod": "Module 1",
      "title": "Advanced Water Chemistry",
      "id": "m1",
      "desc": "Moving beyond basic filtration into custom buffers, alkalinity, and pH profiling.",
      "topics": [
        {
          "t": "Total Hardness vs. Alkalinity (Buffer)",
          "b": "Hardness extracts flavor; alkalinity dictates how much acid you perceive.",
          "content": "Water is roughly 98.8% of a filter coffee. The dissolved minerals in that water profoundly affect what is extracted from the ground coffee.\n\n**Total Hardness (GH)** is mostly calcium (Ca²⁺) and magnesium (Mg²⁺). Magnesium is highly electronegative and excels at pulling out small, fruit-forward flavor compounds. Calcium bonds well with heavier, creamy notes. Higher GH leads to faster and more complete extraction.\n\n**Alkalinity (KH)** or 'Buffer', primarily bicarbonate (HCO₃⁻), doesn't extract flavor. Instead, it neutralizes acids *after* they are extracted. \n- **High Alkalinity:** Neutralizes all the bright, citric/malic acids. The coffee tastes flat, chalky, and dead.\n- **Low Alkalinity:** Fails to buffer anything. The coffee tastes intensely sharp, sour, and vinegary.\n\nThe SCA target is roughly 150ppm Hardness to 40ppm Alkalinity. This ensures strong extraction while preserving enough acidity for a lively cup.",
          "points": [
            "Magnesium (Mg) extracts bright, fruity compounds very efficiently",
            "Calcium (Ca) extracts heavier, structural notes",
            "Alkalinity (Buffer) neutralizes acids; you need a low but non-zero amount (~40ppm) for balance",
            "Zero buffer (e.g., pure distilled water) results in harsh, biting acidity"
          ],
          "flashcards": [
            { "q": "What is the primary role of Magnesium in coffee brewing water?", "a": "Magnesium is highly electronegative and excels at extracting small, fruit-forward flavor compounds." },
            { "q": "What does Alkalinity (Buffer) do in coffee?", "a": "It neutralizes acids after they are extracted. Too high = flat/chalky coffee. Too low = sharp/sour coffee." },
            { "q": "What happens if you brew coffee with pure distilled water (0ppm hardness, 0ppm buffer)?", "a": "The coffee will taste intensely sharp, sour, and hollow because there is no buffer to neutralize the acids, and no hardness to pull out balancing sugars/heavy compounds." }
          ]
        },
        {
          "t": "Creating Custom Water",
          "b": "Building your own water from distilled water and mineral concentrates.",
          "content": "Because tap water varies wildly by city (and even by season), many professionals build their own water to ensure consistency.\n\nThis is done by starting with **RO (Reverse Osmosis) or Distilled water** (0ppm) and adding back specific concentrates:\n1. **A Hardness Concentrate:** Usually Epsom Salt (Magnesium Sulfate) and Calcium Chloride.\n2. **A Buffer Concentrate:** Usually Baking Soda (Sodium Bicarbonate).\n\nBy tweaking the ratio of these two concentrates, you can profile the water for specific coffees. For example, a washed Kenyan coffee with intense acidity might benefit from slightly higher buffer (to tame the extreme tartness), while a low-acid natural Brazil might need very low buffer to preserve what little acidity it has.",
          "points": [
            "Start with a blank slate: Distilled or RO water",
            "Epsom salt provides Magnesium (Hardness)",
            "Baking soda provides Bicarbonate (Buffer)",
            "You can tailor water chemistry to the specific roast or origin"
          ],
          "flashcards": [
            { "q": "What two primary components do you add to distilled water to make custom brewing water?", "a": "A Hardness concentrate (e.g., Epsom salt/Magnesium) and a Buffer concentrate (e.g., Baking soda/Bicarbonate)." },
            { "q": "How might you adjust water for a coffee that is naturally extremely acidic (like a washed Kenyan)?", "a": "Slightly increase the buffer (alkalinity) to neutralize some of the aggressive acidity and round out the cup." }
          ]
        }
      ]
    },
    {
      "mod": "Module 2",
      "title": "The SCA Brewing Control Chart in Practice",
      "id": "m2",
      "desc": "Using a refractometer to plot TDS and EY.",
      "topics": [
        {
          "t": "Using a Refractometer",
          "b": "Refractive index correlates to Total Dissolved Solids (TDS).",
          "content": "A coffee refractometer measures the angle of refraction of light passing through a sample of brewed coffee. Because dissolved coffee solids bend light differently than pure water, the device can accurately estimate the **Total Dissolved Solids (TDS)** as a percentage.\n\n**Steps for accuracy:**\n1. Always filter the sample (e.g., through a paper filter or syringe filter). Suspended undissolved particles (fines, oils) will scatter light and give a false reading.\n2. Let the sample cool to room temperature. Hot liquid changes density and refractive index.\n3. Calibrate the device with distilled water (0.00%) before use.",
          "points": [
            "Refractometers measure light bending to estimate TDS",
            "Samples must be filtered to remove suspended solids/oils",
            "Temperature affects refraction; samples must be cooled"
          ],
          "flashcards": [
            { "q": "Why must you filter a coffee sample before testing it with a refractometer?", "a": "To remove suspended, undissolved particles (fines and oils) that scatter light and artificially inflate the TDS reading." },
            { "q": "Why is it important to let the sample cool before measuring TDS?", "a": "Temperature changes the density and refractive index of the liquid, which can lead to inaccurate readings." }
          ]
        },
        {
          "t": "Plotting Extraction Yield (EY)",
          "b": "EY = (TDS × Brew Weight) / Dose",
          "content": "Once you have the TDS from your refractometer, you can calculate the **Extraction Yield (EY)**—the percentage of the dry coffee grounds that actually dissolved.\n\n**The Formula:**\n`EY = (TDS % × Final Brew Weight) / Dry Coffee Dose Weight`\n\nFor example:\n- Dose: 20g\n- Brew Weight: 300g\n- TDS: 1.35%\n- `EY = (1.35 * 300) / 20 = 20.25%`\n\nThis lands perfectly in the classic SCA \"Gold Cup\" zone (18-22% EY). By logging this data, you can objectively track how grind size changes affect extraction, removing the subjectivity of taste alone.",
          "points": [
            "TDS is concentration; EY is efficiency of extraction",
            "EY formula relies on final brew weight (liquid in the cup), NOT the water poured in",
            "SCA ideal EY zone is historically 18–22%"
          ],
          "flashcards": [
            { "q": "What is the formula for calculating Extraction Yield (EY)?", "a": "EY = (TDS % × Final Brew Weight) / Dry Dose Weight" },
            { "q": "If your dose is 15g, your brew weight is 225g, and your TDS is 1.4%, what is the EY?", "a": "21%. (1.4 * 225) / 15 = 21." },
            { "q": "When calculating EY, do you use the weight of the water poured, or the weight of the final brewed liquid?", "a": "The weight of the final brewed liquid (brew weight). The water trapped in the grounds (retention) doesn't count towards the drink's TDS." }
          ]
        }
      ]
    },
    {
      "mod": "Module 3",
      "title": "Bypass and Slurry Dynamics",
      "id": "m3",
      "desc": "How water pathing affects extraction efficiency and cup clarity.",
      "topics": [
        {
          "t": "Understanding Bypass",
          "b": "Water that sneaks past the coffee bed extracts nothing.",
          "content": "**Bypass** refers to brew water that flows down the sides of the filter paper and directly into the cup without interacting with the coffee grounds. \n\nEvery conical brewer (like a V60) has inherent bypass. Because water seeks the path of least resistance, if the coffee bed is dense, water will push out the sides of the paper.\n\n**Effects of Bypass:**\n1. It dilutes the final beverage (lowering TDS).\n2. It lowers overall Extraction Yield (because that water did no extraction work).\n3. In moderate amounts, it can actually increase cup clarity by diluting astringency. \n\nBrewers like the Hario Mugen or Tricolate are designed with \"Zero Bypass\"—forcing 100% of the water through the bed. This results in much higher EY, but often requires a coarser grind to prevent clogging.",
          "points": [
            "Bypass is water flowing around the coffee bed, not through it",
            "Bypass dilutes TDS and lowers EY",
            "Zero-bypass brewers force high extraction but are prone to stalling"
          ],
          "flashcards": [
            { "q": "What is bypass in pour-over brewing?", "a": "Water that flows down the sides of the filter paper directly into the cup, bypassing the coffee grounds entirely." },
            { "q": "How does bypass affect TDS and EY?", "a": "It dilutes the final cup (lowering TDS) and reduces overall extraction efficiency (lowering EY) because that water did no work." }
          ]
        },
        {
          "t": "Slurry Temperature Stability",
          "b": "The kettle temperature is not the brewing temperature.",
          "content": "A common mistake is assuming that setting a kettle to 95°C means the coffee is brewing at 95°C. In reality, the moment water hits the air, the brewer, and the room-temperature coffee grounds, it loses massive amounts of heat.\n\nThe actual temperature of the water/coffee mixture is the **Slurry Temperature**. \n\nTo maintain a high, stable slurry temperature (which is crucial for light roasts):\n1. **Pre-heat the brewer** aggressively (especially ceramic or glass, which act as heat sinks).\n2. **Pour in larger, heavier pulses** (more thermal mass = less temperature drop).\n3. **Keep the kettle close** to the slurry to minimize heat loss through the air.",
          "points": [
            "Slurry temperature is always significantly lower than kettle temperature",
            "Plastic brewers retain heat better than ceramic or glass",
            "Larger pour volumes maintain higher slurry temperatures"
          ],
          "flashcards": [
            { "q": "What is the difference between kettle temperature and slurry temperature?", "a": "Kettle temp is the water before pouring. Slurry temp is the actual temperature of the coffee/water mixture, which is always much lower due to heat loss." },
            { "q": "Why is plastic generally a better material for pour-over brewers than thick ceramic?", "a": "Thick ceramic acts as a heat sink, stealing heat from the slurry. Plastic is a better insulator and absorbs less thermal energy." }
          ]
        }
      ]
    }
  ],
  es: [
    {
      "mod": "Módulo 1",
      "title": "Química del Agua Avanzada",
      "id": "m1",
      "desc": "Más allá de la filtración básica: buffers personalizados, alcalinidad y perfilado de pH.",
      "topics": [
        {
          "t": "Dureza Total vs. Alcalinidad (Buffer)",
          "b": "La dureza extrae sabor; la alcalinidad dicta cuánta acidez percibes.",
          "content": "El agua representa aproximadamente el 98.8% de un café filtrado. Los minerales disueltos afectan profundamente lo que se extrae del café molido.\n\n**La Dureza Total (GH)** es principalmente calcio (Ca²⁺) y magnesio (Mg²⁺). El magnesio es altamente electronegativo y excelente para extraer compuestos de sabor pequeños y afrutados. El calcio se une bien con notas más pesadas y cremosas. Mayor GH resulta en una extracción más rápida y completa.\n\n**La Alcalinidad (KH)** o 'Buffer', principalmente bicarbonato (HCO₃⁻), no extrae sabor. En cambio, neutraliza los ácidos *después* de que se extraen.\n- **Alta Alcalinidad:** Neutraliza todos los ácidos brillantes (cítrico/málico). El café sabe plano, calcáreo y muerto.\n- **Baja Alcalinidad:** No logra neutralizar nada. El café sabe intensamente agudo, agrio y avinagrado.\n\nEl objetivo SCA es aproximadamente 150ppm de Dureza por 40ppm de Alcalinidad. Esto asegura una fuerte extracción preservando suficiente acidez.",
          "points": [
            "El Magnesio (Mg) extrae compuestos afrutados muy eficientemente",
            "El Calcio (Ca) extrae notas estructurales más pesadas",
            "La Alcalinidad (Buffer) neutraliza ácidos; necesitas una cantidad baja pero no cero (~40ppm)",
            "Cero buffer (ej. agua destilada) resulta en acidez áspera y punzante"
          ],
          "flashcards": [
            { "q": "¿Cuál es el rol principal del Magnesio en el agua para café?", "a": "El Magnesio es altamente electronegativo y excelente para extraer compuestos de sabor pequeños y afrutados." },
            { "q": "¿Qué hace la Alcalinidad (Buffer) en el café?", "a": "Neutraliza los ácidos después de ser extraídos. Muy alta = café plano/calcáreo. Muy baja = café agudo/agrio." },
            { "q": "¿Qué pasa si preparas café con agua pura destilada (0ppm dureza, 0ppm buffer)?", "a": "El café sabrá intensamente agudo, agrio y hueco porque no hay buffer para neutralizar ácidos, ni dureza para extraer azúcares que balanceen." }
          ]
        },
        {
          "t": "Creando Agua Personalizada",
          "b": "Construyendo tu propia agua a partir de agua destilada y concentrados minerales.",
          "content": "Debido a que el agua del grifo varía enormemente por ciudad, muchos profesionales construyen su propia agua para asegurar consistencia.\n\nEsto se hace comenzando con **agua de Ósmosis Inversa (RO) o Destilada** (0ppm) y añadiendo concentrados específicos:\n1. **Un Concentrado de Dureza:** Usualmente Sal de Epsom (Sulfato de Magnesio) y Cloruro de Calcio.\n2. **Un Concentrado de Buffer:** Usualmente Bicarbonato de Sodio.\n\nAl ajustar la proporción, puedes perfilar el agua para cafés específicos. Por ejemplo, un Kenia lavado con acidez intensa podría beneficiarse de un buffer ligeramente mayor (para domar la acidez), mientras que un Brasil natural de baja acidez podría necesitar muy poco buffer para preservar la poca acidez que tiene.",
          "points": [
            "Comienza con un lienzo en blanco: Agua destilada o RO",
            "La sal de Epsom provee Magnesio (Dureza)",
            "El bicarbonato de sodio provee Bicarbonato (Buffer)",
            "Puedes adaptar la química del agua al tueste u origen específico"
          ],
          "flashcards": [
            { "q": "¿Qué dos componentes principales añades al agua destilada para hacer agua de extracción personalizada?", "a": "Un concentrado de Dureza (ej. Sal de Epsom/Magnesio) y un concentrado de Buffer (ej. Bicarbonato de Sodio)." },
            { "q": "¿Cómo ajustarías el agua para un café que es naturalmente muy ácido (como un Kenia lavado)?", "a": "Aumentar ligeramente el buffer (alcalinidad) para neutralizar parte de la acidez agresiva y redondear la taza." }
          ]
        }
      ]
    },
    {
      "mod": "Módulo 2",
      "title": "La Brewing Control Chart en la Práctica",
      "id": "m2",
      "desc": "Usando un refractómetro para graficar TDS y EY.",
      "topics": [
        {
          "t": "Uso de un Refractómetro",
          "b": "El índice de refracción se correlaciona con los Sólidos Disueltos Totales (TDS).",
          "content": "Un refractómetro de café mide el ángulo de refracción de la luz al pasar por una muestra de café. Debido a que los sólidos disueltos doblan la luz de manera diferente al agua pura, el dispositivo puede estimar con precisión los **Sólidos Disueltos Totales (TDS)** como un porcentaje.\n\n**Pasos para la precisión:**\n1. Siempre filtra la muestra (ej. filtro de papel o de jeringa). Las partículas suspendidas no disueltas (finos, aceites) dispersarán la luz y darán una lectura falsa.\n2. Deja que la muestra se enfríe a temperatura ambiente. El líquido caliente cambia la densidad y el índice de refracción.\n3. Calibra el dispositivo con agua destilada (0.00%) antes de usar.",
          "points": [
            "Los refractómetros miden la refracción de luz para estimar el TDS",
            "Las muestras deben filtrarse para eliminar sólidos suspendidos/aceites",
            "La temperatura afecta la refracción; las muestras deben enfriarse"
          ],
          "flashcards": [
            { "q": "¿Por qué debes filtrar una muestra de café antes de probarla con un refractómetro?", "a": "Para eliminar partículas suspendidas no disueltas (finos y aceites) que dispersan la luz e inflan artificialmente la lectura de TDS." },
            { "q": "¿Por qué es importante dejar enfriar la muestra antes de medir el TDS?", "a": "La temperatura cambia la densidad y el índice de refracción del líquido, lo que puede llevar a lecturas inexactas." }
          ]
        },
        {
          "t": "Calculando el Rendimiento de Extracción (EY)",
          "b": "EY = (TDS × Peso de Bebida) / Dosis",
          "content": "Una vez que tienes el TDS de tu refractómetro, puedes calcular el **Rendimiento de Extracción (EY)**—el porcentaje de los granos secos que realmente se disolvió.\n\n**La Fórmula:**\n`EY = (TDS % × Peso Final de la Bebida) / Peso de la Dosis de Café Seco`\n\nPor ejemplo:\n- Dosis: 20g\n- Peso de Bebida: 300g\n- TDS: 1.35%\n- `EY = (1.35 * 300) / 20 = 20.25%`\n\nEsto aterriza perfectamente en la zona clásica \"Gold Cup\" de la SCA (18-22% EY). Al registrar estos datos, puedes rastrear objetivamente cómo los cambios en la molienda afectan la extracción, eliminando la subjetividad del gusto.",
          "points": [
            "El TDS es concentración; el EY es eficiencia de extracción",
            "La fórmula de EY se basa en el peso final de la bebida, NO en el agua vertida",
            "La zona ideal de EY de la SCA es históricamente 18–22%"
          ],
          "flashcards": [
            { "q": "¿Cuál es la fórmula para calcular el Rendimiento de Extracción (EY)?", "a": "EY = (TDS % × Peso Final de la Bebida) / Peso de la Dosis Seca" },
            { "q": "Si tu dosis es 15g, tu bebida pesa 225g, y tu TDS es 1.4%, ¿cuál es el EY?", "a": "21%. (1.4 * 225) / 15 = 21." },
            { "q": "Al calcular el EY, ¿usas el peso del agua vertida, o el peso del líquido final extraído?", "a": "El peso del líquido final (peso de bebida). El agua atrapada en el café (retención) no cuenta para el TDS de la bebida." }
          ]
        }
      ]
    },
    {
      "mod": "Módulo 3",
      "title": "Bypass y Dinámica del Slurry",
      "id": "m3",
      "desc": "Cómo la trayectoria del agua afecta la eficiencia de extracción y claridad de la taza.",
      "topics": [
        {
          "t": "Entendiendo el Bypass",
          "b": "El agua que evade la cama de café no extrae nada.",
          "content": "**Bypass** se refiere al agua de extracción que fluye por los lados del filtro de papel directamente a la taza sin interactuar con los granos de café.\n\nTodo método cónico (como un V60) tiene bypass inherente. Debido a que el agua busca el camino de menor resistencia, si la cama de café es densa, el agua será empujada hacia los lados del papel.\n\n**Efectos del Bypass:**\n1. Diluye la bebida final (bajando el TDS).\n2. Disminuye el Rendimiento de Extracción (porque esa agua no hizo trabajo de extracción).\n3. En cantidades moderadas, puede aumentar la claridad de la taza al diluir la astringencia.\n\nMétodos como el Hario Mugen o Tricolate están diseñados con \"Cero Bypass\"—forzando el 100% del agua a través de la cama. Esto resulta en un EY mucho mayor, pero a menudo requiere moliendas más gruesas para evitar que se estanque.",
          "points": [
            "Bypass es agua que fluye alrededor de la cama de café, no a través de ella",
            "El bypass diluye el TDS y reduce el EY",
            "Los métodos cero-bypass fuerzan una alta extracción pero son propensos a estancarse"
          ],
          "flashcards": [
            { "q": "¿Qué es el bypass en los métodos de vertido (pour-over)?", "a": "Agua que fluye por los lados del filtro de papel directamente a la taza, evadiendo los granos de café por completo." },
            { "q": "¿Cómo afecta el bypass al TDS y al EY?", "a": "Diluye la taza final (bajando el TDS) y reduce la eficiencia de extracción general (bajando el EY) porque esa agua no hizo trabajo." }
          ]
        },
        {
          "t": "Estabilidad de Temperatura en el Slurry",
          "b": "La temperatura de la tetera no es la temperatura de extracción.",
          "content": "Un error común es asumir que ajustar la tetera a 95°C significa que el café se está extrayendo a 95°C. En realidad, en el momento en que el agua toca el aire, el método de extracción y el café a temperatura ambiente, pierde cantidades masivas de calor.\n\nLa temperatura real de la mezcla de agua/café es la **Temperatura del Slurry**.\n\nPara mantener una temperatura del slurry alta y estable (crucial para tuestes claros):\n1. **Precalienta el método** agresivamente (especialmente cerámica o vidrio, que actúan como disipadores de calor).\n2. **Vierte en pulsos grandes y pesados** (mayor masa térmica = menor caída de temperatura).\n3. **Mantén la tetera cerca** del slurry para minimizar la pérdida de calor a través del aire.",
          "points": [
            "La temperatura del slurry siempre es significativamente menor que la de la tetera",
            "Los métodos de plástico retienen mejor el calor que los gruesos de cerámica o vidrio",
            "Volúmenes de vertido más grandes mantienen temperaturas del slurry más altas"
          ],
          "flashcards": [
            { "q": "¿Cuál es la diferencia entre temperatura de la tetera y temperatura del slurry?", "a": "La tetera es el agua antes de verter. El slurry es la temperatura real de la mezcla café/agua, que siempre es mucho menor debido a la pérdida de calor." },
            { "q": "¿Por qué el plástico suele ser mejor material que la cerámica gruesa para métodos de goteo?", "a": "La cerámica gruesa actúa como un disipador, robando calor del slurry. El plástico es mejor aislante y absorbe menos energía térmica." }
          ]
        }
      ]
    }
  ]
};
