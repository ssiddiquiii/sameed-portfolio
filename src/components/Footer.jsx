import { NAV_LINKS } from "../data";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const socials = [
  {
    href: "https://github.com/ssiddiquiii",
    icon: <GitHubIcon />,
    label: "GitHub",
    hoverBg: "rgba(240,244,255,0.08)",
    hoverBorder: "rgba(240,244,255,0.3)",
    hoverColor: "#f0f4ff",
  },
  {
    href: "https://www.linkedin.com/in/ssiddiquii/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    hoverBg: "rgba(10,102,194,0.12)",
    hoverBorder: "rgba(10,102,194,0.45)",
    hoverColor: "#0A66C2",
  },
  {
    href: "mailto:sameedsiddiqui9@gmail.com",
    icon: <EmailIcon />,
    label: "Email",
    hoverBg: "rgba(52,211,153,0.1)",
    hoverBorder: "rgba(52,211,153,0.4)",
    hoverColor: "#34D399",
  },
];

export default function Footer() {
  return (
    <footer className="footer-main">
      {/* ── Animated gradient top border ───────────────────────── */}
      <div className="footer-gradient-line" />

      {/* ── Ghost watermark text ───────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-0.15em",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Bricolage Grotesque, sans-serif",
          fontSize: "clamp(4rem, 14vw, 10rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          background:
            "linear-gradient(180deg, var(--text-1) 0%, transparent 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: 0.04,
        }}
      >
        SAMEED SIDDIQUI
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="footer-inner">
        {/* Top row — brand + nav links */}
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="footer-logo">SS.</div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-2)",
                lineHeight: 1.7,
                maxWidth: "280px",
                marginTop: "0.4rem",
              }}
            >
              MERN stack developer building clean, scalable backend systems.
            </p>
          </div>

          {/* Quick nav links */}
          <nav className="footer-nav">
            <div
              style={{
                fontFamily: "Fira Code, monospace",
                fontSize: "0.65rem",
                color: "var(--text-3)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              // quick_links
            </div>
            <div className="footer-nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* Social icons */}
          <div>
            <div
              style={{
                fontFamily: "Fira Code, monospace",
                fontSize: "0.65rem",
                color: "var(--text-3)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              // connect
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  title={s.label}
                  className="footer-social-btn"
                  onMouseOver={(e) => {
                    const el = e.currentTarget;
                    el.style.background = s.hoverBg;
                    el.style.borderColor = s.hoverBorder;
                    el.style.color = s.hoverColor;
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = `0 8px 22px ${s.hoverBg}`;
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--surface)";
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-2)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row — copyright + built with */}
        <div className="footer-bottom">
          <div
            style={{
              fontSize: "0.78rem",
              color: "var(--text-3)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              flexWrap: "wrap",
            }}
          >
            <span>© {new Date().getFullYear()} Sameed Siddiqui</span>
            <span style={{ color: "var(--border)", fontSize: "0.6rem" }}>●</span>
            <span>All rights reserved</span>
          </div>

          <div
            style={{
              fontFamily: "Fira Code, monospace",
              fontSize: "0.7rem",
              color: "var(--text-3)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span style={{ color: "var(--accent)", opacity: 0.6 }}>//</span>
            sys.status:{" "}
            <span style={{ color: "var(--accent-2)" }}>online</span>
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--accent-2)",
                display: "inline-block",
                animation: "pulse 2.5s ease infinite",
                marginLeft: "0.2rem",
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
