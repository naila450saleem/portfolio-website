// Portfolio.jsx
import { Link } from "react-router-dom";
import React from 'react';
import CustomeText from './ui/CustomeText';
import OrangeButton from './ui/OrangeButton';
import GenericSlider from './ui/GenericSlider';
import ArrowButton from './ui/ArrowButton';
import ClientOnly from './ui/ClientOnly';

import './styles/Portfolio.css'; // 👈 Make sure this CSS file exists

// ✅ Import images from assets
import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";
import website3 from "../assets/website.png";
import UX1 from "../assets/UX1.png";
import UX2 from "../assets/UX2.png";
import UX3 from "../assets/UX3.png";
import UX4 from "../assets/UX4.png";


const buttons = ['All', 'Web Design', 'App Design', 'Branding'];
const portfolioData = [
  {
    title: "Admin-Dashboard",
    image: website1,
    href: "#",
    desc: "A modern e-commerce platform for online shopping.",
  },
  {
    title: "E-Commerce Website",
    image: website3,
    href: "#",
    desc: "A food delivery app to order meals from nearby restaurants.",
  },
  {
    title: "Food Website",
    image: website2,
    href: "#",
    desc: "Personal website to showcase work and skills.",
  },
    {
    title: "Admin-Dashboard",
    image: website1,
    href: "#",
    desc: "A modern e-commerce platform for online shopping.",
  },
  {
  title: " UI - 1",
  image: UX1,
  href: "#",
  desc: "A clean and modern mobile app UI design made in Figma.",
},
{
  title: " UI - 2",
  image: UX2,
  href: "#",
  desc: "User-friendly mobile application interface with smooth UX flow.",
},
{
  title: " UI - 3",
  image: UX3,
  href: "#",
  desc: "Creative app interface focusing on usability and design consistency.",
},
{
  title: " UI - 4",
  image: UX4,
  href: "#",
  desc: "Interactive app concept designed in Figma with modern visuals.",
},
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-20"> 
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-title-group">
            <CustomeText title="Lets Have a look at" className="portfolio-heading-main" />
            <div className="portfolio-subtitle-group">
              <CustomeText title="my" className="portfolio-heading-main" />
              <CustomeText title="Portfolio" className="portfolio-highlight" />
            </div>
          </div>

          <div className="see-all-button">
            <Link to="/portfolio">
              <OrangeButton title="See All" className="text-sm" />
            </Link>
          </div>
        </div>

        <div className="portfolio-content">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          <div className="portfolio-buttons">
            <ClientOnly>
              {buttons.map((text, index) => (
                <button key={index} className="portfolio-btn">
                  {text}
                </button>
              ))}
            </ClientOnly>
          </div>

          <div className="portfolio-description">
            <div className="portfolio-description-header">
              <CustomeText
                title="Novana - E-commerce Website"
                className="portfolio-project-title"
              />
              <div className="portfolio-arrow">
                <ArrowButton className="arrow-icon" />
              </div>
            </div>
            <p className="portfolio-paragraph">
              Novana is a responsive e-commerce website built with ReactJS. It allows users to browse products, add to cart, and securely checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
