import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <section id="projects">
          <h1>Projects</h1>
        </section>

        <Contact />
      </main>
    </div>
  )
}

export default App
