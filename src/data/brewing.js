export const brewingData = {
en:[
{ mod:"Module 1", title:"Extraction fundamentals", id:"m1",
  desc:"The chemistry of what actually dissolves into your cup, and the two numbers that define every brew: extraction yield and strength.",
  topics:[
    {t:"What 'extraction' actually means", b:"Coffee is roughly 70% insoluble cellulose and 28-30% potentially soluble material — extraction is how much of that soluble fraction ends up in the cup.",
     points:["Extraction Yield (EY): % of dry coffee mass dissolved into the brew","Total Dissolved Solids (TDS) / strength: concentration of solubles in the finished beverage","The Brewing Control Chart (SCA gold cup): plotting EY against strength to define balanced zones"],
     refs:["Lockhart, E.E. (1957). 'The soluble solids in beverage coffee as an index to cup quality.' MIT/Pan-American Coffee Bureau — origin of the gold cup work.","SCA (Specialty Coffee Association). <i>SCA Brewing Control Chart</i>. https://sca.coffee"]},
    {t:"Selective extraction order", b:"Compounds don't dissolve all at once — acids, sugars, and bitter/structural compounds extract at different rates and times.",
     points:["Early-extracting: acids and some aromatics — under-extraction tastes sharp/sour","Mid-extraction: sugars, balancing sweetness","Late-extracting: bitter phenolics, some lignin-derived compounds — over-extraction tastes harsh/hollow","Why this ordering is the mechanistic reason behind 'sour = under, bitter = over' heuristics"],
     refs:["Moroney, K.M. et al. (2015). 'Modelling of coffee extraction during brewing using multiscale methods.' <i>Chemical Engineering Science</i>, 137.","Cordoba, N. et al. (2020). 'Coffee extraction: A review of parameters and their influence on the physicochemical characteristics of brews.' <i>Food Research International</i>."]},
    {t:"Strength vs. extraction — independent axes", b:"The single most useful mental model in brewing: you can change concentration without changing extraction, and vice versa.",
     points:["Dose and brew ratio control strength independent of extraction","Grind, time, temperature, and agitation control extraction independent of strength","Why two cups with identical TDS can taste completely different (different EY)"],
     refs:["Rao, S. (2010). <i>Everything but Espresso</i>. Ch. 2-3 — the clearest practitioner explanation of this distinction."]}
  ]},
{ mod:"Module 2", title:"Water chemistry", id:"m2",
  desc:"Water is 98%+ of the finished beverage by weight — its mineral content actively participates in extraction, not just dilutes it.",
  topics:[
    {t:"General hardness (GH) and extraction", b:"Calcium and magnesium ions coordinate with coffee solubles and measurably change extraction rate and flavor compound solubility.",
     points:["Mg2+ in particular shown to enhance extraction of certain flavor compounds more than Ca2+","Practical GH targets debated, but near-zero GH water under-extracts and tastes flat/thin","Hendon & Colonna-Dashwood's 2014 ACS paper as the foundational mechanistic study"],
     refs:["Hendon, C.H., Colonna-Dashwood, L., & Colonna-Dashwood, M. (2014). 'The role of dissolved cations in coffee extraction.' <i>J. Agric. Food Chem.</i>, 62(21), 4947-4950.","Colonna-Dashwood, M. & Hendon, C.H. (2015). <i>Water for Coffee</i>."]},
    {t:"Alkalinity / carbonate hardness (KH) and acidity perception", b:"Bicarbonate buffers against the acids extracted from coffee — too much and you mute acidity entirely; too little and brews can taste sharp or unstable.",
     points:["KH's buffering mechanism against carbonic and other extracted acids","Practical trade-off: low-KH water preserves bright acidity but risks instability/sourness; higher KH mutes and rounds","Scaling risk in equipment from high KH, separate from flavor consideration"],
     refs:["Colonna-Dashwood & Hendon (2015), op. cit. — primary source for the GH/KH framework.","Bell, L. et al. (2020). 'Impact of water chemistry on coffee extraction.' <i>J. Food Sci.</i>"]},
    {t:"Building your own brew water", b:"Practical recipe construction using mineral concentrates — directly actionable for a small operation needing consistent water regardless of municipal supply variance.",
     points:["RO/distilled water as a near-zero baseline, then add back minerals to target","Common salts used: Epsom salt (MgSO4) for GH, baking soda (NaHCO3) or potassium bicarbonate for KH","Calculator tools (Aqion, Barista Hustle water calculator) for precise recipe building","Why this matters for you specifically: Puebla municipal water mineral content will differ from wherever your recipes were last dialed in — worth testing baseline TDS/hardness before assuming any published recipe transfers directly"],
     refs:["Barista Hustle. 'DIY Water Recipes.' https://www.baristahustle.com/diy-water-recipes-redux/","Coffee ad Astra. 'Water for Coffee Extraction.' https://coffeeadastra.com/2018/12/16/water-for-coffee-extraction/"]}
  ]},
{ mod:"Module 3", title:"Particle size and grind dynamics", id:"m3",
  desc:"Surface area is the lever that controls extraction rate more than almost any other variable — and grind distribution, not just average size, matters.",
  topics:[
    {t:"Surface area to volume ratio", b:"Finer grind = more surface area exposed to water = faster extraction at a given time — the core physical relationship underlying every grind-size decision.",
     points:["Why halving particle size roughly quadruples surface area (geometric, not linear relationship)","Fick's law of diffusion as the underlying transport mechanism for solubles moving from particle into water","Practical translation: grind change is usually a faster/more predictable lever than time change for adjusting extraction"],
     refs:["Moroney et al. (2015), op. cit.","Cameron, M.I. et al. (2020). 'Systematically improving espresso: insights from mathematical modeling and experiment.' <i>Matter</i>, 3(3) — particle/surface-area framework, though espresso-focused, generalizes to filter."]},
    {t:"Particle size distribution (PSD) and fines", b:"Average grind size is a misleading single number — the spread of particle sizes around that average changes extraction evenness.",
     points:["Bimodal distributions (a cluster of fines plus a cluster of boulders) common with lower-quality grinders","Fines extract much faster than coarse particles at the same nominal 'setting,' creating extraction inconsistency within a single brew","Burr geometry and grinder quality as the main lever for tightening PSD, separate from the dial setting itself"],
     refs:["Cameron et al. (2020), op. cit.","Uman, E. et al. (2016). 'The effect of bean origin and temperature on grinding roasted coffee.' <i>Scientific Reports</i>, 6."]},
    {t:"Channeling and bed uniformity", b:"Even with good PSD, uneven bed packing creates preferential flow paths that locally over-extract while leaving other zones under-extracted.",
     points:["Mechanism: water always finds the path of least resistance through a particle bed","Pour technique (especially in pour-over) as a primary channeling-prevention lever — distribution matters as much as grind","Why this connects directly to your brewer comparisons (V60 vs. Mugen vs. Origami vs. Kalita) — each geometry handles channeling risk differently"],
     refs:["Moroney et al. (2015), op. cit.","Melrose, J. et al. (2021). 'Toward a multiscale model of the brewing process.' <i>AIChE Journal</i>."]}
  ]},
{ mod:"Module 4", title:"Temperature effects", id:"m4",
  desc:"Brew temperature changes both extraction rate and which compounds are preferentially extracted — not a single uniform multiplier.",
  topics:[
    {t:"Temperature and extraction kinetics", b:"Higher temperature speeds diffusion and increases solubility of most compounds — but the relationship isn't linear across the full flavor compound range.",
     points:["Arrhenius-type relationship between temperature and reaction/diffusion rate","Typical specialty brewing range (~90-96°C) and why going meaningfully outside it changes more than just speed","Temperature drop over the course of a brew (especially long pour-overs) as an underappreciated variable"],
     refs:["Cordoba et al. (2020), op. cit.","Sanz-Uribe, J.R. et al. (2017). 'The effect of brewing parameters on coffee quality.' In <i>The Craft and Science of Coffee</i>, Elsevier."]},
    {t:"Temperature's effect on selective extraction", b:"Lower temperatures don't just extract less — they shift which compound classes come out preferentially, with real flavor consequences.",
     points:["Lower brew temps can favor relatively more acid/aromatic extraction relative to bitter compounds","Higher temps risk pulling more bitter/harsh compounds proportionally, especially at longer contact times","Why temperature and grind/time are often adjusted together, not independently, to hit a target flavor profile"],
     refs:["Cordoba et al. (2020), op. cit.","Severini, C. et al. (2017). 'How the artisanal roasting process could influence the sensory quality of espresso coffee.' <i>Foods</i>."]}
  ]},
{ mod:"Module 5", title:"Time and agitation", id:"m5",
  desc:"Contact time and turbulence both modulate extraction — and they interact with grind size rather than acting independently.",
  topics:[
    {t:"Contact time as an extraction lever", b:"Longer time generally means more extraction, but the relationship saturates and the marginal extraction late in a brew is disproportionately bitter/late-extracting compounds.",
     points:["Diminishing returns curve: early contact time extracts efficiently, later time extracts progressively less desirable compounds","Why most balanced filter recipes target a fairly narrow total brew time window for a given grind/dose","Time and grind as substitutable to a point — coarser+longer can approximate finer+shorter, but not perfectly (different PSD-driven extraction evenness)"],
     refs:["Moroney et al. (2015), op. cit.","Rao (2010), op. cit., Ch. 4."]},
    {t:"Agitation and turbulence", b:"Stirring, swirling, or pour technique that disrupts the bed increases local extraction rate by thinning the boundary layer around each particle.",
     points:["Boundary layer theory: a thin, relatively static water layer around each particle slows diffusion until disrupted","Agitation's double-edged nature: improves extraction efficiency but also increases channeling/fines migration risk if excessive","Practical agitation techniques across brewers — stirring in immersion methods, pour height/rate in pour-over"],
     refs:["Melrose et al. (2021), op. cit.","Cameron et al. (2020), op. cit. — boundary layer framework, espresso-context but physically general."]}
  ]},
{ mod:"Module 6", title:"Brew device physics", id:"m6",
  desc:"Geometry, flow rate, and filter material define the 'recipe' a device imposes before you even touch a variable — directly relevant to your V60/Mugen/Origami/Kalita/Aeropress comparisons.",
  topics:[
    {t:"Percolation (drip) vs. immersion vs. hybrid", b:"The three fundamental brew-method categories and the different extraction dynamics each implies.",
     points:["Percolation (V60, Kalita, Origami): water flows through the bed once, contact time set by flow rate and bed resistance","Full immersion (French press, some Clever-style devices): grounds steep in static or near-static water for a set time, then separated","Hybrid (Aeropress, some pour-over techniques with a bloom+steep+drain phase): combines steeping with eventual percolation/pressure-assisted drainage"],
     refs:["Cordoba et al. (2020), op. cit. — comparative review across brew methods.","Rao (2010), op. cit."]},
    {t:"Cone geometry and flow rate (V60 vs. Kalita Wave vs. Origami vs. Mugen)", b:"Cone angle, rib design, and hole size/count determine how fast water can move through the bed independent of grind — this directly explains why the same bean/grind behaves differently across your tested brewers.",
     points:["V60: steep conical angle with spiral ribs, single large hole — fast flow, very pour-technique-dependent extraction evenness","Kalita Wave: flat-bottom with three small holes — slower, more buffered flow that's more forgiving of pour inconsistency, which can explain why it was ruled out for your higher-complexity fermented lots (less responsive to technique-driven extraction shaping)","Origami: similar cone angle to V60 but often paired with a separate (sometimes fabric or different paper) filter, changing flow resistance independent of dripper geometry alone","Mugen: a relatively newer flat-bottom/multi-hole design intended to balance V60 responsiveness with Kalita-style evenness — your finding that it suited the co-fermented Sarchimor better fits a device offering more buffered, even extraction for a chemically complex/fragile lot"],
     refs:["Manufacturer technical documentation (Hario, Kalita, ORIGAMI, MUGEN) — verify current specs directly, as flow geometry details aren't consistently documented in peer-reviewed literature.","Cameron et al. (2020), op. cit. — general flow/geometry modeling framework applicable across drippers."]},
    {t:"Filter material and its extraction effect", b:"Paper, cloth, and metal filters don't just separate grounds from liquid — they selectively retain different compound classes, especially oils and fine sediment.",
     points:["Paper: retains most oils and fine sediment, producing a 'cleaner,' lighter-body cup","Cloth: retains less oil than paper, more body, requires more maintenance","Metal: retains almost no oil or fine sediment, heaviest body, more sediment in cup","Why filter choice interacts with your stated design value of restraint — paper's 'cleaner' profile may suit showcasing delicate fermentation-driven flavors more than oil-heavy cloth/metal would mask them"],
     refs:["Cordoba et al. (2020), op. cit.","Angeloni, G. et al. (2019). 'What kind of coffee do you drink? An investigation on effects of eight different extraction methods.' <i>Food Research International</i>, 116."]}
  ]},
{ mod:"Module 7", title:"Brew ratio and recipe design", id:"m7",
  desc:"Translating the variables above into an actual, repeatable recipe — and how to adjust deliberately rather than by feel.",
  topics:[
    {t:"Brew ratio as the starting design decision", b:"Coffee-to-water ratio sets your strength ceiling before any other variable is touched.",
     points:["Common specialty ratios (roughly 1:15 to 1:17 for filter) and why this range exists empirically","Ratio as independent from extraction percentage — a strong but under-extracted brew and a weak but well-extracted brew are both 'wrong' in different ways","Adjusting ratio as a strength-only lever, holding grind/time roughly constant, when troubleshooting"],
     refs:["SCA Brewing Control Chart, op. cit.","Rao (2010), op. cit., Ch. 5."]},
    {t:"Designing a recipe around a specific lot", b:"Connecting back to your Finca Oltehua work — how lot characteristics (density, processing, roast profile) should inform brew recipe starting points rather than using one default recipe across everything.",
     points:["Extended-fermentation lots (your 140-hr Marsellesa) often carry more soluble sugar/flavor precursor load, which can argue for a slightly shorter contact time or coarser grind to avoid over-extraction muddiness","Co-fermented lots (mango Sarchimor) with added external flavor compounds may benefit from gentler, more even extraction (supporting your Mugen finding) to avoid extracting harshness that masks delicate co-ferment notes","Building a recipe log structured the same way as your roasting profile log, so brew variables and roast variables can eventually be cross-referenced"],
     refs:["Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — extends similarly to brewing decisions by lot characteristic, though primarily roasting-focused."]}
  ]},
{ mod:"Module 8", title:"Bloom and degassing", id:"m8",
  desc:"The first 30-45 seconds of most pour-over methods are governed by CO2 release, not extraction — and getting this stage wrong undermines everything after it.",
  topics:[
    {t:"CO2 and the bloom phase", b:"Freshly roasted coffee retains dissolved CO2 that off-gasses on contact with hot water, physically interfering with even saturation if not managed.",
     points:["Mechanism: CO2 escaping through the grounds creates bubbling/swelling ('bloom') and temporarily resists water penetration","Bloom water amount (typically ~2x dose by weight) and time (30-45s) as practical starting parameters","Degassing rate as a function of roast freshness — very fresh coffee (days post-roast) blooms more vigorously than rested coffee"],
     refs:["Cordoba et al. (2020), op. cit.","Wang, X. et al. (2016). 'Effects of degassing on the SCAA-style cupping of coffee.' <i>J. Food Sci.</i>"]},
    {t:"Resting time and its interaction with extraction", b:"Why a 1-day-old roast and a 14-day-old roast of the same coffee can need different recipes even at identical grind/ratio.",
     points:["CO2 content decreases predictably over days post-roast, affecting both bloom behavior and bed permeability during the main pour","Practical implication for a small-batch operation: standardizing rest time before sale/brewing reduces a hidden recipe variable"],
     refs:["Wang et al. (2016), op. cit."]}
  ]},
{ mod:"Module 9", title:"Sensory validation and troubleshooting", id:"m9",
  desc:"Closing the loop between brew parameters and cup outcome — diagnosing defects back to their mechanistic cause.",
  topics:[
    {t:"Reading common defects back to cause", b:"A diagnostic table connecting symptom to mechanism, useful for fast iteration during recipe development.",
     points:["Sour/sharp, thin body → likely under-extraction: grind finer, extend time, or raise temperature","Bitter, hollow, astringent → likely over-extraction: grind coarser, shorten time, or lower temperature","Muddy/unclear, despite balanced EY → likely channeling or PSD inconsistency rather than a ratio/time problem — check pour technique and grinder quality before adjusting recipe numbers"],
     refs:["SCA Brewing Control Chart, op. cit.","Cordoba et al. (2020), op. cit. — defect-mechanism mapping."]},
    {t:"Building a brew-to-cupping feedback log", b:"Same operational principle as Module 12 of the roasting syllabus — the log is the actual evidence base, not memory.",
     points:["Logging brew ratio, grind setting, time, temperature, and device alongside structured tasting notes","Cross-referencing brew logs against your roast logs once both exist, to separate roast-driven from brew-driven flavor variance","Using this evidence base directly in wholesale client conversations as proof of process rigor, not just product quality"]}
  ]},
{ mod:"Module 10", title:"Scaling brewing for wholesale and bar service", id:"m10",
  desc:"Translating personal recipe-dialing into something that holds up under café-bar volume and staff variance — relevant to your physical coffee bar exploration.",
  topics:[
    {t:"Recipe standardization for multiple staff", b:"A recipe that works for one careful brewer doesn't automatically survive being run by rotating staff under time pressure.",
     points:["Tighter tolerance recipes (favoring devices and techniques more forgiving of small staff variance, e.g. Kalita-style over V60) for service contexts vs. personal dial-in contexts","Visual/weight-based checkpoints (bloom amount, total pour time, final weight) as staff-trainable proxies for the underlying variables","Trade-off between showcase-quality single-brewer recipes and operationally robust bar recipes — worth deciding deliberately rather than defaulting to your personal best result"],
     refs:["Rao (2010), op. cit. — has explicit commercial-service chapters distinct from home-brewing guidance."]},
    {t:"Batch brewing physics", b:"Different from single-cup percolation dynamics — larger bed depth and different flow geometry change the recipe math entirely.",
     points:["Bed depth effects on contact time and channeling risk at scale","Batch brewer flow rate control as the primary lever, analogous to grind/pour-rate in manual brewing","Relevance to a future bar service model where consistent multi-cup batches may matter as much as single-origin showcase pour-overs"],
     refs:["Cordoba et al. (2020), op. cit. — covers batch brewing within its comparative method review."]}
  ]}
],
es:[
{ mod:"Módulo 1", title:"Fundamentos de la extracción", id:"m1",
  desc:"La química de lo que realmente se disuelve en tu taza, y los dos números que definen toda extracción: rendimiento de extracción y fuerza.",
  topics:[
    {t:"Qué significa realmente 'extracción'", b:"El café es aproximadamente 70% celulosa insoluble y 28-30% material potencialmente soluble — la extracción es cuánto de esa fracción soluble termina en la taza.",
     points:["Rendimiento de extracción (EY): % de la masa seca del café disuelta en la bebida","Sólidos disueltos totales (TDS) / fuerza: concentración de solubles en la bebida final","La Brewing Control Chart (gold cup de la SCA): graficar EY contra fuerza para definir zonas balanceadas"],
     refs:["Lockhart, E.E. (1957). 'The soluble solids in beverage coffee as an index to cup quality.' MIT/Pan-American Coffee Bureau — origen del trabajo de gold cup.","SCA (Specialty Coffee Association). <i>SCA Brewing Control Chart</i>. https://sca.coffee"]},
    {t:"Orden de extracción selectiva", b:"Los compuestos no se disuelven todos al mismo tiempo — ácidos, azúcares y compuestos amargos/estructurales se extraen a distintas velocidades y momentos.",
     points:["Extracción temprana: ácidos y algunos aromáticos — la subextracción sabe ácida/punzante","Extracción media: azúcares, que aportan dulzor balanceado","Extracción tardía: fenólicos amargos, algunos compuestos derivados de lignina — la sobreextracción sabe áspera/hueca","Por qué este orden es la razón mecanística detrás de las heurísticas 'ácido = subextraído, amargo = sobreextraído'"],
     refs:["Moroney, K.M. et al. (2015). 'Modelling of coffee extraction during brewing using multiscale methods.' <i>Chemical Engineering Science</i>, 137.","Cordoba, N. et al. (2020). 'Coffee extraction: A review of parameters and their influence on the physicochemical characteristics of brews.' <i>Food Research International</i>."]},
    {t:"Fuerza vs. extracción — ejes independientes", b:"El modelo mental más útil en extracción filtrada: puedes cambiar la concentración sin cambiar la extracción, y viceversa.",
     points:["La dosis y la proporción de extracción controlan la fuerza independientemente de la extracción","La molienda, el tiempo, la temperatura y la agitación controlan la extracción independientemente de la fuerza","Por qué dos tazas con el mismo TDS pueden saber completamente distinto (diferente EY)"],
     refs:["Rao, S. (2010). <i>Everything but Espresso</i>. Cap. 2-3 — la explicación práctica más clara de esta distinción."]}
  ]},
{ mod:"Módulo 2", title:"Química del agua", id:"m2",
  desc:"El agua es más del 98% del peso de la bebida final — su contenido mineral participa activamente en la extracción, no solo la diluye.",
  topics:[
    {t:"Dureza general (GH) y extracción", b:"Los iones de calcio y magnesio se coordinan con los solubles del café y cambian medible la velocidad de extracción y la solubilidad de compuestos de sabor.",
     points:["Se ha mostrado que el Mg2+ en particular potencia la extracción de ciertos compuestos de sabor más que el Ca2+","Los objetivos prácticos de GH se debaten, pero agua con GH casi nulo subextrae y sabe plana/delgada","El artículo fundacional de Hendon y Colonna-Dashwood (2014, ACS) como el estudio mecanístico base"],
     refs:["Hendon, C.H., Colonna-Dashwood, L., & Colonna-Dashwood, M. (2014). 'The role of dissolved cations in coffee extraction.' <i>J. Agric. Food Chem.</i>, 62(21), 4947-4950.","Colonna-Dashwood, M. & Hendon, C.H. (2015). <i>Water for Coffee</i>."]},
    {t:"Alcalinidad / dureza de carbonatos (KH) y percepción de acidez", b:"El bicarbonato amortigua los ácidos extraídos del café — demasiado y silencias por completo la acidez; muy poco y la extracción puede saber punzante o inestable.",
     points:["El mecanismo de amortiguación del KH contra el ácido carbónico y otros ácidos extraídos","Compromiso práctico: agua con KH bajo preserva acidez brillante pero arriesga inestabilidad/acidez excesiva; KH más alto silencia y redondea","Riesgo de sarro en el equipo por KH alto, aparte de la consideración de sabor"],
     refs:["Colonna-Dashwood y Hendon (2015), op. cit. — fuente principal del marco GH/KH.","Bell, L. et al. (2020). 'Impact of water chemistry on coffee extraction.' <i>J. Food Sci.</i>"]},
    {t:"Construir tu propia agua de extracción", b:"Construcción práctica de recetas usando concentrados minerales — directamente aplicable para una operación pequeña que necesita agua consistente sin depender de la variación del suministro municipal.",
     points:["Agua RO/destilada como línea base casi nula, luego agregar minerales hasta el objetivo","Sales comunes: sal de Epsom (MgSO4) para GH, bicarbonato de sodio (NaHCO3) o bicarbonato de potasio para KH","Herramientas calculadoras (Aqion, calculadora de agua de Barista Hustle) para construir recetas con precisión","Por qué esto te importa específicamente: el agua municipal de Puebla tendrá un contenido mineral distinto al de donde se ajustaron tus recetas originalmente — vale la pena medir TDS/dureza base antes de asumir que cualquier receta publicada se transfiere directamente"],
     refs:["Barista Hustle. 'DIY Water Recipes.' https://www.baristahustle.com/diy-water-recipes-redux/","Coffee ad Astra. 'Water for Coffee Extraction.' https://coffeeadastra.com/2018/12/16/water-for-coffee-extraction/"]}
  ]},
{ mod:"Módulo 3", title:"Tamaño de partícula y dinámica de molienda", id:"m3",
  desc:"El área superficial es la palanca que controla la velocidad de extracción más que casi cualquier otra variable — y la distribución de la molienda, no solo el tamaño promedio, importa.",
  topics:[
    {t:"Relación área superficial / volumen", b:"Molienda más fina = más área superficial expuesta al agua = extracción más rápida en un tiempo dado — la relación física central detrás de toda decisión de molienda.",
     points:["Por qué reducir a la mitad el tamaño de partícula aproximadamente cuadruplica el área superficial (relación geométrica, no lineal)","La ley de difusión de Fick como mecanismo de transporte subyacente para que los solubles pasen de la partícula al agua","Traducción práctica: cambiar la molienda suele ser una palanca más rápida y predecible que cambiar el tiempo para ajustar la extracción"],
     refs:["Moroney et al. (2015), op. cit.","Cameron, M.I. et al. (2020). 'Systematically improving espresso: insights from mathematical modeling and experiment.' <i>Matter</i>, 3(3) — marco de partícula/área superficial, aunque enfocado en espresso, generaliza a café filtrado."]},
    {t:"Distribución de tamaño de partícula (PSD) y finos", b:"El tamaño de molienda promedio es un número engañoso por sí solo — la dispersión de tamaños alrededor de ese promedio cambia la uniformidad de la extracción.",
     points:["Distribuciones bimodales (un cúmulo de finos más un cúmulo de partículas grandes) comunes en molinos de menor calidad","Los finos se extraen mucho más rápido que las partículas gruesas en el mismo ajuste nominal, creando inconsistencia de extracción dentro de una misma preparación","La geometría de las muelas y la calidad del molino como la palanca principal para ajustar el PSD, aparte del ajuste del dial en sí"],
     refs:["Cameron et al. (2020), op. cit.","Uman, E. et al. (2016). 'The effect of bean origin and temperature on grinding roasted coffee.' <i>Scientific Reports</i>, 6."]},
    {t:"Canalización y uniformidad del lecho", b:"Aun con buen PSD, un empacado desigual del lecho crea caminos de flujo preferenciales que sobreextraen localmente mientras otras zonas quedan subextraídas.",
     points:["Mecanismo: el agua siempre encuentra el camino de menor resistencia a través de un lecho de partículas","La técnica de vertido (especialmente en pour-over) como palanca principal para prevenir canalización — la distribución importa tanto como la molienda","Por qué esto conecta directamente con tus comparaciones de extractores (V60 vs. Mugen vs. Origami vs. Kalita) — cada geometría maneja el riesgo de canalización de forma distinta"],
     refs:["Moroney et al. (2015), op. cit.","Melrose, J. et al. (2021). 'Toward a multiscale model of the brewing process.' <i>AIChE Journal</i>."]}
  ]},
{ mod:"Módulo 4", title:"Efectos de la temperatura", id:"m4",
  desc:"La temperatura de extracción cambia tanto la velocidad de extracción como qué compuestos se extraen preferencialmente — no es un multiplicador uniforme único.",
  topics:[
    {t:"Temperatura y cinética de extracción", b:"Mayor temperatura acelera la difusión y aumenta la solubilidad de la mayoría de los compuestos — pero la relación no es lineal en todo el rango de compuestos de sabor.",
     points:["Relación de tipo Arrhenius entre temperatura y velocidad de reacción/difusión","Rango típico de extracción especialidad (~90-96°C) y por qué salirse significativamente de él cambia más que solo la velocidad","La caída de temperatura durante la preparación (especialmente en pour-overs largos) como variable poco apreciada"],
     refs:["Cordoba et al. (2020), op. cit.","Sanz-Uribe, J.R. et al. (2017). 'The effect of brewing parameters on coffee quality.' En <i>The Craft and Science of Coffee</i>, Elsevier."]},
    {t:"Efecto de la temperatura en la extracción selectiva", b:"Temperaturas más bajas no solo extraen menos — cambian qué clases de compuestos salen preferencialmente, con consecuencias reales en el sabor.",
     points:["Temperaturas de extracción más bajas pueden favorecer relativamente más extracción de ácidos/aromáticos respecto a compuestos amargos","Temperaturas más altas arriesgan extraer proporcionalmente más compuestos amargos/ásperos, especialmente con tiempos de contacto largos","Por qué la temperatura y la molienda/tiempo suelen ajustarse juntos, no de forma independiente, para lograr un perfil de sabor objetivo"],
     refs:["Cordoba et al. (2020), op. cit.","Severini, C. et al. (2017). 'How the artisanal roasting process could influence the sensory quality of espresso coffee.' <i>Foods</i>."]}
  ]},
{ mod:"Módulo 5", title:"Tiempo y agitación", id:"m5",
  desc:"El tiempo de contacto y la turbulencia modulan ambos la extracción — e interactúan con el tamaño de molienda en lugar de actuar de forma independiente.",
  topics:[
    {t:"Tiempo de contacto como palanca de extracción", b:"Más tiempo generalmente implica más extracción, pero la relación se satura y la extracción marginal tardía en una preparación corresponde desproporcionadamente a compuestos amargos/de extracción tardía.",
     points:["Curva de rendimientos decrecientes: el tiempo de contacto temprano extrae eficientemente, el tiempo tardío extrae progresivamente compuestos menos deseables","Por qué la mayoría de las recetas filtradas balanceadas apuntan a una ventana de tiempo total relativamente estrecha para una molienda/dosis dada","Tiempo y molienda como sustituibles hasta cierto punto — más grueso+más tiempo puede aproximar más fino+menos tiempo, pero no perfectamente (uniformidad de extracción distinta según el PSD)"],
     refs:["Moroney et al. (2015), op. cit.","Rao (2010), op. cit., Cap. 4."]},
    {t:"Agitación y turbulencia", b:"Revolver, remolinear o una técnica de vertido que perturba el lecho aumenta la velocidad de extracción local al adelgazar la capa límite alrededor de cada partícula.",
     points:["Teoría de capa límite: una capa de agua delgada y relativamente estática alrededor de cada partícula ralentiza la difusión hasta que se perturba","Naturaleza de doble filo de la agitación: mejora la eficiencia de extracción pero también aumenta el riesgo de canalización/migración de finos si es excesiva","Técnicas de agitación prácticas según el método — revolver en métodos de inmersión, altura/velocidad de vertido en pour-over"],
     refs:["Melrose et al. (2021), op. cit.","Cameron et al. (2020), op. cit. — marco de capa límite, contexto de espresso pero físicamente general."]}
  ]},
{ mod:"Módulo 6", title:"Física del dispositivo de extracción", id:"m6",
  desc:"La geometría, el flujo y el material del filtro definen la 'receta' que el dispositivo impone antes de que toques cualquier variable — directamente relevante para tus comparaciones V60/Mugen/Origami/Kalita/Aeropress.",
  topics:[
    {t:"Percolación (goteo) vs. inmersión vs. híbrido", b:"Las tres categorías fundamentales de método de extracción y la dinámica de extracción distinta que cada una implica.",
     points:["Percolación (V60, Kalita, Origami): el agua fluye una vez a través del lecho, el tiempo de contacto lo define la velocidad de flujo y la resistencia del lecho","Inmersión total (prensa francesa, algunos dispositivos tipo Clever): los molidos reposan en agua estática o casi estática durante un tiempo fijo, y luego se separan","Híbrido (Aeropress, algunas técnicas de pour-over con fase de bloom+reposo+drenaje): combina reposo con drenaje eventual por percolación/presión"],
     refs:["Cordoba et al. (2020), op. cit. — revisión comparativa entre métodos de extracción.","Rao (2010), op. cit."]},
    {t:"Geometría del cono y velocidad de flujo (V60 vs. Kalita Wave vs. Origami vs. Mugen)", b:"El ángulo del cono, el diseño de las nervaduras y el tamaño/número de orificios determinan qué tan rápido puede moverse el agua a través del lecho independientemente de la molienda — esto explica directamente por qué el mismo grano/molienda se comporta distinto entre tus extractores probados.",
     points:["V60: ángulo cónico pronunciado con nervaduras en espiral, un orificio grande único — flujo rápido, uniformidad de extracción muy dependiente de la técnica de vertido","Kalita Wave: fondo plano con tres orificios pequeños — flujo más lento y amortiguado, más tolerante a inconsistencias de vertido, lo que puede explicar por qué se descartó para tus lotes fermentados de mayor complejidad (menos receptivo al moldeado de extracción guiado por técnica)","Origami: ángulo de cono similar al V60 pero a menudo combinado con un filtro distinto (a veces de tela o papel diferente), cambiando la resistencia al flujo independientemente de la geometría del dripper","Mugen: un diseño relativamente más nuevo de fondo plano/múltiples orificios pensado para balancear la sensibilidad del V60 con la uniformidad estilo Kalita — que haya funcionado mejor para tu Sarchimor co-fermentado encaja con un dispositivo que ofrece extracción más amortiguada y uniforme para un lote químicamente complejo/frágil"],
     refs:["Documentación técnica del fabricante (Hario, Kalita, ORIGAMI, MUGEN) — verifica las especificaciones actuales directamente, ya que los detalles de geometría de flujo no están documentados consistentemente en literatura revisada por pares.","Cameron et al. (2020), op. cit. — marco general de modelado de flujo/geometría aplicable a distintos drippers."]},
    {t:"Material del filtro y su efecto en la extracción", b:"Los filtros de papel, tela y metal no solo separan los molidos del líquido — retienen selectivamente distintas clases de compuestos, especialmente aceites y sedimento fino.",
     points:["Papel: retiene la mayoría de los aceites y sedimento fino, produciendo una taza 'más limpia' y de cuerpo más ligero","Tela: retiene menos aceite que el papel, más cuerpo, requiere más mantenimiento","Metal: retiene casi nada de aceite o sedimento fino, el cuerpo más pesado, más sedimento en la taza","Por qué la elección del filtro interactúa con tu valor de diseño declarado de restricción — el perfil 'más limpio' del papel puede favorecer mostrar sabores delicados derivados de fermentación más de lo que un filtro de tela/metal cargado de aceite los enmascararía"],
     refs:["Cordoba et al. (2020), op. cit.","Angeloni, G. et al. (2019). 'What kind of coffee do you drink? An investigation on effects of eight different extraction methods.' <i>Food Research International</i>, 116."]}
  ]},
{ mod:"Módulo 7", title:"Proporción de extracción y diseño de receta", id:"m7",
  desc:"Traducir las variables anteriores en una receta real y repetible — y cómo ajustar deliberadamente en lugar de a sentimiento.",
  topics:[
    {t:"La proporción de extracción como decisión de diseño inicial", b:"La proporción café-agua define tu techo de fuerza antes de tocar cualquier otra variable.",
     points:["Proporciones especialidad comunes (aproximadamente 1:15 a 1:17 para filtrado) y por qué este rango existe empíricamente","La proporción como independiente del porcentaje de extracción — una preparación fuerte pero subextraída y una débil pero bien extraída están ambas 'mal' de formas distintas","Ajustar la proporción como palanca de fuerza únicamente, manteniendo molienda/tiempo relativamente constantes, al resolver problemas"],
     refs:["SCA Brewing Control Chart, op. cit.","Rao (2010), op. cit., Cap. 5."]},
    {t:"Diseñar una receta alrededor de un lote específico", b:"Conectando con tu trabajo en Finca Oltehua — cómo las características del lote (densidad, procesamiento, perfil de tueste) deberían informar los puntos de partida de la receta en lugar de usar una receta default para todo.",
     points:["Los lotes de fermentación extendida (tu Marsellesa de 140 horas) suelen tener mayor carga de azúcares solubles/precursores de sabor, lo que puede argumentar por un tiempo de contacto algo más corto o una molienda más gruesa para evitar opacidad por sobreextracción","Los lotes co-fermentados (Sarchimor con mango) con compuestos de sabor externos añadidos pueden beneficiarse de una extracción más suave y uniforme (apoyando tu hallazgo con el Mugen) para evitar extraer aspereza que enmascare las notas delicadas del co-fermento","Construir un registro de recetas estructurado igual que tu registro de perfiles de tueste, para que las variables de extracción y tueste puedan eventualmente cruzarse"],
     refs:["Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — extiende de forma similar a decisiones de extracción según características del lote, aunque enfocado principalmente en tueste."]}
  ]},
{ mod:"Módulo 8", title:"Bloom y desgasificación", id:"m8",
  desc:"Los primeros 30-45 segundos de la mayoría de los métodos pour-over están gobernados por la liberación de CO2, no por la extracción — y hacer mal esta fase compromete todo lo que sigue.",
  topics:[
    {t:"CO2 y la fase de bloom", b:"El café recién tostado retiene CO2 disuelto que se libera al contacto con agua caliente, interfiriendo físicamente con una saturación uniforme si no se maneja bien.",
     points:["Mecanismo: el CO2 escapando a través de los molidos crea burbujeo/hinchazón ('bloom') y resiste temporalmente la penetración del agua","Cantidad de agua de bloom (típicamente ~2x la dosis en peso) y tiempo (30-45s) como parámetros prácticos de partida","Velocidad de desgasificación en función de la frescura del tueste — café muy fresco (días después del tueste) hace bloom más vigorosamente que café reposado"],
     refs:["Cordoba et al. (2020), op. cit.","Wang, X. et al. (2016). 'Effects of degassing on the SCAA-style cupping of coffee.' <i>J. Food Sci.</i>"]},
    {t:"Tiempo de reposo y su interacción con la extracción", b:"Por qué un tueste de 1 día y uno de 14 días del mismo café pueden necesitar recetas distintas aun con la misma molienda/proporción.",
     points:["El contenido de CO2 disminuye predeciblemente con los días después del tueste, afectando tanto el comportamiento del bloom como la permeabilidad del lecho durante el vertido principal","Implicación práctica para una operación de lote pequeño: estandarizar el tiempo de reposo antes de la venta/extracción reduce una variable de receta oculta"],
     refs:["Wang et al. (2016), op. cit."]}
  ]},
{ mod:"Módulo 9", title:"Validación sensorial y resolución de problemas", id:"m9",
  desc:"Cerrar el ciclo entre los parámetros de extracción y el resultado en taza — diagnosticar defectos hasta su causa mecanística.",
  topics:[
    {t:"Leer defectos comunes hasta su causa", b:"Una tabla diagnóstica que conecta el síntoma con el mecanismo, útil para iterar rápido durante el desarrollo de recetas.",
     points:["Ácido/punzante, cuerpo delgado → probable subextracción: moler más fino, extender el tiempo, o subir la temperatura","Amargo, hueco, astringente → probable sobreextracción: moler más grueso, acortar el tiempo, o bajar la temperatura","Confuso/poco claro, a pesar de un EY balanceado → probablemente canalización o inconsistencia de PSD más que un problema de proporción/tiempo — revisar técnica de vertido y calidad del molino antes de ajustar los números de la receta"],
     refs:["SCA Brewing Control Chart, op. cit.","Cordoba et al. (2020), op. cit. — mapeo de defecto-mecanismo."]},
    {t:"Construir un registro de extracción a cata", b:"Mismo principio operativo que el Módulo 12 del programa de tueste — el registro es la base de evidencia real, no la memoria.",
     points:["Registrar proporción de extracción, ajuste de molienda, tiempo, temperatura y dispositivo junto con notas de cata estructuradas","Cruzar los registros de extracción contra tus registros de tueste una vez que ambos existan, para separar la varianza de sabor causada por el tueste de la causada por la extracción","Usar esta base de evidencia directamente en conversaciones con clientes mayoristas como prueba de rigor de proceso, no solo de calidad de producto"]}
  ]},
{ mod:"Módulo 10", title:"Escalar la extracción para mayoreo y servicio en barra", id:"m10",
  desc:"Traducir el ajuste personal de recetas en algo que se sostenga bajo el volumen de una barra de café y la variación de personal — relevante para tu exploración de una barra de café física.",
  topics:[
    {t:"Estandarización de receta para múltiples baristas", b:"Una receta que funciona para un barista cuidadoso no necesariamente sobrevive al ser operada por personal rotativo bajo presión de tiempo.",
     points:["Recetas con tolerancias más amplias (favoreciendo dispositivos y técnicas más tolerantes a pequeñas variaciones de personal, p. ej. estilo Kalita sobre V60) para contextos de servicio vs. contextos de ajuste personal","Puntos de control visuales/por peso (cantidad de bloom, tiempo total de vertido, peso final) como proxies entrenables para personal de las variables subyacentes","Compromiso entre recetas de exhibición de calidad de un solo barista y recetas de barra operacionalmente robustas — vale la pena decidirlo deliberadamente en lugar de usar por default tu mejor resultado personal"],
     refs:["Rao (2010), op. cit. — tiene capítulos explícitos de servicio comercial distintos de la guía para extracción casera."]},
    {t:"Física de la extracción por lotes (batch brewing)", b:"Distinta de la dinámica de percolación de una sola taza — mayor profundidad de lecho y geometría de flujo distinta cambian por completo las matemáticas de la receta.",
     points:["Efectos de la profundidad del lecho en el tiempo de contacto y el riesgo de canalización a escala","El control de la velocidad de flujo del batch brewer como palanca principal, análogo a la molienda/velocidad de vertido en extracción manual","Relevancia para un futuro modelo de servicio de barra donde lotes múltiples consistentes pueden importar tanto como los pour-overs de exhibición de origen único"],
     refs:["Cordoba et al. (2020), op. cit. — cubre extracción por lotes dentro de su revisión comparativa de métodos."]}
  ]}
]
};
