export default {
  "en": {
    "mod": "Module 7",
    "title": "Machine architecture",
    "id": "m7",
    "desc": "How pump type, boiler design, and group head engineering translate the physics above into what a barista can actually control.",
    "topics": [
      {
        "t": "Pump types and their control implications",
        "b": "Vibration pumps, rotary pumps, and variable-speed gear pumps offer fundamentally different control resolution.",
        "points": [
          "Vibration pumps: fixed-speed, simplest and most common in entry/mid-tier machines, no native profiling capability",
          "Rotary pumps: smoother, quieter, constant-speed but can be paired with external flow control hardware",
          "Variable-speed gear pumps: the enabling technology for true pressure/flow profiling (Module 5), found in higher-end profiling machines"
        ],
        "refs": [
          "Maxim's Espresso, op. cit. — explicit pump mechanism breakdown.",
          "Manufacturer technical documentation across machine tiers — verify current models directly, as this is a fast-moving hardware category."
        ]
      },
      {
        "t": "Boiler architecture and temperature stability",
        "b": "Single boiler, heat exchanger (HX), and dual boiler designs trade off cost, recovery time, and temperature consistency differently.",
        "points": [
          "Single boiler: simplest, cheapest, but requires temperature surfing or wait time between steaming and brewing",
          "Heat exchanger (HX): one boiler serves both steam and brew water via a heat exchanger coil, common in commercial/prosumer machines, with some temperature stability trade-offs immediately after steam use",
          "Dual boiler: independent boilers for steam and brew, generally the most temperature-stable architecture, at higher cost and energy use"
        ],
        "refs": [
          "Illy & Viani (2005), op. cit. — technical reference covering boiler thermodynamics.",
          "Manufacturer technical documentation — verify specs for any specific machine under consideration."
        ]
      },
      {
        "t": "Group head thermal mass and pre-infusion chamber design",
        "b": "Less commonly discussed but mechanically important — the volume and material between the valve and the puck affects pre-infusion timing and shot-to-shot consistency.",
        "points": [
          "E61-style groups with larger internal chambers ('gicleur' space) take measurably longer to fill before pressure reaches the puck, compared to machines with smaller jets/chambers",
          "This internal volume effectively extends the pre-infusion-like phase even on machines without an explicit pre-infusion feature",
          "Relevant to anyone comparing machines on paper — two machines with identical pump specs can deliver meaningfully different early-shot dynamics due to group geometry alone"
        ],
        "refs": [
          "Home-Barista forum technical discussion. 'Pressure profiling, flow profiling, and a new rule of thirds.' https://www.home-barista.com — practitioner-level but technically detailed breakdown of this specific mechanism."
        ]
      }
    ]
  },
  "es": {
    "mod": "Módulo 7",
    "title": "Arquitectura de la máquina",
    "id": "m7",
    "desc": "Cómo el tipo de bomba, el diseño del boiler y la ingeniería del grupo traducen la física anterior en lo que un barista puede realmente controlar.",
    "topics": [
      {
        "t": "Tipos de bomba y sus implicaciones de control",
        "b": "Las bombas de vibración, rotativas y de engranajes de velocidad variable ofrecen resoluciones de control fundamentalmente distintas.",
        "points": [
          "Bombas de vibración: velocidad fija, las más simples y comunes en máquinas de gama básica/media, sin capacidad nativa de perfilado",
          "Bombas rotativas: más suaves, más silenciosas, velocidad constante pero pueden combinarse con hardware externo de control de flujo",
          "Bombas de engranajes de velocidad variable: la tecnología habilitadora para perfilado de presión/flujo verdadero (Módulo 5), presente en máquinas de perfilado de gama alta"
        ],
        "refs": [
          "Maxim's Espresso, op. cit. — desglose explícito del mecanismo de las bombas.",
          "Documentación técnica del fabricante en distintos niveles de máquina — verifica los modelos actuales directamente, ya que esta es una categoría de hardware en evolución rápida."
        ]
      },
      {
        "t": "Arquitectura del boiler y estabilidad de temperatura",
        "b": "Los diseños de boiler único, intercambiador de calor (HX) y doble boiler intercambian costo, tiempo de recuperación y consistencia de temperatura de forma distinta.",
        "points": [
          "Boiler único: el más simple y económico, pero requiere 'surfear' la temperatura o tiempo de espera entre vaporizar y extraer",
          "Intercambiador de calor (HX): un boiler sirve tanto al vapor como al agua de extracción mediante una bobina intercambiadora, común en máquinas comerciales/prosumer, con cierto compromiso de estabilidad de temperatura inmediatamente después de usar el vapor",
          "Doble boiler: boilers independientes para vapor y extracción, generalmente la arquitectura más estable en temperatura, a mayor costo y consumo de energía"
        ],
        "refs": [
          "Illy & Viani (2005), op. cit. — referencia técnica que cubre la termodinámica de boilers.",
          "Documentación técnica del fabricante — verifica las especificaciones de cualquier máquina específica bajo consideración."
        ]
      },
      {
        "t": "Masa térmica del grupo y diseño de la cámara de pre-infusión",
        "b": "Menos discutido comúnmente pero mecánicamente importante — el volumen y material entre la válvula y la pastilla afecta el tiempo de pre-infusión y la consistencia shot a shot.",
        "points": [
          "Los grupos estilo E61 con cámaras internas más grandes (espacio de 'gicleur') tardan medible más tiempo en llenarse antes de que la presión llegue a la pastilla, comparado con máquinas con inyectores/cámaras más pequeñas",
          "Este volumen interno extiende efectivamente la fase tipo pre-infusión incluso en máquinas sin una función explícita de pre-infusión",
          "Relevante para cualquiera que compare máquinas en papel — dos máquinas con especificaciones de bomba idénticas pueden entregar dinámicas de inicio de shot significativamente distintas solo por la geometría del grupo"
        ],
        "refs": [
          "Discusión técnica del foro Home-Barista. 'Pressure profiling, flow profiling, and a new rule of thirds.' https://www.home-barista.com — desglose a nivel práctico pero técnicamente detallado de este mecanismo específico."
        ]
      }
    ]
  }
};
