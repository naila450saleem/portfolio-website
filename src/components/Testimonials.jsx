import React from "react";
import CustomeText from "./ui/CustomeText";
import GenericSlider from "./ui/GenericSlider";
import "./styles/Testimonials.css";
import { reviews } from "../data/data"; // ✅ using imported data

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">


      <div className="testimonials-header">
        <div className="testimonials-title-group">
          <CustomeText title="Testimonials That" className="title-text" />
          <div className="title-subgroup">
            <CustomeText title="Speak to" className="title-text" />
            <CustomeText title="My Result" className="highlight-text" />
          </div>
        </div>
        <p className="description-text">
          I’m proud to share feedback from those who have worked with me on freelance and personal projects.
        </p>
      </div>

      <div className="slider-container">
        <GenericSlider
          data={reviews} // ✅ now this works!
          slidesPerView={3}
          heightClass=""
          cardType="review"
        />
      </div>
    </div>
  );
};

export default Testimonials;
