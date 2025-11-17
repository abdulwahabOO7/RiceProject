import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: 'url(/HomeBanner/banner.webp)' }}>
      <div className="hero-decorative-border"></div>
      <div className="hero-overlay"></div>
      
      {/* Reviews Tab */}
      <div className="reviews-tab">
        <span>★</span> Reviews
      </div>

      {/* WhatsApp Icon */}
      <div className="whatsapp-icon">
        <span>💬</span>
      </div>
    </section>
  )
}

export default Hero

