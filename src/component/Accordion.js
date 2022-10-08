import React, { useEffect, useRef, useState } from "react";
import accordionData from "../data/accordion.json";
import "../style/accordion.css";
import Aos from "aos";
const Accordion = () => {
  const parentRef = useRef();
  useEffect(() => {
    Aos.init();
  });
  const [open, setOpen] = useState(null);
  const handleClick = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <div data-aos="fade-left">
      {accordionData.map((data, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: data.color,
              }}
              className="d-flex align-items-center justify-content-between accordion-container"
            >
              <div>{data.number}</div>
              <div>{data.name}</div>
              <button className="openButton">
                {open === index ? "-" : "+"}
              </button>
            </div>
            <div
              ref={parentRef}
              className="content-parent"
              style={
                open === index
                  ? { height: parentRef.current.scrollHeight + "px" }
                  : { height: 0 }
              }
            >
              <p
                style={{
                  backgroundColor: data.color,
                }}
                // style={{
                //   backgroundColor: data.color,
                //   padding: "2rem",
                //   position: "relative",
                //   zIndex: "-1",
                //   top: "-30px",
                //   borderRadius: "0  0 3rem 3rem",
                // }}
                className="content"
              >
                {data.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
