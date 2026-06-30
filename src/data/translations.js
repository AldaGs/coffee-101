export const UI_DICT = {
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
    }
  }
};
