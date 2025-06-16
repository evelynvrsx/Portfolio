import React from 'react'
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <div className='about-image'>
          <img src='./about_illustration.png' alt='about page illustration' className="main-illustration"/>
        </div>

        <div className='about-text'>
          <h1>HELLO,</h1>
          <h2>I'M EVELYN</h2>

          <p className='about-description'>
            I am a penultimate year Software Engineering student at Victoria 
            University of Wellington, New Zealand, with a passion for UI/UX 
            design and full stack development. Whether throughout my academic 
            journey or outside, I have always loved growing and learning new 
            things. Outside of academics, I love drawing, playing musical 
            instruments, watching movies, and exploring new places.
          </p>

          <button className='cv-button' onClick={() => window.open('/SOT_Evelyn_Salim_CV_2025.pdf')}>Download CV here</button>
        </div>
      </div>

      <div className='scroll-indicator'>
        <div className='scroll-circle'>
          <span>scroll</span>
          <br />
          <span>down</span>
        </div>
      </div>
    </div>
  );
}

export default About;