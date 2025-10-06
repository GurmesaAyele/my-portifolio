import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'


const App: React.FC = () => {
useEffect(() => {
AOS.init({ once: true, duration: 700 })
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
</Routes>
</main>
<Footer />
</div>
)
}


export default App