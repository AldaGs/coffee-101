const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'history', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(1, () => `export default {
  "en": {
    "mod": "Module 1",
    "title": "Origins and Global Spread",
    "id": "m1",
    "desc": "How a small shrub in the Ethiopian highlands conquered the world.",
    "topics": [
      {
        "t": "The Ethiopian Highlands and Kaldi",
        "b": "The birthplace of Coffea Arabica and the legend of the dancing goats.",
        "content": "All Arabica coffee traces its genetic lineage to the ancient forests of **Kaffa, Ethiopia**.\\n\\nWhile the legend of Kaldi (the goat herder whose flock ate coffee cherries and stayed awake all night) is largely a myth recorded centuries later, the truth is that indigenous Ethiopian tribes were the first to consume coffee. They did not brew it; they crushed the cherries and mixed them with animal fat to create an energy-dense survival ration for long journeys.\\n\\nEthiopia remains the only place on Earth where coffee grows wild in forests, containing thousands of undocumented genetic varietals (Heirloom varietals).",
        "points": [
          "Kaffa, Ethiopia as the botanical cradle of Coffea Arabica",
          "Early consumption methods (animal fat rations vs. brewed liquid)",
          "The genetic diversity of Ethiopian Heirloom varietals compared to the rest of the world"
        ],
        "refs": [
          "Pendergrast, M. (1999). <i>Uncommon Grounds: The History of Coffee and How It Transformed Our World</i>."
        ]
      },
      {
        "t": "Yemen and the Monopolization of Trade",
        "b": "How the Sufi monks popularized brewing and the Port of Mocha controlled the world's supply.",
        "content": "Coffee crossed the Red Sea to **Yemen** in the 15th century. Here, Sufi monks began brewing the roasted seeds into a liquid to stay awake during long nighttime prayers.\\n\\nYemen became the world's first commercial coffee producer. To maintain a strict global monopoly, the Ottoman Empire forbade the export of any fertile coffee seeds. All coffee leaving the legendary **Port of Mocha (Al-Makha)** was boiled or roasted first so it could not be planted elsewhere.\\n\\nThis is why, for over a century, the only way Europe could get coffee was by buying it through Arab merchants.",
        "points": [
          "Sufi monks and the invention of roasted coffee brewing",
          "The Port of Mocha as the global chokehold of the coffee trade",
          "The Ottoman strategy of sterilizing seeds to prevent agricultural espionage"
        ]
      },
      {
        "t": "The Dutch and the Baba Budan Smuggle",
        "b": "Breaking the monopoly and the birth of the colonial coffee empire.",
        "content": "The Yemeni monopoly was broken in the 17th century by a Sufi pilgrim named **Baba Budan**, who strapped seven fertile coffee seeds to his chest and smuggled them to India.\\n\\nShortly after, the **Dutch East India Company (VOC)** acquired seeds and began planting them in their colonies in Indonesia (specifically the island of Java). The Dutch ruthlessly exploited indigenous labor to mass-produce coffee, bypassing the Arab monopoly.\\n\\nThis created the first global coffee blend: **Mocha-Java** (a mix of bright Yemeni coffee and earthy Indonesian coffee), and established the brutal colonial blueprint for coffee production that would dominate the next 300 years.",
        "points": [
          "Baba Budan smuggling the first seven seeds out of Yemen",
          "The Dutch East India Company establishing plantations in Java (Indonesia)",
          "The origin of the 'Mocha-Java' blend"
        ],
        "refs": [
          "Ukers, W. H. (1922). <i>All About Coffee</i>."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "Orígenes y Expansión Global",
    "id": "m1",
    "desc": "Cómo un pequeño arbusto en las tierras altas de Etiopía conquistó el mundo.",
    "topics": [
      {
        "t": "Las tierras altas de Etiopía y Kaldi",
        "b": "La cuna del Coffea Arabica y la leyenda de las cabras bailarinas.",
        "content": "Todo el café arábica rastrea su linaje genético hasta los antiguos bosques de **Kaffa, Etiopía**.\\n\\nAunque la leyenda de Kaldi (el pastor cuyas cabras comieron cerezas de café y no durmieron) es mayormente un mito, la verdad es que las tribus indígenas etíopes fueron las primeras en consumir café. No lo bebían; aplastaban las cerezas y las mezclaban con grasa animal para crear una ración energética para viajes largos.\\n\\nEtiopía sigue siendo el único lugar de la Tierra donde el café crece silvestre, conteniendo miles de variedades genéticas indocumentadas (Variedades Heirloom).",
        "points": [
          "Kaffa, Etiopía como cuna botánica del Coffea Arabica",
          "Métodos de consumo temprano (raciones de grasa animal vs. líquido preparado)",
          "La diversidad genética de las variedades Heirloom etíopes"
        ],
        "refs": [
          "Pendergrast, M. (1999). <i>Uncommon Grounds: The History of Coffee and How It Transformed Our World</i>."
        ]
      },
      {
        "t": "Yemen y la monopolización del comercio",
        "b": "Cómo los monjes sufíes popularizaron la bebida y el Puerto de Mocha controló el suministro mundial.",
        "content": "El café cruzó el Mar Rojo hacia **Yemen** en el siglo XV. Allí, los monjes sufíes comenzaron a preparar las semillas tostadas en un líquido para mantenerse despiertos durante oraciones nocturnas.\\n\\nYemen se convirtió en el primer productor comercial de café del mundo. Para mantener un monopolio estricto, el Imperio Otomano prohibió la exportación de semillas fértiles. Todo el café que salía del legendario **Puerto de Mocha (Al-Makha)** se hervía o tostaba primero para no poder ser plantado.\\n\\nEs por esto que, durante más de un siglo, Europa solo podía obtener café a través de mercaderes árabes.",
        "points": [
          "Los monjes sufíes y la invención del café tostado",
          "El Puerto de Mocha como embudo global del comercio de café",
          "La estrategia otomana de esterilizar semillas para evitar espionaje agrícola"
        ]
      },
      {
        "t": "Los holandeses y el contrabando de Baba Budan",
        "b": "Rompiendo el monopolio y el nacimiento del imperio cafetalero colonial.",
        "content": "El monopolio yemení fue roto en el siglo XVII por un peregrino sufí llamado **Baba Budan**, quien ató siete semillas fértiles a su pecho y las contrabandeó a India.\\n\\nPoco después, la **Compañía Holandesa de las Indias Orientales (VOC)** consiguió semillas y comenzó a plantarlas en sus colonias en Indonesia (específicamente la isla de Java). Los holandeses explotaron despiadadamente la mano de obra indígena para producir café en masa, eludiendo el monopolio árabe.\\n\\nEsto creó la primera mezcla global de café: **Mocha-Java** (café brillante yemení y café terroso indonesio), y estableció el brutal modelo colonial de producción que dominaría los siguientes 300 años.",
        "points": [
          "Baba Budan contrabandeando las primeras siete semillas",
          "Los holandeses estableciendo plantaciones en Java (Indonesia)",
          "El origen de la mezcla 'Mocha-Java'"
        ],
        "refs": [
          "Ukers, W. H. (1922). <i>All About Coffee</i>."
        ]
      }
    ]
  }
};`);

