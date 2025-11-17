import './VideoHero.css'

function VideoHero() {
  return (
    <section className="video-hero-section">
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/Video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </section>
  )
}

export default VideoHero

