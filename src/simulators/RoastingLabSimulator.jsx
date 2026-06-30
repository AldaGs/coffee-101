import { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, ReferenceArea,
} from 'recharts';
import { Link } from 'react-router-dom';

const BEANS = [
  {
    id: 'eth-yrg',
    name: 'Ethiopia Yirgacheffe',
    region: 'Yirgacheffe, Ethiopia',
    variety: 'Heirloom',
    process: 'Washed',
    altitude: 1900,
    moisture: 11.5,
    density: 825,
    screen: 16,
    flavor: ['Jasmine', 'Bergamot', 'Lemon', 'Peach'],
    notes: 'Very dense and uniform. High altitude contributes complex sugars. Preserve florals by avoiding excess heat in development.',
    suggestCharge: [215, 225],
    suggestDryGas: 65,
    suggestMaillardGas: 68,
    suggestDevGas: 45,
    suggestFan: 55,
    suggestDrop: 210,
  },
  {
    id: 'col-hld',
    name: 'Colombia Huila',
    region: 'Huila, Colombia',
    variety: 'Castillo',
    process: 'Washed',
    altitude: 1700,
    moisture: 12.0,
    density: 760,
    screen: 17,
    flavor: ['Caramel', 'Red Apple', 'Brown Sugar', 'Malic Acid'],
    notes: 'Higher moisture needs a thorough drying phase. Well-balanced and versatile — responds well to light and medium development.',
    suggestCharge: [200, 210],
    suggestDryGas: 70,
    suggestMaillardGas: 65,
    suggestDevGas: 55,
    suggestFan: 48,
    suggestDrop: 212,
  },
  {
    id: 'gua-ant',
    name: 'Guatemala Antigua',
    region: 'Antigua, Guatemala',
    variety: 'Bourbon',
    process: 'Washed',
    altitude: 1500,
    moisture: 11.0,
    density: 740,
    screen: 15,
    flavor: ['Milk Chocolate', 'Almond', 'Dried Fruit', 'Cane Sugar'],
    notes: 'Medium density, smaller screen size. Roasts relatively fast — watch RoR closely. Great for medium-light to medium development.',
    suggestCharge: [195, 205],
    suggestDryGas: 60,
    suggestMaillardGas: 62,
    suggestDevGas: 52,
    suggestFan: 42,
    suggestDrop: 213,
  },
  {
    id: 'bra-nat',
    name: 'Brazil Yellow Bourbon',
    region: 'Sul de Minas, Brazil',
    variety: 'Yellow Bourbon',
    process: 'Natural',
    altitude: 1050,
    moisture: 12.8,
    density: 675,
    screen: 17,
    flavor: ['Dark Chocolate', 'Hazelnut', 'Dried Cherry', 'Molasses'],
    notes: 'Natural process with high moisture and lower density. Needs an extended drying phase and gentle development — high dev gas risks baking the fruit sweetness.',
    suggestCharge: [188, 200],
    suggestDryGas: 78,
    suggestMaillardGas: 60,
    suggestDevGas: 38,
    suggestFan: 55,
    suggestDrop: 214,
  },
  {
    id: 'ken-aa',
    name: 'Kenya AA Kirinyaga',
    region: 'Kirinyaga, Kenya',
    variety: 'SL28 / SL34',
    process: 'Washed',
    altitude: 1850,
    moisture: 10.5,
    density: 845,
    screen: 18,
    flavor: ['Blackcurrant', 'Grapefruit', 'Tomato', 'Red Wine'],
    notes: 'Extremely dense with large screen size. Requires maximum charge temp and high heat input. Keep development short to preserve bright acidity.',
    suggestCharge: [222, 232],
    suggestDryGas: 75,
    suggestMaillardGas: 75,
    suggestDevGas: 52,
    suggestFan: 60,
    suggestDrop: 208,
  },
  {
    id: 'sum-man',
    name: 'Sumatra Mandheling',
    region: 'North Sumatra, Indonesia',
    variety: 'Typica / Catimor',
    process: 'Wet-Hulled',
    altitude: 1300,
    moisture: 13.5,
    density: 695,
    screen: 16,
    flavor: ['Cedar', 'Dark Cocoa', 'Tobacco', 'Earthiness'],
    notes: 'Wet-hulled with very high moisture. Needs an aggressive and long drying phase to drive off surface water. Develops well at medium-dark.',
    suggestCharge: [200, 212],
    suggestDryGas: 82,
    suggestMaillardGas: 70,
    suggestDevGas: 60,
    suggestFan: 45,
    suggestDrop: 216,
  },
];

function getRecs(bean) {
  const recs = [];
  if (bean.density >= 800) {
    recs.push({ icon: '🌡️', text: `Dense bean (${bean.density} g/L) — charge at ${bean.suggestCharge[0]}–${bean.suggestCharge[1]}°C to penetrate the structure.` });
  } else if (bean.density <= 710) {
    recs.push({ icon: '🌡️', text: `Lower density (${bean.density} g/L) — charge at ${bean.suggestCharge[0]}–${bean.suggestCharge[1]}°C. Over-charging risks scorching.` });
  } else {
    recs.push({ icon: '🌡️', text: `Medium density (${bean.density} g/L) — charge around ${bean.suggestCharge[0]}–${bean.suggestCharge[1]}°C.` });
  }
  if (bean.moisture >= 12.5) {
    recs.push({ icon: '💧', text: `High moisture (${bean.moisture}%) — use higher drying gas (70–85%) and allow extra time before yellow point.` });
  } else if (bean.moisture <= 11.0) {
    recs.push({ icon: '💧', text: `Lower moisture (${bean.moisture}%) — drying phase is quicker; monitor carefully to avoid rushing past 100°C.` });
  } else {
    recs.push({ icon: '💧', text: `Typical moisture (${bean.moisture}%) — standard drying approach with moderate gas (60–70%).` });
  }
  if (bean.process === 'Natural' || bean.process === 'Wet-Hulled') {
    recs.push({ icon: '🍒', text: `${bean.process} process — fruit/earthy compounds are heat-sensitive. Keep development gas low (35–45%) to protect sweetness.` });
  } else {
    recs.push({ icon: '🚿', text: `Washed process — clean cup, higher clarity. Moderate-to-high Maillard gas (60–75%) builds sweetness without muddying.` });
  }
  if (bean.altitude >= 1700) {
    recs.push({ icon: '⛰️', text: `High altitude (${bean.altitude} masl) — complex sugar structures. Allow Maillard phase to develop fully before first crack.` });
  } else {
    recs.push({ icon: '⛰️', text: `Lower altitude (${bean.altitude} masl) — simpler sugars. Don't over-roast; keep development lean.` });
  }
  return recs;
}

function simulate(bean, chargeTemp, drumRPM, dryGas, maillardGas, devGas, fan, dropTemp) {
  const densityF = bean.density / 750;
  const moistureF = bean.moisture / 11.5;
  const drumF = drumRPM / 60;
  const fanCool = fan / 100;

  // Turnover point: higher charge temp → higher TP; higher moisture/density → lower TP
  const tp = Math.max(60, 80 + (chargeTemp - 200) * 0.45 - (moistureF - 1) * 12 - (densityF - 1) * 10);

  const pts = [];
  let bt = chargeTemp;
  let ror = 0;

  for (let t = 0; t <= 18; t += 0.5) {
    if (t === 0) {
      ror = -55;
    } else if (t <= 1.5) {
      bt = bt + (tp - bt) * 0.72;
      ror = (bt - pts[pts.length - 1].BT) / 0.5;
    } else {
      let gasLevel, expectedRoR;

      if (bt < 150) {
        gasLevel = dryGas;
        const gf = (gasLevel / 100) * drumF * (1 - fanCool * 0.015);
        // Drying: moisture absorbs energy, slowing rise
        expectedRoR = Math.max(3, 27 * gf / Math.max(0.8, densityF) / Math.sqrt(Math.max(0.9, moistureF)));
      } else if (bt < 194) {
        gasLevel = maillardGas;
        const gf = (gasLevel / 100) * drumF * (1 - fanCool * 0.012);
        // Maillard: slight exothermic boost from reactions
        const exo = (bt - 150) * 0.035;
        expectedRoR = Math.max(2, 25 * gf / densityF + exo);
      } else {
        gasLevel = devGas;
        const gf = (gasLevel / 100) * drumF;
        expectedRoR = Math.max(1, 20 * gf / densityF);
      }

      ror = ror + (expectedRoR - ror) * 0.35;
      bt = bt + ror * 0.5;
    }

    pts.push({
      t,
      timeStr: `${Math.floor(t)}:${(t % 1) === 0.5 ? '30' : '00'}`,
      BT: Math.round(bt),
      RoR: Math.round(ror * 10) / 10,
    });

    if (t > 5 && bt >= dropTemp) break;
  }

  return pts;
}

