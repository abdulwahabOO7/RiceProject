import { useEffect, useState } from 'react'
import './FallingRice.css'

function FallingRice() {
  const [grains, setGrains] = useState([])

  useEffect(() => {
    // Create 30 rice grains
    const newGrains = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position
      delay: Math.random() * 5, // Random delay
      duration: 8 + Math.random() * 4, // Random duration between 8-12 seconds
      size: 30 + Math.random() * 20, // Random size between 30-50px
      opacity: 0.3 + Math.random() * 0.4, // Random opacity between 0.3-0.7
    }))
    setGrains(newGrains)
  }, [])

  return (
    <div className="falling-rice-container">
      {grains.map((grain) => (
        <div
          key={grain.id}
          className="rice-grain"
          style={{
            left: `${grain.left}%`,
            animationDelay: `${grain.delay}s`,
            animationDuration: `${grain.duration}s`,
            width: `${grain.size}px`,
            height: `${grain.size * 2}px`,
            opacity: grain.opacity,
          }}
        >
          <img src="/Grain/grians.png" alt="rice grain" className="grain-image" />
        </div>
      ))}
    </div>
  )
}

export default FallingRice

