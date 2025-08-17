// /src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero";
import Blog from "./AboutPage";
import Services from "../components/Services";
import WorkExperience from "../components/WorkExperience";
import HireMe from "../components/ui/HireMe";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SkillsSlider from "../components/SkillsSlider";
import CustomeText from "../components/ui/CustomeText";

function HomePage() {
  return (
    <>
      <section id="home"> <Hero /> </section>
      <section id="about"> <Blog /></section>
      <section id="service"> <Services /> </section>
      <section id="workexperience"> <WorkExperience /> </section>
      <section id="hireme"> <HireMe /> </section>
      <section id="portfolio"> <Portfolio /> </section>
      <section id="testimonial"> <Testimonials /> </section>
      <section id="contact"> <Contact /> </section>
      <section id="skillsslider"> <SkillsSlider /> </section>
      {/* <section id="blog"> <Blog /> </section> */}
      <CustomeText />
    </>
  );
}

export default HomePage;
