import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <h2 className="section-label">Tech Stack & Tools</h2>
        <p className="section-desc">Languages, backend architectures, databases, and tooling I work with daily.</p>
      </div>

      <div className="skills-container">
        {SKILLS.map((grp) => (
          <div key={grp.category} className="skill-row">
            <span className="skill-cat">{grp.category}</span>
            <div className="skill-pills">
              {grp.items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
