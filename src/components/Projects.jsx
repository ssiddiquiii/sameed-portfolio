import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">Projects</div>
          <h2 className="section-title">Things I've Shipped</h2>
          <p className="section-sub">A curated selection of MERN projects showing real engineering decisions and production-level code.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))', gap: '1.25rem', marginTop: '3rem' }}>
          {PROJECTS.map((p, i) => (
            <div key={p.num} className={`project-card reveal delay-${i + 1}`}>
              {/* Header */}
              <div className="project-header" style={p.bgStyle}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 60%, ${p.glowColor}, transparent 65%)`,
                }} />
                <span style={{ fontSize: '3.5rem', position: 'relative', zIndex: 1 }}>{p.emoji}</span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.68rem', color: 'var(--text-3)' }}>{p.num}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', fontWeight: 500, color: 'var(--accent-2)' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-2)', display: 'inline-block' }} />
                    {p.status}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6rem', color: 'var(--text-1)' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '1rem', flex: 1 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {p.tags.map((t) => <span key={t} className="ptag">{t}</span>)}
                </div>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <a href={p.github} target="_blank" rel="noreferrer" className="plink primary">GitHub →</a>
                  <a href={p.live}   target="_blank" rel="noreferrer" className="plink">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="https://github.com/ssiddiquiii" target="_blank" rel="noreferrer" className="cta-secondary">
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
