import React from "react";
import "./../css/Book.css";

const Book = ({ author, title, description, children }) => {
  return (
    <div className="bookWrapper">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Book;
