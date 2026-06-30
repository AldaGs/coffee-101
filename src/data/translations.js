export const UI_DICT = {
  home: {
    en: {
      title: "Coffee 101",
      sub: "Technical coffee knowledge hubs, saved directly on your device.",
      courses: {
        brewing: { title: 'Brewing Theory', desc: 'A deep technical syllabus on filter coffee extraction.' },
        espresso: { title: 'Espresso Theory', desc: 'A deep technical syllabus on espresso extraction.' },
        roasting: { title: 'Coffee Roasting Theory', desc: 'A deep technical syllabus on heat transfer and chemistry.' },
        history: { title: 'Coffee History & Origins', desc: 'The global spread of coffee and Mexico\'s rich heritage.' },
        agronomy: { title: 'Agronomy & Terroir', desc: 'Cultivars, processing methods, and farm-level variables.' },
        sensory: { title: 'Sensory & SCA Standards', desc: 'The science of tasting, defect identification, and cupping.' },
        barista: { title: 'Barista 101', desc: 'Hospitality, workflow, and foundational drink execution.' }
      }
    },
    es: {
      title: "Coffee 101",
      sub: "Centros de conocimiento técnico sobre café, guardados directamente en tu dispositivo.",
      courses: {
        brewing: { title: 'Teoría de Extracción', desc: 'Un programa técnico profundo sobre extracción de café filtrado.' },
        espresso: { title: 'Teoría del Espresso', desc: 'Un programa técnico profundo sobre la extracción de espresso.' },
        roasting: { title: 'Teoría del Tueste', desc: 'Un programa técnico profundo sobre transferencia de calor y química.' },
        history: { title: 'Historia y Orígenes', desc: 'La expansión global del café y la rica herencia de México.' },
        agronomy: { title: 'Agronomía y Terroir', desc: 'Variedades, métodos de procesamiento y variables a nivel de finca.' },
        sensory: { title: 'Sensorial y Estándares SCA', desc: 'La ciencia de la catación, identificación de defectos y protocolos.' },
        barista: { title: 'Barista 101', desc: 'Hospitalidad, flujo de trabajo y ejecución de bebidas fundamentales.' }
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
  }
};
