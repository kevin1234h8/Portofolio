import React from "react";
import image from "../assets/klee.png";
import { Image } from "react-bootstrap";
const KleeImage = () => {
  return (
    <div>
      <Image className="img-fluid" src={image} />
    </div>
  );
};

export default KleeImage;
