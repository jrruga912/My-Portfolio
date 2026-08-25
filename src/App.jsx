import { useEffect, useState } from 'react'
import { roles } from './data'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [typing, setTyping] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeNav, setActiveNav] = useState('home')
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ['home', 'about', 'projects', 'education', 'skills', 'contact']
      const scrollPos = window.scrollY + 250
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const currentRole = roles[activeRoleIndex]
    let timeout

    if (typing) {
      if (roleText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setRoleText(currentRole.slice(0, roleText.length + 1))
        }, 90)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (roleText.length > 0) {
        timeout = setTimeout(() => {
          setRoleText(currentRole.slice(0, roleText.length - 1))
        }, 45)
      } else {
        timeout = setTimeout(() => {
          setActiveRoleIndex((activeRoleIndex + 1) % roles.length)
          setTyping(true)
        }, 250)
      }
    }

    return () => clearTimeout(timeout)
  }, [activeRoleIndex, roleText, typing])

  return (
    <div className="portfolio">
      {/* Aesthetic Pure CSS Ambient Backdrop */}
      <div className="bg-canvas">
        <div className="bg-grid-pattern" />
        <div 
          className="glow-orb orb-primary" 
          style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0)` }}
        />
        <div 
          className="glow-orb orb-secondary" 
          style={{ transform: `translate3d(0, ${scrollY * -0.08}px, 0)` }}
        />
        <div 
          className="glow-orb orb-tertiary" 
          style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}
        />
        <div className="bg-vignette" />
      </div>

      <div className="content-layer">
        <Navbar 
          activeNav={activeNav} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <Hero roleText={roleText} />
        <About />
        <Projects onSelectProject={setSelectedProject} />
        <Education />
        <Skills />
        <Contact />
        <Footer />

        <ProjectModal 
          key={selectedProject?.id}
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </div>
  )
}

export default App
