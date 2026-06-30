const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'sensory', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(1, () => `export default {
  "en": {
    "mod": "Module 1",
    "title": "The Physiology of Taste",
    "id": "m1",
    "desc": "How your tongue and nose actually work to perceive coffee.",
    "topics": [
      {
        "t": "Gustation (Taste)",
        "b": "The five basic tastes mapped on your tongue.",
        "content": "When you drink coffee, the liquid physically touches the taste buds on your tongue. This is **Gustation**.\\n\\nYour tongue is only capable of perceiving five basic tastes: Sweet, Sour, Salty, Bitter, and Umami (savory). There is no such thing as a 'strawberry' or 'chocolate' taste bud. The tongue acts as a crude EQ mixer.\\n\\nIn coffee, the primary battle is between **Sourness** (driven by under-extraction or high acidity) and **Bitterness** (driven by over-extraction or dark roasting). Sweetness acts as the bridge that harmonizes the two.",
        "points": [
          "The five basic tastes (Sweet, Sour, Salty, Bitter, Umami)",
          "Gustation as a crude, physical sensation on the tongue",
          "The myth of the 'taste map' (all areas of the tongue perceive all tastes)"
        ],
        "refs": [
          "SCA Sensory Foundation Curriculum."
        ]
      },
      {
        "t": "Olfaction (Smell) and Flavor",
        "b": "Why coffee tastes like nothing when you pinch your nose.",
        "content": "While the tongue detects the basic EQ (sweet/sour/bitter), the actual *identity* of the flavor—whether that sourness is a lemon, a green apple, or vinegar—comes entirely from your nose. This is **Olfaction**.\\n\\nThere are two types of olfaction:\\n1. **Orthonasal**: Smelling the coffee through your nostrils before you drink it. (Aroma).\\n2. **Retronasal**: When you swallow the coffee, vapors travel up the back of your throat into your nasal cavity. This is what creates 'Flavor'.\\n\\nFlavor is a neurological construct: **Flavor = Taste (Tongue) + Smell (Retronasal Olfaction)**. This is why professionals loudly slurp their coffee: it aspirates the liquid into a fine mist, maximizing retronasal olfaction.",
        "points": [
          "Orthonasal (front of nose) vs. Retronasal (back of throat) olfaction",
          "Flavor as a combination of taste and smell",
          "The mechanical purpose of 'slurping' in cupping"
        ]
      },
      {
        "t": "Tactile Sensation (Body/Mouthfeel)",
        "b": "Texture is just as important as taste.",
        "content": "The third pillar of sensory evaluation is **Tactile Sensation**, often called Body or Mouthfeel.\\n\\nThis is the physical sensation of the liquid in your mouth, detected by the trigeminal nerve. It is driven by the oils (lipids) and insoluble micro-fines suspended in the coffee.\\n\\nWe evaluate body on two metrics:\\n- **Weight**: Is it light (like water or tea) or heavy (like heavy cream or syrup)?\\n- **Texture**: Is it smooth, silky, creamy, or is it astringent, gritty, and drying?\\n\\nFor example, a high-altitude Kenyan coffee might have a 'light, juicy' body, while an Indonesian Sumatra might have a 'heavy, syrupy' body.",
        "points": [
          "The Trigeminal nerve detecting physical weight and texture",
          "Weight (heavy vs. light) vs. Texture (smooth vs. astringent)",
          "The role of brewing method (paper filters remove body, metal filters retain it)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 1",
    "title": "La Fisiología del Gusto",
    "id": "m1",
    "desc": "Cómo funcionan realmente tu lengua y nariz para percibir el café.",
    "topics": [
      {
        "t": "Gustación (Sabor)",
        "b": "Los cinco sabores básicos mapeados en tu lengua.",
        "content": "Cuando bebes café, el líquido toca físicamente las papilas gustativas de tu lengua. Esto es la **Gustación**.\\n\\nTu lengua solo es capaz de percibir cinco sabores básicos: Dulce, Ácido, Salado, Amargo y Umami (sabroso). No existe una papila gustativa de 'fresa' o 'chocolate'. La lengua actúa como un mezclador básico (EQ).\\n\\nEn el café, la batalla principal es entre la **Acidez** (impulsada por subextracción o altitud) y el **Amargor** (impulsado por sobreextracción o tueste oscuro). El dulzor actúa como el puente que armoniza a ambos.",
        "points": [
          "Los cinco sabores básicos (Dulce, Ácido, Salado, Amargo, Umami)",
          "La gustación como una sensación física cruda en la lengua",
          "El mito del 'mapa de la lengua' (todas las áreas perciben todos los sabores)"
        ],
        "refs": [
          "SCA Sensory Foundation Curriculum."
        ]
      },
      {
        "t": "Olfato y Sabor (Flavor)",
        "b": "Por qué el café no sabe a nada cuando te tapas la nariz.",
        "content": "Mientras que la lengua detecta lo básico (dulce/ácido/amargo), la *identidad* real del sabor—si esa acidez es un limón, una manzana verde o vinagre—proviene enteramente de tu nariz. Esto es el **Olfato**.\\n\\nHay dos tipos de olfato:\\n1. **Ortonasal**: Oler el café a través de las fosas nasales antes de beberlo. (Aroma).\\n2. **Retronasal**: Cuando tragas, los vapores suben por la parte posterior de la garganta hacia la cavidad nasal. Esto crea el 'Sabor' (Flavor).\\n\\nEl Sabor es un constructo neurológico: **Sabor = Gusto (Lengua) + Olfato (Retronasal)**. Por esto los profesionales sorben ruidosamente: aspira el líquido en una fina niebla, maximizando el olfato retronasal.",
        "points": [
          "Olfato ortonasal (frente de la nariz) vs. retronasal (parte posterior de la garganta)",
          "El sabor como una combinación de gusto y olfato",
          "El propósito mecánico de 'sorber' en la catación"
        ]
      },
      {
        "t": "Sensación Táctil (Cuerpo/Mouthfeel)",
        "b": "La textura es tan importante como el sabor.",
        "content": "El tercer pilar de la evaluación sensorial es la **Sensación Táctil**, a menudo llamada Cuerpo.\\n\\nEsta es la sensación física del líquido en tu boca, detectada por el nervio trigémino. Es impulsada por los aceites (lípidos) y los micro-finos insolubles suspendidos en el café.\\n\\nEvaluamos el cuerpo en dos métricas:\\n- **Peso**: ¿Es ligero (como agua o té) o pesado (como crema espesa o jarabe)?\\n- **Textura**: ¿Es suave, sedoso, cremoso, o es astringente, arenoso y secante?\\n\\nUn Kenia de gran altitud podría tener un cuerpo 'ligero y jugoso', mientras que un Sumatra podría tener un cuerpo 'pesado y almibarado'.",
        "points": [
          "El nervio trigémino detectando peso físico y textura",
          "Peso (pesado vs. ligero) vs. Textura (suave vs. astringente)",
          "El rol del método de extracción (filtros de papel quitan cuerpo, metal lo retienen)"
        ]
      }
    ]
  }
};`);

