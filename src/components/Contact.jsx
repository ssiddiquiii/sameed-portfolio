import { PROFILE } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-head">
        <h2 className="section-label">Contact</h2>
      </div>

      <p className="contact-line">
        Feel free to reach out for backend engineering roles, collaborations, or questions at{' '}
        <a href={`mailto:${PROFILE.email}`} className="contact-email">
          {PROFILE.email}
        </a>
        .
      </p>
    </section>
  )
}
