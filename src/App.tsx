import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css' // Important: Don't forget to import AOS CSS
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Certifications from './pages/Certifications' // Add your new pages
import Skills from './pages/Skills' // Add your new pages

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 700,
      offset: 100, // Recommended: trigger animation when element is 100px from viewport
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div className="app-root">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add your new routes */}
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App