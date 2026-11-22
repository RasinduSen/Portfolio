import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <div className="app">
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
  )
}

export default App
