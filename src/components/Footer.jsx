export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="footer-content">
        <p>© 2026 • Built with React & Vite by <strong>John Roman Ruga</strong></p>
        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Back to Top">
          ↑ Back to Top
        </button>
      </div>
    </footer>
  )
}
