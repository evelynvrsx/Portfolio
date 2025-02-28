import React, { useState } from 'react';
import './Skills.css';

export default function Skills() {
  // State to manage which sections are open
  const [openSection, setOpenSection] = useState("web-development");

  // Function to toggle sections
  const toggleSection = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  // Paths to images and icons in the public folder
  const webDevIcon = '/web-dev-icon.png';
  const programmingIcon = '/programming-icon.png';
  const projectMgmtIcon = '/project-mgmt-icon.png';
  const webDevImage = '/web-dev-image.jpg';
  const programmingImage = '/programming-image.jpg';
  const projectMgmtImage = '/project-mgmt-image.jpg';

  // Determine which image to display based on the open section
  const getImage = () => {
    switch (openSection) {
      case "web-development":
        return webDevImage;
      case "programming-languages":
        return programmingImage;
      case "project-management":
        return projectMgmtImage;
      default:
        return webDevImage; // Default image
    }
  };

  return (
    <div className="skills-container">
      <h1>SKILLS</h1>

      <div className="skills-content-wrapper">
        {/* Dropdown Sections */}
        <div className="skills-sections">
          {/* Web Development Section */}
          <div className="skills-section web-development">
            <h2 onClick={() => toggleSection("web-development")}>
              <img src={webDevIcon} alt="Web Development Icon" className="section-icon" />
              Web Development {openSection === "web-development" ? "▼" : "▶"}
            </h2>
            {openSection === "web-development" && (
              <div className="skills-content">
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>React, Node.js, Express</li>
                  <li>Responsive Design</li>
                  <li>REST APIs</li>
                  <li>Version Control (Git)</li>
                </ul>
              </div>
            )}
          </div>

          {/* Programming Languages Section */}
          <div className="skills-section programming-languages">
            <h2 onClick={() => toggleSection("programming-languages")}>
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
                </ul>
              </div>
            )}
          </div>

          {/* Project Management Section */}
          <div className="skills-section project-management">
            <h2 onClick={() => toggleSection("project-management")}>
              <img src={projectMgmtIcon} alt="Project Management Icon" className="section-icon" />
              Project Management {openSection === "project-management" ? "▼" : "▶"}
            </h2>
            {openSection === "project-management" && (
              <div className="skills-content">
                <ul>
                  <li>Agile Methodology</li>
                  <li>Scrum Framework</li>
                  <li>Trello, Jira</li>
                  <li>Team Collaboration</li>
                  <li>Time Management</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Image on the Right */}
        <div className="skills-image">
          <img src={getImage()} alt="Skills Image" />
        </div>
      </div>
    </div>
  );
}