// src/components/About.jsx
import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am currently pursuing a B.Tech in Computer Science and Engineering
          with a specialization in Data Science at Ajay Kumar Garg Engineering
          College, where I have consistently maintained an aggregate CGPA of
          8.22 with no backlogs. As a Full-Stack MERN Developer, I have a solid
          understanding of databases and programming languages such as C++ and
          JavaScript. Additionally, I possess strong problem-solving skills,
          enabling me to develop efficient and scalable solutions. My technical
          proficiency and analytical mindset drive my passion for creating
          impactful software applications.
        </p>
      </div>
    </section>
  );
};

export default About;
