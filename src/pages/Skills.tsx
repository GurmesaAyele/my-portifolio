import React, { useEffect, useRef } from 'react'
import './Skills.css'

const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollSpeed = 1

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed
        
        // Reset to start when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(autoScroll)
    }

    // Start auto-scroll
    animationId = requestAnimationFrame(autoScroll)

    // Pause on hover
    const handleMouseEnter = () => scrollSpeed = 0
    const handleMouseLeave = () => scrollSpeed = 1

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const skills = [
    { name: 'React', level: 90, image: '/images/react-skill.png', color: '#61dafb' },
    { name: 'TypeScript', level: 85, image: '/images/typescript-skill.png', color: '#3178c6' },
    { name: 'Node.js', level: 80, image: '/images/nodejs-skill.png', color: '#68a063' },
    { name: 'CSS3', level: 95, image: '/images/css-skill.png', color: '#264de4' },
    { name: 'Python', level: 75, image: '/images/python-skill.png', color: '#3776ab' },
    { name: 'AWS', level: 70, image: '/images/aws-skill.png', color: '#ff9900' },
    { name: 'Docker', level: 65, image: '/images/docker-skill.png', color: '#2496ed' },
    { name: 'MongoDB', level: 60, image: '/images/mongodb-skill.png', color: '#47a248' },
  ]

  return (
    <div className="skills-page">
      <h1 className="page-title">💻 Skills & Technologies</h1>
      <div className="skills-scroll-container">
        <div className="skills-track" ref={scrollRef}>
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-image-container">
                <img 
                  src={skill.image} 
                  alt={`${skill.name} skill`}
                  className="skill-image"
                  loading="lazy"
                />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-level-bar">
                  <div 
                    className="skill-level-fill"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills