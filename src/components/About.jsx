export function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header center">
        <span className="section-tag">// 01 . ABOUT</span>
        <h2>Engineering & Gameplay Design</h2>
      </div>

      <div className="about-grid">
        <div className="about-image-wrapper">
          <div className="image-frame">
            <img src="/gradme.jpg" alt="John Roman Ruga" className="about-image" />
            <div className="image-overlay-border"></div>
          </div>
          <div className="about-badge">
            <span className="badge-icon">🎮</span>
            <div>
              <strong>Game Dev Specialist</strong>
              <p>BS Information Technology</p>
            </div>
          </div>
        </div>

        <div className="about-copy">
          <h3>Turning Complex Logic Into Engaging Interactive Software</h3>
          <p>
            I am a Junior Information Technology student specializing in Game Development at the University of Perpetual Help System Dalta. My core focus lies at the convergence of 2D/3D gameplay engineering, full-stack web architecture, and database optimization.
          </p>
          <p>
            Whether architecting dynamic gameplay systems in C# and GDScript, developing top-down survival engines in GDevelop, or constructing robust database-backed web applications, I bring a methodical, performance-oriented mindset to every project.
          </p>

          {/* 4 Pillars Grid */}
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-head">
                <span className="pillar-num">01</span>
                <h4>Game Systems</h4>
              </div>
              <p>State machines, player physics, AI pathfinding, and combat mechanics in C# & GDScript.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-head">
                <span className="pillar-num">02</span>
                <h4>Web Architectures</h4>
              </div>
              <p>Responsive interfaces, modern UI frameworks, and state management using React & Vite.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-head">
                <span className="pillar-num">03</span>
                <h4>Database Engineering</h4>
              </div>
              <p>Relational schema design, MySQL queries, transaction handling, and role authentication.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-head">
                <span className="pillar-num">04</span>
                <h4>Interactive UX</h4>
              </div>
              <p>Intuitive player controls, aesthetic design hierarchy, fluid animations, and visual polish.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
