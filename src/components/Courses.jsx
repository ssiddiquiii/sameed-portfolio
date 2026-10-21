import { COURSES } from '../data'

export default function Courses() {
  return (
    <section id="courses" className="section">
      <div className="section-head">
        <h2 className="section-label">Lectures & Content</h2>
        <p className="section-desc">Technical training series and practical cloud architecture modules.</p>
      </div>

      <div className="card-stack">
        {COURSES.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card"
          >
            <div className="product-head">
              <span className="live-badge">
                <span className="ping-dot" aria-hidden="true">
                  <span className="ping-animate" />
                  <span className="ping-solid" />
                </span>
                {c.status}
              </span>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </div>

            <div>
              <h3 className="product-title" style={{ marginTop: 4 }}>{c.title}</h3>
              <p className="product-desc" style={{ marginTop: 6 }}>{c.desc}</p>
            </div>

            <span className="product-domain">{c.domain}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
