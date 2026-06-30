export default {
  "mod": "Module 8",
  "title": "Variables that shape every profile",
  "id": "m8",
  "desc": "The control surface available on most machines, and what each one actually does mechanistically.",
  "topics": [
    {
      "t": "Airflow",
      "b": "Often the most under-used control on hobby/semi-pro machines — and the primary differentiator on convection-forward designs like the Bullet R1.",
      "content": "Airflow serves three primary purposes in a drum roaster:\n1. **Convective Heat Transfer**: It moves hot air through the tumbling beans, increasing the efficiency of heat transfer.\n2. **Moisture & Chaff Evacuation**: It pulls evaporated steam and detached chaff out of the drum, preventing smoky or \"baked\" flavors.\n3. **Cooling (in excess)**: If you pull too much ambient air through the system, the airflow acts as a cooling mechanism, dropping the Environment Temperature (ET).\n\nOn convection-forward machines, modulating the fan speed is often more effective at steering the RoR curve than modulating the gas/electric burner, because changes in air velocity impact heat transfer almost instantly.",
      "points": [
        "Airflow's role in chaff removal, even heat distribution, and convective heat delivery rate",
        "Why increasing airflow can paradoxically slow BT rise if pulling more ambient air through (cooling effect) vs. when it increases convective transfer from already-hot air",
        "Airflow's role in 'cleaning up' smoky/ashy notes by clearing combustion byproducts from the bean mass"
      ],
      "refs": [
        "Eggers & Pietsch (2001), op. cit.",
        "Bullet R1 and Kaleido M10 manufacturer technical documentation (verify current airflow control specs directly with Aillio/Kaleido before purchase decision)."
      ]
    },
    {
      "t": "Burner/heater energy input and modulation",
      "b": "Gas BTU or electric element power as the primary energy lever, and the lag between input change and BT response.",
      "content": "The burner (gas or electric) provides the gross thermal energy for the system. The most important concept to master here is **Thermal Lag**.\n\nWhen you adjust the burner, the heat must first transfer to the drum metal and the air, and *then* to the beans, and *finally* to the probe reading the bean temp. This can take anywhere from 10 to 45 seconds depending on the mass of your machine.\n\nProactive roasting means making burner adjustments *before* you see the curve change on your software. The classic approach is high initial energy (to build momentum during the endothermic drying phase) followed by a gradual tapering of power as the beans approach First Crack (exothermic phase) to prevent the RoR from flicking.",
      "points": [
        "Thermal lag and overshoot risk — why late, large power changes are harder to control than early, small ones",
        "Gas vs. electric heating element response-time differences (relevant directly to your Bullet R1 vs. Kaleido M10 comparison, since they differ in heating approach)",
        "Pre-heat/soak strategy and drum thermal stabilization before charging"
      ],
      "refs": [
        "Schenker (2000), op. cit.",
        "Manufacturer specs — verify electric power curves for both candidate machines."
      ]
    },
    {
      "t": "Batch size and drum loading",
      "b": "Why the same profile on the same machine behaves differently at 200g vs. 1kg loads.",
      "content": "Your batch size dramatically alters the thermodynamic environment of the drum. \n\nEvery roaster has a \"sweet spot\"—usually around 60-80% of its stated maximum capacity. \n- **Under-loading**: A 200g batch in a 1kg roaster means there is too little bean mass to buffer the heat of the heavy drum. The beans will roast too fast by conduction, risking scorching and tipping on the flat surfaces of the bean.\n- **Over-loading**: A 1.2kg batch in a 1kg roaster means there is too much thermal mass. The burner cannot supply enough momentum, resulting in a sluggish, baked roast with poor development.\n\nWhen you change batch size, you must completely recalibrate your Charge Temperature and burner settings to achieve the same RoR curve.",
      "points": [
        "Thermal mass ratio of bean charge to drum mass changes effective heat transfer per bean",
        "Under-loading risks scorching (too little mass to buffer drum heat); over-loading risks sluggish, underdeveloped roasts",
        "Scaling implications directly relevant to your production roaster decision — both R1 and M10 have stated batch ranges worth profiling across, not just at nameplate capacity"
      ],
      "refs": [
        "Rao (2014), op. cit., Ch. 3.",
        "Hoos (2015), op. cit."
      ]
    }
  ]
};
