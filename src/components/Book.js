import React from "react";
import "./../css/Book.css";

const Book = ({ author, title, description, children }) => {
  const handleMouseEnter = (e) => {
    document.querySelectorAll(".bookWrapper").forEach((book) => {
      e.target.style.color = "orange";
    });
  };

  const handleMouseLeave = (e) => {
    document.querySelectorAll(".bookWrapper").forEach((book) => {
      e.target.style.color = "blue";
    });
  };

  const handleButtonClick = (title) => {
    alert(title);
  };

  return (
    <div
      className="bookWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
      {children}

      <button onClick={() => handleButtonClick(title)}>Click me</button>
    </div>
  );
};

export default Book;
