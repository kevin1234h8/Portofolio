import React from "react";
import "../style/button.css";

const Button1 = ({ text }) => {
  const buttonStyle = {
    backgroundColor: "#f5c3b4",
    color: " #112969",
    borderRadius: "1.5rem",
    padding: "1rem",
    width: "10rem",
  };
  return (
    <div>
      <button className="my-3" style={buttonStyle}>
        {text}
      </button>
    </div>
  );
};

export default Button1;
