// src/components/Contact.js
import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:akinola001pelumi@gmail.com">
          akinola001pelumi@gmail.com
        </a>
      </p>
      <p>Phone: +234 905 587 5722</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/akinola-peter-295548135"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </p>
    </section>
  );
}

export default Contact;
