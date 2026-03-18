import { useTheme } from '../context/ThemeContext'
import { STACK, SKILLS } from '../data'

const ThunderClientIcon = () => (
  <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" stroke="#9061C2" strokeWidth="2" />
    <path d="M12.5 6.5l-4.5 6h3.5v5l4.5-6h-3.5v-5z" fill="#9061C2" stroke="#9061C2" strokeLinejoin="round" strokeWidth="1" />
  </svg>
);

export default function Stack() {
  const { theme } = useTheme();

  return (
    <section id="stack" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">Tech Stack</div>
          <h2 className="section-title">Tools of the Trade</h2>
          <p className="section-sub">The MERN ecosystem and surrounding tools I use to build production-grade applications end to end.</p>
        </div>

        {/* Pill grid */}
        <div className="reveal delay-2" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '3rem' }}>
          {STACK.map((s) => (
            <div key={s.name} className="tech-pill">
              <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                {s.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}`}
                    alt={s.name}
                    style={{
                      width: '1.2rem',
                      height: '1.2rem',
                      filter: s.invertOnDark && theme === 'dark' ? 'invert(1)' : 'none',
                    }}
                  />
                ) : s.customSvg === 'thunder' ? (
                  <ThunderClientIcon />
                ) : (
                  s.icon
                )}
              </span>
              {s.name}
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1rem', marginTop: '3rem' }}>
          {SKILLS.map((s, i) => (
            <div key={s.name} className={`skill-bar-card reveal delay-${i + 1}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-1)' }}>{s.name}</span>
                <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.75rem', color: 'var(--accent)' }}>{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" data-width={s.pct} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
