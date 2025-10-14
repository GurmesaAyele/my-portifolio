import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import './NavBar.css'

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="brand">
          <span className="accent">Grum</span>
        </div>

        <nav className={`navlinks ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        <button 
          className="hamburger" 
          onClick={() => setOpen(o => !o)} 
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default NavBar