export function Hero({ roleText }) {
  const marqueeSkills = [
    'C#', 'JavaScript', 'Unity', 'Godot', 'GDevelop', 'RPG Maker MZ', 
    'React', 'Vite', 'Python', 'GDScript', 'MySQL', 'VB.NET', 
    'HTML5', 'CSS3', 'Git', 'C', 'C++'
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <div className="status-pill">
          <span className="status-dot"></span>
          <span>Available for Game & Web Development opportunities</span>
        </div>
        <h1>JOHN ROMAN RUGA</h1>
        <div className="role-container">
          <span className="role-prefix">I build </span>
          <span className="typing-text">{roleText}</span>
        </div>

        <p className="hero-bio">
          Crafting high-performance game mechanics, scalable web architectures, and interactive digital experiences with precision engineering.
        </p>

        <div className="hero-cta-group">
          <a href="#projects" className="cta-primary">
            Explore Projects
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="cta-secondary">
            Get In Touch
          </a>
        </div>

        {/* Quick Metrics Bar */}
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-number">4+</span>
            <span className="metric-label">Key Systems & Games</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">15+</span>
            <span className="metric-label">Languages & Tools</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">BS IT</span>
            <span className="metric-label">Game Dev Spec.</span>
          </div>
        </div>

        {/* Skill Chip Marquee */}
        <div className="skill-marquee-wrapper">
          <div className="skill-marquee">
            {marqueeSkills.concat(marqueeSkills).map((skill, idx) => (
              <span key={idx} className="skill-chip">
                <span className="chip-dot"></span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
