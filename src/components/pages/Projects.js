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
      description: "Developed a Chip’s Challenge-inspired game in a team of 6, focusing on game mechanics, level design, and GUI rendering using Java and its design patterns.",
      fullDescription: "Remade the game Chip's Challenge with a Batman theme as part of a team of six, utilizing Java and Object-Oriented Programming (OOP). The project followed the Model-View-Controller (MVC) design pattern, along with additional design patterns applied to various classes to ensure a well-structured and maintainable codebase. Version control and collaboration were managed using GitLab. Responsible for graphical rendering and user experience, the renderer role involved displaying game elements, drawing sprites, managing the GUI, and integrating player interactions. Additionally, implemented JSON file handling to reload saved replays, ensuring smooth game progression. Audio effects and background music were incorporated to enhance the overall experience. With each team member assigned distinct roles, GitLab facilitated efficient coordination throughout development.",
      additionalImages: ["./chips_challenge_1.png", "./chips_challenge_2.png"],
      videoLink: "./chips_challenge_video.mp4",
      youtubeLink: "https://youtu.be/lwYQM3DuwEM?si=TjV8AeDddJr1MJ3c",
      tags: ["Java", "Object Oriented Programming", "GUI", "Game Development", "GitLab"], 
    },
    {
      id: 2,
      title: "3D Adventure Time Game",
      image: "./bmo_game.png",
      description: "Created an Adventure Time 3D game using Unreal Engine 5 and Blender",
      fullDescription: "I developed a 3D Adventure Time-inspired game using Unreal Engine 5 and Blueprints, designing and animating all assets in Blender. The game follows BMO, the main character, as they navigate obstacles to reach the house, which serves as the finish line. I incorporated physics-based mechanics, including springs for higher jumps and smashable wooden crates, to enhance gameplay. Version control was managed using GitHub, ensuring efficient collaboration and development.",
      additionalImages: ["./bmo_game_1.png", "./bmo_game_2.png"],
      videoLink: "./bmo_game_video.mp4",
      tags: ["Unreal Engine 5", "Blender", "Game Development", "GitHub", "Animation"], 
    },
    {
      id: 3,
      title: "Spill the Tea",
      image: "./spill_the_tea.png",
      description: "Developed a bubble tea website and implemented MySQL database integration to manage product stocks via a login system",
      fullDescription: "Developed a fully responsive bubble tea e-commerce website with a customer-facing storefront and a staff management system. The website was built using PHP, MySQL, HTML, CSS, and JavaScript, with a secure login system for staff that featured encrypted passwords. Staff members could add, update, and remove products, as well as view customer orders directly through the system. A MySQL database was implemented to store product details, customer orders, and staff credentials, ensuring efficient data management. The entire website was designed and coded from scratch, using free images from Shutterstock for visuals. Throughout development, Trello was utilized for project management, and continuous feedback was gathered to enhance the site's functionality and user experience.",
      additionalImages: ["./spill_the_tea_1.png", "./spill_the_tea_2.png"],
      externalLink: "https://trello.com/invite/b/62cb59e728b6c349ee3964ff/ATTIca092edae237105b6066f1aa7dace194FA1009C4/spill-the-tea",
      tags: ["HTML", "CSS", "MySQL", "PHP", "JavaScript", "Trello"], 
    },
    {
      id: 4,
      title: "Penguin Pacman",
      image: "./penguin_pacman.png",
      description: "Created a penguin-themed Pac-Man game where players collect stolen fish while being chased by an AI-powered ghost that can move through walls, adding a unique challenge.",
      fullDescription: "A Pac-Man-inspired game in which a penguin protagonist must navigate an icy maze while collecting stolen fish. To increase gameplay complexity, an AI-driven ghost was created to intelligently follow the player and move through walls. The game was created using Java and Processing and includes object-oriented programming (OOP), unique collision detection, and multi-level advancement. All game sprites were hand-drawn to ensure a consistent visual look. One of the most difficult technological issues was implementing AI pathfinding, which was first tested using A search* but was later modified to allow for wall-passing behaviour. Furthermore, fish placement algorithms were optimised to ensure that collectibles emerged only in specific lanes.",
      additionalImages: ["./penguin_pacman_1.png", "./penguin_pacman_2.png"],
      tags: ["Java", "Processing", "AI", "Game Development"], 
    },
    {
      id: 5,
      title: "Autonomous Vehicle Challenge (AVC)",
      image: "./avc.png",
      description: "Designed and executed an autonomous robot in a team of 4 to navigate a course using pixel information",
      fullDescription: "The Autonomous Vehicle Challenge (AVC) was a robotics and programming project in which I collaborated with a team of four to design, build, and programme an autonomous robot capable of navigating a complicated course. We programmed the robot in C++, using a Raspberry Pi as the primary controller, and used PID (Proportional Integral Derivative) control to follow lines, avoid obstacles, and interact with its surroundings. The project involved the integration of hardware components such as servos, a PCB, and a camera, as well as software techniques such as computer vision for detecting coloured objects and WiFi connectivity for gate opening. Despite time limits, we finished 80% of the course, demonstrating strong problem-solving, teamwork, and technical skills. GitLab is used to manage version control throughout the process.",
      additionalImages: ["./avc_1.png", "./avc_2.jpg"],
      reportLink: "./avc_report.pdf",
      tags: ["C++", "Raspberry Pi", "GitLab", "Robotics"], 
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
              <p>
                {project.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              {/* Render tags */}
              <div className="tags">
                {project.tags && project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
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
            {/* Add a button to link to the YouTube video */}
            {selectedProject.youtubeLink && (
              <a
                href={selectedProject.youtubeLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="youtube-button"
              >
                Watch on YouTube
              </a>
            )}
            {/* Add a button for the external link */}
            {selectedProject.externalLink && (
              <a
                href={selectedProject.externalLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="external-link-button"
              >
                View on Trello
              </a>
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