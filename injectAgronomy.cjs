const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'agronomy', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(1, () => `export default {
  "en": {
    "mod": "Module 1",
    "title": "The Coffee Plant",
    "id": "m1",
    "desc": "Botanical taxonomy and the fundamental differences between Arabica and Robusta.",
    "topics": [
      {
        "t": "Taxonomy of Coffea",
        "b": "An evergreen shrub belonging to the Rubiaceae family.",
        "content": "Coffee is not a bean; it is the seed of a cherry that grows on a woody, evergreen shrub in the *Rubiaceae* family. Within the genus *Coffea*, there are over 120 identified species, but only two matter commercially:\\n\\n1. **Coffea Arabica (Arabica)**: Accounts for ~60% of global production. It is a fragile, high-altitude plant that produces complex, sweet, and acidic seeds.\\n2. **Coffea Canephora (Robusta)**: Accounts for ~40% of global production. It grows at low altitudes, is highly resistant to pests and diseases, and produces seeds with double the caffeine but heavy bitterness and little to no acidity.\\n\\nA third species, *Coffea Liberica*, is grown primarily in Southeast Asia but makes up less than 1% of global trade.",
        "points": [
          "Coffee seeds as the pit of a fruit (cherry)",
          "Arabica (high altitude, complex flavor, fragile)",
          "Robusta (low altitude, high yield, disease resistant, bitter)"
        ],
        "refs": [
          "Wintgens, J. N. (2004). <i>Coffee: Growing, Processing, Sustainable Production</i>."
        ]
      },
      {
        "t": "The Genetics of Arabica",
        "b": "Why Arabica is both delicious and doomed by a genetic bottleneck.",
        "content": "All Arabica in the world descends from a single natural hybridization event in Ethiopia roughly 10,000 to 50,000 years ago, when *C. Canephora* (Robusta) crossed with *C. Eugenioides* (a low-caffeine, highly sweet wild species). \\n\\nThis means Arabica has a massive **Genetic Bottleneck**. The entire species has roughly 1% genetic diversity (compared to humans or other crops). Because it lacks genetic diversity, it cannot easily evolve defenses against new diseases, making it incredibly vulnerable to climate change and pathogens like Coffee Leaf Rust.",
        "points": [
          "Arabica as a spontaneous hybrid of Robusta and Eugenioides",
          "The genetic bottleneck of the species (lack of diversity)",
          "Vulnerability to climate change and global pandemics (like Roya)"
        ]
      },
      {
        "t": "Anatomy of the Cherry",
        "b": "Understanding the layers we must remove to get to the seed.",
        "content": "To understand coffee processing, you must understand the anatomy of the cherry from the outside in:\\n\\n1. **Skin (Exocarp)**: The tough outer layer, usually turning red or yellow when ripe.\\n2. **Pulp / Mucilage (Mesocarp)**: A sticky, sugary, honey-like layer. This is where the fermentation happens during processing.\\n3. **Parchment (Endocarp)**: A hard, papery hull that protects the seed.\\n4. **Silverskin (Epidermis)**: An ultra-thin membrane tightly clinging to the seed (this turns into 'chaff' during roasting).\\n5. **The Seed (Endosperm)**: The green coffee bean itself. Usually, there are two seeds per cherry facing each other.",
        "points": [
          "Exocarp (Skin)",
          "Mesocarp (Mucilage/Pulp - the engine of fermentation)",
          "Endocarp (Parchment - the protective drying layer)",
          "Endosperm (The coffee bean)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "La Planta de Café",
    "id": "m1",
    "desc": "Taxonomía botánica y las diferencias fundamentales entre Arábica y Robusta.",
    "topics": [
      {
        "t": "Taxonomía del Coffea",
        "b": "Un arbusto de hoja perenne perteneciente a la familia Rubiaceae.",
        "content": "El café no es un 'grano'; es la semilla de una cereza que crece en un arbusto leñoso de la familia *Rubiaceae*. Dentro del género *Coffea*, hay más de 120 especies, pero solo dos importan comercialmente:\\n\\n1. **Coffea Arabica (Arábica)**: ~60% de la producción global. Es una planta frágil de gran altitud que produce semillas complejas, dulces y ácidas.\\n2. **Coffea Canephora (Robusta)**: ~40% de la producción global. Crece a baja altitud, es muy resistente a plagas, y produce semillas con el doble de cafeína pero amargor pesado y poca acidez.\\n\\nUna tercera especie, *Coffea Liberica*, se cultiva en el sudeste asiático pero representa menos del 1% del comercio.",
        "points": [
          "Las semillas de café como el hueso de una fruta (cereza)",
          "Arábica (alta altitud, sabor complejo, frágil)",
          "Robusta (baja altitud, alto rendimiento, resistente, amargo)"
        ],
        "refs": [
          "Wintgens, J. N. (2004). <i>Coffee: Growing, Processing, Sustainable Production</i>."
        ]
      },
      {
        "t": "La genética del Arábica",
        "b": "Por qué el Arábica es delicioso pero está condenado por un cuello de botella genético.",
        "content": "Todo el Arábica del mundo desciende de una única hibridación natural en Etiopía hace 10,000 a 50,000 años, cuando *C. Canephora* (Robusta) se cruzó con *C. Eugenioides* (una especie silvestre muy dulce y baja en cafeína).\\n\\nEsto significa que el Arábica tiene un **Cuello de Botella Genético** masivo. Toda la especie tiene aproximadamente 1% de diversidad genética. Al carecer de diversidad, no puede evolucionar fácilmente defensas contra nuevas enfermedades, haciéndola increíblemente vulnerable al cambio climático y patógenos como la Roya del Café.",
        "points": [
          "Arábica como híbrido espontáneo de Robusta y Eugenioides",
          "El cuello de botella genético de la especie",
          "Vulnerabilidad al cambio climático y pandemias (como la Roya)"
        ]
      },
      {
        "t": "Anatomía de la cereza",
        "b": "Entendiendo las capas que debemos quitar para llegar a la semilla.",
        "content": "Para entender el procesamiento, debes entender la anatomía de la cereza desde afuera hacia adentro:\\n\\n1. **Piel (Exocarpio)**: Capa exterior dura, usualmente roja o amarilla al madurar.\\n2. **Pulpa / Mucílago (Mesocarpio)**: Capa pegajosa y azucarada. Aquí ocurre la fermentación durante el proceso.\\n3. **Pergamino (Endocarpio)**: Una cáscara dura y de papel que protege la semilla.\\n4. **Película Plateada (Epidermis)**: Membrana ultra fina adherida a la semilla (se convierte en 'tamo' al tostar).\\n5. **La Semilla (Endospermo)**: El grano verde de café. Usualmente, hay dos semillas por cereza frente a frente.",
        "points": [
          "Exocarpio (Piel)",
          "Mesocarpio (Mucílago/Pulpa - el motor de la fermentación)",
          "Endocarpio (Pergamino - la capa protectora de secado)",
          "Endospermo (El grano de café)"
        ]
      }
    ]
  }
};`);

