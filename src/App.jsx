import { useEffect } from 'react'
import { useScrollReveal, useActiveNav } from './hooks/useScrollReveal'

import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Stack     from './components/Stack'
import Services  from './components/Services'
import Projects  from './components/Projects'
import Process   from './components/Process'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import ScrollTop from './components/ScrollTop'

function Divider() {
  return <div style={{ height: '1px', background: 'var(--border)' }} />
}

export default function App() {
  useScrollReveal()
  useActiveNav()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Stack />
        <Divider />
        <Services />
        <Divider />
        <Projects />
        <Divider />
        <Process />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
