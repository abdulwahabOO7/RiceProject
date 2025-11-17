import { useEffect, useRef, useState } from 'react'
import './OurProducts.css'

function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Safeena Gold Aged (25 kg)",
      price: "RS.9,850.00",
      color: "#ffd700"
    },
    {
      id: 2,
      name: "Safeena Rozana Steamed Aged (25 kg)",
      price: "RS.8,495.00",
      color: "#228b22"
    },
    {
      id: 3,
      name: "Safeena Silver (25 KG)",
      price: "RS.7,945.00",
      color: "#c0c0c0"
    },
    {
      id: 4,
      name: "Safeena Premium Aged Sella (25 kg)",
      price: "RS.9,995.00",
      color: "#8b4513"
    },
    {
      id: 5,
      name: "Safeena Steamed Broken Rice (25 kg)",
      price: "RS.5,985.00",
      color: "#dc143c"
    },
    {
      id: 6,
      name: "Safeena Classic Aged (25 kg) XXXL",
      price: "RS.8,495.00",
      color: "#ffd700"
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
    <section ref={sectionRef} className="our-products-section">
      <div className="section-container">
        <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'animate-in' : ''}`}>Our products</h2>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`product-card ${visibleCards.has(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
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

export default OurProducts