updateModule(2, () => `export default {
  "en": {
    "mod": "Module 2",
    "title": "The Waves of Coffee",
    "id": "m2",
    "desc": "How consumer habits evolved from wartime rations to a luxury culinary experience.",
    "topics": [
      {
        "t": "First Wave: Commoditization",
        "b": "Coffee in every kitchen. Convenience over quality.",
        "content": "The **First Wave** of coffee began in the late 19th and early 20th centuries. The goal was to make coffee ubiquitous, accessible, and cheap. \\n\\nInnovations like vacuum packaging (Chase & Sanborn) and instant coffee (Nescafé) allowed coffee to be mass-distributed to soldiers in WWI and WWII, and easily brewed in American kitchens.\\n\\nDuring this wave, the origin of the coffee didn't matter. It was treated purely as a caffeine delivery system, often consisting of cheap, low-altitude Robusta blends, roasted dark to mask defects.",
        "points": [
          "Mass production and the rise of vacuum packaging",
          "Instant coffee's role in military rations",
          "Treatment of coffee as a cheap, generic commodity"
        ]
      },
      {
        "t": "Second Wave: The Cafe Experience",
        "b": "Starbucks and the introduction of espresso culture to the masses.",
        "content": "The **Second Wave** began in the late 20th century (most notably with Peet's Coffee and later Starbucks). \\n\\nConsumers pushed back against bad diner coffee and sought a better experience. The focus shifted to the *origin* (knowing your coffee came from Colombia or Sumatra) and the *experience* of the Italian-style espresso bar.\\n\\nWhile bean quality improved slightly, the Second Wave was defined by very dark roasts (to ensure uniformity across thousands of stores) and the proliferation of massive milk-and-sugar drinks (Frappuccinos, flavored lattes) acting as highly profitable treats.",
        "points": [
          "The rise of the espresso bar and cafe culture in the US",
          "Marketing countries of origin rather than just generic blends",
          "The dominance of dark roasts and flavored milk beverages"
        ]
      },
      {
        "t": "Third Wave: Specialty and Traceability",
        "b": "Coffee as an artisanal product, scored like wine.",
        "content": "The **Third Wave** (starting in the early 2000s) fundamentally shifted the paradigm: coffee is treated as an artisanal foodstuff, like wine or craft beer, rather than a commodity.\\n\\nThe focus is on **Traceability**—not just knowing the country, but the specific farm, altitude, and processing method. Roasts became significantly lighter to highlight the delicate, intrinsic terroir of the bean rather than the taste of the roaster.\\n\\nThis wave introduced the Specialty Coffee Association (SCA) 100-point scoring system, direct-trade purchasing models to pay farmers fairly, and precision brewing techniques (scales, gooseneck kettles, datalogging).",
        "points": [
          "Micro-lot traceability (knowing the exact farmer and elevation)",
          "Light roasts designed to highlight terroir, acidity, and fruit notes",
          "The scientific approach to brewing (extraction yields, water chemistry)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Las Olas del Café",
    "id": "m2",
    "desc": "Cómo evolucionaron los hábitos de consumo desde raciones de guerra hasta una experiencia culinaria de lujo.",
    "topics": [
      {
        "t": "Primera Ola: Comoditización",
        "b": "Café en cada cocina. Conveniencia sobre calidad.",
        "content": "La **Primera Ola** del café comenzó a finales del siglo XIX. El objetivo era hacer que el café fuera ubicuo, accesible y barato.\\n\\nInnovaciones como el empaque al vacío y el café instantáneo (Nescafé) permitieron que el café se distribuyera en masa a los soldados en la Primera y Segunda Guerra Mundial, y se preparara fácilmente en las cocinas.\\n\\nEn esta ola, el origen del café no importaba. Era tratado puramente como un sistema de entrega de cafeína, a menudo mezclas baratas de Robusta tostadas oscuro para ocultar defectos.",
        "points": [
          "Producción en masa y el auge del empaque al vacío",
          "El papel del café instantáneo en las raciones militares",
          "Tratamiento del café como un commodity barato y genérico"
        ]
      },
      {
        "t": "Segunda Ola: La Experiencia del Café",
        "b": "Starbucks y la introducción de la cultura del espresso a las masas.",
        "content": "La **Segunda Ola** comenzó a finales del siglo XX (notablemente con Peet's Coffee y luego Starbucks).\\n\\nLos consumidores rechazaron el mal café de filtro de restaurante y buscaron una mejor experiencia. El enfoque cambió al *origen* (saber que tu café venía de Colombia o Sumatra) y a la *experiencia* de la barra de espresso estilo italiano.\\n\\nAunque la calidad del grano mejoró, la Segunda Ola se definió por tuestes muy oscuros (para asegurar uniformidad en miles de tiendas) y la proliferación de bebidas masivas con leche y azúcar (Frappuccinos).",
        "points": [
          "El auge de la barra de espresso y la cultura de cafetería",
          "Promocionar países de origen en lugar de mezclas genéricas",
          "El dominio de los tuestes oscuros y bebidas saborizadas"
        ]
      },
      {
        "t": "Tercera Ola: Especialidad y Trazabilidad",
        "b": "El café como un producto artesanal, calificado como el vino.",
        "content": "La **Tercera Ola** (a partir de los 2000s) cambió el paradigma: el café se trata como un alimento artesanal, como el vino o la cerveza artesanal, en lugar de un commodity.\\n\\nEl enfoque está en la **Trazabilidad**—no solo el país, sino la finca específica, la altitud y el método de proceso. Los tuestes se volvieron más claros para resaltar el delicado terroir del grano en lugar del sabor del tostador.\\n\\nEsta ola introdujo el sistema de 100 puntos de la SCA, compras de trato directo para pagar mejor al productor, y técnicas de extracción de precisión (básculas, hervidores cuello de cisne, registro de datos).",
        "points": [
          "Trazabilidad de micro-lotes (conocer al productor exacto y su altitud)",
          "Tuestes claros diseñados para resaltar el terroir y la acidez",
          "El enfoque científico a la extracción (rendimientos, química del agua)"
        ]
      }
    ]
  }
};`);