updateModule(2, () => `export default {
  "en": {
    "mod": "Module 2",
    "title": "The SCA Cupping Protocol",
    "id": "m2",
    "desc": "The global standard for objectively grading coffee quality.",
    "topics": [
      {
        "t": "The Rules of Cupping",
        "b": "Leveling the playing field by eliminating brewing variables.",
        "content": "To score coffee accurately, you must eliminate the barista's skill from the equation. The **SCA Cupping Protocol** is a strict, full-immersion brewing method designed to evaluate the raw potential of the bean.\\n\\n**The Parameters:**\\n- **Ratio**: 8.25g of coffee per 150ml of water.\\n- **Grind**: Slightly coarser than drip, perfectly uniform.\\n- **Water**: Poured at 200°F (93°C).\\n- **Timeline**: The coffee steeps untouched for exactly 4 minutes. Then, the crust is 'broken' with a spoon to evaluate the wet aroma. The surface is skimmed, and tasting begins with a spoon around minute 10, once it cools enough not to burn the tongue.",
        "points": [
          "Cupping as a standardized, barista-proof immersion brew",
          "Strict ratio: 8.25g per 150ml",
          "The 4-minute steep and the 'crust break'"
        ],
        "refs": [
          "Specialty Coffee Association. <i>Cupping Protocols</i>. https://sca.coffee"
        ]
      },
      {
        "t": "The SCA 100-Point Scale",
        "b": "What separates an 80-point coffee from a 90-point coffee.",
        "content": "The SCA Cupping Form evaluates 10 attributes, each out of 10 points (Fragrance/Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, and Overall). Defects subtract points.\\n\\n**The Scoring Tiers:**\\n- **Below 80**: Commercial Grade. Often defective, bitter, and one-dimensional.\\n- **80 to 84.75**: Specialty Base. Clean, sweet, but simple. Often used as base components in espresso blends.\\n- **85 to 89.75**: Excellent Specialty. High clarity, distinct origin characteristics, vibrant acidity. (The majority of high-end cafe offerings).\\n- **90 to 100**: Outstanding/Presidential. Flawless, profoundly complex, often experimental processes or rare varietals (like Geisha). Sold at extreme premiums.",
        "points": [
          "The 10 attributes evaluated on the form",
          "80 points as the threshold for 'Specialty Coffee'",
          "The massive price and rarity gap between an 85 and a 90+ coffee"
        ]
      },
      {
        "t": "Uniformity, Clean Cup, and Sweetness",
        "b": "The structural pillars of specialty coffee.",
        "content": "When evaluating a coffee, you do not just evaluate one cup. You prepare **five identical cups** of the exact same coffee. This tests for consistency.\\n\\n- **Uniformity**: Do all five cups taste exactly the same? If one cup tastes off, the coffee lacks uniformity (perhaps a bad bean slipped in).\\n- **Clean Cup**: Is there any interference from negative, non-coffee flavors (like mold, dirt, or medicine)? A clean cup is completely transparent.\\n- **Sweetness**: Not sugary sweet, but a pleasing fullness of flavor. \\n\\nIf a coffee loses points in these three categories, it is almost immediately disqualified from being considered 'Specialty.'",
        "points": [
          "The necessity of preparing 5 cups per sample",
          "Uniformity as a test of processing quality at the farm",
          "Clean cup as the absolute baseline requirement for specialty grading"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 2",
    "title": "El Protocolo de Catación de la SCA",
    "id": "m2",
    "desc": "El estándar global para calificar objetivamente la calidad del café.",
    "topics": [
      {
        "t": "Las Reglas de la Catación (Cupping)",
        "b": "Nivelar el campo de juego eliminando las variables de extracción.",
        "content": "Para calificar un café con precisión, debes eliminar la habilidad del barista de la ecuación. El **Protocolo de Catación de la SCA** es un método estricto de inmersión total diseñado para evaluar el potencial crudo del grano.\\n\\n**Los Parámetros:**\\n- **Proporción**: 8.25g de café por 150ml de agua.\\n- **Molienda**: Ligeramente más gruesa que filtro, perfectamente uniforme.\\n- **Agua**: Vertida a 93°C.\\n- **Línea de tiempo**: El café reposa intacto exactamente 4 minutos. Luego, se 'rompe' la costra con una cuchara para evaluar el aroma húmedo. Se limpia la superficie y la degustación comienza alrededor del minuto 10, cuando se enfría lo suficiente.",
        "points": [
          "La catación como una inmersión estandarizada a prueba de baristas",
          "Proporción estricta: 8.25g por 150ml",
          "El reposo de 4 minutos y el 'rompimiento de costra' (crust break)"
        ],
        "refs": [
          "Specialty Coffee Association. <i>Cupping Protocols</i>. https://sca.coffee"
        ]
      },
      {
        "t": "La Escala de 100 Puntos de la SCA",
        "b": "Qué separa a un café de 80 puntos de uno de 90 puntos.",
        "content": "El Formulario de Catación de la SCA evalúa 10 atributos, cada uno sobre 10 puntos. Los defectos restan puntos.\\n\\n**Los Niveles de Puntuación:**\\n- **Menos de 80**: Grado Comercial. A menudo defectuoso, amargo y unidimensional.\\n- **80 a 84.75**: Base de Especialidad. Limpio, dulce, pero simple. A menudo usado como base en mezclas de espresso.\\n- **85 a 89.75**: Especialidad Excelente. Alta claridad, características de origen distintivas. (La mayoría del café de alta gama).\\n- **90 a 100**: Sobresaliente/Presidencial. Impecable, profundamente complejo, a menudo procesos experimentales o variedades raras (como Geisha).",
        "points": [
          "Los 10 atributos evaluados en el formulario",
          "80 puntos como el umbral para 'Café de Especialidad'",
          "La enorme brecha de precio y rareza entre un café de 85 y uno de 90+"
        ]
      },
      {
        "t": "Uniformidad, Taza Limpia y Dulzor",
        "b": "Los pilares estructurales del café de especialidad.",
        "content": "Al evaluar un café, no preparas solo una taza. Preparas **cinco tazas idénticas** del mismo café. Esto prueba la consistencia.\\n\\n- **Uniformidad**: ¿Las cinco tazas saben exactamente igual? Si una taza sabe diferente, el café carece de uniformidad.\\n- **Taza Limpia (Clean Cup)**: ¿Hay alguna interferencia de sabores negativos que no son de café (como moho, tierra o medicina)? Una taza limpia es completamente transparente.\\n- **Dulzor**: No dulzor azucarado, sino una plenitud de sabor agradable.\\n\\nSi un café pierde puntos en estas categorías, casi de inmediato es descalificado de ser considerado 'Especialidad'.",
        "points": [
          "La necesidad de preparar 5 tazas por muestra",
          "La uniformidad como prueba de la calidad del procesamiento en la finca",
          "Taza Limpia como el requisito base absoluto para el grado de especialidad"
        ]
      }
    ]
  }
};`);

