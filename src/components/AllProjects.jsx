// src/pages/AllProjects.jsx
import React from "react";
import "./styles/AllProjects.css";

// ✅ Import images from src/assets
import website1 from "../assets/website1.png";
import website2 from "../assets/website.png";
import website3 from "../assets/website2.png";

const AllProjects = () => {
  const allProjects = [
    {
      title: "Admin-Dashboard",
      image: website1,
      href: "https://yourgithubusername.github.io/admin-dashboard/",
      desc: "A modern e-commerce platform for online shopping.",
    },
    {
      title: "E-Commerce Website",
      image: website2,
      href: "https://yourgithubusername.github.io/ecommerce-site/",
      desc: "A food delivery app to order meals from nearby restaurants.",
    },
    {
      title: "Food Website",
      image: website3,
      href: "https://yourgithubusername.github.io/food-website/",
      desc: "Personal website to showcase work and skills.",
    },
  ];

  return (
    <div className="all-projects-container">
      <main className="all-projects-main">
        <h1 className="all-projects-title">All Projects</h1>

        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
