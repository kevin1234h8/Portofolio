import React from "react";
import { TextField } from "@mui/material";
import "../style/textArea.css";
const TextArea = ({ text }) => {
  return (
    <div className="my-3">
      <TextField
        className="field"
        variant="outlined"
        label={text}
        style={{
          width: "75%",
          color: "#112969",
        }}
      />
    </div>
  );
};

export default TextArea;
