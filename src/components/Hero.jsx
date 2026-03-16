import { useEffect, useRef, useState } from 'react'

/* ── Animated counter hook ──────────────────────────────────────── */
function useCountUp(target, duration = 1800, startOnMount = false) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(startOnMount)
  const ref = useRef(null)

  // Trigger via IntersectionObserver
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.5 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // Run the count-up
  useEffect(() => {
    if (!triggered) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  return { count, ref }
}

/* ── Single stat item ───────────────────────────────────────────── */
function StatItem({ num, suffix = '+', label, delay = 0, divider }) {
  const target = parseInt(num)
  const { count, ref } = useCountUp(target, 1600)

  return (
    <div
      ref={ref}
      style={{
        padding: '0 clamp(1.5rem,4vw,3rem)',
        textAlign: 'center',
        borderRight: divider ? '1px solid var(--border)' : 'none',
        animation: `revealUp 0.7s var(--ease) ${delay}s both`,
      }}
    >
      <div
        className="stat-num"
        style={{
          fontVariantNumeric: 'tabular-nums',
          minWidth: '3ch',
          display: 'inline-block',
        }}
      >
        {count}{suffix}
      </div>
      <div style={{
        fontSize: '0.72rem',
        color: 'var(--text-3)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginTop: '0.25rem',
        fontFamily: 'Fira Code, monospace',
      }}>
        {label}
      </div>
    </div>
  )
}

/* ── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>

        {/* Badge */}
        <div className="hero-badge hero-stagger-1">
          <span className="status-dot" />
          available_for_work · karachi, pk
        </div>

        {/* Name */}
        <h1 className="hero-name hero-stagger-2">
          <span style={{ display: 'block', color: 'var(--text-1)' }}>Sameed</span>
          <span className="shimmer-text" style={{ display: 'block' }}>Siddiqui.</span>
        </h1>

        {/* Role */}
        <p className="hero-stagger-3" style={{
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: 'clamp(1.1rem,2.5vw,1.6rem)', fontWeight: 500,
          color: 'var(--text-2)', marginBottom: '1.5rem', letterSpacing: '-0.01em',
        }}>
          MERN Stack <span style={{ color: 'var(--accent)' }}>Developer</span>
        </p>

        {/* Description */}
        <p className="hero-stagger-4" style={{
          fontSize: 'clamp(0.9rem,1.5vw,1.05rem)',
          color: 'var(--text-2)', lineHeight: 1.85,
          maxWidth: '580px', margin: '0 auto 2.5rem',
        }}>
          I engineer production-ready web applications — robust Node.js APIs,
          scalable MongoDB architectures, and precise React interfaces. I care about
          the{' '}
          <em style={{ color: 'var(--text-1)', fontStyle: 'normal', fontWeight: 600 }}>why</em>
          {' '}behind every decision.
        </p>

        {/* CTAs */}
        <div className="hero-cta hero-stagger-5" style={{
          display: 'flex', gap: '1rem',
          justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '4rem',
        }}>
          <a href="#projects" className="cta-primary">View My Work →</a>
          <a href="#contact"  className="cta-secondary">Let's Collaborate</a>
        </div>

        {/* Stats — dynamic counters */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <StatItem num="5"  label="Projects Built"  delay={0.65} divider />
          <StatItem num="1"  label="Year in Dev"      delay={0.72} divider />
          <StatItem num="13" label="Technologies"     delay={0.79} />
        </div>

      </div>
    </section>
  )
}
