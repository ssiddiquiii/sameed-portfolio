import { useRef, useState, useEffect, useCallback } from "react";
import { PROJECTS } from "../data";

/* ── Project SVG Icons ─────────────────────────────────────────── */
const VideoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="44"
    height="44"
  >
    <path d="m22 8-6 4 6 4V8z" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </svg>
);

const UsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="44"
    height="44"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BugIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="44"
    height="44"
  >
    <path d="m8 2 1.88 1.88" />
    <path d="M14.12 3.88 16 2" />
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z" />
    <path d="M12 20v-9" />
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
    <path d="M6 13H2" />
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
    <path d="M22 13h-4" />
    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
  </svg>
);

const NoteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="44"
    height="44"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const ActivityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="44"
    height="44"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

/* ── Arrow Icons ───────────────────────────────────────────────── */
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const ICON_MAP = {
  note: {
    component: <NoteIcon />,
    accent: "#D4D4D8",
    bg: "rgba(212,212,216,0.12)",
    border: "rgba(212,212,216,0.25)",
  },
  users: {
    component: <UsersIcon />,
    accent: "#34D399",
    bg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.25)",
  },
  video: {
    component: <VideoIcon />,
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.25)",
  },
  bug: {
    component: <BugIcon />,
    accent: "#F59E0B",
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
  },
  activity: {
    component: <ActivityIcon />,
    accent: "#60A5FA",
    bg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.25)",
  },
};

export default function Projects() {
  const trackRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /* ── Calculate pages & sync with scroll ──────────────────────── */
  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    setAtStart(scrollLeft <= 2);
    setAtEnd(scrollLeft >= maxScroll - 2);

    // How many cards fit in view?
    const cards = el.querySelectorAll(".project-card");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 20; // card + gap
    const visible = Math.max(1, Math.round(el.clientWidth / cardWidth));
    const pages = Math.max(1, cards.length - visible + 1);
    setTotalPages(pages);

    // Which page are we on?
    const page = Math.min(
      pages - 1,
      Math.round(scrollLeft / cardWidth)
    );
    setActivePage(page);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  /* ── Navigation helpers ──────────────────────────────────────── */
  const scrollToPage = (page) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".project-card");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 20;
    el.scrollTo({ left: page * cardWidth, behavior: "smooth" });
  };

  const prev = () => {
    if (activePage > 0) scrollToPage(activePage - 1);
  };

  const next = () => {
    if (activePage < totalPages - 1) scrollToPage(activePage + 1);
  };

  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-sub">
            Real backend engineering — production-grade APIs, clean
            architecture, real decisions.
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="slider-wrapper reveal" style={{ marginTop: "3rem" }}>
          {/* Scrollable track */}
          <div className="projects-slider" ref={trackRef}>
            {PROJECTS.map((p, i) => {
              const iconKey = Object.keys(ICON_MAP)[i] || "activity";
              const icon = ICON_MAP[iconKey];
              return (
                <div key={p.num} className="project-card">
                  {/* Header — SVG icon centered on gradient bg */}
                  <div className="project-header" style={p.bgStyle}>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(circle at 50% 60%, ${p.glowColor}, transparent 65%)`,
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "72px",
                        height: "72px",
                        borderRadius: "18px",
                        background: icon.bg,
                        border: `1px solid ${icon.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: icon.accent,
                      }}
                    >
                      {icon.component}
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    style={{
                      padding: "1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.6rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Fira Code, monospace",
                          fontSize: "0.68rem",
                          color: "var(--text-3)",
                        }}
                      >
                        {p.num}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          color:
                            p.status === "Building"
                              ? "var(--accent)"
                              : p.status === "Live" || p.status === "Completed"
                                ? "var(--accent-2)"
                                : p.status === "Planned"
                                  ? "var(--accent-3)"
                                  : "var(--text-3)",
                        }}
                      >
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "currentColor",
                            display: "inline-block",
                          }}
                        />
                        {p.status}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "Bricolage Grotesque, sans-serif",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        marginBottom: "0.6rem",
                        color: "var(--text-1)",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-2)",
                        lineHeight: 1.75,
                        marginBottom: "1rem",
                        flex: 1,
                      }}
                    >
                      {p.desc}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.35rem",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {p.tags.map((t) => (
                        <span key={t} className="ptag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "0.6rem" }}>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="plink"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation: arrows + dots */}
        <div className="slider-nav reveal">
          <button
            className={`slider-arrow${atStart ? " disabled" : ""}`}
            onClick={prev}
            aria-label="Previous project"
          >
            <ChevronLeft />
          </button>

          <div className="slider-dots">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`slider-dot${i === activePage ? " active" : ""}`}
                onClick={() => scrollToPage(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={`slider-arrow${atEnd ? " disabled" : ""}`}
            onClick={next}
            aria-label="Next project"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
