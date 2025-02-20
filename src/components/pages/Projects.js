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
      description: "Developed a Chip’s Challenge-inspired game in a team of 6, focusing on game mechanics, level design, and GUI rendering using Java and its design patterns.\n\n# Java | # GUI | # Object Oriented Programming",
      fullDescription: "This is the full description for Chips Challenge. It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./chips_challenge_1.png", "./chips_challenge_2.png"],
      videoLink: "./chips_challenge_video.mp4",
    },
    {
      id: 2,
      title: "3D Adventure Time Game",
      image: "./bmo_game.png",
      description: "Created an Adventure Time 3D game using Unreal Engine 5 and Blender\n\n# Unreal Engine 5 | # Blender | # Game Development",
      fullDescription: "This is the full description for the 3D Adventure Time Game. It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./bmo_game_1.png", "./bmo_game_2.png"],
      videoLink: "./bmo_game_video.mp4",
    },
    {
      id: 3,
      title: "Spill the Tea",
      image: "./spill_the_tea.png",
      description: "Developed a bubble tea website and implemented MySQL database integration to manage product stocks via a login system\n\n#HTML | #CSS | #MySQL",
      fullDescription: "This is the full description for Spill the Tea. It includes more details about the project, technologies used, and challenges faced.",
      additionalImages: ["./spill_the_tea_1.png", "./spill_the_tea_2.png"],
    },
    {
      id: 4,
      title: "Penguin Pacman",
      image: "./penguin_pacman.png",
      description: "Created a penguin-themed Pac-Man game where players collect stolen fish while being chased by an AI-powered ghost that can move through walls, adding a unique challenge.",
      fullDescription: "A Pac-Man-inspired game in which a penguin protagonist must navigate an icy maze while collecting stolen fish. To increase gameplay complexity, an AI-driven ghost was created to intelligently follow the player and move through walls. The game was created using Java and Processing and includes object-oriented programming (OOP), unique collision detection, and multi-level advancement. All game sprites were hand-drawn to ensure a consistent visual look. One of the most difficult technological issues was implementing AI pathfinding, which was first tested using A search* but was later modified to allow for wall-passing behaviour. Furthermore, fish placement algorithms were optimised to ensure that collectibles emerged only in specific lanes.",
      additionalImages: ["./penguin_pacman_1.png", "./penguin_pacman_2.png"],
    },
    {
      id: 5,
      title: "Autonomous Vehicle Challenge (AVC)",
      image: "./avc.png",
      description: "Designed and executed an autonomous robot in a team of 4 to navigate a course using pixel information\n\n #C++ #Raspberry Pi #GitLab",
      fullDescription: "The Autonomous Vehicle Challenge (AVC) was a robotics and programming project in which I collaborated with a team of four to design, build, and programme an autonomous robot capable of navigating a complicated course. We programmed the robot in C++, using a Raspberry Pi as the primary controller, and used PID (Proportional Integral Derivative) control to follow lines, avoid obstacles, and interact with its surroundings. The project involved the integration of hardware components such as servos, a PCB, and a camera, as well as software techniques such as computer vision for detecting coloured objects and WiFi connectivity for gate opening. Despite time limits, we finished 80% of the course, demonstrating strong problem-solving, teamwork, and technical skills. GitLab is used to manage version control throughout the process.",
      additionalImages: ["./avc_1.png", "./avc_2.jpg"],
      reportLink: "./avc_report.pdf",
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
      <h1>PROJECTS</h1>
      <Slider {...settings}>
        {projects.map((project) => (
          <div className='project-card' key={project.id} onClick={() => handleCardClick(project)}>
            <img src={project.image} alt={project.title} className='w-100' />
            <div className='card-body'>
              <h3>{project.title}</h3>
              {/* Updated to correctly display new lines */}
              <p>
                {project.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
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
            {/* Add a video if a videoLink exists */}
            {selectedProject.videoLink && (
              <video controls className="project-video">
                <source src={selectedProject.videoLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {/* Add a download button for the report (if applicable) */}
            {selectedProject.reportLink && (
              <a
                href={selectedProject.reportLink}
                download="AVC_Report.pdf"
                className="download-button"
              >
                Download Report
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
