import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Projects.css";

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
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const projects = [
    {
      id: 1,
      title: "Chips Challenge",
      image: "./chips_challenge.png",
      description: "Description here",
      fullDescription: "This is the full description for Chips Challenge. It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./chips_challenge_1.png", "./chips_challenge_2.png"],
    },
    {
      id: 2,
      title: "3D Adventure Time Game",
      image: "./bmo_game.png",
      description: "Description here",
      fullDescription: "This is the full description for the 3D Adventure Time Game. It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./bmo_game_1.png", "./bmo_game_2.png"],
    },
    {
      id: 3,
      title: "Spill the Tea",
      image: "./spill_the_tea.png",
      description: "Developed a personal bubble tea website and implemented MySQL database integration to manage product stocks via a login system",
      fullDescription: "This is the full description for Spill the Tea. It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./spill_the_tea_1.png", "./spill_the_tea_2.png"],
    },
    {
      id: 4,
      title: "Penguin Pacman",
      image: "./penguin_pacman.png",
      description: "Description here",
      fullDescription: "This is the full description for Penguin Pacman. It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./penguin_pacman_1.png", "./penguin_pacman_2.png"],
    },
    {
      id: 5,
      title: "Autonomous Vehicle Challenge (AVC)",
      image: "./avc.png",
      description: "Description here",
      fullDescription: "This is the full description for the Autonomous Vehicle Challenge (AVC). It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./avc_1.png", "./avc_2.png"],
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <Slider {...settings}>
        {projects.map((project) => (
          <div className='project-card' key={project.id} onClick={() => handleCardClick(project)}>
            <img src={project.image} alt={project.title} className='w-100' />
            <div className='card-body'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.fullDescription}</p>
            <div className="additional-images">
              {selectedProject.additionalImages.map((image, index) => (
                <img key={index} src={image} alt={`Additional ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}