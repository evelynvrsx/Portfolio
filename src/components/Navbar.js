import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='navbar-container'>
        {/* Logo */}
        <Link to="/" className='navbar-logo'>
            <img src='/logo.png' alt='Logo'/>
        </Link>

        {/* Navigation Links */}
        <ul className='navbar-links'>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/projects'>Projects</a>
            </li>
            <li>
                <a href='/skills'>Skills</a>
            </li>
            <li>
                <a href='/contact'>Contact</a>
            </li>
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
  )
}

export default Navbar
