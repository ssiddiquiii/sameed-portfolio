import { useState } from "react";
import emailjs from "@emailjs/browser";

/* ── SVG Icons ─────────────────────────────────────────────────── */
const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ── Contact items ──────────────────────────────────────────────── */
const CONTACT_ITEMS = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "sameed@sameedsiddiqui.me",
    href: "mailto:sameed@samedsiddiqui.me",
    accent: "#60A5FA",
    accentBg: "rgba(96,165,250,0.1)",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    value: "github.com/ssiddiquiii",
    href: "https://github.com/ssiddiquiii",
    accent: "var(--text-1)",
    accentBg: "var(--surface)",
  },
  {
    icon: <GlobeIcon />,
    label: "Portfolio",
    value: "sameedsiddiqui.me",
    href: "https://sameedsiddiqui.me",
    accent: "#34D399",
    accentBg: "rgba(52,211,153,0.1)",
  },
  {
    icon: <MapPinIcon />,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.1)",
  },
];

/* ── Component ──────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  // Added "loading" state for API feedback
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  /* ── Core Execution Logic ─────────────────────────────────────── */
  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }

    setStatus("loading");

    const templateParams = {
      name: form.name,
      email: form.email,
      project: form.project,
      budget: form.budget,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", project: "", budget: "", message: "" });
      }, 3500);
    } catch (error) {
      console.error("Jarvis System Error - EmailJS Dispatch Failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="container">
        {/* Heading */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Let's Build Something.
          </h2>
          <p
            className="section-sub"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Have a project in mind? Reach out — I respond within 24 hours.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(2rem,5vw,4.5rem)",
            alignItems: "start",
            marginTop: "3rem",
          }}
        >
          {/* ── Left — info card ─────────────────────────────── */}
          <div className="reveal-left">
            <div className="contact-info-card">
              <h3
                style={{
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                Get in Touch
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                }}
              >
                Whether it's a freelance project, a collaboration, or just
                saying hi — my inbox is always open.
              </p>

              {/* Contact rows */}
              {CONTACT_ITEMS.map((c) => {
                const inner = (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem 0.85rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                      marginBottom: "0.75rem",
                      transition: "all 0.22s cubic-bezier(0.16,1,0.3,1)",
                      cursor: c.href ? "pointer" : "default",
                      minWidth: 0,
                      overflow: "hidden",
                    }}
                    onMouseOver={(e) => {
                      if (!c.href) return;
                      e.currentTarget.style.borderColor = c.accent + "66";
                      e.currentTarget.style.transform = "translateX(5px)";
                      e.currentTarget.style.background = c.accentBg;
                    }}
                    onMouseOut={(e) => {
                      if (!c.href) return;
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.background = "var(--bg)";
                    }}
                  >
                    {/* Icon box */}
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "9px",
                        background: c.accentBg,
                        border: `1px solid ${c.accent}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: c.accent,
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </div>

                    {/* Text */}
                    <div style={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
                      <div
                        style={{
                          fontSize: "0.65rem",
                          color: "var(--text-3)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "0.15rem",
                          fontFamily: "Fira Code, monospace",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: "var(--text-1)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.value}
                      </div>
                    </div>

                    {/* Arrow for links */}
                    {c.href && (
                      <div
                        style={{
                          marginLeft: "auto",
                          color: "var(--text-3)",
                          fontSize: "0.8rem",
                          flexShrink: 0,
                        }}
                      >
                        →
                      </div>
                    )}
                  </div>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>

            {/* SLA note */}
            <div
              style={{
                marginTop: "1rem",
                padding: "1.25rem",
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p
                style={{
                  fontFamily: "Fira Code, monospace",
                  fontSize: "0.7rem",
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                }}
              >
                // response_sla
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                }}
              >
                I typically respond within{" "}
                <strong style={{ color: "var(--text-1)" }}>24 hours</strong>.
                For urgent projects, mention it in your message.
              </p>
            </div>
          </div>

          {/* ── Right — form ──────────────────────────────────── */}
          <div className="contact-form-card reveal-right">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
              className="form-row"
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-2)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Full Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set("name")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-2)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--text-2)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Project Type
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="e.g. Full-stack app, REST API..."
                value={form.project}
                onChange={set("project")}
              />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--text-2)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Budget Range
              </label>
              <select
                className="form-input"
                value={form.budget}
                onChange={set("budget")}
                style={{ cursor: "pointer" }}
              >
                <option value="">Select a range</option>
                <option>Under $500</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000+</option>
              </select>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--text-2)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Message
              </label>
              <textarea
                className="form-input"
                rows={5}
                style={{ resize: "vertical", minHeight: "130px" }}
                placeholder="Tell me about your project — requirements, timeline, tech stack..."
                value={form.message}
                onChange={set("message")}
              />
            </div>

            <button
              className={`form-submit${status === "success" ? " success" : ""}`}
              onClick={submit}
              disabled={status === "loading" || status === "success"}
              style={
                status === "error"
                  ? { background: "#ef4444", boxShadow: "none" }
                  : status === "loading"
                    ? { opacity: 0.7, cursor: "not-allowed" }
                    : undefined
              }
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "✓ Message Sent! I'll be in touch."
                  : status === "error"
                    ? "Please fill all required fields."
                    : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