updateModule(3, () => `export default {
  "en": {
    "mod": "Module 3",
    "title": "Identifying Defects",
    "id": "m3",
    "desc": "How things go wrong at the farm, in the roaster, and in the cup.",
    "topics": [
      {
        "t": "Green Defects: Quakers and the Potato Defect",
        "b": "Defects originating from the farm before the coffee is ever roasted.",
        "content": "Many sensory flaws are 'baked in' at the farm level.\\n\\n- **Quakers**: These are unripened, underdeveloped coffee seeds. During roasting, because they lack sugar, they do not undergo caramelization and remain pale. In the cup, they taste aggressively like dry peanuts, paper, or dry wood.\\n- **The Potato Defect**: A famous bacterial defect isolated to coffees from Rwanda and Burundi (caused by the Antestia bug). When you grind the coffee, it smells overwhelmingly like raw, peeled potatoes. It ruins the entire cup.\\n- **Mold/Musty**: If coffee is dried too slowly on the patio or stored in high humidity, mold forms. It tastes exactly like a damp, mildewed basement.",
        "points": [
          "Quakers: Unripe beans that fail to caramelize, tasting of peanuts/paper",
          "Potato Defect: A specific bacterial taint in East African coffees",
          "Musty/Earthy taints resulting from poor drying and high Water Activity (aw)"
        ]
      },
      {
        "t": "Roast Defects: Baked and Scorched",
        "b": "Defects originating from the roaster's mismanagement of heat.",
        "content": "A perfect green coffee can be ruined in 10 minutes by the roaster.\\n\\n- **Baked**: Caused by a stalling Rate of Rise (RoR) late in the roast. The delicate acids and sugars are destroyed without being properly developed. The coffee tastes flat, hollow, like oatmeal or cardboard.\\n- **Scorched / Tipped**: Caused by applying too much conductive heat too early (Charge Temp too high). The outside of the bean is physically burned. The coffee tastes smoky, ashy, and intensely bitter and acrid.\\n- **Underdeveloped**: Dropping the coffee before the core of the bean is cooked. It tastes intensely sour, grassy, and like green peas.",
        "points": [
          "Baked (Flat RoR): Flat, cardboard, oatmeal",
          "Scorched (Too much heat): Ashy, smoky, acrid",
          "Underdeveloped (Not enough development time): Grassy, green peas, aggressive sourness"
        ]
      },
      {
        "t": "Age and Staling",
        "b": "The oxidation of coffee lipids over time.",
        "content": "Roasted coffee is highly unstable. Over time, oxygen attacks the delicate coffee oils (lipids) in a process called oxidation.\\n\\nWhen coffee stales, it loses all of its vibrant origin character (acidity, fruit notes) and is replaced by a flat, woody, rancid flavor. \\n- Pre-ground coffee stales in a matter of minutes because the surface area exposed to oxygen is exponentially increased.\\n- Whole bean coffee is generally considered peak between 7 and 21 days off roast.\\n\\nSpecialty cafes track 'days off roast' obsessively to ensure they never serve oxidized, flat coffee.",
        "points": [
          "Lipid oxidation destroying volatile aromatic compounds",
          "The exponential staling rate of pre-ground coffee",
          "The 'Resting Phase' (days 1-7, letting CO2 escape) vs. 'Peak Phase' (days 7-21)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 3",
    "title": "Identificación de Defectos",
    "id": "m3",
    "desc": "Cómo salen mal las cosas en la finca, en la tostadora y en la taza.",
    "topics": [
      {
        "t": "Defectos en Verde: Quakers y el Defecto de la Papa",
        "b": "Defectos originados en la finca antes de que el café se tueste.",
        "content": "Muchos defectos sensoriales vienen 'de fábrica' desde la finca.\\n\\n- **Quakers**: Son semillas de café inmaduras y subdesarrolladas. Durante el tueste, al carecer de azúcar, no se caramelizan y permanecen pálidas. En la taza, saben agresivamente a cacahuates secos, papel o madera.\\n- **Defecto de la Papa (Potato Defect)**: Un defecto bacteriano famoso aislado a cafés de Ruanda y Burundi (causado por el insecto Antestia). Al moler el café, huele abrumadoramente a papa cruda pelada. Arruina toda la taza.\\n- **Moho/Humedad (Musty)**: Si el café se seca muy lento en el patio o se almacena con alta humedad, se forma moho. Sabe exactamente a un sótano húmedo.",
        "points": [
          "Quakers: Granos inmaduros que no caramelizan, saben a cacahuate/papel",
          "Defecto de la Papa: Una mancha bacteriana específica de África Oriental",
          "Sabores a moho/tierra resultantes de mal secado y alta Actividad de Agua (aw)"
        ]
      },
      {
        "t": "Defectos de Tueste: Horneado y Quemado",
        "b": "Defectos originados por el mal manejo del calor por parte del tostador.",
        "content": "Un café verde perfecto puede ser arruinado en 10 minutos por el tostador.\\n\\n- **Horneado (Baked)**: Causado por una Tasa de Ascenso (RoR) estancada. Los ácidos y azúcares delicados se destruyen sin desarrollarse. El café sabe plano, hueco, como avena o cartón.\\n- **Quemado (Scorched / Tipped)**: Causado por aplicar demasiado calor conductivo muy temprano. El exterior del grano se quema físicamente. El café sabe ahumado, a ceniza, intensamente amargo y acre.\\n- **Subdesarrollado**: Sacar el café antes de que el núcleo se cocine. Sabe intensamente ácido, a hierba y a chícharos verdes.",
        "points": [
          "Baked (RoR Plano): Plano, cartón, avena",
          "Scorched (Demasiado calor): A ceniza, ahumado, acre",
          "Subdesarrollado (Poco tiempo de desarrollo): Hierba, chícharos, acidez agresiva"
        ]
      },
      {
        "t": "Envejecimiento y Oxidación",
        "b": "La oxidación de los lípidos del café con el tiempo.",
        "content": "El café tostado es muy inestable. Con el tiempo, el oxígeno ataca los delicados aceites del café (lípidos) en un proceso llamado oxidación.\\n\\nCuando el café envejece (stale), pierde su carácter de origen vibrante y es reemplazado por un sabor plano, a madera y rancio.\\n- El café pre-molido envejece en cuestión de minutos porque el área expuesta al oxígeno aumenta exponencialmente.\\n- El café en grano generalmente está en su punto máximo entre 7 y 21 días después del tueste.\\n\\nLas cafeterías de especialidad rastrean los 'días desde el tueste' obsesivamente para asegurar que nunca sirvan café oxidado y plano.",
        "points": [
          "Oxidación de lípidos destruyendo compuestos aromáticos volátiles",
          "La tasa exponencial de envejecimiento del café pre-molido",
          "La 'Fase de Reposo' (días 1-7, liberando CO2) vs. 'Fase Pico' (días 7-21)"
        ]
      }
    ]
  }
};`);

