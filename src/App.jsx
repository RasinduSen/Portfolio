import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import BackToTop from './components/BackToTop'
import Ferrofluid from './components/Ferrofluid'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="background-effect" aria-hidden="true">
        <Ferrofluid
          colors={['#7c3aed', '#a855f7', '#c4b5fd']}
          speed={0.35}
          scale={1.6}
          spikeHeight={0.8}
          sharpness={2.5}
          turbulence={0.8}
          fluidity={0.5}
          tilt={48}
          magnetism={1}
          brightness={0.55}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.22}
          clickPulse={false}
          intro={true}
          lightMode={false}
          transparent={true}
          opacity={0.65}
        />
      </div>

      <div className="site-content">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <BackToTop />
        </main>
      </div>
    </div>
  )
}

export default App
