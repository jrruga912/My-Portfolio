import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL } from '../data'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')
  const [formError, setFormError] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((c) => ({ ...c, [name]: value }))
    if (formStatus !== 'idle') {
      setFormStatus('idle')
      setFormError('')
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormStatus('error')
      setFormError('Email service is offline. Please email directly.')
      return
    }

    setFormStatus('sending')
    setFormError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          to_email: CONTACT_EMAIL,
          subject: formData.subject,
          message: formData.message.trim(),
        },
        EMAILJS_PUBLIC_KEY,
      )
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setFormStatus('error')
      setFormError('Failed to send message.')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="section-header">
          <span className="section-tag">// 05 . GET IN TOUCH</span>
          <h2>Contact Me</h2>
          <p className="contact-subtitle">Interested in collaborating or discussing opportunities? Send a message below!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-summary">
            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="contact-box contact-box-linkedin"
              aria-label="LinkedIn Profile"
            >
              <div className="contact-box-left">
                <div className="contact-icon contact-icon-linkedin">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div className="contact-box-info">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">John Roman Ruga</span>
                </div>
              </div>
              <div className="contact-action-badge">
                <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>
            </a>

            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="contact-box contact-box-github"
              aria-label="GitHub Profile"
            >
              <div className="contact-box-left">
                <div className="contact-icon contact-icon-github">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </div>
                <div className="contact-box-info">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">jrruga912</span>
                </div>
              </div>
              <div className="contact-action-badge">
                <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>
            </a>

            <div 
              className={`contact-box contact-box-email ${copiedEmail ? 'copied' : ''}`} 
              onClick={handleCopyEmail}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCopyEmail()}
            >
              <div className="contact-box-left">
                <div className="contact-icon contact-icon-email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="contact-box-info">
                  <span className="contact-label">Direct Email</span>
                  <span className="contact-value">{CONTACT_EMAIL}</span>
                </div>
              </div>
              <span className="copy-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {copiedEmail ? (
                    <polyline points="20 6 9 17 4 12" />
                  ) : (
                    <>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </>
                  )}
                </svg>
                {copiedEmail ? 'Copied! ✓' : 'Click to copy'}
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="contact-row">
              <label>
                Full Name *
                <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your full name" required />
              </label>
              <label>
                Email Address *
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="your.email@example.com" required />
              </label>
            </div>
            <label>
              Subject *
              <select name="subject" value={formData.subject} onChange={handleFormChange} required>
                <option value="">Select inquiry subject</option>
                <option>Game Development Inquiry</option>
                <option>Web Development Inquiry</option>
                <option>Job / Internship Opportunity</option>
                <option>General Question</option>
              </select>
            </label>
            <label>
              Message *
              <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Tell me about your project or opportunity..." required></textarea>
            </label>
            {formStatus === 'success' && <p className="form-feedback form-feedback--success">✓ Message sent successfully!</p>}
            {formStatus === 'error' && <p className="form-feedback form-feedback--error">{formError} <a href={`mailto:${CONTACT_EMAIL}`}>Email directly</a></p>}
            <button type="submit" disabled={formStatus === 'sending'} className="cta-primary full-width">
              {formStatus === 'sending' ? 'Sending...' : 'Send Message ↗'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
