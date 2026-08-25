import { useState } from 'react'
import { projectsData } from '../data'

export function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="projects-section">
      <div className="section-header space-between">
        <div>
          <span className="section-tag">// 02 . FEATURED WORK</span>
          <h2>Selected Projects</h2>
        </div>

        {/* Category Filter Pills */}
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Work
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'gamedev' ? 'active' : ''}`}
            onClick={() => setActiveCategory('gamedev')}
          >
            Game Dev
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'webdev' ? 'active' : ''}`}
            onClick={() => setActiveCategory('webdev')}
          >
            Web & Software
          </button>
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => onSelectProject(project)}
          >
            <div className="project-card-media">
              <img src={project.image} alt={project.title} className="project-thumb" />
              <div className="media-overlay">
                <span className="overlay-btn">View Details & Gallery ↗</span>
              </div>
              <span className="project-badge">{project.badge}</span>
            </div>
            <div className="project-card-content">
              <span className="project-category-tag">{project.tagline}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech-pills">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="card-footer-action">
                <span className="link-action">Inspect Project Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
