export default {
  "mod": "Module 11",
  "title": "Machine architecture and how it changes theory into practice",
  "id": "m11",
  "desc": "Translating the physics above into what specific machine designs actually do — written with your Bullet R1 vs. Kaleido M10 decision in mind.",
  "topics": [
    {
      "t": "Fluid-bed / forced-air convection-forward designs (Bullet R1 category)",
      "b": "Lower thermal mass, fast response, convection-dominant heat transfer.",
      "content": "Aillio's Bullet R1 uses an inductive heating element wrapped around a relatively thin drum, paired with highly responsive airflow.\n\n**Pros**: Because the thermal mass of the drum is low, when you change the power, the ET responds almost immediately. It is highly agile, allowing for surgical precision over the RoR curve. Convection dominates, making it excellent for bright, clean, light-roast specialty profiles.\n**Cons**: It is less forgiving. Without heavy cast iron to buffer heat, a momentary lapse in energy management will immediately cause the RoR to crash or flick.",
      "points": [
        "Faster ET response to power changes → more responsive but less forgiving control surface",
        "Lower thermal mass means less 'free' heat buffering, so airflow strategy matters more, earlier",
        "Generally favors roasters who want tight, repeatable control via software/electric precision over mechanical feel"
      ],
      "refs": [
        "Verify current technical specs directly from Aillio product documentation before finalizing — manufacturer specs change between hardware revisions."
      ]
    },
    {
      "t": "Drum/hybrid designs with higher thermal mass (Kaleido M10 category)",
      "b": "More conduction-present, generally more thermal buffering, different control philosophy.",
      "content": "The Kaleido M10 (and similar traditional heavy-drum architectures) rely on a thick carbon steel or cast-iron drum that acts as a massive thermal battery.\n\n**Pros**: The heavy drum provides immense thermal stability. It radiates and conducts heat steadily, making it harder to accidentally stall a roast. It excels at developing deep, syrupy bodies and handles larger batches with ease.\n**Cons**: The thermal lag is significant. If you realize your RoR is heading toward a flick at First Crack and you cut the power, the drum will continue radiating stored heat for another 30 seconds, meaning your adjustment might be too late. You must drive these machines predictively, not reactively.",
      "points": [
        "Higher thermal mass smooths out minor control input noise but responds more slowly to intentional changes",
        "Often more batch-size flexible due to drum buffering, relevant to your demand-validation-before-scaling approach",
        "Different pre-heat/soak discipline required compared to fast-response fluid-bed designs"
      ],
      "refs": [
        "Verify current technical specs directly from Kaleido product documentation before finalizing."
      ]
    },
    {
      "t": "Translating demand validation into machine choice",
      "b": "Connecting this module back to your actual decision: profile repeatability needs vs. batch flexibility vs. capital outlay.",
      "content": "When scaling up for wholesale, your machine choice dictates your workflow.\n\nIf you are roasting heavily varied, micro-lot coffees (like 100-hour anaerobic honeys) that require vastly different, delicate profiles, the agile control of a convection-forward machine (Bullet R1) is highly advantageous. \n\nIf you are roasting consistent espresso blends or large batches of washed coffees where body, sweetness, and rock-solid batch-to-batch consistency are paramount, the thermal buffering of a heavy drum (Kaleido M10) often makes production roasting less stressful.",
      "points": [
        "Given your wholesale-validation-before-capital-investment framework, the relevant question is which machine's control surface and batch-size range lets you profile *both* the Marsellesa and Sarchimor lots reliably at your current likely batch volumes",
        "Worth running this as an explicit module in its own follow-up conversation once you have current spec sheets in front of you, since I haven't priced-checked current 2026 hardware specs here"
      ]
    }
  ]
};
