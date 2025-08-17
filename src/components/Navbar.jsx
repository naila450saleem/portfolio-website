import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import "./styles/Navbar.css";

const Navbar = () => {
  const menuItems = ["Home", "About", "Service", "Resume", "Project", "Contact"];
  const [selected, setSelected] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Section mapping
  const sectionLinks = {
    Project: "portfolio", // ✅ Project → portfolio
  };

  // Helper function
  const getLink = (label) => {
    return `/#${sectionLinks[label] || label.toLowerCase()}`;
  };

  const handleClick = (label) => {
    setSelected(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left Menu */}
      <div className="nav-left">
        {menuItems.slice(0, 3).map((label) => (
          <HashLink
            key={label}
            smooth
            to={getLink(label)}  // ✅ link hata diya
            className={`nav-btn ${selected === label ? "active" : ""}`}
            onClick={() => handleClick(label)}
          >
            {label}
          </HashLink>
        ))}
      </div>

      {/* Logo Center */}
      <div className="logo-box">
        <div className="logo-circle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <text x="4" y="18" fontSize="12" fontWeight="bold" fill="white">NS</text>
          </svg>
        </div>
        <span className="logo-text">NAILA</span>
      </div>

      {/* Right Menu */}
      <div className="nav-right">
        {menuItems.slice(3).map((label) => (
          <HashLink
            key={label}
            smooth
            to={getLink(label)}  // ✅ link hata diya
            className={`nav-btn ${selected === label ? "active" : ""}`}
            onClick={() => handleClick(label)}
          >
            {label}
          </HashLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((label) => (
            <HashLink
              key={label}
              smooth
              to={getLink(label)}  // ✅ link hata diya
              className={`mobile-menu-item ${selected === label ? "active" : ""}`}
              onClick={() => handleClick(label)}
            >
              {label}
            </HashLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
