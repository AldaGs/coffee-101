import { useState } from 'react';
import { Link } from 'react-router-dom';

const SIMS = [
  {
    id: 'roasting',
    path: '/simulators/roasting',
    icon: '🔥',
    titleEn: 'Roasting Lab',
    titleEs: 'Laboratorio de Tueste',
    descEn: 'Analyze a green bean sample and control charge temp, drum speed, gas by phase, airflow, and drop temp to build the ideal roast profile.',
    descEs: 'Analiza una muestra de grano verde y controla la temperatura de carga, velocidad del tambor, gas por fase, flujo de aire y temperatura de descarga.',
    tagsEn: ['Green bean analysis', 'RoR curve', 'First crack', 'DTR', '6 origin beans'],
    tagsEs: ['Análisis de grano verde', 'Curva RoR', 'Primer crack', 'DTR', '6 cafés de origen'],
    theme: 'theme-roasting',
    accent: '#A85A2E',
  },
  {
    id: 'brew',
    path: null,
    icon: '☕',
    titleEn: 'Brew Chart',
    titleEs: 'Tabla de Extracción',
    descEn: 'Dial in grind size, brew ratio, temperature, and agitation to land in the SCA Gold Cup zone.',
    descEs: 'Ajusta molienda, proporción, temperatura y agitación para llegar a la zona Gold Cup de la SCA.',
    tagsEn: ['EY vs TDS', 'Gold Cup zone', 'Filter methods'],
    tagsEs: ['EY vs TDS', 'Zona Gold Cup', 'Métodos de filtrado'],
    theme: '',
    accent: '#3E6E5C',
    comingSoon: true,
  },
  {
    id: 'espresso',
    path: null,
    icon: '⚡',
    titleEn: 'Espresso Flow',
    titleEs: 'Flujo de Espresso',
    descEn: 'Simulate pre-infusion, pump pressure, and puck resistance to understand shot dynamics.',
    descEs: 'Simula pre-infusión, presión de bomba y resistencia del puck para entender la dinámica del espresso.',
    tagsEn: ['Pre-infusion', 'Pump pressure', 'Puck resistance'],
    tagsEs: ['Pre-infusión', 'Presión de bomba', 'Resistencia del puck'],
    theme: '',
    accent: '#486A8D',
    comingSoon: true,
  },
];

export default function SimulatorsHub() {
  const [lang, setLang] = useState(() => localStorage.getItem('coffee101-lang') || 'en');

  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem('coffee101-lang', l);
  };

  const isEn = lang === 'en';

  return (
    <div className="home-container">
      <header style={{ padding: '0 0 24px 0', borderBottom: '1px solid var(--line)', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-soft)', textDecoration: 'none' }}>
            ← {isEn ? 'Back to Hub' : 'Volver al Hub'}
          </Link>
          <div className="lang-switch">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => toggleLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => toggleLang('es')}>ES</button>
          </div>
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 600, margin: '16px 0 6px' }}>
          {isEn ? 'Simulators' : 'Simuladores'}
        </h1>
        <p className="sub">
          {isEn
            ? 'Interactive tools to build intuition for roasting, extraction, and espresso — dial in controls and watch the physics respond in real time.'
            : 'Herramientas interactivas para desarrollar intuición sobre tueste, extracción y espresso — ajusta los controles y observa cómo responde la física en tiempo real.'}
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {SIMS.map(sim => {
          const title = isEn ? sim.titleEn : sim.titleEs;
          const desc = isEn ? sim.descEn : sim.descEs;
          const tags = isEn ? sim.tagsEn : sim.tagsEs;

          const inner = (
            <div style={{
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              padding: 24,
              textDecoration: 'none',
              color: 'var(--ink)',
              transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s',
              display: 'block',
              position: 'relative',
              opacity: sim.comingSoon ? 0.65 : 1,
            }}>
              {sim.comingSoon && (
                <span style={{
                  position: 'absolute', top: 14, right: 14,
                  fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                  background: 'var(--bg)', border: '1px solid var(--line)', color: 'var(--ink-soft)',
                  padding: '3px 9px', borderRadius: 5,
                }}>
                  {isEn ? 'Coming soon' : 'Próximamente'}
                </span>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <span style={{ fontSize: 28 }}>{sim.icon}</span>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: 0, color: sim.accent }}>{title}</h2>
              </div>
              <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, margin: '0 0 14px', lineHeight: 1.6, maxWidth: 600 }}>{desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {tags.map(t => (
                  <span key={t} style={{
                    fontSize: 12, fontWeight: 600,
                    background: `${sim.accent}18`,
                    color: sim.accent,
                    padding: '3px 9px', borderRadius: 4,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          );

          return sim.path && !sim.comingSoon ? (
            <Link key={sim.id} to={sim.path} style={{ textDecoration: 'none', display: 'block' }}
              onMouseEnter={e => { e.currentTarget.firstChild.style.transform = 'translateY(-2px)'; e.currentTarget.firstChild.style.boxShadow = '0 4px 14px rgba(0,0,0,0.07)'; e.currentTarget.firstChild.style.borderColor = sim.accent; }}
              onMouseLeave={e => { e.currentTarget.firstChild.style.transform = ''; e.currentTarget.firstChild.style.boxShadow = ''; e.currentTarget.firstChild.style.borderColor = 'var(--line)'; }}
            >
              {inner}
            </Link>
          ) : (
            <div key={sim.id}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
