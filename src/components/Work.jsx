import { PROJECTS } from '../data'

export default function Work() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <h2 className="section-label">Projects</h2>
        <p className="section-desc">Some of the software projects I've built and maintain.</p>
      </div>

      <div className="card-stack">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card"
          >
            <div className="product-head">
              <h3 className="product-title">{p.title}</h3>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </div>
            <p className="product-desc">{p.desc}</p>
            {p.tags && (
              <div className="product-tags">
                {p.tags.map((t) => (
                  <span key={t} className="product-tag">{t}</span>
                ))}
              </div>
            )}
            <span className="product-domain">{p.domain}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
