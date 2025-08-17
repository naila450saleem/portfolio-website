import React from "react";
import "./styles/BlogCard.css"; // ✅ Make sure this path is correct

const BlogCard = ({ image, button, name, date, title }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-author">By {name}</p>
        <button>{button}</button>
      </div>
    </div>
  );
};

export default BlogCard;
