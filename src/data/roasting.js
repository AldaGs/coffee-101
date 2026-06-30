export const roastingData = [
{
  mod:"Module 1", title:"Foundations: what roasting is", id:"m1",
  desc:"The physical and chemical definition of roasting, and why coffee is an unusually hard material to roast evenly.",
  topics:[
    {t:"Green coffee composition", b:"Polysaccharides, sucrose, chlorogenic acids, lipids, proteins, moisture — the raw material roasting acts on.",
     points:["Cellulose/hemicellulose scaffold vs. soluble sugars and acids","Moisture content (8–12%) and its role as a process variable, not just a quality spec","Lipid content and varietal/processing variation (washed vs. natural vs. honey)","Chlorogenic acid (CGA) family as acidity and astringency precursors"],
     refs:["Schenker, S. (2000). <i>Investigations on the Hot Air Roasting of Coffee Beans</i>. PhD thesis, ETH Zürich.","Farah, A. (2012). 'Coffee constituents.' In <i>Coffee: Emerging Health Effects and Disease Prevention</i>."]},
    {t:"Roasting as a coupled heat/mass transfer + reaction process", b:"Why you can't separate 'temperature' from 'time' from 'chemistry' — they're one coupled system.",
     points:["Bean as a porous, shrinking/expanding reactor","Simultaneous heat conduction inward and moisture/CO2 diffusion outward","Why batch size, airflow, and drum geometry all change the *effective* heat transfer coefficient, not just total heat"],
     refs:["Schwartzberg, H.G. (2002). 'Shrinkage and thermal contraction of coffee beans during roasting.' <i>AIChE Annual Meeting</i>.","Eggers, R. & Pietsch, A. (2001). 'Technology I: Roasting.' In <i>Coffee: Recent Developments</i>."]},
    {t:"Endothermic-to-exothermic transition", b:"The single most load-bearing concept in profile reading: roasting flips from heat-absorbing to heat-releasing partway through.",
     points:["Drying phase is endothermic (driving off free water)","Around 160–180°C bean temp, pyrolysis reactions begin releasing heat","Why ROR (rate of rise) naturally wants to dip then can flatten/rise here if you're not managing energy input","Misreading this transition is the root cause of most flick/crash/baked defects"],
     refs:["Schwartzberg, H.G. (2006). 'Modeling exothermic heat generation during the roasting of coffee.' <i>21st Intl. Conf. on Coffee Science (ASIC)</i>, Montpellier.","Hoos, R. (2015). <i>The Coffee Roaster's Companion</i>. Ch. 'Phases of Roasting.'"]}
  ]
},
{
  mod:"Module 2", title:"Heat transfer mechanics", id:"m2",
  desc:"Conduction, convection, and radiation inside the roasting chamber, and how machine design selects which dominates.",
  topics:[
    {t:"The three heat transfer modes in a roaster", b:"Drum conduction, convective hot air, and radiant heat from the drum/burner — every machine is a different blend.",
     points:["Conduction: bean-to-drum-surface contact, dominant in older/cast-iron drum designs","Convection: hot air moving through the bean mass, dominant in fluid-bed and high-airflow drum roasters","Radiation: typically a minor term except in some fluid-bed designs","Why this matters directly to you: Bullet R1 is convection-forward (fluid-bed-adjacent airflow path with drum); Kaleido M10 is a more conduction-present hybrid drum — different heat transfer balance changes how you'll need to drive charge temp and airflow profile"],
     refs:["Eggers & Pietsch (2001), op. cit.","Wilson, A.J. (2014). 'The roast: chemical changes and process control.' In <i>Specialty Coffee: A Chemical Perspective</i>."]},
    {t:"Bean temperature vs. environment temperature", b:"The most-confused distinction in home/pro roasting — what the probe reads vs. what the bean actually experiences.",
     points:["Bean Temp (BT) probe placement artifacts — it reads a mix of bean mass and air, not 'true' bean core temp","Environment/air temp (ET) as a leading indicator of energy available to transfer","Lag between ET changes and BT response — thermal mass of the system"],
     refs:["Rao, S. (2014). <i>The Coffee Roaster's Companion</i>. Ch. 2–3.","Hoos (2015), op. cit., Ch. on probe calibration."]},
    {t:"Rate of rise (RoR) as a derivative signal", b:"RoR isn't a target, it's the first derivative of BT — and reading it wrong is the #1 novice mistake.",
     points:["Why declining RoR (not flat or rising) through development is the generally accepted target shape","Flick: a late-roast RoR spike, usually from poor airflow/energy timing late in the roast","Crash: a sudden RoR drop, usually from under-driving energy through first crack","Smoothing/averaging artifacts in software (Artisan, Cropster) and why raw vs. smoothed RoR can mislead"],
     refs:["Rao, S. (2020). <i>Coffee Roasting: Best Practices</i>. Entire book is essentially an RoR-shape manual.","Artisan-scope documentation: https://artisan-scope.org"]}
  ]
},
{
  mod:"Module 3", title:"Drying phase", id:"m3",
  desc:"The first and longest phase by convention — removing free moisture without 'baking' the bean.",
  topics:[
    {t:"Physical drying kinetics", b:"How moisture actually leaves the bean, and why drying rate sets up everything downstream.",
     points:["Free water vs. bound water and differing removal mechanisms","Typical drying phase end marker: ~150–160°C bean temp (varies by convention/machine)","Color shift green → yellow as a proxy for substantial moisture loss"],
     refs:["Schenker (2000), op. cit., Ch. 4.","Wang, N. & Lim, L.T. (2014). 'Fourier transform infrared and physicochemical analyses of roasted coffee.' <i>J. Agric. Food Chem.</i>"]},
    {t:"'Baking' as a drying-phase defect", b:"A roast that spends too long at moderate temps in the dry phase produces flat, papery, bready flavors — defining and diagnosing this.",
     points:["Mechanism: extended low-energy exposure degrades aromatics before Maillard can build complexity","Distinguishing baked from underdeveloped (different root causes, similar cupping language)","Charge temperature and turning point as the primary levers"],
     refs:["Hoos (2015), op. cit., Ch. 'Common Defects.'","Giacalone, D. et al. (2019). 'Common roasting defects in coffee.' <i>Food Quality and Preference</i>, 71, 463–474."]},
    {t:"Turning point and charge temperature theory", b:"What turning point actually tells you about charge energy, and how to use it diagnostically rather than ritually.",
     points:["Turning point as a function of charge temp, batch size, and drum thermal mass — not a fixed target","Why chasing a specific TP number across different bean densities/moistures is a category error","Charge temp strategy differences between dense high-altitude vs. lower-density lots"],
     refs:["Rao (2014), op. cit., Ch. 4.","Schenker, S. & Rothgeb, T. (2017). 'The roast — creating the bean's signature.' In <i>The Craft and Science of Coffee</i>, Elsevier, pp. 245–271."]}
  ]
},
{
  mod:"Module 4", title:"Maillard reaction phase", id:"m4",
  desc:"From ~150°C to first crack — the browning chemistry that builds the bulk of body, sweetness precursors, and brown-flavor complexity.",
  topics:[
    {t:"Maillard reaction fundamentals in coffee", b:"Reducing sugars + amino acids/proteins → melanoidins and hundreds of volatile/non-volatile flavor compounds.",
     points:["Why Maillard is temperature- and time-dependent in a non-linear way (Arrhenius-type kinetics)","Melanoidins' contribution to body/mouthfeel, not just color","Distinct from caramelization — overlapping temperature range but different substrates and mechanism"],
     refs:["Nunes, F.M. & Coimbra, M.A. (2010). 'Role of hydroxycinnamates in coffee melanoidin formation.' <i>Phytochemistry Reviews</i>.","Hofmann, T. et al. (2002). 'Studies on the chemical structure of coffee melanoidins.' <i>J. Agric. Food Chem.</i>"]},
    {t:"Modulating body via Maillard duration", b:"Hoos's central practical claim: stretching or compressing time in this zone is your primary body/mouthfeel lever.",
     points:["Longer Maillard window generally → more melanoidins → heavier body","Risk of over-extending: dulled acidity, muted top notes, 'flat' cup","Interaction with bean density — denser beans often want a longer Maillard window to develop fully"],
     refs:["Hoos, R. (2015), op. cit., Ch. 5 — explicit framework for this.","Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — extends this by varietal."]},
    {t:"Organic acid degradation and acidity modulation", b:"Why total roast time/energy through this zone is your acidity dial, separate from the body dial above.",
     points:["Chlorogenic, citric, malic, quinic acid degradation kinetics differ by acid type","Faster roasts through this zone generally preserve more perceived acidity","Trade-off space between acidity preservation and adequate Maillard development — this is the core profiling tension"],
     refs:["Rao, S. (2020), op. cit. — covers acid/body trade-off framework extensively.","Moon, J.K. & Shibamoto, T. (2009). 'Role of roasting conditions in the profile of volatile compounds in coffee.' <i>J. Agric. Food Chem.</i>"]}
  ]
},
{
  mod:"Module 5", title:"First crack and the pressure mechanism", id:"m5",
  desc:"The audible structural failure event — its physical cause and what it signals chemically.",
  topics:[
    {t:"Internal pressure buildup", b:"CO2 generation plus water vapor expansion inside a structurally weakening bean — the mechanics of the crack itself.",
     points:["Pyrolysis byproduct gases (mainly CO2, some volatiles) accumulate faster than they can diffuse out","Cellular structure softens from heat before it fails — crack is structural failure, not combustion","Internal pressure estimates from literature (order of several atmospheres) at crack point"],
     refs:["Schenker, S. et al. (2000). 'Pore structure of coffee beans affected by roasting conditions.' <i>J. Food Science</i>, 65(3), 452–457.","Wilson (2014), op. cit."]},
    {t:"First crack as a chemistry marker, not just a sound", b:"What's happening chemically right around FC, and why 'crack temp' alone is a weak signal without RoR context.",
     points:["Acceleration of Maillard/early pyrolysis reactions near FC","Why FC *temperature* varies meaningfully with charge temp/profile shape — it's an effect, not a fixed control point","Using FC *timing relative to total roast* (not absolute temp) as the more robust reference"],
     refs:["Schwartzberg (2006), op. cit.","Rao (2014), op. cit., Ch. 6."]},
    {t:"Second crack and the pyrolysis-dominant zone", b:"Past first crack into darker development — when this matters for your specialty-focused work and when it doesn't.",
     points:["Mechanistically similar pressure-release event, driven by continued pyrolysis","Rapid flavor compound loss/destruction risk in this zone — generally avoided in specialty/light-medium roasting","Relevance mainly as a boundary marker, not a target zone for Jardín Oculto's medium-roast profile work"],
     refs:["Hoos (2015), op. cit., Ch. 'Development Beyond FC.'"]}
  ]
},
{
  mod:"Module 6", title:"Development phase (post-first-crack)", id:"m6",
  desc:"The most consequential and most argued-over phase: drop temperature, development time ratio, and what they actually control.",
  topics:[
    {t:"Development time ratio (DTR) — origin and limits", b:"The %-of-total-time-after-FC metric — useful heuristic, frequently over-applied.",
     points:["Definition and typical specialty-roasting ranges (commonly cited ~15–25%, highly profile-dependent)","Why DTR alone, without RoR shape and charge/FC temp context, is an incomplete predictor of cup outcome","Critiques: DTR conflates very different RoR shapes that happen to share a duration ratio"],
     refs:["Rao, S. (2020), op. cit. — Rao is explicitly critical of DTR-as-sole-metric while acknowledging its diagnostic use.","Hoos (2015), op. cit."]},
    {t:"Drop temperature and caramelization/pyrolysis balance", b:"Hoos's framing: drop temp is your dial for the caramelization-to-pyrolysis ratio in the cup.",
     points:["Caramelization continues building sweetness/brown-sugar notes through this zone","Excess pyrolysis at higher drop temps → roastiness, bitterness, reduced complexity","Under-development (dropping too early/cool) → vegetal, grassy, underdeveloped acid notes"],
     refs:["Hoos (2015), op. cit., Ch. 6 — primary source for this exact framing."]},
    {t:"Avoiding common development-phase defects", b:"Diagnosing the three classic post-FC failure modes by their RoR and flavor signatures.",
     points:["Underdevelopment: grassy/vegetal, sour-sharp, thin body — usually too-short or too-cool development","Over-roasting: ashy/burnt/flat — usually excess pyrolysis from prolonged high heat post-FC","Tipping/scorching: localized over-heating from excess drum-surface conduction or poor bean circulation, distinct from whole-bean over-roasting"],
     refs:["Giacalone et al. (2019), op. cit.","Yang, N. et al. (2016). 'Determination of volatile marker compounds of common coffee roast defects.' <i>Food Chemistry</i>, 211, 206–214."]}
  ]
},
{
  mod:"Module 7", title:"Roast color, density, and physical change", id:"m7",
  desc:"What's measurably happening to the bean — useful for QC consistency once you're running wholesale volume.",
  topics:[
    {t:"Color development and Agtron/photometric measurement", b:"Color as an imperfect but practical proxy for roast degree.",
     points:["Agtron scale basics and why whole-bean vs. ground readings differ","Color's relationship to (not equivalence with) flavor development — same color can mean different cups depending on path taken","Practical low-cost alternatives for a small operation without an Agtron unit"],
     refs:["Geiger, R. et al. (2005). 'Effect of roasting parameters on coffee colour.' <i>J. Sci. Food Agric.</i>, 85(14)."]},
    {t:"Volume expansion and density loss", b:"Bean physically grows ~50–80%+ in volume while losing 12–20% mass — the structural side of roasting.",
     points:["Cell wall expansion mechanics tied to internal gas pressure (links back to Module 5)","Density loss as a yield/costing variable relevant to your wholesale pricing model","Bulk density consistency as a batch-to-batch QC signal"],
     refs:["Schenker et al. (2000), op. cit.","Bustos-Vanegas, J.D. et al. (2018). 'Modelling biophysical parameters during coffee roasting.' <i>J. Food Eng.</i>"]},
    {t:"Weight loss (roast loss %) as a control variable", b:"Combining moisture loss and pyrolysis gas loss into a single trackable percentage.",
     points:["Typical specialty roast loss ranges by roast level","Using roast loss % as a consistency check across batches of the same bean/profile","Distinguishing roast loss issues caused by green moisture variance vs. profile drift"],
     refs:["Rao (2014), op. cit., Ch. on QC.","Folmer, B., ed. (2017). <i>The Craft and Science of Coffee</i>. Academic Press."]}
  ]
},
{
  mod:"Module 8", title:"Variables that shape every profile", id:"m8",
  desc:"The control surface available on most machines, and what each one actually does mechanistically.",
  topics:[
    {t:"Airflow", b:"Often the most under-used control on hobby/semi-pro machines — and the primary differentiator on convection-forward designs like the Bullet R1.",
     points:["Airflow's role in chaff removal, even heat distribution, and convective heat delivery rate","Why increasing airflow can paradoxically slow BT rise if pulling more ambient air through (cooling effect) vs. when it increases convective transfer from already-hot air","Airflow's role in 'cleaning up' smoky/ashy notes by clearing combustion byproducts from the bean mass"],
     refs:["Eggers & Pietsch (2001), op. cit.","Bullet R1 and Kaleido M10 manufacturer technical documentation (verify current airflow control specs directly with Aillio/Kaleido before purchase decision)."]},
    {t:"Burner/heater energy input and modulation", b:"Gas BTU or electric element power as the primary energy lever, and the lag between input change and BT response.",
     points:["Thermal lag and overshoot risk — why late, large power changes are harder to control than early, small ones","Gas vs. electric heating element response-time differences (relevant directly to your Bullet R1 vs. Kaleido M10 comparison, since they differ in heating approach)","Pre-heat/soak strategy and drum thermal stabilization before charging"],
     refs:["Schenker (2000), op. cit.","Manufacturer specs — verify electric power curves for both candidate machines."]},
    {t:"Batch size and drum loading", b:"Why the same profile on the same machine behaves differently at 200g vs. 1kg loads.",
     points:["Thermal mass ratio of bean charge to drum mass changes effective heat transfer per bean","Under-loading risks scorching (too little mass to buffer drum heat); over-loading risks sluggish, underdeveloped roasts","Scaling implications directly relevant to your production roaster decision — both R1 and M10 have stated batch ranges worth profiling across, not just at nameplate capacity"],
     refs:["Rao (2014), op. cit., Ch. 3.","Hoos (2015), op. cit."]}
  ]
},
{
  mod:"Module 9", title:"Cultivar, processing, and density as roasting inputs", id:"m9",
  desc:"Directly relevant to your Finca Oltehua lots — how green coffee characteristics should change your profile, not just your purchasing.",
  topics:[
    {t:"Density and altitude effects on heat transfer", b:"Why your higher-density, higher-altitude lots need different energy strategy than lower-density lots.",
     points:["Denser beans (often higher-altitude) have lower thermal conductivity and need longer/gentler heat application to develop evenly without scorching exterior","Practical implication for your Marsellesa vs. Sarchimor profiles, which likely differ in density due to varietal and processing"],
     refs:["Hoos, R. (2024). <i>Cultivar: A Practical Guide for Coffee Roasters</i> — primary source for this framework.","Bustos-Vanegas et al. (2018), op. cit."]},
    {t:"Processing method's effect on roast behavior", b:"Washed, natural, honey, and extended/co-fermentation lots roast differently — sugar content and surface chemistry differ going in.",
     points:["Higher residual sugar in naturals/honeys can accelerate Maillard onset and increase scorching risk at high drum-contact heat","Extended fermentation (your 140-hr whole-cherry Marsellesa, mango co-ferment Sarchimor) changes precursor compound profiles before roasting even starts — worth treating as a distinct input variable, not just a flavor descriptor","Practical implication: your two showcase lots from the June 27 pop-up likely warrant meaningfully different charge/Maillard-duration strategies even at the same final roast level"],
     refs:["Hoos (2024), op. cit.","de Melo Pereira, G.V. et al. (2019). 'Effect of co-fermentation on coffee quality.' <i>Food Research International</i>."]},
    {t:"Cultivar-specific flavor potential", b:"Why genetics set an upper bound on what a roast profile can express.",
     points:["Sucrose and CGA content variance across cultivars (e.g., Marsellesa, Sarchimor lineage) as a starting-point predictor","Matching roast strategy to genetically-set flavor ceiling rather than fighting it"],
     refs:["Hoos (2024), op. cit. — entire book is structured around this thesis."]}
  ]
},
{
  mod:"Module 10", title:"Profile design and repeatability", id:"m10",
  desc:"Moving from one good roast to a repeatable, scalable profile — essential before wholesale production.",
  topics:[
    {t:"Designing a target RoR curve before roasting", b:"Working backward from desired cup outcome to a planned curve shape, rather than improvising live.",
     points:["Setting target Maillard duration based on desired body","Setting target development time/drop temp based on desired sweetness/roastiness balance","Building in tolerance bands rather than single-point targets, since green moisture varies batch to batch"],
     refs:["Rao, S. (2020), op. cit. — this is the book's central methodology."]},
    {t:"Batch-to-batch consistency and drift sources", b:"What actually causes a profile to drift on you over weeks of production, separate from operator error.",
     points:["Drum/machine thermal seasoning over a roasting session (back-to-back batches run hotter without compensation)","Ambient temperature/humidity drift across a day or season","Green coffee aging between purchase and roast affecting moisture and density"],
     refs:["Schenker (2000), op. cit.","Folmer (2017), op. cit."]},
    {t:"Logging and software (Artisan, Cropster) as the feedback loop", b:"Why profile logging isn't bookkeeping — it's the only way to actually iterate scientifically rather than by feel.",
     points:["Minimum viable logging setup for a small operation (this is relevant to your R1/M10 decision since logging integration differs between them)","Overlaying roasts to compare RoR shape directly rather than relying on memory","Tagging cup notes to specific profile features to build your own evidence base over time"],
     refs:["Artisan-scope documentation: https://artisan-scope.org","Cropster documentation: https://www.cropster.com"]}
  ]
},
{
  mod:"Module 11", title:"Machine architecture and how it changes theory into practice", id:"m11",
  desc:"Translating the physics above into what specific machine designs actually do — written with your Bullet R1 vs. Kaleido M10 decision in mind.",
  topics:[
    {t:"Fluid-bed / forced-air convection-forward designs (Bullet R1 category)", b:"Lower thermal mass, fast response, convection-dominant heat transfer.",
     points:["Faster ET response to power changes → more responsive but less forgiving control surface","Lower thermal mass means less 'free' heat buffering, so airflow strategy matters more, earlier","Generally favors roasters who want tight, repeatable control via software/electric precision over mechanical feel"],
     refs:["Verify current technical specs directly from Aillio product documentation before finalizing — manufacturer specs change between hardware revisions."]},
    {t:"Drum/hybrid designs with higher thermal mass (Kaleido M10 category)", b:"More conduction-present, generally more thermal buffering, different control philosophy.",
     points:["Higher thermal mass smooths out minor control input noise but responds more slowly to intentional changes","Often more batch-size flexible due to drum buffering, relevant to your demand-validation-before-scaling approach","Different pre-heat/soak discipline required compared to fast-response fluid-bed designs"],
     refs:["Verify current technical specs directly from Kaleido product documentation before finalizing."]},
    {t:"Translating demand validation into machine choice", b:"Connecting this module back to your actual decision: profile repeatability needs vs. batch flexibility vs. capital outlay.",
     points:["Given your wholesale-validation-before-capital-investment framework, the relevant question is which machine's control surface and batch-size range lets you profile *both* the Marsellesa and Sarchimor lots reliably at your current likely batch volumes","Worth running this as an explicit module in its own follow-up conversation once you have current spec sheets in front of you, since I haven't priced-checked current 2026 hardware specs here"]}
  ]
},
{
  mod:"Module 12", title:"Sensory validation: closing the loop", id:"m12",
  desc:"Roasting theory is only useful insofar as it predicts what lands in the cup — cupping as the feedback mechanism.",
  topics:[
    {t:"Cupping protocol as profile feedback", b:"Standardized cupping isn't bureaucracy — it's the control group for your profiling experiments.",
     points:["SCA cupping protocol basics: dry fragrance, wet aroma, break, flavor, body, finish","Calibrating your own palate against a reference flight before trusting single-roast judgments","Connecting specific cup defects (Module 6) back to specific RoR/profile features"],
     refs:["SCA (Specialty Coffee Association). <i>SCA Cupping Protocols</i>. https://sca.coffee","Lingle, T. (2011). <i>The Coffee Cupper's Handbook</i>, 4th ed. SCAA."]},
    {t:"Volatile compound classes and their sensory signatures", b:"The chemistry-to-cup-language bridge — naming what you're tasting in terms of what produced it.",
     points:["Furans/furanones: caramel, sweet notes from Maillard/caramelization","Pyrazines: roasty, nutty, sometimes green-bell-pepper notes depending on type","Phenolics: smoky, medicinal notes, often associated with over-roasting or certain processing defects"],
     refs:["Moon & Shibamoto (2009), op. cit.","Yeretzian, C. et al. (2002). 'Composition of the headspace above roasted coffee.' <i>European Food Research and Technology</i>."]},
    {t:"Building a tasting-to-profile feedback log", b:"Operationalizing everything above into a repeatable personal practice for Jardín Oculto.",
     points:["Standard template: profile parameters logged alongside structured cupping notes per batch","Pattern-matching across batches over time rather than single-roast conclusions","Using this log as the actual evidence base when pitching wholesale clients on consistency"]}
  ]
}
];
