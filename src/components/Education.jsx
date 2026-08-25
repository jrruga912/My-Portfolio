export function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C# / Java)",
    "Database Management & SQL",
    "Game Engine Architecture",
    "Software Engineering & Git Workflow",
    "Web Development & APIs"
  ]

  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <span className="section-tag">// 03 . ACADEMIC JOURNEY</span>
        <h2>Education & Qualifications</h2>
      </div>

      <div className="education-card">
        <div className="education-card-grid">
          <div className="education-intro">
            <div className="education-logo-wrapper">
              <img src="/perps.png" alt="PERPS Logo" className="education-logo" />
            </div>

            <div className="education-heading-group">
              <h3>University of Perpetual Help System Dalta</h3>
              <p className="degree-title">Bachelor of Science in Information Technology</p>
              <div className="specialization-badge">
                <span className="badge-dot"></span>
                <span>Specialization in Game Development</span>
              </div>
            </div>

            <div className="education-meta">
              <div className="meta-item">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Sept 2022 — July 2026</span>
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Las Piñas, Philippines</span>
              </div>
            </div>
          </div>

          <div className="education-details">
            <div className="education-block">
              <h4>Relevant Coursework</h4>
              <div className="coursework-grid">
                {coursework.map((course, idx) => (
                  <div key={idx} className="coursework-chip">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

