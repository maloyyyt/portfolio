import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import useReveal from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App