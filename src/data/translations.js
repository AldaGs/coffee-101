export const UI_DICT = {
  home: {
    en: {
      title: "Coffee 101",
      sub: "Technical coffee knowledge hubs, saved directly on your device.",
      courses: {
        brewing: { title: 'Brewing 101', desc: 'A deep technical syllabus on filter coffee extraction.' },
        brewing2: { title: 'Intermediate Brewing', desc: 'Water chemistry, SCA brewing control chart, and bypass dynamics.' },
        brewing3: { title: 'Advanced Brewing', desc: 'Fluid dynamics, Darcy\'s Law, and unimodal particle size distribution.' },
        espresso: { title: 'Espresso 101', desc: 'A deep technical syllabus on espresso extraction.' },
        espresso2: { title: 'Intermediate Espresso', desc: 'Puck resistance, pre-infusion, and machine pump mechanics.' },
        espresso3: { title: 'Advanced Espresso', desc: 'Flow vs pressure profiling, and extreme EY extractions.' },
        roasting: { title: 'Roasting 101', desc: 'A deep technical syllabus on heat transfer and chemistry.' },
        roasting2: { title: 'Intermediate Roasting', desc: 'Volatile chemistry, probe calibration, and bean density.' },
        roasting3: { title: 'Advanced Roasting', desc: 'Advanced thermodynamics, organic acid modulation, and blending.' },
        history: { title: 'Coffee History & Origins', desc: 'The global spread of coffee and Mexico\'s rich heritage.' },
        history2: { title: 'Coffee History: Intermediate', desc: 'Coffeehouse society, the great producing regions, processing, and brewing devices through history.' },
        history3: { title: 'Coffee History: Advanced', desc: 'The C-market, the history of roasting, competitions, and the science and institutions of specialty.' },
        agronomy: { title: 'Agronomy 101', desc: 'Cultivars, processing methods, and farm-level variables.' },
        agronomy2: { title: 'Intermediate Agronomy', desc: 'Traditional processing chemistry, nutrition, and shade ecology.' },
        agronomy3: { title: 'Advanced Agronomy', desc: 'Experimental processing, F1 genetics, and climate adaptation.' },
        sensory: { title: 'Sensory 101', desc: 'The physiology of tasting, defect identification, and cupping.' },
        sensory2: { title: 'Intermediate Sensory', desc: 'SCA cupping execution, acid identification, and defect markers.' },
        sensory3: { title: 'Advanced Sensory', desc: 'Triangle testing, blind calibration, and QA panel leadership.' },
        barista: { title: 'Barista 101', desc: 'Hospitality, workflow, and foundational drink execution.' },
        barista2: { title: 'Intermediate Barista', desc: 'Latte art, milk & alternative milks, the espresso menu, and the manual brew bar.' },
        barista3: { title: 'Advanced Barista', desc: 'Machine & grinder mastery, refractometry & profiling, competition, and café leadership.' }
      }
    },
    es: {
      title: "Coffee 101",
      sub: "Centros de conocimiento técnico sobre café, guardados directamente en tu dispositivo.",
      courses: {
        brewing: { title: 'Extracción 101', desc: 'Un programa técnico profundo sobre extracción de café filtrado.' },
        brewing2: { title: 'Extracción Intermedia', desc: 'Química del agua, gráfica SCA de extracción y dinámica de bypass.' },
        brewing3: { title: 'Extracción Avanzada', desc: 'Dinámica de fluidos, Ley de Darcy y distribución unimodal de partículas.' },
        espresso: { title: 'Espresso 101', desc: 'Un programa técnico profundo sobre la extracción de espresso.' },
        espresso2: { title: 'Espresso Intermedio', desc: 'Resistencia de la pastilla, pre-infusión y mecánica de bombas.' },
        espresso3: { title: 'Espresso Avanzado', desc: 'Perfilado de flujo vs presión, y extracciones de EY extremo.' },
        roasting: { title: 'Tueste 101', desc: 'Un programa técnico profundo sobre transferencia de calor y química.' },
        roasting2: { title: 'Tueste Intermedio', desc: 'Química volátil, calibración de sondas y densidad del grano.' },
        roasting3: { title: 'Tueste Avanzado', desc: 'Termodinámica avanzada, modulación de ácidos y mezclas comerciales.' },
        history: { title: 'Historia y Orígenes', desc: 'La expansión global del café y la rica herencia de México.' },
        history2: { title: 'Historia del Café: Intermedio', desc: 'La sociedad de las cafeterías, las grandes regiones productoras, el procesamiento y los métodos de preparación a través de la historia.' },
        history3: { title: 'Historia del Café: Avanzado', desc: 'El mercado C, la historia del tueste, las competencias y la ciencia e instituciones de la especialidad.' },
        agronomy: { title: 'Agronomía 101', desc: 'Variedades, métodos de procesamiento y variables a nivel de finca.' },
        agronomy2: { title: 'Agronomía Intermedia', desc: 'Química de procesamiento tradicional, nutrición y ecología de sombra.' },
        agronomy3: { title: 'Agronomía Avanzada', desc: 'Procesamiento experimental, genética F1 y adaptación climática.' },
        sensory: { title: 'Sensorial 101', desc: 'La fisiología de la catación, identificación de defectos y protocolos.' },
        sensory2: { title: 'Sensorial Intermedio', desc: 'Ejecución de cata SCA, identificación de ácidos y marcadores de defectos.' },
        sensory3: { title: 'Sensorial Avanzado', desc: 'Pruebas de triángulo, calibración a ciegas y liderazgo de panel de QA.' },
        barista: { title: 'Barista 101', desc: 'Hospitalidad, flujo de trabajo y ejecución de bebidas fundamentales.' },
        barista2: { title: 'Barista Intermedio', desc: 'Arte latte, leche y leches alternativas, el menú de espresso y la barra de métodos manuales.' },
        barista3: { title: 'Barista Avanzado', desc: 'Dominio de máquina y molino, refractometría y perfilado, competencia y liderazgo de cafetería.' }
      }
    }
  },
  brewing: {
    en: {
      title: "Brewing theory",
      sub: "A deep technical syllabus on filter coffee extraction — water chemistry, particle dynamics, brew device physics, and recipe design. Built for self-paced study with notes that save automatically.",
      formatnote: "Checkbox state and notes save to this browser via localStorage, keyed per topic. Language toggle (EN/ES) doesn't affect saved progress — it's shared across both.",
      progress: (d, t) => `${d} / ${t} complete`,
      expand: "expand",
      collapse: "collapse",
      covers: "Covers",
      refs: "References",
      notes: "Your notes / questions",
      placeholder: "Jot questions, brew results, or things to test with your V60, Mugen, Origami, Kalita, or Aeropress...",
      footer: "10 modules · sources: Rao (2010, 2014), Hendon & Colonna-Dashwood (2015), Schwartzberg (2002, 2004), SCA brewing standards, peer-reviewed extraction literature. Full citations inline per topic.",
      saved: "Saved"
    },
    es: {
      title: "Teoría de extracción filtrada",
      sub: "Un programa técnico profundo sobre la extracción de café filtrado — química del agua, dinámica de partículas, física de los métodos de extracción y diseño de recetas. Pensado para estudio a tu ritmo, con notas que se guardan automáticamente.",
      formatnote: "El estado de las casillas y las notas se guardan en este navegador mediante localStorage, por tema. El cambio de idioma (EN/ES) no afecta el progreso guardado — es compartido entre ambos.",
      progress: (d, t) => `${d} / ${t} completados`,
      expand: "expandir",
      collapse: "colapsar",
      covers: "Incluye",
      refs: "Referencias",
      notes: "Tus notas / preguntas",
      placeholder: "Anota preguntas, resultados de extracción, o cosas para probar en tu V60, Mugen, Origami, Kalita o Aeropress...",
      footer: "10 módulos · fuentes: Rao (2010, 2014), Hendon y Colonna-Dashwood (2015), Schwartzberg (2002, 2004), estándares de extracción de la SCA, literatura científica revisada por pares. Citas completas en cada tema.",
      saved: "Guardado"
    }
  },
  espresso: {
    en: {
      title: "Espresso theory",
      sub: "A deep technical syllabus on espresso extraction — pump dynamics, puck resistance, pre-infusion, and advanced dial-in heuristics.",
      formatnote: "Checkbox state and notes save to this browser via localStorage. Language toggle (EN/ES) doesn't affect saved progress.",
      progress: (d, t) => `${d} / ${t} complete`,
      expand: "expand",
      collapse: "collapse",
      covers: "Covers",
      refs: "References",
      notes: "Your notes / questions",
      placeholder: "Jot questions, dial-in results, or things to test...",
      footer: "Sources: Rao (2013), Cameron et al. (2020), peer-reviewed literature.",
      saved: "Saved"
    },
    es: {
      title: "Teoría del espresso",
      sub: "Un programa técnico profundo sobre la extracción de espresso — dinámica de bombas, resistencia de la pastilla, pre-infusión y heurísticas avanzadas.",
      formatnote: "El estado de las casillas y notas se guardan en el navegador. El idioma no afecta el progreso.",
      progress: (d, t) => `${d} / ${t} completados`,
      expand: "expandir",
      collapse: "colapsar",
      covers: "Incluye",
      refs: "Referencias",
      notes: "Tus notas / preguntas",
      placeholder: "Anota preguntas, resultados de ajuste, o cosas para probar...",
      footer: "Fuentes: Rao (2013), Cameron et al. (2020), literatura científica.",
      saved: "Guardado"
    }
  },
  roasting: {
    en: {
      title: "Coffee roasting theory",
      sub: "A deep technical syllabus — heat transfer, Maillard and pyrolysis chemistry, profile design, and machine-specific application.",
      formatnote: "Checkbox state and notes save to this browser via localStorage, so progress persists across sessions on this device.",
      progress: (d, t) => `${d} / ${t} complete`,
      expand: "expand",
      collapse: "collapse",
      covers: "Covers",
      refs: "References",
      notes: "Your notes / questions",
      placeholder: "Jot questions, observations from your own roasts, or things to test...",
      footer: "12 modules · sources: Rao (2014, 2020), Hoos (2015, 2024), Schenker (2000, 2017), Schwartzberg (2002, 2006).",
      saved: "Saved"
    },
    es: {
      title: "Teoría del tueste de café",
      sub: "Un programa técnico profundo — transferencia de calor, química de Maillard y pirólisis, diseño de perfiles y aplicación específica por máquina.",
      formatnote: "El estado de las casillas y notas se guardan en el navegador mediante localStorage, así que el progreso persiste entre sesiones.",
      progress: (d, t) => `${d} / ${t} completados`,
      expand: "expandir",
      collapse: "colapsar",
      covers: "Incluye",
      refs: "Referencias",
      notes: "Tus notas / preguntas",
      placeholder: "Anota preguntas, observaciones de tus propios tuestes, o cosas para probar...",
      footer: "12 modules · sources: Rao (2014, 2020), Hoos (2015, 2024), Schenker (2000, 2017), Schwartzberg (2002, 2006).",
      saved: "Guardado"
    }
  },
  roasting2: {
    en: {
      title: "Advanced Roasting",
      sub: "A graduate-level syllabus — volatile compound chemistry, thermocouple science, drum engineering, burner physics, organic acid quantification, green coffee grading, packaging technology, and blending theory.",
      formatnote: "Checkbox state and notes save to this browser via localStorage. Progress persists across sessions on this device.",
      progress: (d, t) => `${d} / ${t} complete`,
      expand: "expand",
      collapse: "collapse",
      covers: "Covers",
      refs: "References",
      notes: "Your notes / questions",
      placeholder: "Jot observations from your own roasts, or things to test on your machine...",
      footer: "8 modules · sources: Flament (2002), Illy & Viani (2005), Schwartzberg (2002, 2006), Farah & Donangelo (2006), Cameron et al. (2020), SCA Green Coffee Standards, NFPA 86.",
      saved: "Saved"
    },
    es: {
      title: "Tueste Avanzado",
      sub: "Un programa de nivel avanzado — química de compuestos volátiles, ciencia de termopares, ingeniería de tambores, física de quemadores, cuantificación de ácidos orgánicos, clasificación de café verde, tecnología de empaque y teoría de mezclas.",
      formatnote: "El estado de las casillas y notas se guardan en el navegador mediante localStorage, el progreso persiste entre sesiones.",
      progress: (d, t) => `${d} / ${t} completados`,
      expand: "expandir",
      collapse: "colapsar",
      covers: "Incluye",
      refs: "Referencias",
      notes: "Tus notas / preguntas",
      placeholder: "Anota observaciones de tus propios tuestes o cosas para probar en tu máquina...",
      footer: "8 módulos · fuentes: Flament (2002), Illy & Viani (2005), Schwartzberg (2002, 2006), Farah & Donangelo (2006), Cameron et al. (2020), Estándares de Café Verde SCA, NFPA 86.",
      saved: "Guardado"
    }
  },
  history: {
    en: {
      title: "Coffee History & Origins",
      sub: "The global spread of coffee, from the Ethiopian highlands to the farms of Mexico.",
      formatnote: "Progress saves locally. Bilingual content.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: Pendergrast (1999), Ukers (1922).", saved: "Saved"
    },
    es: {
      title: "Historia y Orígenes del Café",
      sub: "La expansión global del café, desde las tierras altas de Etiopía hasta las fincas de México.",
      formatnote: "El progreso se guarda localmente. Contenido bilingüe.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Pendergrast (1999), Ukers (1922).", saved: "Guardado"
    }
  },
  agronomy: {
    en: {
      title: "Agronomy & Terroir",
      sub: "The botanical science of the coffee plant, environmental variables, and post-harvest processing.",
      formatnote: "Progress saves locally.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: Wintgens (2004), CQI Agronomy standards.", saved: "Saved"
    },
    es: {
      title: "Agronomía y Terroir",
      sub: "La ciencia botánica de la planta de café, variables ambientales y procesamiento post-cosecha.",
      formatnote: "El progreso se guarda localmente.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Wintgens (2004), estándares de agronomía de CQI.", saved: "Guardado"
    }
  },
  sensory: {
    en: {
      title: "Sensory & SCA Standards",
      sub: "The science of tasting, cupping protocols, defect identification, and the flavor wheel.",
      formatnote: "Progress saves locally.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: SCA Cupping Protocols, CQI Q-Grader syllabus.", saved: "Saved"
    },
    es: {
      title: "Estándares Sensoriales y SCA",
      sub: "La ciencia de la catación, protocolos, identificación de defectos y la rueda de sabores.",
      formatnote: "El progreso se guarda localmente.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Protocolos de Catación SCA, programa Q-Grader de CQI.", saved: "Guardado"
    }
  },
  barista: {
    en: {
      title: "Barista 101",
      sub: "Hospitality, workflow, and foundational drink execution for the professional bar.",
      formatnote: "Progress saves locally.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: SCA Barista Guild standards.", saved: "Saved"
    },
    es: {
      title: "Barista 101",
      sub: "Hospitalidad, flujo de trabajo y ejecución de bebidas fundamentales para la barra profesional.",
      formatnote: "El progreso se guarda localmente.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Estándares del SCA Barista Guild.", saved: "Guardado"
    }
  },
  barista2: {
    en: {
      title: "Intermediate Barista",
      sub: "The craft layer above the basics — latte art, milk and alternative-milk science, the espresso menu, and running a manual brew bar.",
      formatnote: "Progress saves locally. Bilingual content.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: Barista Hustle, SCA Barista Skills, Hoffmann (2018).", saved: "Saved"
    },
    es: {
      title: "Barista Intermedio",
      sub: "La capa de oficio sobre lo básico — arte latte, ciencia de la leche y leches alternativas, el menú de espresso y operar una barra de métodos manuales.",
      formatnote: "El progreso se guarda localmente. Contenido bilingüe.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Barista Hustle, SCA Barista Skills, Hoffmann (2018).", saved: "Guardado"
    }
  },
  barista3: {
    en: {
      title: "Advanced Barista",
      sub: "From operator to technician — machine and grinder mastery, refractometry and pressure profiling, competition, and café leadership and quality systems.",
      formatnote: "Progress saves locally. Bilingual content.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: Barista Hustle, SCA Coffee Skills, Gagné (2020), World Coffee Events.", saved: "Saved"
    },
    es: {
      title: "Barista Avanzado",
      sub: "De operador a técnico — dominio de máquina y molino, refractometría y perfilado de presión, competencia y liderazgo de cafetería y sistemas de calidad.",
      formatnote: "El progreso se guarda localmente. Contenido bilingüe.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Barista Hustle, SCA Coffee Skills, Gagné (2020), World Coffee Events.", saved: "Guardado"
    }
  },
  history2: {
    en: {
      title: "Coffee History: Intermediate",
      sub: "How coffee shaped society and was shaped by geography — coffeehouse culture, the great producing regions, the evolution of processing, and the history of brewing devices.",
      formatnote: "Progress saves locally. Bilingual content.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: Pendergrast (1999), Ukers (1922), Hoffmann (2018), Cowan (2005).", saved: "Saved"
    },
    es: {
      title: "Historia del Café: Intermedio",
      sub: "Cómo el café moldeó la sociedad y fue moldeado por la geografía — la cultura de las cafeterías, las grandes regiones productoras, la evolución del procesamiento y la historia de los métodos de preparación.",
      formatnote: "El progreso se guarda localmente. Contenido bilingüe.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Pendergrast (1999), Ukers (1922), Hoffmann (2018), Cowan (2005).", saved: "Guardado"
    }
  },
  history3: {
    en: {
      title: "Coffee History: Advanced",
      sub: "The economics and institutions of modern coffee — the commodity C-market and its crises, the history of roasting, the competition era, and the science and institutions of specialty.",
      formatnote: "Progress saves locally. Bilingual content.",
      progress: (d, t) => `${d} / ${t} complete`, expand: "expand", collapse: "collapse", covers: "Covers", refs: "References", notes: "Your notes", placeholder: "Jot notes here...", footer: "Sources: Daviron & Ponte (2005), Talbot (2004), Pendergrast (1999), SCA / CQI.", saved: "Saved"
    },
    es: {
      title: "Historia del Café: Avanzado",
      sub: "La economía y las instituciones del café moderno — el mercado commodity 'C' y sus crisis, la historia del tueste, la era de las competencias y la ciencia e instituciones de la especialidad.",
      formatnote: "El progreso se guarda localmente. Contenido bilingüe.",
      progress: (d, t) => `${d} / ${t} completados`, expand: "expandir", collapse: "colapsar", covers: "Incluye", refs: "Referencias", notes: "Tus notas", placeholder: "Anota aquí...", footer: "Fuentes: Daviron & Ponte (2005), Talbot (2004), Pendergrast (1999), SCA / CQI.", saved: "Guardado"
    }
  }
};
