// src/pages/AllProjects.jsx
import React from 'react';
import "./styles/AllProjects.css";

const AllProjects = () => {
  const allProjects = [
    {
      title: "Admin-Dashboard",
      image: "./website1.png",
      href: "https://yourgithubusername.github.io/admin-dashboard/", // 👈 apna live link
      desc: "A modern e-commerce platform for online shopping.",
    },
    {
      title: "E-Commerce Website",
      image: "./website.png",
      href: "https://yourgithubusername.github.io/ecommerce-site/", // 👈 apna live link
      desc: "A food delivery app to order meals from nearby restaurants.",
    },
    {
      title: "Food Website",
      image: "./website2.png",
      href: "https://yourgithubusername.github.io/food-website/", // 👈 apna live link
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
              target="_blank"                // 👈 new tab me khulega
              rel="noopener noreferrer"     // 👈 security ke liye
            >
              <img src={project.image} alt={project.title} className="project-image" />
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
