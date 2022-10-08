import React from "react";
import "../style/button.css";
const Button = ({ text }) => {
  const style = {
    border: "1px solid #fff",
    padding: ".5rem",
    background: "transparent",
    borderRadius: ".8rem",
  };
  return (
    <div>
      <button style={style}>{text}</button>
    </div>
  );
};

export default Button;