updateModule(2, () => `export default {
  "en": {
    "mod": "Module 2",
    "title": "Terroir: Environment and Growth",
    "id": "m2",
    "desc": "How altitude, soil, and shade canopies physically dictate the flavor of the final cup.",
    "topics": [
      {
        "t": "Altitude and Temperature",
        "b": "Why 'High Grown' is a marker of quality.",
        "content": "Altitude itself does not make coffee taste better. The mechanism is **Temperature**.\\n\\nFor every 100 meters of elevation, the temperature drops by roughly 0.6°C. At high altitudes (1,500m to 2,000m), the warm days drive photosynthesis, but the cold nights force the plant to slow its metabolism. \\n\\nThis delayed maturation means the cherry stays on the tree much longer, giving it more time to pack complex sugars and organic acids into the seed. This results in a very dense bean with vibrant acidity and intense sweetness.",
        "points": [
          "Altitude as a proxy for diurnal temperature shifts (warm days, cold nights)",
          "Slow maturation increasing seed density and organic acid concentration",
          "The 'Strictly High Grown' (SHG) classification"
        ]
      },
      {
        "t": "Soil Chemistry",
        "b": "Volcanic slopes vs. clay loams.",
        "content": "Coffee requires slightly acidic soil (pH 5.0 to 6.0) with excellent drainage. This is why the world's best coffees are often grown on the steep slopes of dormant (or active) volcanoes.\\n\\n**Andisols (Volcanic Soils)** are rich in potassium, phosphorus, and zinc, but most importantly, they are highly porous. Coffee roots will rot if they sit in standing water. The ash-rich soil drains water rapidly while retaining just enough moisture and nutrients to feed the plant.\\n\\nLack of specific nutrients directly impacts flavor: a lack of potassium leads to poor fruit development, while a lack of boron causes the cherries to develop irregularly.",
        "points": [
          "The necessity of excellent water drainage (slopes and porous soil)",
          "Andisols (volcanic ash soils) as the ideal medium",
          "The impact of micronutrients (boron, zinc) on cherry development"
        ]
      },
      {
        "t": "Shade-Grown Systems",
        "b": "The ecological and flavor benefits of an agroforestry canopy.",
        "content": "Coffee naturally evolved as an understory shrub in the forests of Ethiopia. \\n\\n**Shade canopies** (planting tall trees like Inga or Banana above the coffee) serve multiple purposes:\\n1. **Temperature buffer**: Shade lowers the ambient temperature of the farm, mimicking higher altitude and slowing cherry maturation.\\n2. **Soil health**: The falling leaves from shade trees create natural mulch and compost, reducing the need for chemical fertilizers.\\n3. **Biodiversity**: It provides habitat for birds, which eat the primary pest of coffee (the Coffee Berry Borer or *Broca*).\\n\\nWhile 'sun-grown' coffee (monoculture) produces higher yields in the short term, it exhausts the soil rapidly and requires massive chemical inputs.",
        "points": [
          "Simulating high-altitude temperature drops via canopy shade",
          "Natural pest control via avian biodiversity",
          "Long-term soil sustainability vs. short-term monoculture yields"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "Terroir: Entorno y Crecimiento",
    "id": "m2",
    "desc": "Cómo la altitud, el suelo y la sombra dictan físicamente el sabor de la taza final.",
    "topics": [
      {
        "t": "Altitud y Temperatura",
        "b": "Por qué 'Estrictamente Altura' es un marcador de calidad.",
        "content": "La altitud en sí no hace que el café sepa mejor. El mecanismo es la **Temperatura**.\\n\\nPor cada 100 metros de elevación, la temperatura baja ~0.6°C. A grandes altitudes (1,500m a 2,000m), los días cálidos impulsan la fotosíntesis, pero las noches frías obligan a la planta a ralentizar su metabolismo.\\n\\nEsta maduración retrasada significa que la cereza se queda en el árbol mucho más tiempo, dándole tiempo para empacar azúcares complejos y ácidos orgánicos en la semilla. Esto resulta en un grano muy denso con acidez vibrante y dulzor intenso.",
        "points": [
          "Altitud como proxy de cambios térmicos diurnos (días cálidos, noches frías)",
          "Maduración lenta aumentando densidad y concentración de ácidos",
          "La clasificación 'Strictly High Grown' (SHG)"
        ]
      },
      {
        "t": "Química del suelo",
        "b": "Laderas volcánicas vs. suelos arcillosos.",
        "content": "El café requiere un suelo ligeramente ácido (pH 5.0 a 6.0) con excelente drenaje. Es por esto que los mejores cafés a menudo crecen en las laderas escarpadas de volcanes.\\n\\nLos **Andisoles (Suelos Volcánicos)** son ricos en potasio y fósforo, pero más importantemente, son muy porosos. Las raíces del café se pudrirán si se asientan en agua estancada. El suelo rico en cenizas drena el agua rápidamente mientras retiene nutrientes.\\n\\nLa falta de nutrientes impacta el sabor directamente: la falta de potasio lleva a un mal desarrollo del fruto, mientras que la falta de boro causa cerezas irregulares.",
        "points": [
          "La necesidad de excelente drenaje (laderas y suelo poroso)",
          "Andisoles (suelos de ceniza volcánica) como el medio ideal",
          "El impacto de micronutrientes en el desarrollo de la cereza"
        ]
      },
      {
        "t": "Sistemas de Sombra (Shade-Grown)",
        "b": "Los beneficios ecológicos y de sabor de un dosel agroforestal.",
        "content": "El café evolucionó naturalmente como un arbusto de sotobosque en Etiopía.\\n\\nLos **Doseles de sombra** (plantar árboles altos como Chalum o Plátano sobre el café) sirven múltiples propósitos:\\n1. **Amortiguador térmico**: La sombra baja la temperatura ambiental, imitando mayor altitud y ralentizando la maduración.\\n2. **Salud del suelo**: Las hojas que caen crean abono natural, reduciendo la necesidad de fertilizantes químicos.\\n3. **Biodiversidad**: Provee hábitat para aves, que comen la principal plaga del café (la Broca).\\n\\nAunque el café cultivado al sol (monocultivo) produce mayores rendimientos a corto plazo, agota el suelo rápidamente.",
        "points": [
          "Simular descensos de temperatura de gran altitud vía sombra",
          "Control natural de plagas vía biodiversidad aviar",
          "Sostenibilidad del suelo a largo plazo vs. rendimientos del monocultivo"
        ]
      }
    ]
  }
};`);

