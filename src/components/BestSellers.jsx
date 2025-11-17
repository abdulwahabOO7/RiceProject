import { useEffect, useRef, useState } from 'react'
import './BestSellers.css'

function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Safeena Classic Aged (20 kg) XXXL",
      price: "RS.8,495.00"
    },
    {
      id: 2,
      name: "Safeena Classic Aged (5 kg) - XXXL Export Quality",
      price: "RS.2,845.00"
    }
  ]

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardRefs = useRef([])
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [isTitleVisible, setIsTitleVisible] = useState(false)

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
          threshold: 0.1,
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
    <section ref={sectionRef} className="best-sellers-section">
      <div className="section-divider"></div>
      <div className="section-container">
        <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'animate-in' : ''}`}>Best sellers</h2>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`product-card ${visibleCards.has(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="product-image">
                <img src="/ProductImage/productImage.png" alt={product.name} className="product-img" />
                <div className="image-overlay"></div>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="show-now-btn">
                <span>Show Now</span>
                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers

