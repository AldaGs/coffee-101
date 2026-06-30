import { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';

export default function BrewSimulator({ lang }) {
  const [grind, setGrind] = useState(5); // 1-10 (1=Fine, 10=Coarse)
  const [ratio, setRatio] = useState(16); // 12-20
  const [temp, setTemp] = useState(93); // 85-100
  const [agitation, setAgitation] = useState(3); // 1-5 (Low-High)

  // Calculate EY and TDS
  // Base EY at Grind 5, Temp 93, Ratio 16, Agit 3 = 20%
  let ey = 20 - (grind - 5) * 1.5 + (temp - 93) * 0.25 + (agitation - 3) * 0.8 + (ratio - 16) * 0.4;
  
  // Cap EY to realistic bounds
  ey = Math.max(12, Math.min(28, ey));
  
  // TDS calculation: EY% = TDS% * Ratio -> TDS = EY / Ratio
  const tds = ey / ratio;

  const data = [{ x: Number(ey.toFixed(1)), y: Number(tds.toFixed(2)) }];

  const t = {
    en: {
      grind: "Grind Size",
      fine: "Fine",
      coarse: "Coarse",
      ratio: "Brew Ratio (1:X)",
      temp: "Water Temp (°C)",
      agitation: "Agitation / Pours",
      low: "Low",
      high: "High",
      ey: "Extraction Yield (%)",
      tds: "TDS / Strength (%)",
      ideal: "Ideal Balance",
      sour: "Sour / Under-extracted",
      bitter: "Bitter / Over-extracted",
      strong: "Strong",
      weak: "Weak"
    },
    es: {
      grind: "Tamaño de Molienda",
      fine: "Fino",
      coarse: "Grueso",
      ratio: "Proporción (1:X)",
      temp: "Temp. del Agua (°C)",
      agitation: "Agitación / Vertidos",
      low: "Baja",
      high: "Alta",
      ey: "Rendimiento de Extracción (%)",
      tds: "TDS / Fuerza (%)",
      ideal: "Equilibrio Ideal",
      sour: "Ácido / Subextraído",
      bitter: "Amargo / Sobreextraído",
      strong: "Fuerte",
      weak: "Débil"
    }
  }[lang];

  let status = t.ideal;
  if (ey < 18) status = t.sour;
  else if (ey > 22) status = t.bitter;
  else if (tds > 1.45) status = t.strong;
  else if (tds < 1.15) status = t.weak;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', background: 'var(--bg)', padding: '16px', borderRadius: '8px' }}>
        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{t.grind}</label>
            <span>{grind <= 3 ? t.fine : grind >= 8 ? t.coarse : 'Med'}</span>
          </div>
          <input type="range" min="1" max="10" step="1" value={grind} onChange={e => setGrind(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{t.ratio}</label>
            <span>1:{ratio}</span>
          </div>
          <input type="range" min="12" max="20" step="0.5" value={ratio} onChange={e => setRatio(Number(e.target.value))} style={{ width: '100%' }} />
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{t.temp}</label>
            <span>{temp}°C</span>
          </div>
          <input type="range" min="85" max="100" step="1" value={temp} onChange={e => setTemp(Number(e.target.value))} style={{ width: '100%' }} />
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{t.agitation}</label>
            <span>{agitation <= 2 ? t.low : agitation >= 4 ? t.high : 'Med'}</span>
          </div>
          <input type="range" min="1" max="5" step="1" value={agitation} onChange={e => setAgitation(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>
      
      <div style={{ textAlign: 'center', fontWeight: 'bold', color: status === t.ideal ? 'var(--done)' : '#e67e22' }}>
        Result: {status}
      </div>

      <div style={{ width: '100%', height: '350px' }}>
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name={t.ey} unit="%" domain={[14, 26]} tickCount={7} />
            <YAxis type="number" dataKey="y" name={t.tds} unit="%" domain={[0.8, 1.8]} tickCount={6} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            
            {/* SCA Ideal Box */}
            <ReferenceArea x1={18} x2={22} y1={1.15} y2={1.45} strokeOpacity={0.3} fill="var(--done)" fillOpacity={0.2} />
            
            <Scatter name="Brew" data={data} fill="var(--accent)" shape="circle" r={8} isAnimationActive={false} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
