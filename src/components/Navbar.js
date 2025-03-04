import React from 'react';
import './Navbar.css';

function Navbar() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                {/* Logo */}
                <a href="#about" className="navbar-logo">
                    <img src="/logo.png" alt="Logo" />
                </a>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>

                {/* Social media icons */}
                <div className='navbar-icons'>
                    <a href='https://www.linkedin.com/in/evelyn-salim' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/evelynvrsx' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;