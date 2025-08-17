import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./DualButtons.css";

export default function DualButtons() {
  const [active, setActive] = useState("portfolio");

  const openFiverrProfile = () => {
    window.open("https://www.fiverr.com/nailasaleem450", "_blank");
  };

  return (
    <div className="toggle-container">
      {/* Portfolio Button */}
      <button
        onMouseEnter={() => setActive("portfolio")}
        className={`toggle-btn ${active === "portfolio" ? "active" : ""}`}
      >
        <span className="btn-text">Portfolio</span>
        <ArrowUpRight
          size={16}
          className={`btn-icon ${active === "portfolio" ? "visible" : ""}`}
        />
      </button>

      {/* Hire Me Button */}
      <button
        onMouseEnter={() => setActive("hire")}
        onClick={openFiverrProfile}
        className={`toggle-btn ${active === "hire" ? "active" : ""}`}
      >
        <span className="btn-text">Hire me</span>
        <ArrowUpRight
          size={16}
          className={`btn-icon ${active === "hire" ? "visible" : ""}`}
        />
      </button>
    </div>
  );
}
