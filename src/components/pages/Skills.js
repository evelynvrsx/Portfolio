import React, { useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [openSection, setOpenSection] = useState("web-development");

  const toggleSection = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  /* Icons */
  const webDevIcon = '/web-dev-icon.png';
  const programmingIcon = '/programming-icon.png';
  const projectMgmtIcon = '/project-mgmt-icon.png';
  const gameDevIcon = '/game-dev-icon.png';
  const designProtIcon = '/design-prototype-icon.png';
  const devopsToolsIcon = '/devops-icon.png';

  /* Images */
  const webDevImage = '/web-dev-image.png';
  const programmingImage = '/programming-image.jpg';
  const projectMgmtImage = '/project-mgmt-image.jpg';
  const gameDevImage = '';
  const designProtImage = '';
  const devopsToolsImage = '';
  const defaultImage = '/default-image.png';

  const getImage = () => {
    switch (openSection) {
      case "web-development":
        return webDevImage;
      case "programming-languages":
        return programmingImage;
      case "project-management":
        return projectMgmtImage;
      case "game-development":
        return gameDevImage;
      case "design-and-prototyping":
        return designProtImage;
      case "devops-and-tools":
        return devopsToolsImage;
      default:
        return defaultImage;
    }
  };

  return (
    <div className="skills-container">
      <h1>SKILLS</h1>

      <div className="skills-content-wrapper">
        <div className="skills-sections">
          {/* Web Development Section */}
          <div className="skills-section web-development">
            <h2
              onClick={() => toggleSection("web-development")}
              className={openSection === "web-development" ? "open" : ""}
            >
              <img src={webDevIcon} alt="Web Development Icon" className="section-icon" />
              Web Development {openSection === "web-development" ? "▼" : "▶"}
            </h2>
            {openSection === "web-development" && (
              <div className="skills-content">
                <ul>
                  <li>HTML, CSS</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
              </div>
            )}
          </div>

          {/* Repeat for other sections */}
          {/* Programming Languages Section */}
          <div className="skills-section programming-languages">
            <h2
              onClick={() => toggleSection("programming-languages")}
              className={openSection === "programming-languages" ? "open" : ""}
            >
              <img src={programmingIcon} alt="Programming Languages Icon" className="section-icon" />
              Programming Languages {openSection === "programming-languages" ? "▼" : "▶"}
            </h2>
            {openSection === "programming-languages" && (
              <div className="skills-content">
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>C</li>
                </ul>
              </div>
            )}
          </div>

          {/* Project Management Section */}
          <div className="skills-section project-management">
            <h2
              onClick={() => toggleSection("project-management")}
              className={openSection === "project-management" ? "open" : ""}
            >
              <img src={projectMgmtIcon} alt="Project Management Icon" className="section-icon" />
              Project Management {openSection === "project-management" ? "▼" : "▶"}
            </h2>
            {openSection === "project-management" && (
              <div className="skills-content">
                <ul>
                  <li>Trello</li>
                  <li>Git (GitHub, GitLab)</li>
                </ul>
              </div>
            )}
          </div>

          {/* Game Development Section */}
          <div className="skills-section game-development">
            <h2
              onClick={() => toggleSection("game-development")}
              className={openSection === "game-development" ? "open" : ""}
            >
              <img src={gameDevIcon} alt="Game Development Icon" className="section-icon" />
              Game Development {openSection === "game-development" ? "▼" : "▶"}
            </h2>
            {openSection === "game-development" && (
              <div className="skills-content">
                <ul>
                  <li>Unreal Engine 5</li>
                  <li>Processing</li>
                </ul>
              </div>
            )}
          </div>

          {/* Design and Prototyping Section */}
          <div className="skills-section design-and-prototyping">
            <h2
              onClick={() => toggleSection("design-and-prototyping")}
              className={openSection === "design-and-prototyping" ? "open" : ""}
            >
              <img src={designProtIcon} alt="Design and Prototyping Icon" className="section-icon" />
              Design and Prototyping {openSection === "design-and-prototyping" ? "▼" : "▶"}
            </h2>
            {openSection === "design-and-prototyping" && (
              <div className="skills-content">
                <ul>
                  <li>Figma</li>
                  <li>Blender</li>
                </ul>
              </div>
            )}
          </div>

          {/* DevOps and Tools Section */}
          <div className="skills-section devops-and-tools">
            <h2
              onClick={() => toggleSection("devops-and-tools")}
              className={openSection === "devops-and-tools" ? "open" : ""}
            >
              <img src={devopsToolsIcon} alt="DevOps and Tools Icon" className="section-icon" />
              DevOps and Tools {openSection === "devops-and-tools" ? "▼" : "▶"}
            </h2>
            {openSection === "devops-and-tools" && (
              <div className="skills-content">
                <ul>
                  <li>AWS</li>
                  <li>Docker</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Image on the Right */}
        <div className="skills-image">
          <img src={getImage()} alt="Skills" />
        </div>
      </div>
    </div>
  );
}