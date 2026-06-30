import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function RoastSimulator({ lang }) {
  const [chargeTemp, setChargeTemp] = useState(200); // 160 to 240
  const [gas, setGas] = useState(50); // 0 to 100
  const [airflow, setAirflow] = useState(50); // 0 to 100

  const data = useMemo(() => {
    const pts = [];
    let bt = chargeTemp;
    let ror = 0;
    
    // Simulate 12 minutes of roasting
    for (let t = 0; t <= 12; t += 0.5) {
      if (t === 0) {
        bt = chargeTemp;
        ror = -80; // massive drop
      } else if (t <= 1.5) {
        // Drop to Turning Point
        const tpTarget = 80 + (chargeTemp - 200) * 0.5; 
        bt = bt - (bt - tpTarget) * 0.8;
        ror = (bt - pts[pts.length-1].BT) / 0.5;
      } else {
        // Recovery and climb
        const gasFactor = gas / 50; // 1.0 is normal
        const airFactor = airflow / 50; // 1.0 is normal
        
        let expectedRoR = 0;
        
        if (t <= 5) {
          // Drying phase - momentum built by charge temp and gas
          expectedRoR = 15 * gasFactor + ((chargeTemp - 200) * 0.05);
        } else if (t <= 9) {
          // Maillard phase
          expectedRoR = 10 * gasFactor;
        } else {
          // Development phase / First Crack
          // A crash happens if gas is low. A flick happens if gas is high and airflow is low.
          if (gas > 60 && airflow < 40) {
            expectedRoR = 12; // Flick
          } else if (gas < 40) {
            expectedRoR = 2; // Crash
          } else {
            expectedRoR = 5; // Smooth decline
          }
        }
        
        // Add some inertia
        ror = ror + (expectedRoR - ror) * 0.4;
        bt = bt + ror * 0.5;
      }
      
      pts.push({
        time: t,
        timeStr: `${Math.floor(t)}:${(t % 1) === 0.5 ? '30' : '00'}`,
        BT: Math.round(bt),
        RoR: Math.round(ror * 10) / 10
      });
    }
    return pts;
  }, [chargeTemp, gas, airflow]);

  const t = {
    en: {
      charge: "Charge Temp (°C)",
      gas: "Heat Application (Gas %)",
      air: "Airflow (Damper %)",
      bt: "Bean Temp",
      ror: "Rate of Rise",
      crash: "⚠️ Crash (Baked)",
      flick: "⚠️ Flick (Roasty)",
      ideal: "✅ Smooth Development"
    },
    es: {
      charge: "Temp. de Carga (°C)",
      gas: "Aplicación de Calor (Gas %)",
      air: "Flujo de Aire (Damper %)",
      bt: "Temp. del Grano",
      ror: "Tasa de Aumento (RoR)",
      crash: "⚠️ Caída (Horneado)",
      flick: "⚠️ Pico (Ahuesado)",
      ideal: "✅ Desarrollo Suave"
    }
  }[lang];

  // Detect defect in development phase
  const lastRoR = data[data.length - 1].RoR;
  const prevRoR = data[data.length - 3].RoR;
  let status = t.ideal;
  if (lastRoR > prevRoR + 2) status = t.flick;
  if (lastRoR < 3) status = t.crash;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', background: 'var(--bg)', padding: '16px', borderRadius: '8px' }}>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ fontSize: '13px', fontWeight: 'bold' }}>{t.charge}: {chargeTemp}°C</label>
          <input type="range" min="160" max="240" step="5" value={chargeTemp} onChange={e => setChargeTemp(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ fontSize: '13px', fontWeight: 'bold' }}>{t.gas}: {gas}%</label>
          <input type="range" min="10" max="100" step="5" value={gas} onChange={e => setGas(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ fontSize: '13px', fontWeight: 'bold' }}>{t.air}: {airflow}%</label>
          <input type="range" min="10" max="100" step="5" value={airflow} onChange={e => setAirflow(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>
      
      <div style={{ textAlign: 'center', fontWeight: 'bold', color: status.includes('⚠️') ? '#c0392b' : 'var(--done)' }}>
        Result: {status}
      </div>

      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
            <XAxis dataKey="timeStr" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" domain={[50, 230]} stroke="var(--accent)" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="right" orientation="right" domain={[-20, 30]} stroke="#e67e22" tick={{ fontSize: 12 }} />
            <Tooltip />
            <ReferenceLine x="5:00" stroke="#95a5a6" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Maillard', fill: '#95a5a6', fontSize: 12 }} />
            <ReferenceLine x="9:00" stroke="#95a5a6" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: '1st Crack', fill: '#95a5a6', fontSize: 12 }} />
            <Line yAxisId="left" type="monotone" dataKey="BT" name={t.bt} stroke="var(--accent)" strokeWidth={3} dot={false} isAnimationActive={false} />
            <Line yAxisId="right" type="monotone" dataKey="RoR" name={t.ror} stroke="#e67e22" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
