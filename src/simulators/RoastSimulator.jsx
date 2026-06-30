import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { completeChallenge, isChallengeCompleted } from '../game';

export default function RoastSimulator({ lang, challenge }) {
  const [chargeTemp, setChargeTemp] = useState(200);
  const [gas, setGas] = useState(50);
  const [airflow, setAirflow] = useState(50);
  const [challengeActive, setChallengeActive] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);

  const alreadyCompleted = challenge && isChallengeCompleted(challenge.id);

  const data = useMemo(() => {
    const pts = [];
    let bt = chargeTemp;
    let ror = 0;

    for (let t = 0; t <= 12; t += 0.5) {
      if (t === 0) {
        bt = chargeTemp;
        ror = -80;
      } else if (t <= 1.5) {
        const tpTarget = 80 + (chargeTemp - 200) * 0.5;
        bt = bt - (bt - tpTarget) * 0.8;
        ror = (bt - pts[pts.length-1].BT) / 0.5;
      } else {
        const gasFactor = gas / 50;
        let expectedRoR = 0;

        if (t <= 5) {
          expectedRoR = 15 * gasFactor + ((chargeTemp - 200) * 0.05);
        } else if (t <= 9) {
          expectedRoR = 10 * gasFactor;
        } else {
          if (gas > 60 && airflow < 40) {
            expectedRoR = 12;
          } else if (gas < 40) {
            expectedRoR = 2;
          } else {
            expectedRoR = 5;
          }
        }

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

  // Estimate First Crack time: first point where BT >= 196°C after t=6
  const fcPoint = data.find(p => p.time >= 6 && p.BT >= 196);
  const fcTimeSec = fcPoint ? Math.round(fcPoint.time * 60) : null;
  const fcTimeStr = fcTimeSec ? `${Math.floor(fcTimeSec / 60)}:${String(fcTimeSec % 60).padStart(2, '0')}` : null;

  const lastRoR = data[data.length - 1].RoR;
  const prevRoR = data[data.length - 3].RoR;

  const tr = {
    en: {
      charge: "Charge Temp (°C)",
      gas: "Heat Application (Gas %)",
      air: "Airflow (Damper %)",
      bt: "Bean Temp",
      ror: "Rate of Rise",
      crash: "⚠️ Crash (Baked)",
      flick: "⚠️ Flick (Roasty)",
      ideal: "✅ Smooth Development",
      startChallenge: "Start Challenge",
      freePlay: "Free play",
      fcEta: "First Crack ETA",
      tooFast: "too fast",
      tooSlow: "too late",
      onTrack: "on track",
      noFC: "No First Crack detected",
      tryAgain: "Try Again",
      skip: "Skip / Free play",
    },
    es: {
      charge: "Temp. de Carga (°C)",
      gas: "Aplicación de Calor (Gas %)",
      air: "Flujo de Aire (Damper %)",
      bt: "Temp. del Grano",
      ror: "Tasa de Aumento (RoR)",
      crash: "⚠️ Caída (Horneado)",
      flick: "⚠️ Pico (Ahuesado)",
      ideal: "✅ Desarrollo Suave",
      startChallenge: "Iniciar Desafío",
      freePlay: "Modo libre",
      fcEta: "Llegada al Primer Crack",
      tooFast: "demasiado rápido",
      tooSlow: "demasiado tarde",
      onTrack: "en camino",
      noFC: "No se detectó Primer Crack",
      tryAgain: "Intentar de nuevo",
      skip: "Saltar / Modo libre",
    }
  }[lang];

  let status = tr.ideal;
  if (lastRoR > prevRoR + 2) status = tr.flick;
  if (lastRoR < 3) status = tr.crash;

  // Challenge evaluation
  let challengeStatus = null;
  let challengeColor = '#e67e22';
  if (challengeActive && challenge && !succeeded) {
    const [min, max] = challenge.target.fcTime;
    if (!fcTimeSec) {
      challengeStatus = tr.noFC;
      challengeColor = '#c0392b';
    } else if (fcTimeSec < min) {
      challengeStatus = `${fcTimeStr} — ${tr.tooFast}`;
      challengeColor = '#c0392b';
    } else if (fcTimeSec > max) {
      challengeStatus = `${fcTimeStr} — ${tr.tooSlow}`;
      challengeColor = '#e67e22';
    } else {
      challengeStatus = `${fcTimeStr} ✅`;
      challengeColor = 'var(--done)';
      // Auto-succeed
      setTimeout(() => {
        const isNew = completeChallenge(challenge.id, challenge.xp, challenge.badge);
        if (isNew) setXpEarned(challenge.xp);
        setSucceeded(true);
      }, 400);
    }
  }

  function handleStartChallenge() {
    setSucceeded(false);
    setXpEarned(0);
    setChallengeActive(true);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* Challenge banner */}
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

      {/* Active challenge goal */}
      {challengeActive && !succeeded && challenge && (
        <div style={{ background: 'var(--bg)', border: '2px solid var(--accent)', borderRadius: '8px', padding: '16px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>🎯 {challenge.title}</div>
          <div style={{ fontSize: '13px', marginBottom: '8px' }}>{challenge.desc}</div>
          {fcTimeSec && (
            <div style={{ fontWeight: 'bold', color: challengeColor, fontSize: '15px' }}>
              {tr.fcEta}: {challengeStatus}
            </div>
          )}
          {!fcTimeSec && (
            <div style={{ color: '#e67e22', fontSize: '13px' }}>{tr.noFC}</div>
          )}
          <button onClick={() => setChallengeActive(false)} style={{ marginTop: '8px', fontSize: '12px', background: 'none', border: 'none', color: 'var(--ink-soft)', cursor: 'pointer', textDecoration: 'underline' }}>
            {tr.skip}
          </button>
        </div>
      )}

      {/* Success overlay */}
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
          <label style={{ fontSize: '13px', fontWeight: 'bold' }}>{tr.charge}: {chargeTemp}°C</label>
          <input type="range" min="160" max="240" step="5" value={chargeTemp} onChange={e => setChargeTemp(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ fontSize: '13px', fontWeight: 'bold' }}>{tr.gas}: {gas}%</label>
          <input type="range" min="10" max="100" step="5" value={gas} onChange={e => setGas(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ fontSize: '13px', fontWeight: 'bold' }}>{tr.air}: {airflow}%</label>
          <input type="range" min="10" max="100" step="5" value={airflow} onChange={e => setAirflow(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>

      {!challengeActive && (
        <div style={{ textAlign: 'center', fontWeight: 'bold', color: status.includes('⚠️') ? '#c0392b' : 'var(--done)' }}>
          Result: {status}
        </div>
      )}

      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
            <XAxis dataKey="timeStr" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" domain={[50, 230]} stroke="var(--accent)" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="right" orientation="right" domain={[-20, 30]} stroke="#e67e22" tick={{ fontSize: 12 }} />
            <Tooltip />
            <ReferenceLine yAxisId="left" x="5:00" stroke="#95a5a6" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Maillard', fill: '#95a5a6', fontSize: 12 }} />
            <ReferenceLine yAxisId="left" x="9:00" stroke="#95a5a6" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: '1st Crack', fill: '#95a5a6', fontSize: 12 }} />
            {challengeActive && (
              <>
                <ReferenceLine yAxisId="left" x="7:40" stroke="var(--done)" strokeDasharray="4 2" label={{ position: 'insideTop', value: 'Min', fill: 'var(--done)', fontSize: 11 }} />
                <ReferenceLine yAxisId="left" x="8:20" stroke="var(--done)" strokeDasharray="4 2" label={{ position: 'insideTop', value: 'Max', fill: 'var(--done)', fontSize: 11 }} />
              </>
            )}
            <ReferenceLine yAxisId="left" y={196} stroke="#9b59b6" strokeDasharray="3 3" label={{ position: 'insideRight', value: 'FC 196°C', fill: '#9b59b6', fontSize: 11 }} />
            <Line yAxisId="left" type="monotone" dataKey="BT" name={tr.bt} stroke="var(--accent)" strokeWidth={3} dot={false} isAnimationActive={false} />
            <Line yAxisId="right" type="monotone" dataKey="RoR" name={tr.ror} stroke="#e67e22" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
