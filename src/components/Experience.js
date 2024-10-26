// src/components/Experience.js
import React from "react";
import "../css/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="job">
        <h3>Core Banking Support Specialist</h3>
        <p>Access Bank PLC | Dec 2022 – Present</p>
        <ul>
          <li>Manage Flexcube WebLogic servers for core banking operations.</li>
          <li>Oversee EOD and EOM reporting processes.</li>
          <li>
            Configure and manage services on WebLogic for seamless operations.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Technical Product Manager</h3>
        <p>Unified Payment Technologies | Apr 2021 – Nov 2022</p>
        <ul>
          <li>
            Worked closely with banks to integrate PayAttitude on multiple
            platforms.
          </li>
          <li>
            Led product development teams and aligned business needs with
            technical requirements.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Front-End Engineer</h3>
        <p>Commsworth Solutions Ltd | Oct 2019 – Nov 2020</p>
        <ul>
          <li>
            Collaborated with designers to build intuitive user interfaces.
          </li>
          <li>
            Optimized website usability and performance for corporate clients.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
