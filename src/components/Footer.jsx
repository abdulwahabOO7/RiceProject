import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  })
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', comment: '' })
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', newsletterEmail)
    alert('Thank you for subscribing!')
    setNewsletterEmail('')
  }

  return (
    <footer className="footer-section">
      <div className="footer-top-bar"></div>
      
      <div className="footer-container">
        {/* Inquiries Section */}
        <section className="inquiries-section">
          <div className="inquiries-header">
            <h2 className="inquiries-title">Inquiries testing</h2>
            <p className="inquiries-subtitle">Please send us a message for more information or bulk orders</p>
          </div>
          
          <div className="inquiries-content">
            <div className="map-container">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1234567890123!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e246d!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
            
            <div className="form-container">
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input full-width"
                />
                <textarea
                  name="comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="4"
                ></textarea>
                <button type="submit" className="send-button">Send</button>
              </form>
            </div>
          </div>
        </section>

        {/* Customer Care */}
        <section className="customer-care-section">
          <h3 className="customer-care-title">Safeena 12/7 Customer Care:</h3>
          <p className="customer-care-info">+92 308 (SAFEENA) 7233362 | info@safeenafoods.com</p>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <h3 className="newsletter-title">Subscribe today to hear first about our sales</h3>
          <form onSubmit={handleNewsletter} className="newsletter-form">
            <input
              type="email"
              placeholder="Email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">→</button>
          </form>
        </section>

        {/* Footer Links */}
        <div className="footer-divider"></div>
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Quick links</h4>
            <ul className="footer-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#shipping">Shipping Details</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#return">Return & Exchange Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-list">
              <li>1. +92 308 (SAFEENA)</li>
              <li>2. Email us</li>
              <li>3. Live chat</li>
            </ul>
            <div className="social-icons">
              <span className="social-icon">f</span>
              <span className="social-icon">in</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

