import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'


const Hero: React.FC = () => {
return (
<section className="hero container" id="home">
<div className="hero-text" data-aos="fade-up">
<motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
Hi, I'm Gurmesa — a Frontend Developer
</motion.h1>
<motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
I build accessible, animated, and high-performance web experiences.
</motion.p>
<div className="hero-cta">
<a className="btn" href="/projects">View projects</a>
<a className="btn ghost" href="/contact">Contact me</a>
</div>
</div>


<div className="hero-image" data-aos="zoom-in">
<img src={profile} alt="Profile" />
</div>
</section>
)
}


export default Hero