updateModule(3, () => `export default {
  "en": {
    "mod": "Module 3",
    "title": "Mexico's Coffee History",
    "id": "m3",
    "desc": "How coffee arrived in Mexico and shaped the agricultural landscape of Veracruz, Chiapas, and Oaxaca.",
    "topics": [
      {
        "t": "The Arrival via Veracruz",
        "b": "Coffee enters Mexico in the late 18th century.",
        "content": "Coffee arrived in Mexico at the end of the 18th century (around 1790) via the port of **Veracruz**, brought by the Spanish from their Caribbean colonies (Cuba and the Dominican Republic).\\n\\nThe initial plantings took place in the mountainous regions near Córdoba and Coatepec. The high altitude, volcanic soil, and mist (the famous 'chipi-chipi' rain) of Coatepec provided a perfect microclimate for Coffea Arabica (specifically the Typica varietal). Coatepec quickly became the historical heartland of Mexican coffee quality.",
        "points": [
          "Arrival via Veracruz from the Caribbean colonies",
          "The establishment of Coatepec as the first quality coffee hub",
          "The Typica varietal as the original genetic base in Mexico"
        ]
      },
      {
        "t": "The Soconusco and German Plantations",
        "b": "Chiapas becomes the powerhouse of Mexican coffee production.",
        "content": "In the late 19th century, the Mexican government invited foreign investors to develop the southern border region of Chiapas. German immigrants established massive coffee plantations (fincas) in the **Soconusco** region, near the Guatemalan border.\\n\\nUnlike the smallholder farms in Veracruz, the Soconusco was built on vast, industrialized estates using indigenous Mayan labor. This region dramatically scaled up Mexico's export capacity, making Chiapas the highest-producing coffee state in the country, a title it holds to this day.",
        "points": [
          "German investment in the Soconusco region of Chiapas",
          "The shift to massive plantation-style production for export",
          "Chiapas becoming the volume leader of Mexican coffee"
        ]
      },
      {
        "t": "INMECAFE and the Smallholder Revolution",
        "b": "The rise and fall of the state coffee institute, and the birth of modern cooperatives.",
        "content": "In 1958, the Mexican government created **INMECAFE** (Instituto Mexicano del Café) to organize the industry. INMECAFE provided technical assistance, guaranteed purchase prices, and pushed coffee farming into remote indigenous communities in Oaxaca and Chiapas.\\n\\nHowever, when global coffee prices crashed in 1989 (the end of the International Coffee Agreement), INMECAFE was dismantled. Hundreds of thousands of smallholder farmers were left completely abandoned with no buyers.\\n\\nTo survive, these indigenous farmers organized into massive **Cooperatives** (like CEPCO in Oaxaca). This crisis forced Mexican farmers to adopt organic practices (because they couldn't afford chemical fertilizers) and Fair Trade certifications. Today, Mexico is one of the world's leading producers of certified organic coffee.",
        "points": [
          "INMECAFE's role in distributing coffee farming to small indigenous plots",
          "The 1989 price crisis and the collapse of state support",
          "The rise of farmer cooperatives and Mexico's dominance in Organic/Fair Trade coffee"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "Historia del Café en México",
    "id": "m3",
    "desc": "Cómo el café llegó a México y formó el paisaje agrícola de Veracruz, Chiapas y Oaxaca.",
    "topics": [
      {
        "t": "La llegada por Veracruz",
        "b": "El café entra a México a finales del siglo XVIII.",
        "content": "El café llegó a México a finales del siglo XVIII (alrededor de 1790) a través del puerto de **Veracruz**, traído por los españoles desde sus colonias caribeñas (Cuba y República Dominicana).\\n\\nLas plantaciones iniciales tuvieron lugar en las regiones montañosas cerca de Córdoba y Coatepec. La alta altitud, el suelo volcánico y la niebla (la famosa lluvia de 'chipi-chipi') de Coatepec proporcionaron un microclima perfecto para el Coffea Arabica (específicamente la variedad Typica). Coatepec se convirtió rápidamente en el corazón histórico de la calidad del café mexicano.",
        "points": [
          "Llegada por Veracruz desde las colonias caribeñas",
          "El establecimiento de Coatepec como el primer centro de café de calidad",
          "La variedad Typica como base genética original en México"
        ]
      },
      {
        "t": "El Soconusco y las Fincas Alemanas",
        "b": "Chiapas se convierte en la potencia de la producción cafetalera de México.",
        "content": "A finales del siglo XIX, el gobierno mexicano invitó a inversores extranjeros a desarrollar la frontera sur de Chiapas. Inmigrantes alemanes establecieron fincas masivas en la región del **Soconusco**, cerca de Guatemala.\\n\\nA diferencia de las pequeñas parcelas en Veracruz, el Soconusco se construyó sobre vastas fincas industrializadas usando mano de obra indígena maya. Esta región aumentó dramáticamente la capacidad de exportación, haciendo de Chiapas el estado mayor productor de café del país.",
        "points": [
          "Inversión alemana en la región del Soconusco en Chiapas",
          "El cambio hacia producción masiva estilo plantación para exportación",
          "Chiapas convirtiéndose en el líder de volumen de café mexicano"
        ]
      },
      {
        "t": "INMECAFE y la Revolución del Pequeño Productor",
        "b": "El auge y caída del instituto estatal, y el nacimiento de las cooperativas modernas.",
        "content": "En 1958, el gobierno creó **INMECAFE** (Instituto Mexicano del Café). INMECAFE brindó asistencia técnica, garantizó precios de compra e impulsó el cultivo de café en comunidades indígenas remotas en Oaxaca y Chiapas.\\n\\nSin embargo, cuando los precios globales colapsaron en 1989, INMECAFE fue desmantelado. Cientos de miles de pequeños productores quedaron abandonados sin compradores.\\n\\nPara sobrevivir, estos campesinos indígenas se organizaron en masivas **Cooperativas** (como CEPCO en Oaxaca). Esta crisis obligó a los agricultores a adoptar prácticas orgánicas (porque no podían pagar agroquímicos). Hoy, México es uno de los principales productores mundiales de café orgánico certificado.",
        "points": [
          "El rol de INMECAFE distribuyendo el cultivo a pequeñas parcelas indígenas",
          "La crisis de 1989 y el colapso del apoyo estatal",
          "El auge de las cooperativas y el dominio de México en el café Orgánico"
        ]
      }
    ]
  }
};`);