updateModule(4, () => `export default {
  "en": {
    "mod": "Module 4",
    "title": "Organic Acids and the Flavor Wheel",
    "id": "m4",
    "desc": "Giving a precise name to what you are tasting in the cup.",
    "topics": [
      {
        "t": "The SCA Flavor Wheel",
        "b": "A standardized lexicon for sensory communication.",
        "content": "The **Coffee Taster's Flavor Wheel**, developed by the SCA and World Coffee Research, is the industry standard for describing coffee flavor.\\n\\nIt is designed to be read from the center outward. You start at the center with general terms (e.g., 'Fruity'), move to the second ring for more specificity ('Citrus Fruit'), and move to the outer ring for an exact descriptor ('Grapefruit').\\n\\nBy using a standardized lexicon, a cupper in Tokyo and a cupper in Bogota can drink the same coffee and objectively agree that it has a 'Blackberry' note, rather than using vague, localized terminology.",
        "points": [
          "Reading the wheel from the center (general) to the outside (specific)",
          "Standardizing the global language of coffee grading",
          "Separating positive attributes (Fruits/Florals) from negative defects (Musty/Papery)"
        ],
        "refs": [
          "Specialty Coffee Association. <i>Coffee Taster's Flavor Wheel</i>."
        ]
      },
      {
        "t": "Identifying Organic Acids",
        "b": "Acidity is not just 'sour'. It has distinct structural identities.",
        "content": "Acidity is the backbone of high-quality coffee. However, not all acids taste the same. Advanced cuppers identify the specific organic acids present in the cup:\\n\\n1. **Citric Acid**: Bright, sharp, and zesty. Found heavily in high-altitude washed coffees (e.g., Kenya). Tastes like lemon or grapefruit.\\n2. **Malic Acid**: Crisp and tart with a clean finish. Tastes like green apples or pears.\\n3. **Tartaric Acid**: Intense, heavy, and wine-like. Tastes like grapes or wine.\\n4. **Acetic Acid**: Produced during fermentation. In low doses, it adds a pleasant winey complexity. In high doses, it is a defect that tastes like vinegar.\\n5. **Phosphoric Acid**: An inorganic acid found heavily in Kenyan soils. It adds a sparkling, cola-like 'fizz' to the tactile sensation.",
        "points": [
          "Citric (Lemon/Zest) and Malic (Green Apple/Crisp)",
          "Tartaric (Grape/Wine) and Acetic (Vinegar/Ferment)",
          "Phosphoric (Cola/Sparkling texture)"
        ]
      },
      {
        "t": "The role of Sweetness in modulating Acidity",
        "b": "Why highly acidic coffees don't necessarily taste sour.",
        "content": "A lemon is highly acidic. A lemonade has the exact same amount of acidity, but it tastes delicious. Why? Because the sugar **modulates** the perception of the acid.\\n\\nIn coffee, the organic acids provide the structure and the fruit notes, but the caramelized sugars (developed during roasting) provide the modulation. If a coffee has high acidity but low sweetness (due to under-roasting or poor farming), it will taste aggressively sour and unbalanced.\\n\\nThe ultimate goal of specialty coffee roasting and brewing is to extract the perfect balance: enough acidity to provide clarity and fruit notes, supported by enough sweetness to make it palatable and harmonious.",
        "points": [
          "Sugar modulating the perception of sourness",
          "Balance as the interplay between organic acids and caramelized sugars",
          "Why 'sour' is a negative descriptor (unbalanced) while 'bright' is positive (balanced)"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 4",
    "title": "Ácidos Orgánicos y la Rueda de Sabores",
    "id": "m4",
    "desc": "Dando un nombre preciso a lo que estás probando en la taza.",
    "topics": [
      {
        "t": "La Rueda de Sabores de la SCA",
        "b": "Un léxico estandarizado para la comunicación sensorial.",
        "content": "La **Rueda de Sabores del Catador de Café**, desarrollada por la SCA y World Coffee Research, es el estándar de la industria para describir el sabor.\\n\\nEstá diseñada para leerse del centro hacia afuera. Comienzas en el centro con términos generales (ej. 'Frutal'), pasas al segundo anillo para mayor especificidad ('Cítricos'), y al anillo exterior para un descriptor exacto ('Toronja').\\n\\nAl usar un léxico estandarizado, un catador en Tokio y uno en Bogotá pueden beber el mismo café y acordar objetivamente que tiene una nota de 'Zarzamora', en lugar de usar terminología vaga y localizada.",
        "points": [
          "Leer la rueda del centro (general) hacia afuera (específico)",
          "Estandarizar el lenguaje global de la calificación del café",
          "Separar atributos positivos (Frutas/Florales) de defectos negativos (Moho/Papel)"
        ],
        "refs": [
          "Specialty Coffee Association. <i>Coffee Taster's Flavor Wheel</i>."
        ]
      },
      {
        "t": "Identificación de Ácidos Orgánicos",
        "b": "La acidez no es solo 'agrio'. Tiene identidades estructurales distintas.",
        "content": "La acidez es la columna vertebral del café de alta calidad. Sin embargo, no todos los ácidos saben igual. Los catadores avanzados identifican los ácidos específicos presentes:\\n\\n1. **Ácido Cítrico**: Brillante y punzante. Muy presente en lavados de gran altura (ej. Kenia). Sabe a limón o toronja.\\n2. **Ácido Málico**: Crujiente y ácido con un final limpio. Sabe a manzana verde o pera.\\n3. **Ácido Tartárico**: Intenso, pesado y vinoso. Sabe a uvas o vino.\\n4. **Ácido Acético**: Producido durante la fermentación. En bajas dosis, añade complejidad vinosa. En altas dosis, es un defecto que sabe a vinagre.\\n5. **Ácido Fosfórico**: Un ácido inorgánico abundante en suelos de Kenia. Añade una 'efervescencia' chispeante similar a la cola a la sensación táctil.",
        "points": [
          "Cítrico (Limón) y Málico (Manzana Verde/Crujiente)",
          "Tartárico (Uva/Vino) y Acético (Vinagre/Fermentado)",
          "Fosfórico (Textura chispeante/Cola)"
        ]
      },
      {
        "t": "El papel del Dulzor en la modulación de la Acidez",
        "b": "Por qué los cafés muy ácidos no necesariamente saben agrios.",
        "content": "Un limón es muy ácido. Una limonada tiene exactamente la misma cantidad de acidez, pero sabe deliciosa. ¿Por qué? Porque el azúcar **modula** la percepción del ácido.\\n\\nEn el café, los ácidos orgánicos proveen la estructura y las notas frutales, pero los azúcares caramelizados (desarrollados al tostar) proveen la modulación. Si un café tiene alta acidez pero bajo dulzor, sabrá agresivamente agrio y desequilibrado.\\n\\nEl objetivo final del café de especialidad es extraer el equilibrio perfecto: suficiente acidez para dar claridad, respaldada por suficiente dulzor para hacerlo armonioso.",
        "points": [
          "El azúcar modulando la percepción de la acidez",
          "El equilibrio como la interacción entre ácidos orgánicos y azúcares caramelizados",
          "Por qué 'agrio' es negativo (desequilibrado) mientras 'brillante' es positivo (equilibrado)"
        ]
      }
    ]
  }
};`);
console.log("Sensory index generated.");
