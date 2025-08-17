// WorkExperience.jsx
import React from "react";
import "./styles/WorkExperience.css";
import { experiences } from "../data/data";


const CustomText = ({ title, className }) => <div className={className}>{title}</div>;

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <div className="work-experience-heading">
        <CustomText title="My" className="heading-main" />
        <CustomText title="Work" className="heading-orange" />
        <CustomText title="Experience" className="heading-orange" />
      </div>

      {/* Mobile Version */}
      <div className="work-mobile">
        {experiences.map((exp, index) => (
          <div key={index} className="work-item">
            <div className="work-dot-wrapper">
              <div className="outer-dot" />
              <div className={`inner-dot ${exp.dotColor}`} />
            </div>
            <div className="work-details">
              <CustomText title={exp.company} className="work-company" />
              <CustomText title={exp.duration} className="work-duration" />
              <CustomText title={exp.role} className="work-role" />
              {exp.desc && <CustomText title={exp.desc} className="work-desc" />}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Version */}
      <div className="work-desktop">
        <div className="work-left-column">
          {experiences.map((exp, index) => (
            <div key={index} className="column-section">
              <CustomText title={exp.company} className="left-company" />
              <CustomText title={exp.duration} className="left-duration" />
            </div>
          ))}
        </div>

        <div className="work-middle-line">
          {experiences.map((exp, index) => (
            <div key={index} className="middle-dot-wrapper">
              <div className="middle-outer-dot" />
              <div className={`middle-inner-dot ${exp.dotColor}`} />
            </div>
          ))}
        </div>

        <div className="work-right-column">
          {experiences.map((exp, index) => (
            <div key={index} className="column-section">
              <CustomText title={exp.role} className="right-role" />
              {exp.desc && <CustomText title={exp.desc} className="right-desc" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
