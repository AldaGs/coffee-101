import { Suspense, lazy } from 'react';

const RoastSimulator = lazy(() => import('./simulators/RoastSimulator'));
const BrewSimulator = lazy(() => import('./simulators/BrewSimulator'));
const EspressoSimulator = lazy(() => import('./simulators/EspressoSimulator'));

export default function Simulator({ type, lang = 'en' }) {
  if (!type) return null;

  return (
    <div className="simulator-wrapper" style={{ marginTop: '24px', marginBottom: '24px', padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px' }}>
      <h3 style={{ marginTop: 0, color: 'var(--accent-text)', fontSize: '16px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
        {lang === 'es' ? 'Simulador Interactivo' : 'Interactive Simulator'}
      </h3>
      <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center', color: 'var(--ink-soft)' }}>Loading simulator...</div>}>
        {type === 'roast-curve' && <RoastSimulator lang={lang} />}
        {type === 'brew-chart' && <BrewSimulator lang={lang} />}
        {type === 'espresso-flow' && <EspressoSimulator lang={lang} />}
      </Suspense>
    </div>
  );
}
