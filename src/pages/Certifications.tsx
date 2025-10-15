import React, { useRef } from 'react'
import './Certifications.css'

const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      })
    }
  }

  const certifications = [
    { src: '/images/cert1.png', title: 'React Developer' },
    { src: '/images/cert2.png', title: 'AWS Solutions Architect' },
    { src: '/images/award1.png', title: 'Best Innovation 2023' },
    { src: '/images/award2.png', title: 'Employee of the Year' },
    { src: '/images/cert3.png', title: 'TypeScript Master' },
    { src: '/images/cert4.png', title: 'Node.js Expert' },
  ]

  return (
    <div className="certifications-page">
      <h1 className="page-title">🏆 Certifications & Awards</h1>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scroll('left')} aria-label="Scroll left">
          ‹
        </button>
        <div className="image-track" ref={scrollRef}>
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card">
              <img 
                src={cert.src} 
                alt={`${cert.title} certificate`}
                loading="lazy"
              />
              <div className="cert-overlay">
                <span className="cert-title">{cert.title}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')} aria-label="Scroll right">
          ›
        </button>
      </div>
    </div>
  )
}

export default Certifications