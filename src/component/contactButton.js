import React from "react";
import "../style/contactButton.css";
const contactButton = ({ text, value, handleClick }) => {
  return (
    <button value={value} onClick={handleClick}>
      {text}
    </button>
  );
};

export default contactButton;
