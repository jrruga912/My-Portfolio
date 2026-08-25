import { useState, useEffect } from 'react'

export function ProjectModal({ project, onClose }) {
  const [activeModalImage, setActiveModalImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') setIsLightboxOpen(false)
        if (e.key === 'ArrowRight' && project?.gallery) {
          setActiveModalImage((prev) => (prev + 1) % project.gallery.length)
        }
        if (e.key === 'ArrowLeft' && project?.gallery) {
          setActiveModalImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, project])

  if (!project) return null

  const handlePrevImage = (e) => {
    e.stopPropagation()
    setActiveModalImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  const handleNextImage = (e) => {
    e.stopPropagation()
    setActiveModalImage((prev) => (prev + 1) % project.gallery.length)
  }

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✕</button>
          
          <div className="modal-header">
            <span className="project-badge">{project.badge}</span>
            <h2>{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>

          <div className="modal-gallery">
            <div 
              className="main-preview-box clickable-preview" 
              onClick={() => setIsLightboxOpen(true)}
              title="Click to view full screen design"
            >
              <img src={project.gallery[activeModalImage]} alt={project.title} />
              <div className="preview-expand-hint">
                <span>🔍 Click to expand full design screen</span>
              </div>
            </div>
            {project.gallery.length > 1 && (
              <div className="gallery-thumbnails">
                {project.gallery.map((imgSrc, idx) => (
                  <button 
                    key={idx} 
                    className={`thumb-btn ${activeModalImage === idx ? 'active' : ''}`}
                    onClick={() => setActiveModalImage(idx)}
                  >
                    <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="modal-body">
            <h3>Overview & Technical Implementation</h3>
            <p>{project.fullDesc}</p>

            <h4>Technologies & Tools Utilized</h4>
            <div className="tech-pills">
              {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>

            <div className="modal-actions">
              {project.detailsUrl && (
                <a 
                  href={project.detailsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-primary"
                >
                  Open Dedicated Page ↗
                </a>
              )}
              <button className="cta-secondary" onClick={() => setIsLightboxOpen(true)}>
                🔍 Full Screen View ({activeModalImage + 1} / {project.gallery.length})
              </button>
              <button className="cta-secondary" onClick={onClose}>Close Preview</button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Lightbox Overlay */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)} title="Close Fullscreen (Esc)">
              ✕ Close
            </button>
            
            <div className="lightbox-header">
              <h3>{project.title} — Full Screen Inspection</h3>
              <span className="lightbox-counter">Screen {activeModalImage + 1} of {project.gallery.length}</span>
            </div>

            <div className="lightbox-media-wrapper">
              {project.gallery.length > 1 && (
                <button className="lightbox-nav-btn nav-prev" onClick={handlePrevImage} title="Previous Image (←)">
                  ‹
                </button>
              )}
              
              <img 
                src={project.gallery[activeModalImage]} 
                alt={`${project.title} design screen ${activeModalImage + 1}`} 
                className="lightbox-image"
              />

              {project.gallery.length > 1 && (
                <button className="lightbox-nav-btn nav-next" onClick={handleNextImage} title="Next Image (→)">
                  ›
                </button>
              )}
            </div>

            <div className="lightbox-footer">
              <span className="lightbox-filename">{project.gallery[activeModalImage]}</span>
              <span className="lightbox-hint">Tip: Use Arrow Keys (← / →) to switch screens, ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
