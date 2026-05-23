import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import { LanguageProvider } from './hooks/useLanguage'

function AppContent() {
  useEffect(() => {
    const glow = document.getElementById('cursorGlow')
    if (!glow) return

    let mouseX = 0
    let mouseY = 0
    let glowX = 0
    let glowY = 0
    const speed = 0.08

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    let animationId
    const animate = () => {
      glowX += (mouseX - glowX) * speed
      glowY += (mouseY - glowY) * speed
      glow.style.left = `${glowX}px`
      glow.style.top = `${glowY}px`
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <div className="cursor-glow" id="cursorGlow"></div>
      <Navbar />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Education /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
