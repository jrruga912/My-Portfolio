export function Navbar({ activeNav, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a href="#home" className="logo-link">
          <span className="logo-badge">// JR</span>
          <span className="logo-text">JOHN ROMAN RUGA</span>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#projects" className={activeNav === 'projects' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#education" className={activeNav === 'education' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Education</a></li>
          <li><a href="#skills" className={activeNav === 'skills' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            <span>Resume</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <button 
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>
    </header>
  )
}

