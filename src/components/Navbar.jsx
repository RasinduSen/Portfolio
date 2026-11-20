import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="navbar">
            {/* Portfolio Logo */}
            <a href="#home" className="navbar-logo">
                Portfolio<span>.</span>
            </a>

            {/* Navigation Links */}
            <div
                id="primary-navigation"
                className={`navbar-links ${menuOpen ? 'active' : ''}`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    )
}

export default Navbar