updateModule(3, () => `export default {
  "en": {
    "mod": "Module 3",
    "title": "Traditional Processing",
    "id": "m3",
    "desc": "How farmers remove the fruit from the seed: Washed, Natural, and Honey processes.",
    "topics": [
      {
        "t": "The Washed Process (Wet Process)",
        "b": "Focusing purely on the intrinsic flavor of the seed.",
        "content": "In the **Washed Process**, the goal is to remove 100% of the fruit from the seed before drying it.\\n\\n1. **Depulping**: A machine physically squeezes the cherry, popping the seed out of the skin.\\n2. **Fermentation**: The seed is placed in a tank of water for 12-36 hours. Naturally occurring microbes eat the sticky mucilage layer until it dissolves.\\n3. **Washing & Drying**: The seeds are scrubbed clean in channels of water, then dried on patios or raised beds as bare parchment.\\n\\nBecause no fruit is left on the seed during drying, the resulting cup is incredibly clean, highlighting the bright acidity and floral notes inherent to the coffee's genetics and terroir. It is the gold standard for specialty coffee.",
        "points": [
          "Complete removal of mucilage via aquatic fermentation",
          "Produces the cleanest, brightest, most terroir-driven cup profile",
          "Highly water-intensive (creating environmental challenges with wastewater)"
        ]
      },
      {
        "t": "The Natural Process (Dry Process)",
        "b": "Drying the seed entirely inside the fruit.",
        "content": "The **Natural Process** is the oldest method in the world, originating in Ethiopia and Yemen. \\n\\nThe whole, intact cherries are picked and immediately laid out on raised beds or patios in the sun. They are turned constantly to prevent rot. Over 2 to 4 weeks, the fruit shrivels and dries into a hard, dark raisin around the seed. Only then is it hulled off.\\n\\nBecause the seed dries *inside* the sugary fruit, it absorbs heavy, jammy fruit flavors and intense sweetness. Naturals often taste like strawberry jam, blueberry, or wine. However, if they dry unevenly or mold, they taste like compost and vinegar.",
        "points": [
          "No water used; cherries dry whole like raisins",
          "Infuses the seed with intense, heavy fruit flavors (blueberry, strawberry)",
          "High risk of fermentation defects (mold, acetic/vinegar taints)"
        ]
      },
      {
        "t": "The Honey Process (Pulped Natural)",
        "b": "The middle ground: removing the skin but leaving the sticky mucilage.",
        "content": "In the **Honey Process** (popularized in Costa Rica), the skin of the cherry is mechanically removed (depulped), but the sticky, sugary mucilage is left clinging to the parchment. The beans are then dried with this sticky layer attached.\\n\\nIt is called 'honey' because the beans become a sticky, golden mess on the drying beds. By controlling how much mucilage is left on the bean and how much shade they dry under, farmers create sub-categories:\\n- **White/Yellow Honey**: Fast drying, little mucilage. Tastes closer to a washed coffee.\\n- **Red/Black Honey**: Slow drying under shade, maximum mucilage. Tastes intensely sweet and fruity, closer to a natural.\\n\\nHoneys offer the heavy body of a natural with the cleaner acidity of a washed coffee, while using drastically less water than the washed process.",
        "points": [
          "Skin removed, but mucilage left intact during drying",
          "Color classifications (Yellow, Red, Black) based on mucilage amount and drying speed",
          "A hybrid cup profile: high sweetness, heavy body, moderate acidity"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "Procesamiento Tradicional",
    "id": "m3",
    "desc": "Cómo los productores remueven la fruta de la semilla: procesos Lavado, Natural y Honey.",
    "topics": [
      {
        "t": "El Proceso Lavado (Vía Húmeda)",
        "b": "Enfocándose puramente en el sabor intrínseco de la semilla.",
        "content": "En el **Proceso Lavado**, el objetivo es remover el 100% de la fruta de la semilla antes de secarla.\\n\\n1. **Despulpado**: Una máquina exprime la cereza, sacando la semilla de la piel.\\n2. **Fermentación**: La semilla se coloca en un tanque de agua por 12-36 horas. Microbios naturales comen la capa de mucílago hasta que se disuelve.\\n3. **Lavado y Secado**: Las semillas se frotan hasta quedar limpias, luego se secan en patios o camas africanas.\\n\\nComo no queda fruta en la semilla durante el secado, la taza resultante es increíblemente limpia, resaltando la acidez brillante y las notas florales inherentes a la genética del café. Es el estándar de oro de especialidad.",
        "points": [
          "Remoción completa del mucílago vía fermentación acuática",
          "Produce el perfil de taza más limpio y brillante impulsado por el terroir",
          "Uso intensivo de agua (crea retos ambientales con aguas mieles)"
        ]
      },
      {
        "t": "El Proceso Natural (Vía Seca)",
        "b": "Secando la semilla completamente dentro de la fruta.",
        "content": "El **Proceso Natural** es el método más antiguo del mundo, originario de Etiopía y Yemen.\\n\\nLas cerezas enteras se recolectan y se extienden inmediatamente al sol. Se voltean constantemente para evitar que se pudran. En 2 a 4 semanas, la fruta se marchita y se seca como una pasa dura alrededor de la semilla. Solo entonces se trilla.\\n\\nComo la semilla se seca *dentro* de la fruta azucarada, absorbe sabores pesados a mermelada y un dulzor intenso. Los naturales suelen saber a mermelada de fresa, mora azul o vino. Sin embargo, si se secan mal o se enmohecen, saben a vinagre o composta.",
        "points": [
          "No se usa agua; las cerezas se secan enteras como pasas",
          "Infunde la semilla con intensos sabores a fruta pesada",
          "Alto riesgo de defectos de fermentación (moho, tonos acéticos/vinagre)"
        ]
      },
      {
        "t": "El Proceso Honey (Natural Despulpado)",
        "b": "El punto medio: quitando la piel pero dejando el mucílago pegajoso.",
        "content": "En el **Proceso Honey** (popularizado en Costa Rica), la piel se quita mecánicamente (despulpado), pero el mucílago azucarado y pegajoso se deja adherido al pergamino. Los granos se secan con esta capa pegajosa.\\n\\nSe llama 'honey' (miel) porque los granos se vuelven un desastre dorado y pegajoso en las camas de secado. Controlando cuánto mucílago queda y bajo cuánta sombra se secan, los productores crean subcategorías:\\n- **Honey Blanco/Amarillo**: Secado rápido, poco mucílago. Sabe más a un café lavado.\\n- **Honey Rojo/Negro**: Secado lento bajo sombra, máximo mucílago. Sabe intensamente dulce, más cercano a un natural.\\n\\nLos Honeys ofrecen el cuerpo de un natural con la acidez limpia de un lavado, usando drásticamente menos agua.",
        "points": [
          "Piel removida, pero mucílago intacto durante el secado",
          "Clasificaciones de color (Amarillo, Rojo, Negro) basadas en velocidad de secado",
          "Perfil híbrido: alto dulzor, cuerpo pesado, acidez moderada"
        ]
      }
    ]
  }
};`);

