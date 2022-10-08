import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "../component/Accordion";
import Button1 from "../component/Button1";
import { Button } from "@mui/material";
import Aos from "aos";
import { Link } from "react-router-dom";
const Offer = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  const buttonStyle = {
    backgroundColor: "#f5c3b4",
    color: " #112969",
    borderRadius: "1rem",
    padding: ".5rem",
  };
  const rotate = {
    transform: "rotate(-45deg)",
  };
  const style = {
    backgroundColor: "#c5f0fd",
    border: "1px solid transparent",
    width: "150px",
    height: "150px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };
  return (
    <div>
      <Container>
        <Row data-aos="fade-right" className="d-flex align-items-center ">
          <Col md={6} sm={12} lg={8}>
            <div className="mb-5" style={style}>
              <div className="animation" style={rotate}>
                What I offer
              </div>
            </div>

            <div className="h2 my-3">
              Delivering great implementation , <br /> from design to actual web
              display and intuitive web solutions .
            </div>
            <div className="h2 my-3">
              Design a character and make them unique
            </div>
            <div>
              I enjoy designing meaningful experiences for brands & businesses
              to help them serve their target users.
            </div>
            <div className="my-3">
              <Link to={"/about"}>
                <Button1 text={"About me"} />
              </Link>
            </div>
          </Col>
          <Col data-aos="fade-left">
            <Accordion />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
