import { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import { completeChallenge, isChallengeCompleted } from '../game';

export default function EspressoSimulator({ lang, challenge }) {
  const [grind, setGrind] = useState(8);   // coarse → under-extracted
  const [ratio, setRatio] = useState(2.5); // longer ratio → lower TDS
  const [pressure, setPressure] = useState(7);
  const [preInfusion, setPreInfusion] = useState(1);
  const [challengeActive, setChallengeActive] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);

  const alreadyCompleted = challenge && isChallengeCompleted(challenge.id);

  let ey = 20 - (grind - 5) * 1.5 + (pressure - 9) * 0.2 + (preInfusion - 3) * 0.4 + (ratio - 2) * 2.5;
  if (grind < 3 && pressure > 8) ey -= 3;
  ey = Math.max(14, Math.min(26, ey));
  const tds = ey / ratio;

  const data = [{ x: Number(ey.toFixed(1)), y: Number(tds.toFixed(2)) }];

  const tr = {
    en: {
      grind: "Grind Size", fine: "Fine", coarse: "Coarse",
      ratio: "Brew Ratio (1:X)", pressure: "Pump Pressure (Bar)", pre: "Pre-infusion (sec)",
      ey: "Extraction Yield (%)", tds: "TDS / Strength (%)",
      ideal: "Ideal Balance", sour: "Sour / Under-extracted",
      bitter: "Bitter / Over-extracted", strong: "Ristretto (Thick)", weak: "Lungo (Thin)",
      choked: "⚠️ Choked / Channeling",
      startChallenge: "Start Challenge", freePlay: "Free play",
      tryAgain: "Try Again", skip: "Skip / Free play",
      inZone: "✅ Perfect shot!",
    },
    es: {
      grind: "Molienda", fine: "Fino", coarse: "Grueso",
      ratio: "Proporción (1:X)", pressure: "Presión de Bomba (Bar)", pre: "Pre-infusión (seg)",
      ey: "Rendimiento de Extracción (%)", tds: "TDS / Fuerza (%)",
      ideal: "Equilibrio Ideal", sour: "Ácido / Subextraído",
      bitter: "Amargo / Sobreextraído", strong: "Ristretto (Espeso)", weak: "Lungo (Ligero)",
      choked: "⚠️ Estancado / Canalizado",
      startChallenge: "Iniciar Desafío", freePlay: "Modo libre",
      tryAgain: "Intentar de nuevo", skip: "Saltar / Modo libre",
      inZone: "✅ ¡Shot perfecto!",
    }
  }[lang];

  let status = tr.ideal;
  if (grind < 3 && pressure > 8) status = tr.choked;
  else if (ey < 18) status = tr.sour;
  else if (ey > 22) status = tr.bitter;
  else if (tds > 12) status = tr.strong;
  else if (tds < 8) status = tr.weak;

  const inZone = challenge && ey >= challenge.target.ey[0] && ey <= challenge.target.ey[1]
    && tds >= challenge.target.tds[0] && tds <= challenge.target.tds[1];

  if (challengeActive && !succeeded && inZone) {
    setTimeout(() => {
      const isNew = completeChallenge(challenge.id, challenge.xp, challenge.badge);
      if (isNew) setXpEarned(challenge.xp);
      setSucceeded(true);
    }, 400);
  }

  function handleStartChallenge() {
    setSucceeded(false);
    setXpEarned(0);
    setChallengeActive(true);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {challenge && !challengeActive && !succeeded && (
        <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>🎯 {challenge.title}</div>
          <div style={{ fontSize: '13px', color: 'var(--ink-soft)', marginBottom: '12px' }}>{challenge.desc}</div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button onClick={handleStartChallenge} style={{ padding: '6px 16px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              {tr.startChallenge} (+{challenge.xp} XP)
            </button>
            {alreadyCompleted && <span style={{ fontSize: '12px', color: 'var(--done)' }}>✅ {lang === 'es' ? 'Ya completado' : 'Already completed'}</span>}
          </div>
        </div>
      )}

      {challengeActive && !succeeded && challenge && (
        <div style={{ background: 'var(--bg)', border: '2px solid var(--accent)', borderRadius: '8px', padding: '16px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>🎯 {challenge.title}</div>
          <div style={{ fontSize: '13px', marginBottom: '8px' }}>{challenge.desc}</div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', marginBottom: '8px' }}>
            <span style={{ color: ey >= challenge.target.ey[0] && ey <= challenge.target.ey[1] ? 'var(--done)' : '#c0392b' }}>
              EY: {ey.toFixed(1)}% (target {challenge.target.ey[0]}–{challenge.target.ey[1]}%)
            </span>
            <span style={{ color: tds >= challenge.target.tds[0] && tds <= challenge.target.tds[1] ? 'var(--done)' : '#c0392b' }}>
              TDS: {tds.toFixed(1)}% (target {challenge.target.tds[0]}–{challenge.target.tds[1]}%)
            </span>
          </div>
          {inZone && <div style={{ fontWeight: 'bold', color: 'var(--done)' }}>{tr.inZone}</div>}
          <button onClick={() => setChallengeActive(false)} style={{ marginTop: '8px', fontSize: '12px', background: 'none', border: 'none', color: 'var(--ink-soft)', cursor: 'pointer', textDecoration: 'underline' }}>
            {tr.skip}
          </button>
        </div>
      )}

      {succeeded && (
        <div style={{ background: '#f0fdf4', border: '2px solid var(--done)', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</div>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--done)', marginBottom: '4px' }}>{challenge.title}</div>
          <div style={{ fontSize: '13px', marginBottom: '8px' }}>{challenge.successMsg}</div>
          {xpEarned > 0 && <div style={{ fontWeight: 'bold', color: 'var(--accent)' }}>+{xpEarned} XP</div>}
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <button onClick={handleStartChallenge} style={{ padding: '6px 16px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              {tr.tryAgain}
            </button>
            <button onClick={() => { setChallengeActive(false); setSucceeded(false); }} style={{ padding: '6px 16px', background: 'none', border: '1px solid var(--line)', borderRadius: '6px', cursor: 'pointer' }}>
              {tr.freePlay}
            </button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', background: 'var(--bg)', padding: '16px', borderRadius: '8px' }}>
        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{tr.grind}</label>
            <span>{grind <= 3 ? tr.fine : grind >= 8 ? tr.coarse : 'Med'}</span>
          </div>
          <input type="range" min="1" max="10" step="1" value={grind} onChange={e => setGrind(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{tr.ratio}</label>
            <span>1:{ratio.toFixed(1)}</span>
          </div>
          <input type="range" min="1" max="3" step="0.1" value={ratio} onChange={e => setRatio(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{tr.pressure}</label>
            <span>{pressure} Bar</span>
          </div>
          <input type="range" min="4" max="12" step="0.5" value={pressure} onChange={e => setPressure(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
            <label>{tr.pre}</label>
            <span>{preInfusion}s</span>
          </div>
          <input type="range" min="0" max="10" step="1" value={preInfusion} onChange={e => setPreInfusion(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>

      {!challengeActive && (
        <div style={{ textAlign: 'center', fontWeight: 'bold', color: status === tr.ideal ? 'var(--done)' : '#e67e22' }}>
          Result: {status}
        </div>
      )}

      <div style={{ width: '100%', height: '350px' }}>
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name={tr.ey} unit="%" domain={[14, 26]} tickCount={7} />
            <YAxis type="number" dataKey="y" name={tr.tds} unit="%" domain={[4, 16]} tickCount={7} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <ReferenceArea x1={18} x2={22} y1={8} y2={12} strokeOpacity={0.3} fill="var(--done)" fillOpacity={0.2} />
            <Scatter name="Espresso" data={data} fill="var(--accent)" shape="circle" r={8} isAnimationActive={false} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