updateModule(4, () => `export default {
  "en": {
    "mod": "Module 4",
    "title": "Modern & Experimental Processing",
    "id": "m4",
    "desc": "How farmers are using wine-making techniques to radically alter the flavor of coffee.",
    "topics": [
      {
        "t": "Anaerobic Fermentation",
        "b": "Starving the microbes of oxygen to create wild, unprecedented flavors.",
        "content": "Traditionally, coffee ferments in open-air tanks where oxygen is abundant. In **Anaerobic Fermentation**, the coffee cherries (or pulped seeds) are placed into sealed, airtight stainless steel or plastic tanks with a one-way valve.\\n\\nAs the natural microbes eat the sugars in the coffee, they produce CO2. This CO2 pushes all the oxygen out of the one-way valve, creating a completely oxygen-free (anaerobic) environment.\\n\\nThis shifts the microbial population. Bacteria that thrive without oxygen (lactic acid bacteria) take over, changing the chemical byproducts of the fermentation. Anaerobic coffees produce wild, intense flavors like cinnamon, bubblegum, gingerbread, and tropical fruits.",
        "points": [
          "Sealed tanks creating an oxygen-free environment via CO2 displacement",
          "Promotes lactic acid rather than acetic acid bacterial growth",
          "Creates highly distinct, intensely spiced and tropical flavor profiles"
        ]
      },
      {
        "t": "Carbonic Maceration",
        "b": "Borrowing from the Beaujolais wine industry.",
        "content": "**Carbonic Maceration (CM)** is a specific type of anaerobic fermentation adapted from winemaking.\\n\\nInstead of letting the coffee create its own CO2 over time, the farmer places whole, intact coffee cherries into a sealed tank and immediately injects pressurized CO2 gas, forcefully flushing out the oxygen.\\n\\nThis pressure forces the fermentation to happen *intracellularly* (inside the unbroken skin of the cherry). The pressurized CO2 drastically lowers the temperature and slows the degradation of the fruit. CM coffees are famous for brilliant, sparkling acidity, red wine notes, and intense floral aromatics.",
        "points": [
          "Active injection of pressurized CO2 (unlike standard passive anaerobic)",
          "Intracellular fermentation inside the whole, unbroken cherry",
          "Yields sparkling acidity and red wine characteristics"
        ]
      },
      {
        "t": "Co-Fermentation (Infusions)",
        "b": "The most controversial trend in specialty coffee.",
        "content": "In recent years, producers have begun adding external ingredients to the fermentation tanks. This is called **Co-Fermentation**.\\n\\nFarmers will add passionfruit pulp, cinnamon sticks, wine yeast, or even essential oils into the anaerobic tank along with the coffee. The coffee seed absorbs these intense flavors during the fermentation phase.\\n\\nThis is highly controversial. Proponents argue it allows farmers to sell lower-quality coffee at high prices by making it taste like fruit juice. Purists argue it destroys the concept of *terroir* and is essentially flavored coffee pretending to be natural. Currently, the SCA requires full transparency if external ingredients are added.",
        "points": [
          "Adding fruits, spices, or lab-grown yeasts to the fermentation tank",
          "Creates overwhelmingly intense, non-coffee flavors (e.g., tasting exactly like a peach)",
          "The ethical debate: Innovation vs. adulteration of terroir"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "Procesamiento Moderno y Experimental",
    "id": "m4",
    "desc": "Cómo los productores usan técnicas vinícolas para alterar radicalmente el sabor del café.",
    "topics": [
      {
        "t": "Fermentación Anaeróbica",
        "b": "Privando de oxígeno a los microbios para crear sabores salvajes e inéditos.",
        "content": "Tradicionalmente, el café fermenta en tanques abiertos donde abunda el oxígeno. En la **Fermentación Anaeróbica**, las cerezas (o semillas despulpadas) se colocan en tanques herméticos de acero o plástico con una válvula unidireccional.\\n\\nA medida que los microbios comen los azúcares, producen CO2. Este CO2 expulsa todo el oxígeno por la válvula, creando un ambiente completamente libre de oxígeno (anaeróbico).\\n\\nEsto cambia la población microbiana. Las bacterias que prosperan sin oxígeno (bacterias ácido lácticas) toman el control. Los cafés anaeróbicos producen sabores salvajes e intensos como canela, chicle, pan de jengibre y frutas tropicales.",
        "points": [
          "Tanques sellados creando un ambiente sin oxígeno vía desplazamiento de CO2",
          "Promueve el crecimiento de bacterias ácido lácticas en lugar de acéticas",
          "Crea perfiles de sabor intensamente especiados y tropicales"
        ]
      },
      {
        "t": "Maceración Carbónica",
        "b": "Tomando prestado de la industria del vino Beaujolais.",
        "content": "La **Maceración Carbónica (CM)** es un tipo específico de fermentación anaeróbica adaptada de la enología.\\n\\nEn lugar de dejar que el café cree su propio CO2 con el tiempo, el productor coloca cerezas enteras en un tanque sellado e inyecta inmediatamente gas CO2 presurizado, expulsando el oxígeno a la fuerza.\\n\\nEsta presión obliga a la fermentación a ocurrir *intracelularmente* (dentro de la piel intacta de la cereza). El CO2 presurizado baja la temperatura y ralentiza la degradación de la fruta. Los cafés CM son famosos por su acidez chispeante, notas a vino tinto y aromas florales intensos.",
        "points": [
          "Inyección activa de CO2 presurizado (a diferencia de anaeróbico pasivo)",
          "Fermentación intracelular dentro de la cereza entera",
          "Produce acidez chispeante y características de vino tinto"
        ]
      },
      {
        "t": "Co-Fermentación (Infusiones)",
        "b": "La tendencia más controvertida en el café de especialidad.",
        "content": "En años recientes, los productores han comenzado a agregar ingredientes externos a los tanques. Esto se llama **Co-Fermentación**.\\n\\nLos agricultores agregan pulpa de maracuyá, rajas de canela, levadura de vino, o incluso aceites esenciales al tanque junto con el café. La semilla de café absorbe estos intensos sabores durante la fermentación.\\n\\nEsto es muy controvertido. Sus defensores argumentan que permite a los productores vender café de menor calidad a altos precios haciéndolo saber a jugo de fruta. Los puristas argumentan que destruye el concepto de *terroir* y es esencialmente café saborizado. Actualmente, la SCA exige total transparencia si se añaden ingredientes externos.",
        "points": [
          "Añadir frutas, especias o levaduras de laboratorio al tanque de fermentación",
          "Crea sabores abrumadoramente intensos a cosas que no son café (ej. a durazno exacto)",
          "El debate ético: Innovación vs. adulteración del terroir"
        ]
      }
    ]
  }
};`);
console.log("Agronomy index generated.");
