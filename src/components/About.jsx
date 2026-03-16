/* ── SVG Icons ─────────────────────────────────────────────────── */
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const GraduationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

/* ── Info rows config ───────────────────────────────────────────── */
const INFO_ROWS = [
  {
    icon:     <MapPinIcon />,
    label:    'Location',
    value:    'Karachi, Pakistan',
    accent:   '#F59E0B',
    accentBg: 'rgba(245,158,11,0.1)',
    accent33: 'rgba(245,158,11,0.2)',
  },
  {
    icon:     <GraduationIcon />,
    label:    'Education',
    value:    'BBA + SWE Diploma',
    accent:   '#60A5FA',
    accentBg: 'rgba(96,165,250,0.1)',
    accent33: 'rgba(96,165,250,0.2)',
  },
  {
    icon:     <TargetIcon />,
    label:    'Ambition',
    value:    'World-class Engineer',
    accent:   '#34D399',
    accentBg: 'rgba(52,211,153,0.1)',
    accent33: 'rgba(52,211,153,0.2)',
  },
  {
    icon:     <ZapIcon />,
    label:    'Current Focus',
    value:    'Backend Engineering',
    accent:   '#F59E0B',
    accentBg: 'rgba(245,158,11,0.08)',
    accent33: 'rgba(245,158,11,0.18)',
  },
  {
    icon:     <GitHubIcon />,
    label:    'GitHub',
    value:    'ssiddiquiii',
    accent:   'var(--text-1)',
    accentBg: 'var(--surface)',
    accent33: 'var(--border)',
    href:     'https://github.com/ssiddiquiii',
  },
]

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const ApiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
)
const ZapSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)
const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <path d="M6 9v6M15.55 6.55 8.46 13.45"/>
  </svg>
)

const BADGES = [
  { icon: <WrenchIcon />, label: 'Clean Architecture' },
  { icon: <ApiIcon />,    label: 'API-First Design'   },
  { icon: <ShieldIcon />, label: 'Security Conscious'  },
  { icon: <FileIcon />,   label: 'Self-documented Code'},
  { icon: <ZapSmallIcon />,    label: 'Performance Aware'   },
  { icon: <GitIcon />,    label: 'Version Control'     },
]

/* ── Component ──────────────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div
          className="about-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'center' }}
        >

          {/* ── Card ──────────────────────────────────────────── */}
          <div className="reveal-left">
            <div className="about-card">

              {/* Avatar */}
              <div className="about-avatar">👨‍💻</div>

              <div style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>
                Sameed Siddiqui
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-2)', textAlign: 'center', marginBottom: '1.5rem' }}>
                MERN Stack Developer · Karachi, PK
              </div>

              {/* Info rows */}
              {INFO_ROWS.map((r) => {
                const inner = (
                  <div
                    className="info-row"
                    style={{ cursor: r.href ? 'pointer' : 'default' }}
                    onMouseOver={(e) => {
                      if (!r.href) return
                      e.currentTarget.style.paddingLeft = '0.25rem'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.paddingLeft = '0'
                    }}
                  >
                    {/* Icon box */}
                    <div style={{
                      width: '34px', height: '34px',
                      borderRadius: '9px',
                      background: r.accentBg,
                      border: `1px solid ${r.accent33}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: r.accent, flexShrink: 0,
                      transition: 'transform 0.2s',
                    }}>
                      {r.icon}
                    </div>

                    <div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase', fontFamily: 'Fira Code, monospace', marginBottom: '0.1rem' }}>
                        {r.label}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: r.href ? 'var(--accent)' : 'var(--text-1)' }}>
                        {r.value}
                      </div>
                    </div>
                  </div>
                )

                return r.href ? (
                  <a key={r.label} href={r.href} target="_blank" rel="noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block',
                      transition: 'padding-left 0.2s' }}>
                    {inner}
                  </a>
                ) : (
                  <div key={r.label} style={{ transition: 'padding-left 0.2s' }}>{inner}</div>
                )
              })}
            </div>
          </div>

          {/* ── Text ──────────────────────────────────────────── */}
          <div className="reveal-right">
            <div className="section-eyebrow">About Me</div>
            <h2 className="section-title">
              Engineered to Build.<br />
              <span style={{ color: 'var(--text-2)' }}>Driven to Ship.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I'm a <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>MERN stack developer</strong> on a mission. Not just writing code — understanding architecture, trade-offs, and the systems behind every line. I don't follow tutorials; I build production-grade software and learn from first principles.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.9, marginBottom: '1rem' }}>
              My focus is becoming a world-class software engineer — mastering Node.js backends, MongoDB schemas, JWT security flows, and React UIs built for real users. One solid project at a time.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.9, marginBottom: '1.75rem' }}>
              I keep things <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>clean, documented, and deployable</strong>. Every commit tells a story. Every API endpoint has a reason. Every schema decision has a justification.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {BADGES.map((b) => (
                <div key={b.label} className="about-badge">
                  <span style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
