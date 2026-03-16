/* ── SVG Icons ─────────────────────────────────────────────────── */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
  </svg>
)

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
)

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

/* ── Steps config ───────────────────────────────────────────────── */
const STEPS = [
  {
    icon:    <SearchIcon />,
    accent:  '#60A5FA',
    bg:      'rgba(96,165,250,0.1)',
    border:  'rgba(96,165,250,0.25)',
    num:     '// step_01',
    title:   'Requirements & Architecture',
    desc:    'Before writing a single line, I map out the problem space, define data models, and sketch the system design. Architecture first, always.',
  },
  {
    icon:    <DatabaseIcon />,
    accent:  '#34D399',
    bg:      'rgba(52,211,153,0.1)',
    border:  'rgba(52,211,153,0.25)',
    num:     '// step_02',
    title:   'Database Schema Design',
    desc:    'Design MongoDB schemas with Mongoose, plan relationships, set up indexing strategies, and validate data integrity at the model layer.',
  },
  {
    icon:    <TerminalIcon />,
    accent:  '#F59E0B',
    bg:      'rgba(245,158,11,0.1)',
    border:  'rgba(245,158,11,0.25)',
    num:     '// step_03',
    title:   'Backend API Build',
    desc:    'Build Express routes, middleware layers, controller logic, and authentication. Test every endpoint with Postman before moving forward.',
  },
  {
    icon:    <CodeIcon />,
    accent:  '#a78bfa',
    bg:      'rgba(167,139,250,0.1)',
    border:  'rgba(167,139,250,0.25)',
    num:     '// step_04',
    title:   'React Frontend',
    desc:    'Connect the frontend to the API, build responsive components, manage state cleanly, and ensure the UI works across all screen sizes.',
  },
  {
    icon:    <RocketIcon />,
    accent:  '#60A5FA',
    bg:      'rgba(96,165,250,0.1)',
    border:  'rgba(96,165,250,0.25)',
    num:     '// step_05',
    title:   'Polish, Document & Deploy',
    desc:    "Clean up code, write README docs, push to GitHub, and deploy. Every project is a portfolio piece — it has to be something I'm proud of.",
  },
]

/* ── Component ──────────────────────────────────────────────────── */
export default function Process() {
  return (
    <section id="process" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div
          className="process-wrap"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'start' }}
        >

          {/* Left */}
          <div className="reveal-left">
            <div className="section-eyebrow">How I Work</div>
            <h2 className="section-title">My Engineering Process</h2>
            <p className="section-sub">
              How I approach every project — from architecture to deployment. No guesswork, no shortcuts.
            </p>

            {/* Code block */}
            <div style={{
              marginTop: '2rem',
              padding: '1.75rem',
              background: 'var(--bg-3)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              fontFamily: 'Fira Code, monospace',
              fontSize: '0.82rem',
              lineHeight: 2,
              color: 'var(--text-2)',
            }}>
              <span style={{ color: 'var(--accent)' }}>const</span> process = {'{'}<br />
              &nbsp;&nbsp;<span style={{ color: '#34D399' }}>understand</span>:{' '}
              <span style={{ color: '#F59E0B' }}>"requirements first"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#34D399' }}>design</span>:{' '}
              <span style={{ color: '#F59E0B' }}>"system before code"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#34D399' }}>build</span>:{' '}
              <span style={{ color: '#F59E0B' }}>"clean + modular"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#34D399' }}>ship</span>:{' '}
              <span style={{ color: '#F59E0B' }}>"document everything"</span><br />
              {'}'};
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline reveal-right">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="timeline-item"
                style={{
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                  paddingBottom: i < STEPS.length - 1 ? '2.25rem' : 0,
                }}
              >
                {/* Icon dot */}
                <div
                  className="timeline-dot"
                  style={{
                    border: `1px solid ${s.border}`,
                    color: s.accent,
                  }}
                >
                  {s.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                  <div style={{
                    fontFamily: 'Fira Code, monospace',
                    fontSize: '0.68rem',
                    color: s.accent,
                    letterSpacing: '0.08em',
                    marginBottom: '0.3rem',
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: 'Bricolage Grotesque, sans-serif',
                    fontSize: '1rem', fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'var(--text-1)',
                    marginBottom: '0.4rem',
                  }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: '0.855rem', color: 'var(--text-2)', lineHeight: 1.75 }}>
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
