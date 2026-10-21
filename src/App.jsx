import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Activity from './components/Activity' // Hidden for now; uncomment when active contributions are ready
import Skills from './components/Skills'
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
          <Work />
          <Courses />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
