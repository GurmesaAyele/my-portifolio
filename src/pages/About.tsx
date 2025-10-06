import React from 'react'


const About: React.FC = () => {
return (
<section className="container about" data-aos="fade-up">
<h2>About me</h2>
<div className="about-grid">
<div>
<p>Hello — I am a frontend developer... add your biography here.</p>
<h3>Skills</h3>
<ul className="skills">
<li>React.js</li>
<li>TypeScript</li>
<li>CSS / Responsive design</li>
<li>Animations (Framer Motion)</li>
</ul>
</div>
<aside>
<strong>Experience</strong>
<ol className="timeline">
<li><strong>2024</strong> — Frontend dev at Example Co.</li>
<li><strong>2022</strong> — Junior dev at Startup</li>
</ol>
</aside>
</div>
</section>
)
}


export default About