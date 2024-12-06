import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./Projects.css";

/* Project card arrows*/ 
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <Slider {...settings}>
      <div className='project-card'>
        <img src='./chips_challenge.png' alt='chips challenge' className='w-100'/>
        <div className='card-body'>
          <h3>Chips challenge</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className='project-card'>
        <img src='./bmo_game.png' alt='3D adventure time game' className='w-100'/>
        <div className='card-body'>
          <h3>3D Adventure Time game</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className='project-card'>
        <img src='./spill_the_tea.png' alt='Spill the Tea website' className='w-100'/>
        <div className='card-body'>
          <h3>Spill the Tea</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className='project-card'>
        <img src='./penguin_pacman.png' alt='Penguin pacman' className='w-100'/>
        <div className='card-body'>
          <h3>Penguin Pacman</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className='project-card'>
        <img src='./avc.png' alt='AVC project' className='w-100'/>
        <div className='card-body'>
          <h3>Autonomous Vehicle Challenge (AVC)</h3>
          <p>Description here</p>
        </div>
      </div>
    </Slider>
  </div>
  );
}


