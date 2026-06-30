import { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';

export default function EspressoSimulator({ lang }) {
  const [grind, setGrind] = useState(5); // 1-10 (1=Fine, 10=Coarse)
  const [ratio, setRatio] = useState(2); // 1.0-3.0
  const [pressure, setPressure] = useState(9); // 4-12 bar
  const [preInfusion, setPreInfusion] = useState(3); // 0-10s

  // Calculate EY and TDS
  // Base EY at Grind 5, Pressure 9, Ratio 2, Pre-infusion 3 = 20%
  let ey = 20 - (grind - 5) * 1.5 + (pressure - 9) * 0.2 + (preInfusion - 3) * 0.4 + (ratio - 2) * 2.5;
  
  // Channelling / Choking logic:
  // If grind is very fine and pressure is high, the puck chokes and channels, dropping EY
  if (grind < 3 && pressure > 8) {
    ey -= 3;
  }
  
  // Cap EY to realistic bounds
  ey = Math.max(14, Math.min(26, ey));
  
  // TDS calculation: EY% = TDS% * Ratio -> TDS = EY / Ratio
  const tds = ey / ratio;

  const data = [{ x: Number(ey.toFixed(1)), y: Number(tds.toFixed(2)) }];

  const t = {
    en: {
      grind: "Grind Size",
      fine: "Fine",
      coarse: "Coarse",
      ratio: "Brew Ratio (1:X)",
      pressure: "Pump Pressure (Bar)",
      pre: "Pre-infusion (sec)",
      ey: "Extraction Yield (%)",
      tds: "TDS / Strength (%)",
      ideal: "Ideal Balance",
      sour: "Sour / Under-extracted",
      bitter: "Bitter / Over-extracted",
      strong: "Ristretto (Thick)",
      weak: "Lungo (Thin)",
      choked: "⚠️ Choked / Channeling"
    },
    es: {
      grind: "Tamaño de Molienda",
      fine: "Fino",
      coarse: "Grueso",
      ratio: "Proporción (1:X)",
      pressure: "Presión de Bomba (Bar)",
      pre: "Pre-infusión (seg)",
      ey: "Rendimiento de Extracción (%)",
      tds: "TDS / Fuerza (%)",
      ideal: "Equilibrio Ideal",
      sour: "Ácido / Subextraído",
      bitter: "Amargo / Sobreextraído",
      strong: "Ristretto (Espeso)",
      weak: "Lungo (Ligero)",
      choked: "⚠️ Estancado / Canalizado"
    }
  }[lang];

  let status = t.ideal;
  if (grind < 3 && pressure > 8) status = t.choked;
  else if (ey < 18) status = t.sour;
  else if (ey > 22) status = t.bitter;
  else if (tds > 12) status = t.strong;
  else if (tds < 8) status = t.weak;

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
            <span>1:{ratio.toFixed(1)}</span>
          </div>
          <input type="range" min="1" max="3" step="0.1" value={ratio} onChange={e => setRatio(Number(e.target.value))} style={{ width: '100%' }} />
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{t.pressure}</label>
            <span>{pressure} Bar</span>
          </div>
          <input type="range" min="4" max="12" step="0.5" value={pressure} onChange={e => setPressure(Number(e.target.value))} style={{ width: '100%' }} />
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{t.pre}</label>
            <span>{preInfusion}s</span>
          </div>
          <input type="range" min="0" max="10" step="1" value={preInfusion} onChange={e => setPreInfusion(Number(e.target.value))} style={{ width: '100%' }} />
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
            <YAxis type="number" dataKey="y" name={t.tds} unit="%" domain={[4, 16]} tickCount={7} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            
            {/* SCA Ideal Espresso Box */}
            <ReferenceArea x1={18} x2={22} y1={8} y2={12} strokeOpacity={0.3} fill="var(--done)" fillOpacity={0.2} />
            
            <Scatter name="Espresso" data={data} fill="var(--accent)" shape="circle" r={8} isAnimationActive={false} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
