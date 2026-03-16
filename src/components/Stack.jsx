import { STACK, SKILLS } from '../data'

export default function Stack() {
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
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, flexShrink: 0, display: 'inline-block' }} />
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
