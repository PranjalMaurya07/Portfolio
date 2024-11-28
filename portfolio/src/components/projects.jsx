// src/components/Projects.jsx
import React from "react";
import "../styles/projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "ER-MART",
      description:
        "An e-commerce platform which includes a range of features to simulate an online shopping experience, such as product listings, a shopping cart, user authentication, and a user profile.",
      link: "https://github.com/PranjalMaurya07/ER-MART",
    },
    {
      title: "VoteHub",
      description:
        "VoteHub is a modern voting app designed to streamline the voting process and enhance user engagement. With VoteHub, users can easily create and manage polls, cast votes, and view real-time results.",
      link: "https://github.com/PranjalMaurya07/VoteHub",
    },
    {
      title: "RBAC-UI",
      description:
        "It is an Admin Dashboard built using the MERN stack. It provides a user-friendly interface to manage users, roles, and permissions, implementing Role-Based Access Control (RBAC).",
      link: "https://github.com/PranjalMaurya07/RBAC-UI",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