function analyzeRoast(pts, dropTemp) {
  const fcPt = pts.find(p => p.t > 5 && p.BT >= 196);
  const lastPt = pts[pts.length - 1];
  const totalMin = lastPt.t;

  let devTime = null;
  let dtr = null;
  let rorAtFc = null;

  if (fcPt) {
    devTime = Math.round((totalMin - fcPt.t) * 60);
    dtr = Math.round(((totalMin - fcPt.t) / totalMin) * 100);
    rorAtFc = fcPt.RoR;
  }

  // Roast level from drop temp
  let level, agtron, weightLoss;
  if (dropTemp < 205) { level = 'Light'; agtron = '75–95'; weightLoss = '12–14'; }
  else if (dropTemp < 212) { level = 'Medium-Light'; agtron = '65–75'; weightLoss = '13–15'; }
  else if (dropTemp < 218) { level = 'Medium'; agtron = '55–65'; weightLoss = '14–16'; }
  else if (dropTemp < 225) { level = 'Medium-Dark'; agtron = '40–55'; weightLoss = '16–18'; }
  else { level = 'Dark'; agtron = '25–40'; weightLoss = '18–22'; }

  // Quality assessment
  let quality = 'good';
  const issues = [];
  const lastRoR = lastPt.RoR;
  const prevRoR = pts.length >= 3 ? pts[pts.length - 3].RoR : lastRoR;

  if (!fcPt) {
    issues.push('No first crack detected — bean may be underdeveloped.');
    quality = 'poor';
  } else {
    if (dtr < 15) { issues.push(`DTR ${dtr}% is low — risk of underdevelopment (astringency, grassy notes).`); quality = 'warn'; }
    if (dtr > 30) { issues.push(`DTR ${dtr}% is high — risk of baked, flat flavor.`); quality = 'warn'; }
    if (rorAtFc > 16) { issues.push(`RoR at FC is ${rorAtFc}°C/min — very high, risk of scorching.`); quality = 'warn'; }
    if (rorAtFc < 4) { issues.push(`RoR at FC is ${rorAtFc}°C/min — very low, risk of baked/flat profile.`); quality = 'warn'; }
    if (lastRoR > prevRoR + 1.5) { issues.push('RoR flick detected at drop — sharp spike can produce roasty, ashy notes.'); quality = 'warn'; }
  }

  if (issues.length === 0) issues.push('Smooth declining RoR through development — ideal profile.');

  return { fcPt, devTime, dtr, rorAtFc, level, agtron, weightLoss, issues, quality, totalMin };
}

const LABELS = {
  en: {
    back: '← Simulators',
    title: 'Roasting Lab',
    sub: 'Analyze a green bean sample and dial in the roaster controls to build the ideal profile.',
    newBean: 'New Bean',
    beanCard: 'Green Bean Analysis',
    recs: 'Roaster Recommendations',
    controls: 'Roaster Controls',
    chargeTemp: 'Charge Temp',
    drumRPM: 'Drum Speed (RPM)',
    dryGas: 'Drying Phase Gas',
    maillardGas: 'Maillard Phase Gas',
    devGas: 'Development Gas',
    fan: 'Fan / Airflow',
    dropTemp: 'Drop Temperature',
    phase_dry: 'Drying',
    phase_m: 'Maillard',
    phase_dev: 'Development',
    result: 'Roast Result',
    fc: 'First Crack',
    devTimeLabel: 'Development Time',
    dtrLabel: 'DTR',
    rorFcLabel: 'RoR at FC',
    totalLabel: 'Total Time',
    levelLabel: 'Roast Level',
    agtronLabel: 'Agtron (est.)',
    lossLabel: 'Weight Loss (est.)',
    flavorLabel: 'Flavor Potential',
    noFc: 'No first crack reached — raise gas or lower drop temp.',
    applyRec: 'Apply recommended settings',
  },
  es: {
    back: '← Simuladores',
    title: 'Laboratorio de Tueste',
    sub: 'Analiza una muestra de grano verde y calibra los controles del tostador para el perfil ideal.',
    newBean: 'Nuevo Grano',
    beanCard: 'Análisis de Grano Verde',
    recs: 'Recomendaciones del Tostador',
    controls: 'Controles del Tostador',
    chargeTemp: 'Temp. de Carga',
    drumRPM: 'Velocidad del Tambor (RPM)',
    dryGas: 'Gas en Fase de Secado',
    maillardGas: 'Gas en Fase Maillard',
    devGas: 'Gas en Desarrollo',
    fan: 'Ventilador / Flujo de Aire',
    dropTemp: 'Temperatura de Descarga',
    phase_dry: 'Secado',
    phase_m: 'Maillard',
    phase_dev: 'Desarrollo',
    result: 'Resultado del Tueste',
    fc: 'Primer Crack',
    devTimeLabel: 'Tiempo de Desarrollo',
    dtrLabel: 'DTR',
    rorFcLabel: 'RoR en 1er Crack',
    totalLabel: 'Tiempo Total',
    levelLabel: 'Nivel de Tueste',
    agtronLabel: 'Agtron (est.)',
    lossLabel: 'Merma de Peso (est.)',
    flavorLabel: 'Potencial de Sabor',
    noFc: 'Sin primer crack — sube el gas o baja la temp. de descarga.',
    applyRec: 'Aplicar configuración recomendada',
  },
};

