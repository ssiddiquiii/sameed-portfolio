import { EXPERIENCE, EDUCATION } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2 className="section-label">Experience</h2>
        <p className="section-desc">Engineering roles, internships, and cloud education.</p>
      </div>

      <div className="exp-stack">
        {EXPERIENCE.map((exp) => (
          <div key={`${exp.org}-${exp.role}`} className="exp-item">
            <div className="exp-header">
              <div className="exp-title-row">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-org">@{exp.org}</span>
                {exp.type && <span className="exp-type">{exp.type}</span>}
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            <p className="exp-desc">{exp.desc}</p>
          </div>
        ))}
      </div>

      <div className="section-head edu-section-head">
        <h3 className="section-sublabel">Certifications & Education</h3>
      </div>

      <div className="edu-stack">
        {EDUCATION.map((edu) => (
          <div key={edu.title} className="edu-item">
            <h4 className="edu-title">
              {edu.href ? (
                <a href={edu.href} target="_blank" rel="noopener noreferrer" className="edu-link">
                  {edu.title} <span className="arrow-icon" aria-hidden="true">↗</span>
                </a>
              ) : (
                edu.title
              )}
            </h4>
            <span className="edu-meta">{edu.meta}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
