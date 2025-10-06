import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'


const NavBar: React.FC = () => {
const [open, setOpen] = useState(false)


return (
<header className="navbar">
<div className="container">
<div className="brand">My<span className="accent">Portfolio</span></div>


<nav className={`navlinks ${open ? 'open' : ''}`}>
<NavLink to="/" onClick={() => setOpen(false)} end>Home</NavLink>
<NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
<NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
<NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
<NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
<ThemeToggle />
</nav>


<button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
{open ? <FiX size={22}/> : <FiMenu size={22}/>}
</button>
</div>
</header>
)
}


export default NavBar