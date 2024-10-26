// src/components/Projects.js
import React from "react";
import "../css/Projects.css";

const projects = [
  {
    title: "Core Banking Support & WebLogic Management",
    description:
      "Managed WebLogic servers and core banking application processes, ensuring uptime and smooth EOD/EOM reporting.",
    technologies: "WebLogic, SQL, OracleDB, Flexcube",
    link: "#",
  },
  {
    title: "PayAttitude Application Integration",
    description:
      "Integrated PayAttitude with major Nigerian banks across multiple channels (ATM, POS, USSD, Mobile).",
    technologies: "JavaScript, USSD, API Integration",
    link: "#",
  },
  {
    title: "Financial Product Management",
    description:
      "Led product teams to translate business requirements into detailed technical requirements for the fintech ecosystem.",
    technologies: "React, Node.js, SQL",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <b>Technologies:</b> {project.technologies}
          </p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Details
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
