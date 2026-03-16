import { useEffect } from 'react'

/**
 * Observes all .reveal, .reveal-left, .reveal-right elements
 * and adds .visible when they enter the viewport.
 * Also triggers .skill-fill[data-width] bars.
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const skillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.style.width = e.target.dataset.width + '%'
            }, 200)
            skillObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => revealObs.observe(el))

    document
      .querySelectorAll('.skill-fill[data-width]')
      .forEach((el) => skillObs.observe(el))

    return () => {
      revealObs.disconnect()
      skillObs.disconnect()
    }
  }, [])
}

/**
 * Highlights the active nav link as the user scrolls through sections.
 */
export function useActiveNav() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const links    = document.querySelectorAll('.nav-link-item')

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((a) => {
              a.classList.toggle(
                'active',
                a.getAttribute('href') === '#' + e.target.id
              )
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])
}
