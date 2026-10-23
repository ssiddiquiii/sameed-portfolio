import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Activity from './components/Activity'
import Skills from './components/Skills'
// import Experience from './components/Experience'
import Work from './components/Work'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>
          <Hero />
          {/* <Activity /> */}
          <Skills />
          {/* <Experience /> */}
          <Work />
          <Courses />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
