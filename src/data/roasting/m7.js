export default {
  "mod": "Module 7",
  "title": "Roast color, density, and physical change",
  "id": "m7",
  "desc": "What's measurably happening to the bean — useful for QC consistency once you're running wholesale volume.",
  "topics": [
    {
      "t": "Color development and Agtron/photometric measurement",
      "b": "Color as an imperfect but practical proxy for roast degree.",
      "content": "Roast color is the most obvious visual indicator of development, but human eyes are highly subjective. Commercial roasteries use **[Spectrophotometers](https://en.wikipedia.org/wiki/Spectrophotometry)** (like the Agtron scale) to measure light reflectance.\n\nAn Agtron meter reads the color of whole beans and the color of ground coffee. A significant gap between the whole bean color (darker) and ground color (lighter) indicates uneven development—the outside roasted faster than the inside. \n\nWhile color is an excellent QC tool for consistency, it is not an absolute flavor predictor. A coffee roasted fast to Agtron 65 will taste radically different than the same coffee roasted slowly to Agtron 65.",
      "points": [
        "Agtron scale basics and why whole-bean vs. ground readings differ",
        "Color's relationship to (not equivalence with) flavor development — same color can mean different cups depending on path taken",
        "Practical low-cost alternatives for a small operation without an Agtron unit"
      ],
      "refs": [
        "Geiger, R. et al. (2005). 'Effect of roasting parameters on coffee colour.' <i>J. Sci. Food Agric.</i>, 85(14)."
      ]
    },
    {
      "t": "Volume expansion and density loss",
      "b": "Bean physically grows ~50–80%+ in volume while losing 12–20% mass — the structural side of roasting.",
      "content": "Roasting physically transforms the bean's structure. As internal steam and CO2 build pressure (triggering First Crack), the cellulose matrix expands. \n\nBy the end of the roast, the bean has grown in volume by 50% to 100%, but it has lost 12% to 20% of its mass (primarily water and gases). This means the **density** of the coffee drops dramatically. \n\nThis has major implications for brewing: less dense (darker roasted) coffee is more porous and extracts much faster than dense, light-roasted coffee. It also impacts wholesale operations, as a 1kg batch of green coffee will only yield ~850g of roasted product.",
      "points": [
        "Cell wall expansion mechanics tied to internal gas pressure (links back to Module 5)",
        "Density loss as a yield/costing variable relevant to your wholesale pricing model",
        "Bulk density consistency as a batch-to-batch QC signal"
      ],
      "refs": [
        "Schenker et al. (2000), op. cit.",
        "Bustos-Vanegas, J.D. et al. (2018). 'Modelling biophysical parameters during coffee roasting.' <i>J. Food Eng.</i>"
      ]
    },
    {
      "t": "Weight loss (roast loss %) as a control variable",
      "b": "Combining moisture loss and pyrolysis gas loss into a single trackable percentage.",
      "content": "Tracking your **Roast Loss %** (Weight In - Weight Out / Weight In) is one of the easiest and most powerful Quality Control metrics available without expensive equipment.\n\nFor light to medium specialty roasts, expect a weight loss between 12.5% and 15%. Dark roasts can lose up to 20%. If you roast the same profile ten times, and batch #8 shows a 14.5% loss instead of the usual 13%, you instantly know something went wrong—likely a drift in green bean moisture or a massive RoR crash during development.",
      "points": [
        "Typical specialty roast loss ranges by roast level",
        "Using roast loss % as a consistency check across batches of the same bean/profile",
        "Distinguishing roast loss issues caused by green moisture variance vs. profile drift"
      ],
      "refs": [
        "Rao (2014), op. cit., Ch. on QC.",
        "Folmer, B., ed. (2017). <i>The Craft and Science of Coffee</i>. Academic Press."
      ]
    }
  ]
};