updateModule(4, () => `export default {
  "en": {
    "mod": "Module 4",
    "title": "Mexican Varietals and Cultivars",
    "id": "m4",
    "desc": "The genetic adaptations of coffee engineered and evolved on Mexican soil.",
    "topics": [
      {
        "t": "Pluma Hidalgo",
        "b": "Oaxaca's famous mutation of Typica.",
        "content": "When Typica plants were brought from Veracruz to the mountainous regions of Oaxaca in the late 19th century, they adapted to the specific, rugged terroir of the Sierra Madre del Sur.\\n\\nOver decades of isolation and adaptation, the plant morphed into a distinct local mutation known as **Pluma Hidalgo**. Highly prized in specialty coffee, Pluma Hidalgo produces a remarkably sweet, complex cup with distinct notes of chocolate, stone fruit, and bright citrus. However, like all Typica descendants, it is extremely susceptible to Coffee Leaf Rust (Roya), making it difficult and risky for farmers to maintain.",
        "points": [
          "A localized mutation of Typica adapted to the Oaxacan Sierra",
          "Prized for high cup quality (chocolate and citrus)",
          "Highly vulnerable to Leaf Rust (La Roya)"
        ]
      },
      {
        "t": "Garnica",
        "b": "A Mexican-developed hybrid combining quality and yield.",
        "content": "Developed in Veracruz by the Instituto Mexicano del Café (INMECAFE) in the 1960s, **Garnica** is a cross between *Mundo Novo* (a vigorous natural hybrid) and *Caturra* (a compact, high-yielding mutation of Bourbon).\\n\\nThe goal was to create a plant specifically tailored to the Mexican climate that yielded heavily but maintained excellent cup quality. Garnica became highly popular in Veracruz and Chiapas. While it has good cup quality, it unfortunately offers little to no resistance to modern strains of Coffee Leaf Rust.",
        "points": [
          "A hybrid of Mundo Novo x Caturra developed by INMECAFE",
          "Designed for high yields in the Mexican climate",
          "Susceptible to modern rust epidemics"
        ]
      },
      {
        "t": "Marsellesa and the Sarchimors",
        "b": "Fighting the Rust epidemic with genetics.",
        "content": "In 2012, a devastating outbreak of Coffee Leaf Rust (La Roya) swept through Mexico, destroying up to 70% of the crop in some regions. The traditional Typica, Bourbon, and Pluma plants were decimated.\\n\\nTo survive, Mexican farmers began aggressively planting **Sarchimors** (hybrids of the Villa Sarchi varietal and the Timor Hybrid, which carries robusta genetics for disease resistance).\\n\\nA standout Sarchimor heavily promoted in Mexico is **Marsellesa**, developed by CIRAD. Marsellesa provides excellent resistance to Roya, produces high yields, and crucially, maintains a very high cup quality with bright acidity, unlike older rust-resistant hybrids (like Catimor) which often tasted woody or astringent.",
        "points": [
          "The 2012 Roya epidemic forcing a genetic shift in Mexican agriculture",
          "Sarchimors: Blending Arabica quality with Robusta disease resistance",
          "Marsellesa: The modern standard for rust-resistant specialty coffee in Mexico"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "Variedades y Cultivares Mexicanos",
    "id": "m4",
    "desc": "Las adaptaciones genéticas del café desarrolladas y evolucionadas en suelo mexicano.",
    "topics": [
      {
        "t": "Pluma Hidalgo",
        "b": "La famosa mutación de Typica en Oaxaca.",
        "content": "Cuando las plantas Typica fueron llevadas de Veracruz a las regiones montañosas de Oaxaca a finales del siglo XIX, se adaptaron al terroir específico de la Sierra Madre del Sur.\\n\\nTras décadas de aislamiento, la planta mutó en una variedad local distintiva conocida como **Pluma Hidalgo**. Muy apreciada en el café de especialidad, produce una taza dulcísima y compleja con notas a chocolate, fruta de hueso y cítricos brillantes. Sin embargo, como todos los descendientes de Typica, es extremadamente susceptible a la Roya del Café, haciéndola arriesgada para los productores.",
        "points": [
          "Una mutación localizada de Typica adaptada a la Sierra Oaxaqueña",
          "Apreciada por su alta calidad en taza (chocolate y cítricos)",
          "Altamente vulnerable a La Roya"
        ]
      },
      {
        "t": "Garnica",
        "b": "Un híbrido desarrollado en México que combina calidad y rendimiento.",
        "content": "Desarrollada en Veracruz por el Instituto Mexicano del Café (INMECAFE) en los 1960s, la **Garnica** es un cruce entre *Mundo Novo* (un vigoroso híbrido natural) y *Caturra* (una mutación compacta y de alto rendimiento del Bourbon).\\n\\nEl objetivo era crear una planta adaptada al clima mexicano que produjera mucho manteniendo una excelente calidad en taza. Garnica se volvió muy popular en Veracruz y Chiapas. Aunque tiene buena calidad, lamentablemente ofrece poca o ninguna resistencia a las cepas modernas de Roya.",
        "points": [
          "Un híbrido de Mundo Novo x Caturra desarrollado por INMECAFE",
          "Diseñado para altos rendimientos en el clima mexicano",
          "Susceptible a las epidemias modernas de roya"
        ]
      },
      {
        "t": "Marsellesa y los Sarchimores",
        "b": "Luchando contra la epidemia de Roya con genética.",
        "content": "En 2012, un brote devastador de Roya del Café arrasó México, destruyendo hasta el 70% de la cosecha en algunas regiones. Las plantas tradicionales de Typica, Bourbon y Pluma fueron diezmadas.\\n\\nPara sobrevivir, los agricultores comenzaron a plantar agresivamente **Sarchimores** (híbridos de la variedad Villa Sarchí y el Híbrido de Timor, que porta genética de robusta para resistencia a enfermedades).\\n\\nUn Sarchimor destacado y fuertemente promovido en México es la **Marsellesa**, desarrollada por CIRAD. La Marsellesa proporciona excelente resistencia a la Roya, produce altos rendimientos y, crucialmente, mantiene una calidad en taza muy alta con acidez brillante, a diferencia de los híbridos más antiguos (como Catimor) que a menudo sabían a madera.",
        "points": [
          "La epidemia de Roya de 2012 forzando un cambio genético en México",
          "Sarchimores: Mezclando calidad de Arábica con resistencia de Robusta",
          "Marsellesa: El estándar moderno para café de especialidad resistente a la roya en México"
        ]
      }
    ]
  }
};`);
console.log("History index generated.");