export default function RoastingLabSimulator({ lang = 'en' }) {
  const L = LABELS[lang] || LABELS.en;

  const [beanIdx, setBeanIdx] = useState(0);
  const bean = BEANS[beanIdx];

  const [chargeTemp, setChargeTemp] = useState(bean.suggestCharge[0]);
  const [drumRPM, setDrumRPM] = useState(60);
  const [dryGas, setDryGas] = useState(bean.suggestDryGas);
  const [maillardGas, setMaillardGas] = useState(bean.suggestMaillardGas);
  const [devGas, setDevGas] = useState(bean.suggestDevGas);
  const [fan, setFan] = useState(bean.suggestFan);
  const [dropTemp, setDropTemp] = useState(bean.suggestDrop);

  function selectBean(idx) {
    const b = BEANS[idx];
    setBeanIdx(idx);
    setChargeTemp(b.suggestCharge[0]);
    setDryGas(b.suggestDryGas);
    setMaillardGas(b.suggestMaillardGas);
    setDevGas(b.suggestDevGas);
    setFan(b.suggestFan);
    setDropTemp(b.suggestDrop);
  }

  function applyRec() {
    setChargeTemp(bean.suggestCharge[0]);
    setDryGas(bean.suggestDryGas);
    setMaillardGas(bean.suggestMaillardGas);
    setDevGas(bean.suggestDevGas);
    setFan(bean.suggestFan);
    setDropTemp(bean.suggestDrop);
  }

  const pts = useMemo(
    () => simulate(bean, chargeTemp, drumRPM, dryGas, maillardGas, devGas, fan, dropTemp),
    [bean, chargeTemp, drumRPM, dryGas, maillardGas, devGas, fan, dropTemp],
  );

  const analysis = useMemo(() => analyzeRoast(pts, dropTemp), [pts, dropTemp]);
  const recs = useMemo(() => getRecs(bean), [bean]);

  const fcTimeStr = analysis.fcPt
    ? `${Math.floor(analysis.fcPt.t)}:${String(Math.round((analysis.fcPt.t % 1) * 60)).padStart(2, '0')}`
    : null;

  const qualityColor = analysis.quality === 'good' ? 'var(--done)' : analysis.quality === 'warn' ? '#e67e22' : '#c0392b';

  const sliderStyle = { width: '100%', accentColor: 'var(--accent)' };

  return (
    <div className="theme-roasting" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '32px 20px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <Link to="/simulators" style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-soft)', textDecoration: 'none' }}>
            {L.back}
          </Link>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 600, margin: '8px 0 4px', color: 'var(--ink)' }}>
            {L.title}
          </h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: 15, margin: 0 }}>{L.sub}</p>
        </div>

        {/* Bean Selector */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {BEANS.map((b, i) => (
            <button
              key={b.id}
              onClick={() => selectBean(i)}
              style={{
                padding: '6px 14px',
                borderRadius: 6,
                border: `1.5px solid ${i === beanIdx ? 'var(--accent)' : 'var(--line)'}`,
                background: i === beanIdx ? 'var(--accent)' : 'var(--paper)',
                color: i === beanIdx ? '#fff' : 'var(--ink-soft)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {b.name.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>

        {/* Bean Analysis Card */}
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 12, padding: 20, marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-text)', marginBottom: 4 }}>
                {L.beanCard}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, color: 'var(--ink)', marginBottom: 2 }}>
                {bean.name}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{bean.region}</div>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, fontWeight: 600, background: 'var(--accent-soft)', color: 'var(--accent-text)', padding: '3px 10px', borderRadius: 5 }}>
                {bean.process}
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, background: 'var(--accent-soft)', color: 'var(--accent-text)', padding: '3px 10px', borderRadius: 5 }}>
                {bean.variety}
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 10, marginBottom: 14 }}>
            {[
              { label: 'Altitude', value: `${bean.altitude} masl` },
              { label: 'Density', value: `${bean.density} g/L` },
              { label: 'Moisture', value: `${bean.moisture}%` },
              { label: 'Screen Size', value: `#${bean.screen}` },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: 'var(--bg)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{value}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{bean.notes}</p>
        </div>

        {/* Recommendations */}
        <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent)', borderRadius: 12, padding: 16, marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-text)', marginBottom: 12 }}>
            {L.recs}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {recs.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.5 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{r.icon}</span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>
          <button
            onClick={applyRec}
            style={{ marginTop: 14, fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 6, border: '1.5px solid var(--accent)', background: 'var(--paper)', color: 'var(--accent-text)', cursor: 'pointer' }}
          >
            {L.applyRec}
          </button>
        </div>

        {/* Controls + Chart grid */}
        <div className="roast-lab-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 300px) 1fr', gap: 20, alignItems: 'start', marginBottom: 20 }}>

          {/* Controls */}
          <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 12, padding: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-text)', marginBottom: 16 }}>
              {L.controls}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: L.chargeTemp, value: `${chargeTemp}°C`, min: 160, max: 240, step: 5, val: chargeTemp, set: setChargeTemp },
                { label: L.drumRPM, value: `${drumRPM} RPM`, min: 40, max: 80, step: 5, val: drumRPM, set: setDrumRPM },
                { label: L.fan, value: `${fan}%`, min: 10, max: 100, step: 5, val: fan, set: setFan },
                { label: L.dropTemp, value: `${dropTemp}°C`, min: 195, max: 235, step: 1, val: dropTemp, set: setDropTemp },
              ].map(({ label, value, min, max, step, val, set }) => (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, fontWeight: 600, marginBottom: 4 }}>
                    <span style={{ color: 'var(--ink)' }}>{label}</span>
                    <span style={{ color: 'var(--accent-text)', fontFamily: 'var(--mono)' }}>{value}</span>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(Number(e.target.value))} style={sliderStyle} />
                </div>
              ))}

              <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '4px 0' }} />

              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-text)' }}>
                Gas by Phase
              </div>

              {[
                { label: `${L.phase_dry} Gas`, value: `${dryGas}%`, min: 10, max: 100, step: 5, val: dryGas, set: setDryGas, dot: '#5B9BD5' },
                { label: `${L.phase_m} Gas`, value: `${maillardGas}%`, min: 10, max: 100, step: 5, val: maillardGas, set: setMaillardGas, dot: '#E6A040' },
                { label: `${L.phase_dev} Gas`, value: `${devGas}%`, min: 5, max: 80, step: 5, val: devGas, set: setDevGas, dot: '#C04B2D' },
              ].map(({ label, value, min, max, step, val, set, dot }) => (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, fontWeight: 600, marginBottom: 4 }}>
                    <span style={{ color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: dot, display: 'inline-block', flexShrink: 0 }} />
                      {label}
                    </span>
                    <span style={{ color: 'var(--accent-text)', fontFamily: 'var(--mono)' }}>{value}</span>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(Number(e.target.value))} style={sliderStyle} />
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 12, padding: '16px 8px 16px 0' }}>
            <div style={{ padding: '0 12px 12px', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 24, height: 3, background: 'var(--accent)', display: 'inline-block', borderRadius: 2 }} />
                Bean Temp (°C)
              </span>
              <span style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 24, height: 3, background: '#e67e22', display: 'inline-block', borderRadius: 2, borderTop: '2px dashed #e67e22' }} />
                RoR (°C/min)
              </span>
            </div>
            <div style={{ width: '100%', height: 380 }}>
              <ResponsiveContainer>
                <LineChart data={pts} margin={{ top: 8, right: 28, left: 0, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
                  <XAxis dataKey="timeStr" tick={{ fontSize: 11 }} interval={1} />
                  <YAxis yAxisId="bt" domain={[50, 240]} stroke="var(--accent)" tick={{ fontSize: 11 }} width={36} />
                  <YAxis yAxisId="ror" orientation="right" domain={[-20, 35]} stroke="#e67e22" tick={{ fontSize: 11 }} width={34} />
                  <Tooltip
                    contentStyle={{ fontSize: 12, borderRadius: 8 }}
                    formatter={(v, name) => [name === 'BT' ? `${v}°C` : `${v}°C/min`, name === 'BT' ? 'Bean Temp' : 'RoR']}
                    labelFormatter={l => `Time: ${l}`}
                  />

                  {/* Phase zones */}
                  <ReferenceArea yAxisId="bt" x1="0:00" x2={pts.find(p => p.BT >= 150)?.timeStr || '5:00'} fill="#5B9BD5" fillOpacity={0.06} />
                  <ReferenceArea yAxisId="bt" x1={pts.find(p => p.BT >= 150)?.timeStr || '5:00'} x2={pts.find(p => p.BT >= 194)?.timeStr || '8:00'} fill="#E6A040" fillOpacity={0.07} />
                  <ReferenceArea yAxisId="bt" x1={pts.find(p => p.BT >= 194)?.timeStr || '8:00'} x2={pts[pts.length - 1]?.timeStr || '12:00'} fill="#C04B2D" fillOpacity={0.06} />

                  <ReferenceLine yAxisId="bt" y={196} stroke="#9b59b6" strokeDasharray="3 3"
                    label={{ position: 'insideRight', value: '1st Crack 196°C', fill: '#9b59b6', fontSize: 10 }} />
                  <ReferenceLine yAxisId="bt" y={150} stroke="#888" strokeDasharray="2 3"
                    label={{ position: 'insideRight', value: 'Yellow 150°C', fill: '#888', fontSize: 10 }} />
                  {analysis.fcPt && (
                    <ReferenceLine yAxisId="bt" x={fcTimeStr} stroke="#9b59b6" strokeWidth={1.5} strokeDasharray="4 2" />
                  )}

                  <Line yAxisId="bt" type="monotone" dataKey="BT" stroke="var(--accent)" strokeWidth={2.5} dot={false} isAnimationActive={false} />
                  <Line yAxisId="ror" type="monotone" dataKey="RoR" stroke="#e67e22" strokeWidth={2} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ background: 'var(--paper)', border: `2px solid ${qualityColor}`, borderRadius: 12, padding: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-text)', marginBottom: 16 }}>
            {L.result}
          </div>

          {!analysis.fcPt ? (
            <div style={{ color: '#c0392b', fontWeight: 600, fontSize: 14 }}>{L.noFc}</div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 10, marginBottom: 16 }}>
                {[
                  { label: L.fc, value: fcTimeStr },
                  { label: L.devTimeLabel, value: `${analysis.devTime}s` },
                  { label: L.dtrLabel, value: `${analysis.dtr}%`, hi: analysis.dtr >= 18 && analysis.dtr <= 28 },
                  { label: L.rorFcLabel, value: `${analysis.rorAtFc}°C/min`, hi: analysis.rorAtFc >= 5 && analysis.rorAtFc <= 14 },
                  { label: L.totalLabel, value: `${analysis.totalMin.toFixed(1)} min` },
                  { label: L.levelLabel, value: analysis.level },
                  { label: L.agtronLabel, value: analysis.agtron },
                  { label: L.lossLabel, value: `${analysis.weightLoss}%` },
                ].map(({ label, value, hi }) => (
                  <div key={label} style={{ background: 'var(--bg)', borderRadius: 8, padding: '10px 12px' }}>
                    <div style={{ fontSize: 11, color: 'var(--ink-soft)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: hi === true ? 'var(--done)' : hi === false ? '#e67e22' : 'var(--ink)' }}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Flavor potential */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{L.flavorLabel}</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {bean.flavor.map(f => (
                    <span key={f} style={{ fontSize: 12.5, background: 'var(--accent-soft)', color: 'var(--accent-text)', padding: '4px 10px', borderRadius: 20, fontWeight: 600 }}>{f}</span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Quality issues */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {analysis.issues.map((issue, i) => (
              <div key={i} style={{ fontSize: 13, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: qualityColor, flexShrink: 0, marginTop: 1 }}>
                  {analysis.quality === 'good' ? '✅' : '⚠️'}
                </span>
                <span style={{ color: 'var(--ink)', lineHeight: 1.5 }}>{issue}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
