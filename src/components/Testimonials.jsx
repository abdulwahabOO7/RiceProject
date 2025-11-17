import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

function Testimonials() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardRefs = useRef([])
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [isTitleVisible, setIsTitleVisible] = useState(false)

  const testimonials = [
    {
      id: 1,
      quote: "This rice takes my cooking to the next level! My family loves the soft, fragrant grains.",
      author: "— Afifa Akbar"
    },
    {
      id: 2,
      quote: "Har dafa perfect pakne wale chawal quality zabardast hai aur taste be",
      author: "— Faizan"
    },
    {
      id: 3,
      quote: "Khaalis, taaza, aur khushbudar—jaise asal Basmat chawal hone chahiye",
      author: "— Madiha Naqvi"
    }
  ]

  useEffect(() => {
    const observers = []

    // Title observer
    if (titleRef.current) {
      const titleObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsTitleVisible(true)
              titleObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.3 }
      )
      titleObserver.observe(titleRef.current)
      observers.push(titleObserver)
    }

    // Card observers
    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]))
              observer.unobserve(card)
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="section-container">
        <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'animate-in' : ''}`}>Customer Testimonials</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`testimonial-card ${visibleCards.has(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="stars">★★★★★</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="author-container">
                <div className="author-line"></div>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

