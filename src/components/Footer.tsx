import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer: React.FC = () => {
return (
<footer className="site-footer">
<div className="container footer-grid">
<div>
<strong>Gurmesa Ayele</strong>
<p>Frontend Developer • UI/UX enthusiast</p>
</div>
<div className="socials">
<a href="#" aria-label="GitHub"><FaGithub/></a>
<a href="#" aria-label="LinkedIn"><FaLinkedin/></a>
<a href="#" aria-label="Twitter"><FaTwitter/></a>
</div>
</div>
<div className="copy">© {new Date().getFullYear()} Gurmesa. All rights reserved.</div>
</footer>
)
}


export default Footer