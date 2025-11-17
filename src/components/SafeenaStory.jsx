import { useEffect, useRef, useState } from 'react'
import './SafeenaStory.css'

function SafeenaStory() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText1, setDisplayedText1] = useState('')
  const [displayedText2, setDisplayedText2] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const fullText1 = "Safeena Basmati Rice was launched by Amir Rice Mills (Pvt.) Ltd. with a bold vision — to become the premier rice brand, cherished and enjoyed by people around the world. This vision is built on a steadfast commitment to consistent quality and customer satisfaction with every purchase — a promise that lies at the heart of Amir Rice's core values."
  
  const fullText2 = "Today, Safeena Basmati Rice stands among the largest-selling rice brands across modern trade outlets in Pakistan. Its growing international presence reflects Amir Rice's dedication to delivering premium-quality rice to households around the globe."

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setIsTyping(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isTyping) return

    let currentIndex1 = 0
    let currentIndex2 = 0
    let isTypingFirst = true

    const typeInterval = setInterval(() => {
      if (isTypingFirst && currentIndex1 < fullText1.length) {
        setDisplayedText1(fullText1.substring(0, currentIndex1 + 1))
        currentIndex1++
      } else if (currentIndex1 >= fullText1.length && currentIndex2 < fullText2.length) {
        isTypingFirst = false
        setDisplayedText2(fullText2.substring(0, currentIndex2 + 1))
        currentIndex2++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
      }
    }, 30) // Typing speed

    return () => clearInterval(typeInterval)
  }, [isTyping])

  // Generate decorative rice grains
  const riceGrains = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    rotation: Math.random() * 360,
    size: 12 + Math.random() * 8,
    opacity: 0.2 + Math.random() * 0.3,
    delay: Math.random() * 2,
  }))

  // Helper function to format text with strong tags
  const formatText = (text, fullText) => {
    const parts = []
    let lastIndex = 0
    
    // Find all strong phrases
    const strongPhrases = [
      'Amir Rice Mills (Pvt.) Ltd.',
      'consistent quality',
      'customer satisfaction',
      'Safeena Basmati Rice',
      'largest-selling rice brands',
      'international presence',
      'around the globe'
    ]
    
    const matches = []
    strongPhrases.forEach(phrase => {
      const index = fullText.indexOf(phrase, lastIndex)
      if (index !== -1) {
        matches.push({ phrase, index })
      }
    })
    
    matches.sort((a, b) => a.index - b.index)
    
    if (matches.length === 0) {
      return text
    }
    
    let result = []
    let currentPos = 0
    
    matches.forEach(({ phrase, index }) => {
      if (index > currentPos) {
        result.push(text.substring(currentPos, index))
      }
      const endIndex = index + phrase.length
      if (endIndex <= text.length) {
        result.push(<strong key={index}>{text.substring(index, endIndex)}</strong>)
      }
      currentPos = endIndex
    })
    
    if (currentPos < text.length) {
      result.push(text.substring(currentPos))
    }
    
    return result
  }

  return (
    <section ref={sectionRef} className="safeena-story-section">
      {/* Animated Glowing Background */}
      <div className="glowing-background">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
        <div className="glow-circle glow-4"></div>
      </div>

      {/* Decorative Rice Grains */}
      <div className="decorative-grains">
        {riceGrains.map((grain) => (
          <div
            key={grain.id}
            className="decorative-grain"
            style={{
              top: `${grain.top}%`,
              left: `${grain.left}%`,
              transform: `rotate(${grain.rotation}deg)`,
              width: `${grain.size}px`,
              height: `${grain.size * 2}px`,
              opacity: grain.opacity,
              animationDelay: `${grain.delay}s`,
            }}
          >
            <img src="/Grain/grians.png" alt="rice grain" className="grain-img" />
          </div>
        ))}
      </div>

      <div className="story-container">
        <h2 
          className={`story-title ${isVisible ? 'animate-in' : ''}`}
        >
          The Safeena Story
        </h2>
        <div className="story-content">
          <p className={isVisible ? 'animate-in' : ''}>
            {formatText(displayedText1, fullText1)}
            {isTyping && displayedText1.length < fullText1.length && (
              <span className="cursor">|</span>
            )}
          </p>
          <p className={isVisible && displayedText1.length === fullText1.length ? 'animate-in' : ''}>
            {formatText(displayedText2, fullText2)}
            {isTyping && displayedText1.length === fullText1.length && displayedText2.length < fullText2.length && (
              <span className="cursor">|</span>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SafeenaStory

