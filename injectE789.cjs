const fs = require('fs');
const path = require('path');

function updateModule(modNum, contentFn) {
  const file = path.join(__dirname, 'src', 'data', 'espresso', `m${modNum}.js`);
  fs.writeFileSync(file, contentFn(), 'utf8');
}

updateModule(7, () => `export default {
  "en": {
    "mod": "Module 7",
    "title": "Dialing in practically",
    "id": "m7",
    "desc": "The step-by-step logic loop for adjusting a recipe without chasing your tail.",
    "topics": [
      {
        "t": "Locking the variables",
        "b": "Never change two variables at once. Lock Dose, aim for a Yield, and adjust Grind.",
        "content": "The most common mistake new baristas make is changing the dose, grind, and yield all at the same time to fix a bad shot. This makes it impossible to know which change actually worked.\\n\\nThe professional dialing-in sequence:\\n1. **Lock Dose**: Pick a dose that fits your basket (e.g., 18g) and never touch it again.\\n2. **Lock Yield**: Pick a target ratio based on the roast (e.g., 1:2 = 36g out).\\n3. **Adjust Grind**: Pull the shot. If it tastes sour and runs fast, grind finer. If it tastes bitter and runs slow, grind coarser.\\n\\nOnly once you hit the limits of what the grinder can do should you consider changing the Yield.",
        "points": [
          "The 'One Variable Rule' of scientific method applied to the bar",
          "Dose as a structural constraint, not a flavor variable",
          "Grind as the primary daily variable to combat aging coffee/humidity changes"
        ],
        "refs": [
          "Rao (2008), op. cit."
        ]
      },
      {
        "t": "The salami shot",
        "b": "A diagnostic exercise to physically taste how extraction changes over time.",
        "content": "To truly understand espresso extraction, you must break a single shot into its chronological parts. This is called a **Salami Shot**.\\n\\nInstead of pulling the shot into one cup, you swap a new cup under the spouts every 5 seconds:\\n- **Cup 1 (0-10s)**: Viscous, intensely sour, overwhelmingly concentrated.\\n- **Cup 2 (10-20s)**: Sweet, balanced, syrupy.\\n- **Cup 3 (20-30s)**: Watery, astringent, harsh, bitter.\\n\\nWhen you mix these cups together, you get a balanced espresso. But by tasting them separately, you learn exactly what 'under-extracted' (Cup 1) and 'over-extracted' (Cup 3) actually mean on your palate.",
        "points": [
          "Chronological stratification of extraction (acids first, sugars mid, bitters late)",
          "Using the Salami Shot as a palate calibration tool for staff",
          "Understanding that a balanced shot is a blend of unbalanced chronological fractions"
        ]
      },
      {
        "t": "Daily calibration and the effect of aging/humidity",
        "b": "Why a recipe that worked perfectly yesterday at 8 AM runs 5 seconds faster today at 2 PM.",
        "content": "Espresso is a living system. Your recipe is never 'finished.'\\n\\nCoffee beans are hygroscopic; they absorb moisture from the air. \\n- If it rains in the afternoon, the beans absorb humidity, becoming softer. They will grind differently and the shots will slow down.\\n- As the coffee ages (days off roast), it loses CO2 and becomes less brittle. The shots will naturally run faster over the course of a week.\\n\\nA professional barista expects the dial to drift. You must taste the espresso every morning and make micro-adjustments to the grinder to bring the physical extraction back in line with the target.",
        "points": [
          "Hygroscopy and ambient humidity's effect on particle shattering during grinding",
          "CO2 loss over time reducing puck resistance (requiring finer grinds as the bag ages)",
          "The necessity of dialing in *every* shift, not just when opening a new bag"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 7",
    "title": "Calibración práctica (Dialing in)",
    "id": "m7",
    "desc": "El ciclo lógico paso a paso para ajustar una receta sin dar vueltas en círculos.",
    "topics": [
      {
        "t": "Fijar las variables",
        "b": "Nunca cambies dos variables a la vez. Fija la Dosis, apunta a un Rendimiento y ajusta la Molienda.",
        "content": "El error más común de los baristas novatos es cambiar dosis, molienda y rendimiento al mismo tiempo para arreglar un mal shot. Esto hace imposible saber qué cambio realmente funcionó.\\n\\nLa secuencia profesional de calibración:\\n1. **Fijar Dosis**: Elige una dosis que quepa en tu canastilla (ej. 18g) y nunca la vuelvas a tocar.\\n2. **Fijar Rendimiento**: Elige un ratio objetivo según el tueste (ej. 1:2 = 36g de salida).\\n3. **Ajustar Molienda**: Extrae el shot. Si sabe ácido y corre rápido, muele más fino. Si sabe amargo y corre lento, muele más grueso.\\n\\nSolo cuando alcances los límites de lo que puede hacer el molino deberías considerar cambiar el Rendimiento.",
        "points": [
          "La 'Regla de una variable' del método científico aplicada a la barra",
          "La dosis como restricción estructural, no como variable de sabor",
          "La molienda como la variable diaria principal para combatir el envejecimiento/humedad"
        ],
        "refs": [
          "Rao (2008), op. cit."
        ]
      },
      {
        "t": "El Salami Shot",
        "b": "Un ejercicio diagnóstico para probar físicamente cómo cambia la extracción con el tiempo.",
        "content": "Para entender realmente la extracción de espresso, debes dividir un solo shot en sus partes cronológicas. Esto se llama un **Salami Shot**.\\n\\nEn lugar de extraer en una sola taza, cambias una taza nueva bajo las salidas cada 5 segundos:\\n- **Taza 1 (0-10s)**: Viscoso, intensamente ácido, abrumadoramente concentrado.\\n- **Taza 2 (10-20s)**: Dulce, equilibrado, almibarado.\\n- **Taza 3 (20-30s)**: Acuoso, astringente, áspero, amargo.\\n\\nCuando mezclas estas tazas, obtienes un espresso equilibrado. Pero al probarlas por separado, aprendes exactamente qué significa en tu paladar 'subextraído' (Taza 1) y 'sobreextraído' (Taza 3).",
        "points": [
          "Estratificación cronológica de la extracción (ácidos primero, azúcares en medio, amargos al final)",
          "Usar el Salami Shot como herramienta de calibración de paladar para el personal",
          "Entender que un shot equilibrado es una mezcla de fracciones cronológicas desequilibradas"
        ]
      },
      {
        "t": "Calibración diaria y el efecto del envejecimiento/humedad",
        "b": "Por qué una receta que funcionaba perfecto ayer a las 8 AM hoy a las 2 PM corre 5 segundos más rápido.",
        "content": "El espresso es un sistema vivo. Tu receta nunca está 'terminada'.\\n\\nLos granos son higroscópicos; absorben humedad del aire.\\n- Si llueve en la tarde, los granos absorben humedad y se ablandan. Se molerán distinto y los shots se ralentizarán.\\n- A medida que el café envejece, pierde CO2 y se vuelve menos quebradizo. Los shots naturalmente correrán más rápido a lo largo de la semana.\\n\\nUn barista profesional espera que la calibración se desvíe. Debes probar el espresso cada mañana y hacer microajustes al molino para alinear la extracción física con el objetivo.",
        "points": [
          "Higroscopia y el efecto de la humedad ambiental en la fractura de partículas",
          "La pérdida de CO2 reduce la resistencia de la pastilla (requiriendo moliendas más finas con los días)",
          "La necesidad de calibrar *cada* turno, no solo al abrir una bolsa nueva"
        ]
      }
    ]
  }
};`);

updateModule(8, () => `export default {
  "en": {
    "mod": "Module 8",
    "title": "Machine maintenance and water chemistry",
    "id": "m8",
    "desc": "A dirty machine destroys perfect coffee, and hard water destroys the machine itself.",
    "topics": [
      {
        "t": "Coffee oils and rancidity",
        "b": "Coffee oil goes rancid quickly under high heat. If you don't backflush, every shot tastes like old grease.",
        "content": "Espresso is an emulsion of coffee oils. When you pull a shot, these oils coat the inside of the portafilter, the basket, and the shower screen.\\n\\nUnder the extreme heat of the group head (93°C), these delicate oils oxidize and turn rancid in a matter of hours. If you pull a perfect shot of Geisha through a dirty portafilter, the coffee will taste intensely bitter, ashy, and metallic.\\n\\n**Backflushing** with specialized detergent (like Cafiza) dissolves these baked-on oils. In a commercial environment, machines must be backflushed every single day. The easiest way to ruin your café's reputation is to neglect this.",
        "points": [
          "The chemical breakdown of coffee lipids under high heat",
          "Why soaking baskets/portafilters in detergent is non-negotiable for cup clarity",
          "The sensory hallmark of dirty equipment: a metallic, lingering ashy bitterness that overrides the bean's flavor"
        ]
      },
      {
        "t": "Water hardness and machine scaling",
        "b": "The water that tastes best for coffee is often the water that destroys boilers. Understanding the compromise.",
        "content": "In the Brewing module, we learned that Calcium and Magnesium (General Hardness) are necessary to extract flavor. However, when water containing high levels of Calcium and Bicarbonate is heated under pressure (inside a steam boiler), it precipitates out as **Limescale (Calcium Carbonate)**.\\n\\nScale acts as an insulator. It coats the heating elements, causing the machine to lose thermal stability. Eventually, it flakes off and clogs the tiny 0.5mm flow restrictors in the group head, completely destroying the machine.\\n\\nCommercial cafes must use specialized Reverse Osmosis (RO) systems with blending valves to create water that has *just enough* minerals to extract coffee well, but *not enough* to scale the boilers catastrophically.",
        "points": [
          "The chemistry of scale precipitation under heat and pressure",
          "Why straight tap water (especially in hard water areas) will kill a commercial espresso machine in months",
          "The operational necessity of proper filtration (BWT, RO systems) before installing any espresso machine"
        ],
        "refs": [
          "Colonna-Dashwood & Hendon (2015), op. cit. — extensively covers the machine-scaling implications of water chemistry."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 8",
    "title": "Mantenimiento de la máquina y química del agua",
    "id": "m8",
    "desc": "Una máquina sucia destruye un café perfecto, y el agua dura destruye la máquina en sí.",
    "topics": [
      {
        "t": "Aceites de café y rancidez",
        "b": "El aceite de café se vuelve rancio rápido bajo calor extremo. Si no haces retrolavado (backflush), cada shot sabrá a grasa vieja.",
        "content": "El espresso es una emulsión de aceites de café. Cuando extraes un shot, estos aceites recubren el interior del portafiltro, la canastilla y la ducha.\\n\\nBajo el calor extremo del grupo (93°C), estos delicados aceites se oxidan y se vuelven rancios en cuestión de horas. Si extraes un shot perfecto de Geisha a través de un portafiltro sucio, el café sabrá intensamente amargo, a ceniza y metálico.\\n\\nEl **Retrolavado (Backflush)** con detergente especializado (como Cafiza) disuelve estos aceites horneados. En un entorno comercial, las máquinas deben lavarse todos los días. La forma más fácil de arruinar la reputación de tu cafetería es descuidar esto.",
        "points": [
          "La descomposición química de los lípidos del café bajo calor extremo",
          "Por qué remojar canastillas/portafiltros en detergente es innegociable para la claridad de la taza",
          "La marca sensorial de equipo sucio: un amargor metálico y persistente a ceniza que opaca el sabor del grano"
        ]
      },
      {
        "t": "Dureza del agua y sarro en la máquina",
        "b": "El agua que sabe mejor para el café a menudo es el agua que destruye las calderas. Entendiendo el compromiso.",
        "content": "En el módulo de extracción manual, aprendimos que el Calcio y el Magnesio son necesarios para extraer sabor. Sin embargo, cuando el agua con altos niveles de Calcio y Bicarbonato se calienta bajo presión (dentro de una caldera), se precipita como **Sarro (Carbonato de Calcio)**.\\n\\nEl sarro actúa como aislante. Recubre las resistencias térmicas, causando pérdida de estabilidad. Eventualmente, se descascara y obstruye los diminutos restrictores de flujo de 0.5mm en el grupo, destruyendo la máquina por completo.\\n\\nLas cafeterías comerciales deben usar sistemas de Ósmosis Inversa (RO) con válvulas de mezcla para crear agua que tenga *solo los minerales suficientes* para extraer bien, pero *no los suficientes* para llenar de sarro las calderas catastróficamente.",
        "points": [
          "La química de la precipitación del sarro bajo calor y presión",
          "Por qué el agua de grifo (especialmente en zonas de agua dura) matará una máquina comercial en meses",
          "La necesidad operativa de una filtración adecuada antes de instalar cualquier máquina de espresso"
        ],
        "refs": [
          "Colonna-Dashwood & Hendon (2015), op. cit. — cubre exhaustivamente las implicaciones del agua para el equipo."
        ]
      }
    ]
  }
};`);

updateModule(9, () => `export default {
  "en": {
    "mod": "Module 9",
    "title": "Bar workflow and commercial scaling",
    "id": "m9",
    "desc": "Taking theoretical espresso physics and translating them into a system that can handle 100 customers an hour.",
    "topics": [
      {
        "t": "Ergonomics and the 'Triangle'",
        "b": "Every step you take behind the bar costs seconds. In a rush, seconds compound into failed shots and angry customers.",
        "content": "Theoretical perfection falls apart if the physical layout of the bar is wrong. \\n\\nThe **Espresso Triangle** (Grinder, Tamp Station, Group Head) should require zero steps to navigate. If a barista has to pivot their entire body or walk to fetch milk, they lose 3 seconds per drink. Over 200 drinks, that is 10 minutes of pure delay.\\n\\nFurthermore, bad ergonomics (tamping at the wrong height, awkwardly angling wrists) leads directly to repetitive strain injuries (RSI). A commercial bar must be designed so that the physical execution of pulling a shot is as frictionless and physically safe as possible.",
        "points": [
          "Workflow optimization as a core pillar of beverage quality (slow bars serve cold drinks)",
          "The 'step-zero' layout philosophy: everything needed for the drink is within arm's reach",
          "Tamping ergonomics and the adoption of automatic tampers (PuqPress) in high-volume settings to prevent RSI"
        ]
      },
      {
        "t": "Menu design based on extraction limits",
        "b": "Why you shouldn't serve a 16oz latte with a light roast single origin espresso.",
        "content": "Your menu must obey the physical limits of your coffee.\\n\\nA light roast Ethiopian espresso is beautiful, but it might only yield 36g of liquid with a delicate, tea-like body. If you put that 36g into 14oz of milk, the coffee flavor will completely vanish.\\n\\n- **Large Milk Drinks (12oz+)**: Require heavy, highly soluble coffees (medium/dark roasts or robusta blends) that can cut through the massive volume of fat and sugar.\\n- **Light Roasts / Co-ferments**: Belong in small milk drinks (Cortados, 4oz flat whites) or served black, where their delicate acidity isn't drowned.\\n\\nDesign your menu around the coffee you roast, rather than forcing a delicate coffee into an inappropriate beverage size.",
        "points": [
          "Solubility limits vs. dilution ratios in milk beverages",
          "Pairing roast profiles to specific menu items (the case for a dedicated milk-blend)",
          "Managing customer expectations when serving specialty (smaller volume) vs. commercial (massive volume) sizes"
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 9",
    "title": "Flujo de trabajo en barra y escalado comercial",
    "id": "m9",
    "desc": "Tomar la física teórica del espresso y traducirla a un sistema que pueda manejar 100 clientes por hora.",
    "topics": [
      {
        "t": "Ergonomía y el 'Triángulo'",
        "b": "Cada paso que das detrás de la barra cuesta segundos. En una hora pico, los segundos se acumulan en shots fallidos y clientes enojados.",
        "content": "La perfección teórica se desmorona si la disposición física de la barra está mal.\\n\\nEl **Triángulo del Espresso** (Molino, Estación de compactado, Grupo de la máquina) debe requerir cero pasos para navegarse. Si un barista tiene que pivotar todo su cuerpo o caminar para buscar leche, pierde 3 segundos por bebida. En 200 bebidas, son 10 minutos de retraso puro.\\n\\nAdemás, la mala ergonomía (compactar a la altura equivocada, doblar las muñecas torpemente) lleva directamente a lesiones por esfuerzo repetitivo (RSI). Una barra comercial debe estar diseñada para que la ejecución física de un shot sea lo más libre de fricción y segura posible.",
        "points": [
          "La optimización del flujo de trabajo como pilar de la calidad de la bebida",
          "La filosofía de diseño de 'cero pasos': todo lo necesario está al alcance de la mano",
          "Ergonomía de compactado y la adopción de tampers automáticos (PuqPress) en entornos de alto volumen para prevenir lesiones"
        ]
      },
      {
        "t": "Diseño de menú basado en límites de extracción",
        "b": "Por qué no deberías servir un latte de 16oz con un espresso de origen único de tueste claro.",
        "content": "Tu menú debe obedecer los límites físicos de tu café.\\n\\nUn espresso etíope de tueste claro es hermoso, pero podría rendir solo 36g de líquido con un cuerpo delicado. Si pones esos 36g en 14oz de leche, el sabor a café desaparecerá por completo.\\n\\n- **Bebidas grandes con leche (12oz+)**: Requieren cafés pesados y altamente solubles (tuestes medios/oscuros o mezclas) que puedan atravesar el volumen masivo de grasa.\\n- **Tuestes claros / Co-fermentos**: Pertenecen a bebidas pequeñas (Cortados, Flat Whites de 4oz) o servidos solos, donde su acidez no se ahoga.\\n\\nDiseña tu menú alrededor del café que tuestas, en lugar de forzar un café delicado en un tamaño de bebida inapropiado.",
        "points": [
          "Límites de solubilidad vs. proporciones de dilución en bebidas con leche",
          "Emparejar perfiles de tueste con bebidas específicas del menú (el argumento para tener un blend dedicado a bebidas con leche)",
          "Manejar las expectativas del cliente al servir tamaños de especialidad (menor volumen) vs. comerciales (volumen masivo)"
        ]
      }
    ]
  }
};`);
console.log("Updated E7, E8, E9");
