export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header center">
        <span className="section-tag">// 04 . TECHNICAL STACK</span>
        <h2>Tools & Technologies</h2>
      </div>

      <div className="skills-matrix">
        <div className="skill-category-card">
          <div className="category-header">
            <span className="category-icon">⚡</span>
            <h3>Game Engines & Frameworks</h3>
          </div>
          <div className="skill-pills">
            <span className="skill-badge highlight">Unity</span>
            <span className="skill-badge highlight">Godot Engine</span>
            <span className="skill-badge highlight">GDevelop</span>
            <span className="skill-badge highlight">RPG Maker MZ</span>
            <span className="skill-badge">2D Physics Engines</span>
            <span className="skill-badge">Tilemap & Sprite Editors</span>
          </div>
        </div>

        <div className="skill-category-card">
          <div className="category-header">
            <span className="category-icon">💻</span>
            <h3>Programming Languages</h3>
          </div>
          <div className="skill-pills">
            <span className="skill-badge highlight">C#</span>
            <span className="skill-badge highlight">JavaScript</span>
            <span className="skill-badge highlight">GDScript</span>
            <span className="skill-badge">Java</span>
            <span className="skill-badge">C / C++</span>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">VB.NET</span>
          </div>
        </div>

        <div className="skill-category-card">
          <div className="category-header">
            <span className="category-icon">🌐</span>
            <h3>Web & Database Engineering</h3>
          </div>
          <div className="skill-pills">
            <span className="skill-badge highlight">React.js</span>
            <span className="skill-badge highlight">Vite</span>
            <span className="skill-badge highlight">MySQL</span>
            <span className="skill-badge highlight">phpMyAdmin</span>
            <span className="skill-badge">HTML5 / CSS3</span>
            <span className="skill-badge">Git & GitHub</span>
            <span className="skill-badge">REST APIs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
