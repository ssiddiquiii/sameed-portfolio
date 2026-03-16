import { SERVICES } from '../data'

/* ── SVG Icons ─────────────────────────────────────────────────── */
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
)

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const LayoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18M9 21V9"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

/* Map icon key → component */
const ICON_MAP = {
  monitor:  <MonitorIcon />,
  database: <DatabaseIcon />,
  lock:     <LockIcon />,
  layout:   <LayoutIcon />,
  mail:     <MailIcon />,
}

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">Services</div>
          <h2 className="section-title">What I Build</h2>
          <p className="section-sub">End-to-end MERN development — from database schema to React UI.</p>
        </div>

        <div className="bento-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`bento-card ${s.span}${s.accent ? ' accent-card' : ''} reveal delay-${(i % 6) + 1}`}
            >
              <div className="bento-num">{s.num}</div>

              {/* Big text (API / Git) — unchanged */}
              {s.big && (
                <div className="big-number" style={s.big === 'Git' ? { fontSize: 'clamp(2.5rem,5vw,3.5rem)' } : undefined}>
                  {s.big}
                </div>
              )}

              {/* SVG icon box — replaces emoji */}
              {s.iconKey && (
                <div style={{
                  width: '46px', height: '46px',
                  background: 'rgba(var(--accent-rgb), 0.08)',
                  border: '1px solid rgba(var(--accent-rgb), 0.18)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '1.25rem',
                }}>
                  {ICON_MAP[s.iconKey]}
                </div>
              )}

              <h3 className="bento-title">{s.title}</h3>
              <p className="bento-desc">{s.desc}</p>

              {s.tags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '1rem' }}>
                  {s.tags.map((t) => <span key={t} className="btag">{t}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
