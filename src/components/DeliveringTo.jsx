import { useEffect, useRef, useState } from 'react'
import './DeliveringTo.css'

function DeliveringTo() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardRefs = useRef([])
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [isTitleVisible, setIsTitleVisible] = useState(false)

  const cities = [
    { id: 1, name: "LAHORE", image: "/Cities/Lahore.jpeg" },
    { id: 2, name: "GUJRANWALA", image: "/Cities/gujranwala.jpeg" },
    { id: 3, name: "RAWALPINDI", image: "/Cities/rawalpindi.jpeg" },
    { id: 4, name: "ISLAMABAD", image: "/Cities/Islamabad.jpg" },
    { id: 5, name: "GUJARKHAN", image: "/Cities/gujarKhan.jpeg" },
    { id: 6, name: "FAISALABAD", image: "/Cities/faislabad.jpg" }
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
    <section ref={sectionRef} className="delivering-to-section">
      <div className="delivering-background">
        <div className="delivering-overlay">
          <div className="section-container">
            <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'animate-in' : ''}`}>Delivering to:</h2>
            
            <div className="cities-grid">
              {cities.map((city, index) => (
                <div
                  key={city.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`city-card ${visibleCards.has(index) ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="city-image-container">
                    <img src={city.image} alt={city.name} className="city-image" />
                  </div>
                  <h3 className="city-name">{city.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveringTo

